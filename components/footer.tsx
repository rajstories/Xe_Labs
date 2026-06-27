import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-1 md:col-span-1">
          <svg viewBox="0 0 160 110" className="w-[60px] h-auto md:w-[70px] mb-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="neonGlowLogoFooter" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            <g transform="translate(5, 5)">
              <polygon points="0,10 30,10 80,60 150,60 150,80 70,80" fill="white" />
              <polygon points="0,80 30,80 80,30 150,30 150,10 70,10" fill="white" />
              <polygon points="65,45 75,35 130,35 130,55 75,55" fill="white" />
            </g>

            <g transform="translate(80, 105)" fill="white" fontSize="13" fontFamily="sans-serif" fontWeight="300" letterSpacing="0.2em" textAnchor="middle">
              <text x="-42" y="0">L</text>
              <text x="-14" y="0" fill="transparent">A</text>
              <path d="M -20,-0.5 L -14,-10 L -8,-0.5" stroke="white" strokeWidth="1.2" fill="none" />
              <circle cx="-14" cy="-16" r="2" fill="#28DCE6" filter="url(#neonGlowLogoFooter)" />
              <text x="14" y="0">B</text>
              <text x="42" y="0">S</text>
            </g>
          </svg>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            XE Labs is an AI-native product lab building real-world AI tools, agents, automation systems, and SaaS products.
          </p>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li>
              Hackathon: <a href="mailto:hackathon@xelabs.in" className="hover:text-white transition-colors">hackathon@xelabs.in</a>
            </li>
            <li>
              General: <a href="mailto:team@xelabs.in" className="hover:text-white transition-colors">team@xelabs.in</a>
            </li>
            <li className="pt-2">Location: Delhi NCR, India</li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">XE Labs Build Sprint 2026</Link></li>
            <li><Link href="/build-sprint/influenceos" className="hover:text-white transition-colors">Explore InfluenceOS track</Link></li>
            <li><Link href="/build-sprint/editdna" className="hover:text-white transition-colors">Explore EditDNA track</Link></li>
            <li><Link href="/build-sprint/voicecore" className="hover:text-white transition-colors">Explore VoiceCore track</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-4">FAQ</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/faq#what-is-xe-labs" className="hover:text-white transition-colors">What is XE Labs?</Link></li>
            <li><Link href="/faq#what-does-xe-labs-build" className="hover:text-white transition-colors">What do we build?</Link></li>
            <li><Link href="/faq#is-xe-labs-real" className="hover:text-white transition-colors">Is XE Labs a real company?</Link></li>
            <li><Link href="/faq#build-sprint-2026" className="hover:text-white transition-colors">What is Build Sprint 2026?</Link></li>
            <li><Link href="/faq" className="text-[#fabd00] hover:text-[#fabd00]/80 transition-colors">View All FAQs &rarr;</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-3 text-sm text-white/60">
            <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            <li><Link href="https://www.linkedin.com/company/xelabs/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</Link></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/40 text-xs leading-relaxed max-w-3xl text-center md:text-left">
          &copy; {new Date().getFullYear()} XE Labs. All rights reserved. <br className="hidden md:block"/>
          Official communication and internship administration for Build Sprint 2026 may be facilitated through LXDIA AI Pvt. Ltd. until XE Labs operates under its own legal entity. No registration fee. No hidden charges.
        </p>
      </div>
    </footer>
  );
}
