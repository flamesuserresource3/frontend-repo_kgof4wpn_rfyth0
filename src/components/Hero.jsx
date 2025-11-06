import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import ScrollLink from './ScrollLink';

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative h-[64vh] md:h-[72vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="absolute inset-0 flex items-end md:items-center">
        <div className="max-w-6xl mx-auto px-4 w-full pb-8 md:pb-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full md:max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/15 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.4)]"
          >
            <div className="text-xs tracking-wide text-white/80">Purpose-driven giveaways</div>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight text-white">
              Win premium vouchers. Fuel real impact.
            </h1>
            <p className="mt-3 text-white/80">
              Every entry supports verified NGOs. No cash payouts — only compliant digital vouchers with transparent reporting.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <ScrollLink
                to="#giveaways"
                className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg text-white bg-white/10 border border-white/20 hover:bg-white/15 transition"
              >
                Explore Giveaways
              </ScrollLink>
              <ScrollLink
                to="#impact"
                className="inline-flex justify-center items-center px-4 py-2.5 rounded-lg text-slate-900 bg-white hover:bg-slate-100 transition"
              >
                Our Impact
              </ScrollLink>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
