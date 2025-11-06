import { useEffect, useState } from 'react';
import { User, Menu } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrollLink from './ScrollLink';
import Modal from './Modal';

export default function Navbar() {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 120], [0.6, 0.9]);
  const shadowOpacity = useTransform(scrollY, [0, 120], [0.0, 0.12]);
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        backgroundColor: bgOpacity.to((o) => `rgba(255,255,255,${o})`),
        boxShadow: shadowOpacity.to((o) => `0 1px 0 rgba(15,23,42,${o})`),
      }}
      className="sticky top-0 z-50 backdrop-blur border-b border-slate-200/60"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <ScrollLink to="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">S</div>
          <span className="font-semibold text-slate-900 tracking-tight">SweepTheCash</span>
        </ScrollLink>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <ScrollLink to="#giveaways" className="hover:text-slate-900">Giveaways</ScrollLink>
          <ScrollLink to="#impact" className="hover:text-slate-900">Impact</ScrollLink>
          <ScrollLink to="#faq" className="hover:text-slate-900">FAQ</ScrollLink>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-black/90 active:scale-[0.98] transition"
          >
            <User className="h-4 w-4"/> Login
          </button>
          <button onClick={() => setMobileOpen((v) => !v)} className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 text-slate-700">
            <Menu className="h-5 w-5"/>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 grid gap-2 text-sm">
            <ScrollLink onClick={() => setMobileOpen(false)} to="#giveaways" className="py-2 text-slate-700">Giveaways</ScrollLink>
            <ScrollLink onClick={() => setMobileOpen(false)} to="#impact" className="py-2 text-slate-700">Impact</ScrollLink>
            <ScrollLink onClick={() => setMobileOpen(false)} to="#faq" className="py-2 text-slate-700">FAQ</ScrollLink>
          </div>
        </div>
      )}

      <Modal open={open} onClose={() => setOpen(false)} title="Welcome back">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('Mock login successful');
            setOpen(false);
          }}
          className="grid gap-3"
        >
          <label className="grid gap-1 text-sm">
            <span className="text-slate-600">Email</span>
            <input required type="email" className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
          </label>
          <label className="grid gap-1 text-sm">
            <span className="text-slate-600">Password</span>
            <input required type="password" className="rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
          </label>
          <button type="submit" className="mt-2 inline-flex items-center justify-center px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-black/90">Sign in</button>
        </form>
      </Modal>
    </motion.header>
  );
}
