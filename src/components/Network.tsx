
import { MapPin, Zap, Clock, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Network = () => {
  return (
    <section className="section bg-gradient-to-br from-evblue-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-evblue-100 px-3 py-1 text-sm font-medium text-evblue-800 mb-6">
              <span>Nationwide Coverage</span>
            </div>
            
            <h2 className="heading-2 text-evgray-900 mb-6">
              Our Charging Network
            </h2>
            
            <p className="text-lg text-evgray-600 mb-8">
              Access our growing network of charging stations across the country.
              Conveniently located at shopping centers, restaurants, hotels, and highways.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evblue-100 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-evblue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-evgray-900">Strategic Locations</h3>
                  <p className="text-evgray-600">
                    Carefully selected locations that fit into your daily routines and travel plans.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evblue-100 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-evblue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-evgray-900">Multiple Charging Speeds</h3>
                  <p className="text-evgray-600">
                    From standard AC to ultra-fast DC charging options, depending on your needs.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evblue-100 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-evblue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-evgray-900">Real-time Availability</h3>
                  <p className="text-evgray-600">
                    Check station availability and reserve charging slots through our mobile app.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-evblue-100 flex items-center justify-center">
                  <CreditCard className="h-5 w-5 text-evblue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-evgray-900">Seamless Payment</h3>
                  <p className="text-evgray-600">
                    Pay effortlessly using our app, RFID card, or contactless payment methods.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-evblue-500 hover:bg-evblue-600 rounded-full">
                Find Nearest Station
              </Button>
              <Button variant="outline" className="border-evblue-500 text-evblue-500 hover:bg-evblue-50 rounded-full">
                Download Mobile App
              </Button>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-right">
            <div className="relative">
              {/* Map image */}
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581362653434-fd91b0a5731f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="EV Charging Network Map" 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats cards */}
              <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-lg">
                <p className="text-3xl font-bold text-evblue-600">800+</p>
                <p className="text-sm text-evgray-600">Charging Stations</p>
              </div>
              
              <div className="absolute -top-5 -right-5 bg-white rounded-xl p-4 shadow-lg">
                <p className="text-3xl font-bold text-evblue-600">35+</p>
                <p className="text-sm text-evgray-600">States Covered</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Network;
