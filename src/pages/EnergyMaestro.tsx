
import Layout from '@/components/Layout';

const EnergyMaestro = () => {
  return (
    <Layout>
      <div className="pt-32 pb-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl font-bold text-green-600 mb-6">
                Empowering Your<br />EV Charge Network
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                EnergyMaestro, a leading-edge charge network management system, seamlessly blends ERP and CRM functionalities to revolutionize electric vehicle infrastructure management. Designed to optimize energy costs and enhance user experience.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                alt="EnergyMaestro Illustration" 
                className="max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          {/* Feature Sections */}
          <div className="space-y-16">
            {/* Feature 1 */}
            <div className="bg-green-500 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 flex items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Unleash Robust EV Infrastructure Control
                    </h2>
                    <p className="text-white text-lg">
                      With EnergyMaestro, command your entire EV charging network with precision. From monitoring station performance to managing deployment, our system provides unparalleled oversight, ensuring reliability and efficiency at every charge point.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                    alt="EV Infrastructure Control" 
                    className="max-w-full rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-green-500 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 flex items-center justify-center lg:order-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Maximise Savings with Intelligence
                    </h2>
                    <p className="text-gray-700 text-lg">
                      Navigate the dynamic energy market with EnergyMaestro's cost optimization feature. Our system analyzes market trends to adjust charging rates dynamically, guaranteeing you capitalize on the lowest energy prices without sacrificing service quality.
                    </p>
                  </div>
                </div>
                <div className="p-8 flex items-center lg:order-1">
                  <img 
                    src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                    alt="Intelligent Savings" 
                    className="max-w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-green-500 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-8 flex items-center">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">
                      Forge Stronger Connections with Advanced CRM
                    </h2>
                    <p className="text-white text-lg">
                      EnergyMaestro's integrated CRM system deepens your understanding of customer behavior and preferences, enabling personalized engagement and superior service. Strengthen customer relationships and drive loyalty with targeted interactions and support.
                    </p>
                  </div>
                </div>
                <div className="bg-white p-8 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                    alt="Advanced CRM" 
                    className="max-w-full rounded-lg shadow-sm"
                  />
                </div>
              </div>
            </div>
            
            {/* Feature 4 */}
            <div className="bg-green-500 rounded-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 flex items-center justify-center lg:order-2">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      Enhance User Experience
                    </h2>
                    <p className="text-gray-700 text-lg">
                      EnergyMaestro syncs effortlessly with end-user apps, providing customers with real-time control over their EV charging experience. From scheduling charges to viewing energy usage, empower your users with a comprehensive and intuitive app interface.
                    </p>
                  </div>
                </div>
                <div className="p-8 flex items-center lg:order-1">
                  <img 
                    src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                    alt="User Experience" 
                    className="max-w-full rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EnergyMaestro;
