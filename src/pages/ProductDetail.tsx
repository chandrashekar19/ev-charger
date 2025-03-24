
import { useParams } from 'react-router-dom';
import Layout from '@/components/Layout';
import { 
  BatteryCharging, 
  Shield, 
  Zap, 
  Wifi, 
  SmartphoneCharging,
  Award
} from 'lucide-react';
import { Button } from '@/components/ui/button';

type ProductData = {
  [key: string]: {
    title: string;
    description: string;
    image: string;
    suitedFor: string[];
    features?: {
      title: string;
      description: string;
      icon: keyof typeof iconComponents;
    }[];
    specs?: {
      charging: { label: string; value: string }[];
      power: { label: string; value: string }[];
      enclosure: { label: string; value: string }[];
      connectivity: { label: string; value: string }[];
    };
    secondaryDescription?: string;
  }
}

// Define the icon components mapping
const iconComponents = {
  BatteryCharging: BatteryCharging,
  Shield: Shield,
  Zap: Zap,
  Wifi: Wifi,
  SmartphoneCharging: SmartphoneCharging,
  Award: Award
};

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  
  const productsData: ProductData = {
    'powerup-32': {
      title: 'PowerUp 32',
      description: 'The PowerUp 32 is designed for commercial and public charging needs, providing reliable and fast charging for electric vehicles.',
      image: '/lovable-uploads/923c19ca-fca6-4900-9991-c68b9262393d.png',
      suitedFor: ['Auto Dealerships', 'Office Buildings', 'Shopping Centers', 'Public Parking'],
      specs: {
        charging: [
          { label: 'Charging Speed', value: 'Up to 32kW DC' },
          { label: 'Connector Type', value: 'CCS1/CCS2, CHAdeMO' },
          { label: 'Charge Time (20-80%)', value: '60-90 minutes' }
        ],
        power: [
          { label: 'Input Voltage', value: '380-480V AC, 3-phase' },
          { label: 'Power Factor', value: '>0.99' },
          { label: 'Efficiency', value: '>95%' }
        ],
        enclosure: [
          { label: 'Dimensions', value: '1850 x 650 x 400 mm' },
          { label: 'Weight', value: '190 kg' },
          { label: 'Protection Degree', value: 'IP54, IK10' }
        ],
        connectivity: [
          { label: 'Network', value: '4G, Ethernet, WiFi' },
          { label: 'User Interface', value: '10" LCD touchscreen' },
          { label: 'Payment Options', value: 'RFID, Mobile App, Credit Card' }
        ]
      },
      secondaryDescription: 'The PowerUp 32 is an ideal solution for businesses and public spaces looking to offer EV charging as an amenity or service. With its durable design and advanced features, it provides a reliable charging experience for EV drivers while offering operators powerful management capabilities.',
    },
    'powerup-60': {
      title: 'PowerUp 60',
      description: 'The PowerUp 60 is our high-performance DC fast charger, capable of delivering up to 60kW of power for rapid EV charging.',
      image: '/lovable-uploads/4f39e70c-4b9b-4114-85fd-dacdf26e8699.png',
      suitedFor: ['Highway Rest Stops', 'Fleet Operators', 'Transit Stations', 'Commercial Centers'],
      specs: {
        charging: [
          { label: 'Charging Speed', value: 'Up to 60kW DC' },
          { label: 'Connector Type', value: 'CCS1/CCS2, CHAdeMO' },
          { label: 'Charge Time (20-80%)', value: '30-45 minutes' }
        ],
        power: [
          { label: 'Input Voltage', value: '380-480V AC, 3-phase' },
          { label: 'Power Factor', value: '>0.99' },
          { label: 'Efficiency', value: '>96%' }
        ],
        enclosure: [
          { label: 'Dimensions', value: '2100 x 750 x 450 mm' },
          { label: 'Weight', value: '250 kg' },
          { label: 'Protection Degree', value: 'IP54, IK10' }
        ],
        connectivity: [
          { label: 'Network', value: '4G, Ethernet, WiFi' },
          { label: 'User Interface', value: '15" LCD touchscreen' },
          { label: 'Payment Options', value: 'RFID, Mobile App, Credit Card, Contactless' }
        ]
      },
      secondaryDescription: 'The PowerUp 60 is perfect for locations where drivers need to quickly recharge and continue their journey. Its high power output significantly reduces charging time, making it ideal for busy locations with high turnover.',
    },
    'powerup-mobile': {
      title: 'PowerUp Mobile',
      description: 'The PowerUp Mobile is a portable charging solution for electric vehicles, providing flexible charging capabilities wherever they are needed.',
      image: '/lovable-uploads/abe8df4b-c9a5-4e9c-bdf5-3a220b5555ed.png',
      suitedFor: ['Events & Exhibitions', 'Emergency Services', 'Remote Locations', 'Temporary Installations'],
      features: [
        {
          title: 'Portable Design',
          description: 'Compact and lightweight design with integrated wheels for easy transportation.',
          icon: 'BatteryCharging'
        },
        {
          title: 'Battery-Backed',
          description: 'Built-in battery storage allows for charging even in locations without grid connection.',
          icon: 'Zap'
        },
        {
          title: 'Rugged Casing',
          description: 'Weather-resistant enclosure designed for outdoor use in various conditions.',
          icon: 'Shield'
        },
        {
          title: 'Remote Monitoring',
          description: 'Cellular connectivity enables remote monitoring and management of the charger.',
          icon: 'Wifi'
        },
        {
          title: 'Multiple Outputs',
          description: 'Supports simultaneous charging of different vehicle types with multiple connectors.',
          icon: 'SmartphoneCharging'
        },
        {
          title: 'Certified Quality',
          description: 'Meets international safety and performance standards for EV charging equipment.',
          icon: 'Award'
        }
      ],
      secondaryDescription: "The PowerUp Mobile brings EV charging to locations where installing permanent infrastructure isn't feasible. Perfect for events, emergency response, or testing potential permanent charging locations before installation.",
    }
  };
  
  const product = productId ? productsData[productId] : null;
  
  if (!product) {
    return (
      <Layout>
        <div className="container-custom py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p>Sorry, the product you're looking for doesn't exist or has been removed.</p>
        </div>
      </Layout>
    );
  }
  
  // Determine if this product has specs or features
  const hasSpecs = 'specs' in product;
  const hasFeatures = 'features' in product;
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gray-50 pt-32 pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-xl text-gray-700 mb-6">{product.description}</p>
              <Button className="bg-evblue-500 hover:bg-evblue-600 text-white px-8 py-6 rounded-full text-lg">
                Request a Quote
              </Button>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Secondary Description */}
      {product.secondaryDescription && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.secondaryDescription}
              </p>
            </div>
          </div>
        </section>
      )}
      
      {/* Suited For Section */}
      <section className="py-16 bg-evblue-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ideal Applications
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.suitedFor.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center border border-evblue-100">
                <h3 className="text-lg font-medium text-gray-900">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Specifications Section - Only show if product has specs */}
      {hasSpecs && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Technical Specifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Charging Specs */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-evblue-600 mb-4">Charging</h3>
                <ul className="space-y-3">
                  {product.specs?.charging.map((spec, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-500 block">{spec.label}</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Power Specs */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-evblue-600 mb-4">Power</h3>
                <ul className="space-y-3">
                  {product.specs?.power.map((spec, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-500 block">{spec.label}</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Enclosure Specs */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-evblue-600 mb-4">Enclosure</h3>
                <ul className="space-y-3">
                  {product.specs?.enclosure.map((spec, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-500 block">{spec.label}</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Connectivity Specs */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-semibold text-evblue-600 mb-4">Connectivity</h3>
                <ul className="space-y-3">
                  {product.specs?.connectivity.map((spec, index) => (
                    <li key={index} className="border-b border-gray-200 pb-2">
                      <span className="text-sm text-gray-500 block">{spec.label}</span>
                      <span className="font-medium text-gray-900">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* Features Section - Only show if product has features */}
      {hasFeatures && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Key Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features?.map((feature, index) => {
                const IconComponent = iconComponents[feature.icon];
                
                return (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="bg-evblue-100 p-3 rounded-lg text-evblue-600 mr-4">
                        {IconComponent && <IconComponent size={24} />}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                    </div>
                    <p className="text-gray-700">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-evblue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to get started with {product.title}?</h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto">
            Contact our team to request pricing information or schedule a product demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-evblue-600 hover:bg-gray-100 rounded-full px-8 py-6 text-lg">
              Request a Demo
            </Button>
            <Button className="bg-transparent border-2 border-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
