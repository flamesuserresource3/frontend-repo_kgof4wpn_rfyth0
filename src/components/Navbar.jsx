import { User } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">S</div>
          <span className="font-semibold text-slate-900 tracking-tight">SweepTheCash</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#giveaways" className="hover:text-slate-900">Giveaways</a>
          <a href="#impact" className="hover:text-slate-900">Impact</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-black/90">
          <User className="h-4 w-4"/> Login
        </button>
      </div>
    </header>
  );
}
