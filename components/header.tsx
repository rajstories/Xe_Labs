"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  if (pathname === '/careers') {
    return null;
  }

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-8 bg-transparent">
      <div className="max-w-[1600px] mx-auto flex items-start justify-between mt-2">
        <Link href="/" className="flex items-center group">
          <svg viewBox="0 0 160 110" className="w-[70px] h-auto md:w-[90px] transition-transform duration-300 group-hover:scale-105" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="neonGlowLogo" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>
            
            <g transform="translate(5, 5)">
              {/* Descending Stroke + Bottom Bar */}
              <polygon points="0,10 30,10 80,60 150,60 150,80 70,80" fill="white" />
              
              {/* Ascending Stroke + Top Bar */}
              <polygon points="0,80 30,80 80,30 150,30 150,10 70,10" fill="white" />
              
              {/* Middle Bar */}
              <polygon points="65,45 75,35 130,35 130,55 75,55" fill="white" />
            </g>

            {/* Text: L Ʌ B S */}
            <g transform="translate(80, 105)" fill="white" fontSize="13" fontFamily="sans-serif" fontWeight="300" letterSpacing="0.2em" textAnchor="middle">
              <text x="-42" y="0">L</text>
              <text x="-14" y="0" fill="transparent">A</text>
              {/* Lambda A */}
              <path d="M -20,-0.5 L -14,-10 L -8,-0.5" stroke="white" strokeWidth="1.2" fill="none" />
              {/* Cyan Glowing Dot */}
              <circle cx="-14" cy="-16" r="2" fill="#28DCE6" filter="url(#neonGlowLogo)" />
              
              <text x="14" y="0">B</text>
              <text x="42" y="0">S</text>
            </g>
          </svg>
        </Link>
        <nav className="hidden sm:flex items-center gap-8 pt-2">
          <Link href="/#solutions" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="/#work" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/careers" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Careers
          </Link>
          <Link href="/#contact" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
