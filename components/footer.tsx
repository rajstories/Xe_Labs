import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <svg viewBox="0 0 160 110" className="w-[60px] h-auto md:w-[70px]" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
          <p className="text-white/60 text-xs tracking-widest uppercase">
            &copy; {new Date().getFullYear()} XE Labs. All rights reserved.
          </p>
          <Link href="/privacy" className="text-white/40 hover:text-white text-xs tracking-widest uppercase transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
