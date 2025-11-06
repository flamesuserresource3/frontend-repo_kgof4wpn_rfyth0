import { ShieldCheck, Info, HelpCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/60 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid sm:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="font-semibold text-slate-900">SweepTheCash</div>
            <p className="text-slate-600 mt-2">A purpose-driven giveaway platform. No cash prizes — only compliant digital vouchers with transparent impact.</p>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Learn</div>
            <ul className="space-y-2 text-slate-600">
              <li><a href="#faq" className="hover:underline inline-flex items-center gap-1"><HelpCircle className="h-4 w-4"/> FAQs</a></li>
              <li><a href="#terms" className="hover:underline inline-flex items-center gap-1"><Info className="h-4 w-4"/> Terms & Conditions</a></li>
              <li><a href="#legal" className="hover:underline inline-flex items-center gap-1"><ShieldCheck className="h-4 w-4"/> Compliance & Transparency</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-slate-900 mb-2">Newsletter</div>
            <form className="flex gap-2">
              <input type="email" placeholder="you@email.com" className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              <button className="px-3 py-2 rounded-lg bg-slate-900 text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} SweepTheCash · Dream. Win. Give.</div>
      </div>
    </footer>
  );
}
