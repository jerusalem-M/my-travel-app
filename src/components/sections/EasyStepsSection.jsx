import { MapPin, CreditCard, Plane } from 'lucide-react';
import greeceImage from '../../assets/greece.png'; // Adjust path if needed

const steps = [
  {
    icon: MapPin,
    title: "Choose Destination",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: CreditCard,
    title: "Make Payment",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icon: Plane,
    title: "Reach Airport on Selected Date",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

function EasyStepsSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gray-600 text-lg mb-4">Easy and Fast</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Book Your Next Trip
            <br />
            In 3 Easy Steps
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative">
          <div className="max-w-lg w-full p-6 shadow-xl rounded-lg border mx-auto">
            <div className="h-56 mb-4 rounded-lg overflow-hidden">
              <img
                src={greeceImage}
                alt="Trip to Greece"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Trip To Greece</h3>
            <p className="text-gray-600 text-sm mb-4">14-29 June | by Robbin Joseph</p>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">24 people going</span>
              <div className="text-orange-500 font-bold">❤️</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EasyStepsSection;
