export function Footer() {
  return (
    <footer className="w-full bg-black border-t border-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="text-xl font-display font-bold uppercase tracking-widest text-white">
          XE Labs
        </div>
        <p className="text-white text-xs tracking-widest uppercase">
          &copy; {new Date().getFullYear()} XE Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
