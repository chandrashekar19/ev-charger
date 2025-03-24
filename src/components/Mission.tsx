
import { Leaf, Lightbulb, Plug, BarChart3 } from 'lucide-react';

const Mission = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-6">
            <span>Our Mission</span>
          </div>
          
          <h2 className="heading-2 text-evgray-900 mb-4">
            Accelerating the World's Transition to Sustainable Energy
          </h2>
          <p className="text-lg text-evgray-600">
            We believe in a future where transportation is clean, efficient, and accessible to all.
            Our mission is to build the charging infrastructure that makes that future possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="relative animate-fade-in-left">
            <div className="aspect-[4/5] bg-evgray-100 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1616276969027-3e9c9dbe9861?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Sustainable Energy Mission" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlapping elements */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-evgray-50 rounded-2xl -z-10"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-evblue-500 text-white rounded-full flex items-center justify-center">
              <Leaf className="h-8 w-8" />
            </div>
          </div>
          
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-evgray-900">Environmental Impact</h3>
              </div>
              <p className="text-evgray-600 pl-16">
                Each of our charging stations helps reduce carbon emissions and air pollution by enabling the transition from gas-powered to electric vehicles.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-evblue-100 flex items-center justify-center">
                  <Lightbulb className="h-6 w-6 text-evblue-600" />
                </div>
                <h3 className="text-xl font-semibold text-evgray-900">Innovation Focus</h3>
              </div>
              <p className="text-evgray-600 pl-16">
                We continuously invest in R&D to develop faster, more efficient, and increasingly intelligent charging technology.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Plug className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-evgray-900">Universal Access</h3>
              </div>
              <p className="text-evgray-600 pl-16">
                We're committed to making EV charging accessible to everyone, regardless of location, vehicle type, or socioeconomic status.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-evgray-900">Data-Driven Growth</h3>
              </div>
              <p className="text-evgray-600 pl-16">
                We use charging data and user feedback to strategically expand our network where it's needed most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
