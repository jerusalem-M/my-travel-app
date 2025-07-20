import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import DestinationsSection from './components/sections/DestinationsSection';
import EasyStepsSection from './components/sections/EasyStepsSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import PartnersSection from './components/sections/PartnersSection';
import NewsletterSection from './components/sections/NewsletterSection';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ServicesSection />
      <DestinationsSection />
      <EasyStepsSection />
      <TestimonialsSection />
      <PartnersSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
}

export default App;
