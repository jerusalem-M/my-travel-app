import { Play } from 'lucide-react';
import travelerImage from '../../assets/travler.png'; // Update path if needed

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-orange-500 font-bold text-lg mb-4 uppercase tracking-wide">
            Best Destinations around the world
          </p>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Travel, enjoy
            <br />
            and live a new
            <br />
            and full life
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Built Wicket longer admire do barton vanity itself do in it.
            <br />
            Preferred to sportsmen it engrossed listening. Park gate
            <br />
            sell they west hard for the.
          </p>
          <div className="flex items-center space-x-6">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg">
              Find out more
            </button>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                <Play className="h-5 w-5 text-white fill-white" />
              </div>
              <span className="text-gray-700">Play Demo</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-[32rem] rounded-lg overflow-hidden">
            <img
              src={travelerImage}
              alt="Traveler"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
