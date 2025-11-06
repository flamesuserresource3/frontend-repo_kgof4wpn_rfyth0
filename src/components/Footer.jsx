import { useState } from 'react';

export default function Footer() {
  const [message, setMessage] = useState('');

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold text-slate-900">SweepTheCash</div>
            <p className="text-slate-600 mt-2">No cash prizes. Only compliant digital vouchers. Transparent impact reports.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Explore</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#faq" className="hover:underline">FAQs</a></li>
              <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#legal" className="hover:underline">Compliance & Transparency</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Stay updated</div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setMessage('Subscribed! Check your inbox for a confirmation email.');
              }}
              className="flex gap-2"
            >
              <input type="email" required placeholder="you@email.com" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-900"/>
              <button className="px-3 py-2 rounded-lg bg-slate-900 text-white hover:bg-black/90 active:scale-[0.98] transition">Subscribe</button>
            </form>
            {message && <p className="text-xs text-emerald-600 mt-2">{message}</p>}
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} SweepTheCash · Dream. Win. Give.</div>
      </div>
    </footer>
  );
}
