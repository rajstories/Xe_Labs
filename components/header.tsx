"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (pathname?.startsWith('/careers') || pathname?.startsWith('/build-sprint')) return;

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY;
      lastScrollY = currentScrollY;

      if (currentScrollY < 50 && scrollingUp && window.location.hash) {
        window.history.replaceState(
          null,
          document.title,
          window.location.pathname + window.location.search
        );
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  if (pathname?.startsWith('/careers') || pathname?.startsWith('/build-sprint')) {
    return null;
  }

  const navLinks = [
    { href: "/#solutions", label: "Solutions" },
    { href: "/#work", label: "Work" },
    { href: "/careers", label: "Careers" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-8 bg-transparent">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between mt-2">
          <Link href="/" className="flex items-center group relative z-[60]">
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
          
          {/* Desktop Nav */}
          <nav className="hidden sm:flex items-center gap-8 pt-2">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="sm:hidden relative z-[60] text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-lg flex flex-col items-center justify-center sm:hidden"
          >
            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                >
                  <Link 
                    href={link.href} 
                    className="text-2xl font-display font-medium text-white hover:text-[#28DCE6] transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
