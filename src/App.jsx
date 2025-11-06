import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarouselGiveaways from './components/CarouselGiveaways';
import ImpactSection from './components/ImpactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <CarouselGiveaways />
      <ImpactSection />
      {/* Simple FAQ anchor target for nav smooth-scroll */}
      <section id="faq" className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold text-slate-900">FAQs</h2>
        <p className="text-slate-600 mt-2">We’ll publish detailed FAQs soon. For now, entries fund NGOs and winners receive digital vouchers.</p>
      </section>
      <Footer />
    </div>
  );
}

export default App;
