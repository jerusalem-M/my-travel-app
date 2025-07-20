import { Navigation } from 'lucide-react';
import romeImage from '../../assets/Rome.png';
import londonImage from '../../assets/london.png';
import europeImage from '../../assets/europ.png';

const destinations = [
  {
    name: "Rome, Italy",
    price: "$5,420",
    duration: "10 Days Trip",
    image: romeImage,
  },
  {
    name: "London, UK", 
    price: "$4,200",
    duration: "12 Days Trip",
    image: londonImage,
  },
  {
    name: "Full Europe",
    price: "$15,000",
    duration: "28 Days Trip",
    image: europeImage,
  },
];

function DestinationsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-gray-600 text-lg mb-4">Top Selling</p>
        <h2 className="text-4xl font-bold text-gray-900">Top Destinations</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((destination, index) => (
          <div key={index} className="overflow-hidden hover:shadow-xl transition-shadow rounded-lg border">
            <div className="h-64 overflow-hidden">
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
                  <p className="text-orange-500 font-bold text-lg">{destination.price}</p>
                </div>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <Navigation className="h-4 w-4 mr-1" />
                <span>{destination.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DestinationsSection;
