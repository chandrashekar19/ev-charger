
import { Link } from 'react-router-dom';

const Industries = () => {
  const industries = [
    {
      name: 'Auto Dealerships',
      icon: '🚗',
      link: '/industries/auto-dealership'
    },
    {
      name: 'Automakers',
      icon: '🏭',
      link: '/industries/automakers'
    },
    {
      name: 'Hospitality',
      icon: '🏨',
      link: '/industries/hospitality'
    },
    {
      name: 'Real Estate',
      icon: '🏢',
      link: '/industries/real-estate'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Industries We Serve
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Link key={index} to={industry.link} className="group">
              <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-evblue-100">
                <span className="text-4xl mb-3">{industry.icon}</span>
                <h3 className="text-center text-gray-900 font-medium group-hover:text-evblue-600 transition-colors">
                  {industry.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
