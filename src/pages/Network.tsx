import Layout from '@/components/Layout';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { MapPin, Zap, CreditCard, Search, Filter, ChevronDown, Check } from 'lucide-react';

const Network = () => {
  // Sample data for charging stations
  const stations = [
    {
      id: 'station-1',
      name: 'Downtown Charging Hub',
      address: '123 Main Street, Electric City, EC 10001',
      available: 4,
      total: 6,
      types: ['Level 2', 'DC Fast'],
      amenities: ['Restrooms', 'Café', 'WiFi'],
      hours: '24/7',
      image: 'https://images.unsplash.com/photo-1593941707882-a56bbc8427f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'station-2',
      name: 'Westside Shopping Center',
      address: '789 Retail Blvd, Shopville, SV 20002',
      available: 2,
      total: 8,
      types: ['Level 2', 'DC Fast'],
      amenities: ['Restrooms', 'Shopping', 'Restaurants'],
      hours: '6am - 10pm',
      image: 'https://images.unsplash.com/photo-1593941707571-149d7a3bf6c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'station-3',
      name: 'Highway 95 Rest Stop',
      address: 'Mile Marker 245, Highway 95 North',
      available: 1,
      total: 4,
      types: ['DC Fast'],
      amenities: ['Restrooms', 'Vending Machines'],
      hours: '24/7',
      image: 'https://images.unsplash.com/photo-1636204317617-2a7377114284?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      id: 'station-4',
      name: 'Eastside Hotel & Suites',
      address: '567 Hospitality Way, Comfortville, CV 30003',
      available: 3,
      total: 3,
      types: ['Level 2'],
      amenities: ['Restrooms', 'Restaurant', 'Hotel'],
      hours: '24/7 (Hotel Guests), 8am - 8pm (Public)',
      image: 'https://images.unsplash.com/photo-1651280383250-739a4b4d0740?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-evblue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-evblue-100 px-3 py-1 text-sm font-medium text-evblue-800 mb-6">
              <span>Charging Network</span>
            </div>
            <h1 className="heading-1 text-evgray-900 mb-6">
              Find a Charging Station
            </h1>
            <p className="text-xl text-evgray-600">
              Access our growing network of over 800 charging stations strategically located across the country.
            </p>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-evgray-100 mb-12 animate-fade-in-up">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-evgray-900 mb-6">
                Search Charging Stations
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-evgray-400" />
                  <input 
                    type="text" 
                    placeholder="City, address, or postal code" 
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-evgray-200 focus:border-evblue-500 focus:ring focus:ring-evblue-200 focus:ring-opacity-50 outline-none transition-all"
                  />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-evgray-400" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-evgray-200 focus:border-evblue-500 focus:ring focus:ring-evblue-200 focus:ring-opacity-50 outline-none transition-all appearance-none">
                    <option value="">Charger Type (All)</option>
                    <option value="level2">Level 2</option>
                    <option value="dcfast">DC Fast</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-evgray-400" />
                </div>
                
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-evgray-400" />
                  <select className="w-full pl-10 pr-4 py-3 rounded-lg border border-evgray-200 focus:border-evblue-500 focus:ring focus:ring-evblue-200 focus:ring-opacity-50 outline-none transition-all appearance-none">
                    <option value="">Amenities (All)</option>
                    <option value="restrooms">Restrooms</option>
                    <option value="food">Food & Drinks</option>
                    <option value="shopping">Shopping</option>
                    <option value="wifi">WiFi</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-evgray-400" />
                </div>
              </div>
              
              <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-lg">
                Search Stations
              </Button>
            </div>
            
            <div className="relative h-[400px] md:h-[500px] bg-evgray-100">
              <img 
                src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c8bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Map of charging stations" 
                className="w-full h-full object-cover"
              />
              
              {/* Map markers (simplified for demonstration) */}
              <div className="absolute left-[30%] top-[40%] w-8 h-8 bg-evblue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <span className="text-white font-bold">4</span>
              </div>
              
              <div className="absolute left-[60%] top-[25%] w-8 h-8 bg-evblue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <span className="text-white font-bold">2</span>
              </div>
              
              <div className="absolute left-[70%] top-[50%] w-8 h-8 bg-evblue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <span className="text-white font-bold">3</span>
              </div>
              
              <div className="absolute left-[20%] top-[60%] w-8 h-8 bg-evblue-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
                <span className="text-white font-bold">5</span>
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-semibold text-evgray-900 mb-6 animate-fade-in-up">
            Featured Charging Stations
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {stations.map((station, index) => (
              <div 
                key={station.id} 
                className="bg-white rounded-xl overflow-hidden border border-evgray-100 shadow-sm hover:shadow-md transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <img 
                    src={station.image} 
                    alt={station.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-lg py-1 px-3 shadow-md">
                    <span className="font-medium text-evgray-900">{station.available}/{station.total}</span>
                    <span className="text-evgray-600 text-sm ml-1">Available</span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-evgray-900 mb-2">
                    {station.name}
                  </h3>
                  
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="h-5 w-5 text-evblue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-evgray-600">{station.address}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {station.types.map((type, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center rounded-full bg-evblue-50 px-3 py-1 text-xs font-medium text-evblue-700"
                      >
                        <Zap className="h-3 w-3 mr-1" />
                        {type}
                      </span>
                    ))}
                    
                    {station.amenities.slice(0, 2).map((amenity, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center rounded-full bg-evgray-100 px-3 py-1 text-xs font-medium text-evgray-700"
                      >
                        {amenity}
                      </span>
                    ))}
                    
                    {station.amenities.length > 2 && (
                      <span className="inline-flex items-center rounded-full bg-evgray-100 px-3 py-1 text-xs font-medium text-evgray-700">
                        +{station.amenities.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-evgray-600">
                      Hours: {station.hours}
                    </span>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-evblue-600 border-evblue-200 hover:bg-evblue-50 hover:border-evblue-300"
                    >
                      Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in-up">
            <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-full">
              View All Stations
            </Button>
          </div>
        </div>
      </section>
      
      <section className="section bg-evgray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <div className="inline-flex items-center rounded-full bg-evblue-100 px-3 py-1 text-sm font-medium text-evblue-800 mb-6">
                <span>Mobile App</span>
              </div>
              
              <h2 className="heading-2 text-evgray-900 mb-6">
                Charging Made Simple
              </h2>
              
              <p className="text-lg text-evgray-600 mb-8">
                Our mobile app puts the entire EVCharge network at your fingertips. Find stations, check availability, and manage charging sessions with ease.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-evgray-900">Real-time Availability</h3>
                    <p className="text-evgray-600">See which stations are available before you arrive.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-evgray-900">Route Planning</h3>
                    <p className="text-evgray-600">Plan trips with charging stops along your route.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-evgray-900">Seamless Payment</h3>
                    <p className="text-evgray-600">Pay for charging sessions directly through the app.</p>
                  </div>
                </li>
                
                <li className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-evgray-900">Charging History</h3>
                    <p className="text-evgray-600">View past sessions and track your charging costs.</p>
                  </div>
                </li>
              </ul>
              
              <div className="flex flex-wrap gap-4">
                <a href="#" className="transition-transform hover:scale-105">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1000px-Download_on_the_App_Store_Badge.svg.png" 
                    alt="Download on the App Store" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="transition-transform hover:scale-105">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1000px-Google_Play_Store_badge_EN.svg.png" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="relative z-10 max-w-[300px] mx-auto">
                <img 
                  src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="EVCharge Mobile App" 
                  className="rounded-[2.5rem] shadow-2xl"
                />
                
                {/* Decorative elements */}
                <div className="absolute top-1/4 -right-16 w-32 h-32 bg-evblue-200 rounded-full opacity-60 blur-xl" />
                <div className="absolute bottom-1/4 -left-16 w-32 h-32 bg-evblue-300 rounded-full opacity-60 blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section py-24 bg-gradient-to-br from-evblue-600 to-evblue-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="heading-2 mb-6">
              Join Our Charging Network
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Are you a business interested in hosting EVCharge stations at your location?
              Attract eco-conscious customers and join our growing network.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                to="/support#host" 
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-evblue-600 hover:bg-opacity-90 transition-all shadow-sm"
              >
                Become a Host
              </Link>
              <Link 
                to="/support#partnership" 
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium border-2 border-white text-white hover:bg-white/10 transition-all"
              >
                Partnership Opportunities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Network;
