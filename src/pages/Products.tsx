
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Check, BatteryCharging, Shield, Smartphone, Zap, Plug } from 'lucide-react';

const Products = () => {
  const products = [
    {
      id: 'home-charger',
      name: 'Home Charger',
      description: 'The perfect solution for overnight charging at home with smart energy management.',
      headline: 'Efficient Home Charging',
      longDescription: 'The EVCharge Home Charger is designed to seamlessly integrate with your home electrical system, providing a reliable and efficient way to charge your electric vehicle. With smart energy management, Wi-Fi connectivity, and a sleek design, it represents the perfect balance of form and function.',
      image: 'https://images.unsplash.com/photo-1637503823786-835f8e8c3291?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '$699',
      specs: [
        { label: 'Power Output', value: '7.4 kW' },
        { label: 'Connector Type', value: 'Type 2' },
        { label: 'Installation', value: 'Wall-mounted' },
        { label: 'Connectivity', value: 'Wi-Fi, Bluetooth' },
        { label: 'App Control', value: 'Yes (iOS & Android)' },
        { label: 'Smart Features', value: 'Load balancing, Scheduled charging, Energy monitoring' },
        { label: 'Dimensions', value: '40 x 20 x 10 cm' },
        { label: 'Weight', value: '4.5 kg' },
        { label: 'Certification', value: 'UL, CE, FCC' },
        { label: 'Warranty', value: '3 years' }
      ],
      features: [
        'Smart energy management',
        'App control and monitoring',
        'Scheduled charging',
        'Over-the-air updates',
        'Elegant, compact design',
        'Indoor/outdoor installation',
        'LED status indicators',
        'Fault protection'
      ]
    },
    {
      id: 'pro-charger',
      name: 'Pro Charger',
      description: 'Commercial-grade charging solution for businesses and multi-unit residences.',
      headline: 'Professional Charging Solutions',
      longDescription: 'The EVCharge Pro is our commercial-grade solution, perfect for businesses, apartment complexes, and public parking facilities. With built-in load balancing, user authentication, and payment processing capabilities, it offers everything needed for managing multiple charging points.',
      image: 'https://images.unsplash.com/photo-1637417494166-8a92c0ddec87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '$1,299',
      specs: [
        { label: 'Power Output', value: '22 kW' },
        { label: 'Connector Type', value: 'Type 2' },
        { label: 'Installation', value: 'Wall-mounted or pedestal' },
        { label: 'Connectivity', value: 'Wi-Fi, Ethernet, 4G LTE' },
        { label: 'User Authentication', value: 'RFID, Mobile App, QR Code' },
        { label: 'Smart Features', value: 'Load balancing, Scheduled charging, User management, Payment processing' },
        { label: 'Dimensions', value: '60 x 30 x 15 cm' },
        { label: 'Weight', value: '7.8 kg' },
        { label: 'Certification', value: 'UL, CE, FCC' },
        { label: 'Warranty', value: '5 years' }
      ],
      features: [
        'Multiple user management',
        'Payment processing options',
        'Load balancing for multiple units',
        'Usage reporting and analytics',
        'Branding customization',
        'Remote management',
        'Robust construction',
        'Weather resistant (IP65)'
      ]
    },
    {
      id: 'rapid-charger',
      name: 'Rapid DC Charger',
      description: 'High-power DC fast charging for public locations and commercial fleets.',
      headline: 'Ultra-Fast DC Charging',
      longDescription: 'The EVCharge Rapid is our high-power DC fast charging solution, capable of adding hundreds of miles of range in just minutes. Designed for high-traffic public locations, highway corridors, and commercial fleet operators, it represents the pinnacle of charging technology.',
      image: 'https://images.unsplash.com/photo-1589360750067-1516c9016816?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      price: '$9,999',
      specs: [
        { label: 'Power Output', value: '150 kW (upgradable to 300 kW)' },
        { label: 'Connector Types', value: 'CCS, CHAdeMO' },
        { label: 'Installation', value: 'Ground-mounted' },
        { label: 'Connectivity', value: 'Wi-Fi, Ethernet, 4G LTE' },
        { label: 'User Interface', value: '15" Touchscreen, RFID, Mobile App' },
        { label: 'Smart Features', value: 'Dynamic power management, Advanced diagnostics, Fleet management integration' },
        { label: 'Dimensions', value: '200 x 80 x 50 cm' },
        { label: 'Weight', value: '375 kg' },
        { label: 'Certification', value: 'UL, CE, FCC' },
        { label: 'Warranty', value: '5 years' }
      ],
      features: [
        'Ultra-fast DC charging',
        'Multiple connector options',
        'Interactive touchscreen',
        'Advanced grid management',
        'Fleet integration capabilities',
        'Remote diagnostics',
        'Built-in cable management',
        'Robust all-weather design (IP54)'
      ]
    }
  ];
  
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-evblue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-evblue-100 px-3 py-1 text-sm font-medium text-evblue-800 mb-6">
              <span>Our Products</span>
            </div>
            <h1 className="heading-1 text-evgray-900 mb-6">
              Charging Solutions for Every Need
            </h1>
            <p className="text-xl text-evgray-600">
              From home installations to commercial-grade rapid charging, our product lineup covers all EV charging scenarios.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <Tabs defaultValue="home-charger" className="animate-fade-in-up">
            <TabsList className="mb-8 flex flex-wrap justify-center space-x-2">
              {products.map(product => (
                <TabsTrigger 
                  key={product.id} 
                  value={product.id}
                  className="px-6 py-3 rounded-full data-[state=active]:bg-evblue-500 data-[state=active]:text-white"
                >
                  {product.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {products.map(product => (
              <TabsContent key={product.id} value={product.id} className="animate-fade-in-up">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1">
                    <div className="inline-flex items-center rounded-full bg-evblue-50 px-3 py-1 text-sm font-medium text-evblue-800 mb-4">
                      <span>{product.name}</span>
                    </div>
                    
                    <h2 className="heading-2 text-evgray-900 mb-4">
                      {product.headline}
                    </h2>
                    
                    <p className="text-lg text-evgray-600 mb-6">
                      {product.longDescription}
                    </p>
                    
                    <div className="flex items-center mb-8">
                      <span className="text-3xl font-bold text-evblue-600">{product.price}</span>
                      <span className="ml-2 text-evgray-500">One-time purchase</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 mb-8">
                      <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-full text-white">
                        Buy Now
                      </Button>
                      <Button variant="outline" className="border-evblue-500 text-evblue-500 hover:bg-evblue-50 rounded-full">
                        Download Specs
                      </Button>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-evgray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="order-1 lg:order-2">
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-16">
                  <h3 className="text-2xl font-semibold text-evgray-900 mb-6">
                    Technical Specifications
                  </h3>
                  
                  <div className="bg-evgray-50 rounded-xl p-6 border border-evgray-100">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="flex justify-between py-3 border-b border-evgray-200">
                          <span className="font-medium text-evgray-700">{spec.label}</span>
                          <span className="text-evgray-900">{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      <section className="section bg-evgray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="heading-2 text-evgray-900 mb-4">
              Why Choose EVCharge
            </h2>
            <p className="text-lg text-evgray-600">
              Our products are designed with attention to every detail, ensuring a superior charging experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up">
              <div className="w-14 h-14 rounded-full bg-evblue-100 flex items-center justify-center mb-6">
                <BatteryCharging className="h-7 w-7 text-evblue-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Optimized Charging
              </h3>
              <p className="text-evgray-600">
                Our intelligent charging algorithms maximize charging efficiency while protecting your battery, extending its life and reducing electricity costs.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Shield className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Safety Guaranteed
              </h3>
              <p className="text-evgray-600">
                All our products undergo rigorous testing and certification, featuring multiple layers of protection including overcurrent, overvoltage, and temperature monitoring.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <Smartphone className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Smart Connectivity
              </h3>
              <p className="text-evgray-600">
                Our mobile app gives you complete control over your charging sessions, with real-time monitoring, customizable settings, and detailed usage analytics.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section py-24 bg-gradient-to-br from-evblue-600 to-evblue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="heading-2 mb-6">
              Ready to Electrify Your Journey?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of satisfied customers who have made the switch to EVCharge.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/support#contact" 
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-evblue-600 hover:bg-opacity-90 transition-all shadow-sm"
              >
                Talk to Sales
              </Link>
              <Link 
                to="/support#installation" 
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                Installation Guide
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
