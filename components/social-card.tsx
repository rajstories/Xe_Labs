export function SocialCard({
  eyebrow,
  title,
  subtitle,
  badges = [],
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  badges?: string[];
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '62px 72px',
        color: '#f8fafc',
        background: 'radial-gradient(circle at 84% 12%, rgba(250,189,0,0.19), transparent 30%), linear-gradient(135deg, #030303 0%, #101010 58%, #030303 100%)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
          <div style={{ display: 'flex', width: 48, height: 48, border: '2px solid #fabd00', borderRadius: 12, alignItems: 'center', justifyContent: 'center', color: '#fabd00', fontSize: 26, fontWeight: 800 }}>XE</div>
          <div style={{ display: 'flex', fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>XE Labs</div>
        </div>
        <div style={{ display: 'flex', fontSize: 18, color: '#9ca3af' }}>xelabs.in</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 1000 }}>
        <div style={{ display: 'flex', marginBottom: 18, color: '#fabd00', fontSize: 19, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase' }}>{eyebrow}</div>
        <div style={{ display: 'flex', fontSize: title.length > 42 ? 58 : 68, lineHeight: 1.04, fontWeight: 800, letterSpacing: '-0.045em' }}>{title}</div>
        <div style={{ display: 'flex', marginTop: 22, maxWidth: 900, color: '#cbd5e1', fontSize: 27, lineHeight: 1.35 }}>{subtitle}</div>
      </div>

      <div style={{ display: 'flex', gap: 14 }}>
        {badges.map((badge) => (
          <div key={badge} style={{ display: 'flex', border: '1px solid rgba(255,255,255,0.18)', borderRadius: 999, padding: '10px 17px', color: '#e5e7eb', fontSize: 17 }}>{badge}</div>
        ))}
      </div>
    </div>
  );
}
