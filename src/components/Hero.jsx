import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[520px] md:h-[600px] w-full overflow-hidden rounded-none">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>
      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="max-w-6xl mx-auto px-4 w-full pb-8 md:pb-0">
          <div className="w-full md:max-w-xl bg-white/70 backdrop-blur rounded-2xl p-5 md:p-7 shadow-lg border border-slate-200/60">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-full mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Purpose-driven giveaways
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold text-slate-900 leading-tight">
              Win premium digital vouchers while fueling real-world change
            </h1>
            <p className="text-slate-600 mt-3">
              Every entry supports verified NGOs. No cash payouts—only high-value vouchers and transparent impact.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <a href="#giveaways" className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-amber-500 text-white shadow">
                Explore Giveaways
              </a>
              <a href="#impact" className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-50">
                See Our Impact
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
