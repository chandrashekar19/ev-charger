
import { BatteryCharging, Shield, Clock, Smartphone, Zap, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BatteryCharging className="h-10 w-10 text-evblue-500" />,
      title: 'Fast Charging',
      description: 'Charge your EV up to 80% in just 20 minutes with our high-power DC chargers.'
    },
    {
      icon: <Shield className="h-10 w-10 text-evblue-500" />,
      title: 'Safety First',
      description: 'Built-in safety features protect your vehicle and home electrical system.'
    },
    {
      icon: <Smartphone className="h-10 w-10 text-evblue-500" />,
      title: 'Smart Control',
      description: 'Monitor and control your charging session from anywhere using our mobile app.'
    },
    {
      icon: <Clock className="h-10 w-10 text-evblue-500" />,
      title: 'Scheduled Charging',
      description: 'Schedule charging during off-peak hours to save on electricity costs.'
    },
    {
      icon: <Zap className="h-10 w-10 text-evblue-500" />,
      title: 'Energy Efficient',
      description: 'Optimized power delivery minimizes energy loss during charging.'
    },
    {
      icon: <Globe className="h-10 w-10 text-evblue-500" />,
      title: 'Universal Compatibility',
      description: 'Compatible with all major EV models and charging standards.'
    }
  ];

  return (
    <section className="section bg-evgray-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="heading-2 text-evgray-900 mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-lg text-evgray-600">
            Our charging solutions combine innovative technology with elegant design,
            providing a seamless experience for electric vehicle owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 transition-all duration-300 
                        hover:shadow-md hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-evgray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
