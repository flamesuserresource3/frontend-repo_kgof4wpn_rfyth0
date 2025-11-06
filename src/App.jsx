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
      <Footer />
    </div>
  );
}

export default App;
