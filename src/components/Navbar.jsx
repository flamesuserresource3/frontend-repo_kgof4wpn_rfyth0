import { Heart, Gift, User, Home } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-100 to-amber-100 flex items-center justify-center shadow-inner">
            <Gift className="h-5 w-5 text-blue-600" />
          </div>
          <div className="font-semibold text-slate-900 text-lg tracking-tight">SweepTheCash</div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#home" className="hover:text-slate-900 inline-flex items-center gap-1"><Home className="h-4 w-4"/> Home</a>
          <a href="#giveaways" className="hover:text-slate-900">All Giveaways</a>
          <a href="#impact" className="hover:text-slate-900 inline-flex items-center gap-1"><Heart className="h-4 w-4"/> Impact</a>
          <a href="#faq" className="hover:text-slate-900">FAQ</a>
        </nav>
        <div className="flex items-center gap-2">
          <button className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
            <User className="h-4 w-4"/> Login
          </button>
          <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-amber-500 text-white shadow hover:opacity-95">
            Donate & Enter
          </button>
        </div>
      </div>
    </header>
  );
}
