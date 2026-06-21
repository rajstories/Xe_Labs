import Link from 'next/link';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-6 md:px-12 py-8 bg-transparent">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-display font-bold uppercase tracking-widest text-white">
          XE Labs
        </Link>
        <nav className="hidden sm:flex items-center gap-8">
          <Link href="#work" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
            Solutions
          </Link>
          <Link href="#work" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
            Work
          </Link>
          <Link href="#contact" className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-white transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
