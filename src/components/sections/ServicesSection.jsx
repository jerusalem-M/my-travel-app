import { Satellite, Plane, Mic, Settings } from 'lucide-react';

const services = [
  {
    icon: Satellite,
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
  },
  {
    icon: Plane,
    title: "Best Tour Guide", 
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: Mic,
    title: "Easy Booking",
    description: "Engrossed listening. Park gate sell they west hard for the.",
  },
  {
    icon: Settings,
    title: "Customization",
    description: "We deliver outsourced aviation services for military customers",
  },
];

function ServicesSection() {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <p className="text-gray-600 text-lg mb-4">CATEGORY</p>
        <h2 className="text-4xl font-bold text-gray-900">We Offer Best Services</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => {
          const IconComponent = service.icon;
          return (
            <div key={index} className="text-center p-8 hover:shadow-xl transition-shadow border-0 hover:shadow-orange-100 rounded-lg">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <IconComponent className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicesSection;