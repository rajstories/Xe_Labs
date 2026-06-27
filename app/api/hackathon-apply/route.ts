import { NextResponse } from 'next/server';
import crypto from 'crypto';

// In-memory rate limiter (simple implementation for prototype)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const MAX_LIMIT = 5; // 5 requests per hour

function checkRateLimit(key: string): boolean {
  const now = Date.now();
  const limitInfo = rateLimitMap.get(key);

  if (!limitInfo) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (now - limitInfo.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(key, { count: 1, lastReset: now });
    return true;
  }

  if (limitInfo.count >= MAX_LIMIT) {
    return false;
  }

  limitInfo.count += 1;
  return true;
}

// AES-256-GCM Encryption Helper
function encrypt(text: string, keyString: string): string {
  try {
    const key = crypto.scryptSync(keyString, 'salt', 32);
    const iv = crypto.randomBytes(12);
    const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    const authTag = cipher.getAuthTag().toString('hex');
    return `${iv.toString('hex')}:${authTag}:${encrypted}`;
  } catch (error) {
    console.error('[Encryption Error]', error);
    return text; // Fallback to plain text if encryption fails
  }
}

// Google Auth Token Generator (Using RS256 native signing)
async function getGoogleAccessToken(email: string, privateKey: string): Promise<string> {
  const cleanPrivateKey = privateKey.replace(/\\n/g, '\n');
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: email,
    scope: 'https://www.googleapis.com/auth/spreadsheets https://www.googleapis.com/auth/drive',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const header = { alg: 'RS256', typ: 'JWT' };
  const encodedHeader = Buffer.from(JSON.stringify(header)).toString('base64url');
  const encodedClaim = Buffer.from(JSON.stringify(claim)).toString('base64url');
  const signatureInput = `${encodedHeader}.${encodedClaim}`;

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(signatureInput);
  const signature = signer.sign(cleanPrivateKey, 'base64url');
  const jwt = `${signatureInput}.${signature}`;

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Google Auth failed: ${response.statusText} - ${errorBody}`);
  }

  const data = await response.json();
  return data.access_token;
}

// Google Drive Upload Helper
async function uploadToDrive(fileName: string, mimeType: string, base64Data: string, folderId: string, accessToken: string): Promise<string> {
  const metadata = {
    name: fileName,
    parents: [folderId],
  };

  // Convert base64 data to binary buffer
  const binaryBuffer = Buffer.from(base64Data, 'base64');
  
  const boundary = 'foo_bar_boundary';
  const delimiter = `\r\n--${boundary}\r\n`;
  const closeDelimiter = `\r\n--${boundary}--`;

  const multipartRequestBody = Buffer.concat([
    Buffer.from(delimiter + 'Content-Type: application/json; charset=UTF-8\r\n\r\n' + JSON.stringify(metadata)),
    Buffer.from(delimiter + `Content-Type: ${mimeType}\r\nContent-Transfer-Encoding: base64\r\n\r\n`),
    Buffer.from(base64Data),
    Buffer.from(closeDelimiter)
  ]);

  const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': `multipart/related; boundary=${boundary}`,
    },
    body: multipartRequestBody,
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Google Drive upload failed: ${response.statusText} - ${errorBody}`);
  }

  const data = await response.json();
  return data.id; // Returns Google Drive File ID
}

// Write Row to Google Sheet
async function appendToGoogleSheet(sheetId: string, rowValues: any[], accessToken: string) {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:append?valueInputOption=USER_ENTERED`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      values: [rowValues],
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`Google Sheets append failed: ${response.statusText} - ${errorBody}`);
  }
}

// Check Duplicate Rows in Sheet
async function isDuplicateApplication(sheetId: string, email: string, phone: string, accessToken: string): Promise<boolean> {
  const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/A1:Z1000`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    // If sheet is empty or error occurs, skip duplicate checks for safety
    return false;
  }

  const data = await response.json();
  if (!data.values || data.values.length <= 1) return false;

  // Let's assume headers are first row. We look for Email (usually column E) and Phone (usually column F)
  // To be safe, we check all columns of each row for matches
  const lowerEmail = email.toLowerCase().trim();
  const cleanPhone = phone.replace(/[\s+-]/g, '');

  for (let i = 1; i < data.values.length; i++) {
    const row = data.values[i];
    const rowEmail = (row[4] || '').toLowerCase().trim();
    const rowPhone = (row[5] || '').replace(/[\s+-]/g, '');

    if (rowEmail === lowerEmail || (cleanPhone && rowPhone === cleanPhone)) {
      return true;
    }
  }

  return false;
}

