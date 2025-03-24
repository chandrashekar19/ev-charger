
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type IndustryPageProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  testimonials?: {
    customerName: string;
    location: string;
    quote: string;
    image?: string;
  }[];
};

const IndustryPage = ({
  title,
  subtitle,
  description,
  image,
  features,
  testimonials,
}: IndustryPageProps) => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-cover bg-center relative" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(${image})`,
          backgroundSize: 'cover',
          minHeight: '30vh'
        }}
      >
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-green-500 mb-6">
              {title} Industry
            </h1>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-500 mb-6">{subtitle}</h2>
              <p className="text-lg text-gray-700 mb-8">{description}</p>
              <Button 
                asChild 
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full text-lg"
              >
                <Link to="/get-a-quote">Get a Quote</Link>
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src={testimonials?.[0]?.image || "/lovable-uploads/3632e751-be3f-425d-abb5-64327f65cc9c.png"} 
                alt={title + " Charging"} 
                className="rounded-lg w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits for {title} Businesses
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-start">
                <div className="mr-4 flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {testimonials && testimonials.length > 0 && (
        <section className="py-16">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Success Stories
            </h2>
            
            <div className="grid grid-cols-1 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <div className="flex flex-col md:flex-row md:items-center">
                    <div className="md:w-1/4 mb-6 md:mb-0">
                      <h3 className="text-2xl font-bold text-green-600">{testimonial.customerName}</h3>
                      <p className="text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="md:w-3/4">
                      <p className="text-lg text-gray-700 italic">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-green-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to electrify your {title.toLowerCase()} business?</h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Our experts will help you design the perfect charging solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-green-600 hover:bg-gray-100 rounded-full px-8 py-3 text-lg">
              Request a Demo
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 rounded-full px-8 py-3 text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default IndustryPage;