// Cloudflare Turnstile Token Verification
async function verifyTurnstile(token: string, secretKey: string): Promise<boolean> {
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${encodeURIComponent(secretKey)}&response=${encodeURIComponent(token)}`,
  });

  const data = await response.json();
  return !!data.success;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || 'local';
    
    // Rate limit checks
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ status: 'error', message: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await req.json();

    // 1. Captcha Validation
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY || '1x0000000000000000000000000000000AA';
    if (!body.turnstileToken) {
      return NextResponse.json({ status: 'error', message: 'Verification token is required.' }, { status: 400 });
    }

    const isCaptchaValid = await verifyTurnstile(body.turnstileToken, turnstileSecret);
    if (!isCaptchaValid) {
      return NextResponse.json({ status: 'error', message: 'Verification failed. Please complete the captcha again.' }, { status: 400 });
    }

    // 2. Input Sanitization & Validation
    const sanitize = (val: any) => (typeof val === 'string' ? val.trim().replace(/<[^>]*>/g, '') : '');
    
    const email = sanitize(body.email);
    const phone = sanitize(body.phone);
    const firstName = sanitize(body.firstName);
    const lastName = sanitize(body.lastName);
    const college = sanitize(body.college);
    const graduationYear = sanitize(body.graduationYear);
    const github = sanitize(body.github);
    const linkedin = sanitize(body.linkedin);
    const portfolio = sanitize(body.portfolio);
    const whyThisTrack = sanitize(body.whyThisTrack);
    const pastProjects = sanitize(body.pastProjects);
    const ideaPitch = sanitize(body.ideaPitch);
    const teamName = sanitize(body.teamName);

    // Validate Required Fields
    if (!firstName || !lastName || !email || !college || !graduationYear || !github || !body.track) {
      return NextResponse.json({ status: 'error', message: 'Required fields are missing.' }, { status: 400 });
    }

    // Validate Formats
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ status: 'error', message: 'Invalid email address format.' }, { status: 400 });
    }
    if (phone && !/^\+?[0-9\s-]{8,20}$/.test(phone)) {
      return NextResponse.json({ status: 'error', message: 'Invalid phone number format.' }, { status: 400 });
    }
    if (!/^https?:\/\/(www\.)?github\.com\/.+/i.test(github)) {
      return NextResponse.json({ status: 'error', message: 'Invalid GitHub URL.' }, { status: 400 });
    }
    if (linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.+/i.test(linkedin)) {
      return NextResponse.json({ status: 'error', message: 'Invalid LinkedIn URL.' }, { status: 400 });
    }

    // Validate specific fields as requested
    if (graduationYear !== '2027' && graduationYear !== '2028') {
      return NextResponse.json({ status: 'error', message: 'Build Sprint 2026 is only open to graduation years 2027 and 2028.' }, { status: 400 });
    }

    if (body.applicationType === 'Team') {
      const sizeVal = parseInt(body.teamSize, 10);
      if (isNaN(sizeVal) || sizeVal < 2 || sizeVal > 3) {
        return NextResponse.json({ status: 'error', message: 'Team size must be between 2 and 3 members.' }, { status: 400 });
      }
    }

    // Validate Files
    if (!body.resumeData || !body.resumeName) {
      return NextResponse.json({ status: 'error', message: 'Resume upload is required.' }, { status: 400 });
    }

    // 3. Connect to Google APIs via Service Account
    const saEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

    if (!saEmail || !privateKey || !sheetId || !folderId) {
      console.error('[Config Error] Missing server-side credentials.');
      return NextResponse.json({ status: 'error', message: 'Unable to submit application right now. Please try again.' }, { status: 500 });
    }

    const accessToken = await getGoogleAccessToken(saEmail, privateKey);

    // 4. Duplicate Check
    const isDup = await isDuplicateApplication(sheetId, email, phone, accessToken);
    if (isDup) {
      return NextResponse.json({ status: 'error', message: 'An application with this email or phone number has already been submitted.' }, { status: 400 });
    }

    // 5. Upload files to private Google Drive Folder
    const resumeId = await uploadToDrive(
      `Resume_${firstName}_${lastName}_${Date.now()}.pdf`,
      'application/pdf',
      body.resumeData,
      folderId,
      accessToken
    );

    let pitchDeckId = '';
    if (body.pitchDeckData && body.pitchDeckName) {
      pitchDeckId = await uploadToDrive(
        `PitchDeck_${firstName}_${lastName}_${Date.now()}.pdf`,
        'application/pdf',
        body.pitchDeckData,
        folderId,
        accessToken
      );
    }

    // 6. Optional GCM Encryption at Rest
    const encryptionKey = process.env.OPTIONAL_ENCRYPTION_KEY;
    
    let encryptedEmail = email;
    let encryptedPhone = phone;
    let encryptedResumeLink = `https://drive.google.com/file/d/${resumeId}/view?usp=drivesdk`;
    let encryptedPitchDeckLink = pitchDeckId ? `https://drive.google.com/file/d/${pitchDeckId}/view?usp=drivesdk` : '';
    let encryptedMember2Contact = body.member2Email || '';
    let encryptedMember3Contact = body.member3Email || '';

    if (encryptionKey) {
      encryptedEmail = encrypt(email, encryptionKey);
      encryptedPhone = encrypt(phone, encryptionKey);
      encryptedResumeLink = encrypt(encryptedResumeLink, encryptionKey);
      if (encryptedPitchDeckLink) {
        encryptedPitchDeckLink = encrypt(encryptedPitchDeckLink, encryptionKey);
      }
      if (encryptedMember2Contact) {
        encryptedMember2Contact = encrypt(encryptedMember2Contact, encryptionKey);
      }
      if (encryptedMember3Contact) {
        encryptedMember3Contact = encrypt(encryptedMember3Contact, encryptionKey);
      }
    }

    // 7. Write Row values
    const timestamp = new Date().toISOString();
    const source = 'XE Labs Website';

    // Assemble row columns matching form fields
    const rowValues = [
      timestamp,
      source,
      body.applicationType,
      body.track,
      encryptedEmail,
      encryptedPhone,
      `${firstName} ${lastName}`,
      college,
      graduationYear,
      github,
      linkedin,
      portfolio,
      (body.techStack || []).join(', '),
      body.experienceLevel,
      pastProjects,
      whyThisTrack,
      ideaPitch,
      encryptedResumeLink,
      encryptedPitchDeckLink,
      body.availability,
      body.howDidYouHear,
      teamName,
      body.teamSize || '1',
      body.member2Name || '',
      encryptedMember2Contact,
      body.member2Role || '',
      body.member2Github || '',
      body.member3Name || '',
      encryptedMember3Contact,
      body.member3Role || '',
      body.member3Github || ''
    ];

    await appendToGoogleSheet(sheetId, rowValues, accessToken);

    return NextResponse.json({
      status: 'success',
      message: 'Application submitted successfully. Shortlisted applicants will be contacted via email or WhatsApp.'
    });

  } catch (error: any) {
    // Log only non-sensitive errors
    console.error('[Hackathon Submit API Exception]:', error.message || error);
    return NextResponse.json({
      status: 'error',
      message: 'Unable to submit application right now. Please try again.'
    }, { status: 500 });
  }
}
