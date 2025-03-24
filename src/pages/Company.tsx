
import { useState } from 'react';
import Layout from '@/components/Layout';

const Company = () => {
  const [activeTab, setActiveTab] = useState('vision');

  return (
    <Layout>
      <div className="pt-32 pb-20 bg-[#e6ffea]/50">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-center text-green-600 mb-12">Company</h1>
          
          {/* Tabs */}
          <div className="flex justify-center mb-16 border-b border-gray-200">
            <button 
              className={`px-8 py-4 font-medium text-lg border-b-2 ${
                activeTab === 'vision' 
                  ? 'border-green-600 text-green-600' 
                  : 'border-transparent text-gray-600 hover:text-green-600'
              }`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`px-8 py-4 font-medium text-lg border-b-2 ${
                activeTab === 'mission' 
                  ? 'border-green-600 text-green-600' 
                  : 'border-transparent text-gray-600 hover:text-green-600'
              }`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`px-8 py-4 font-medium text-lg border-b-2 ${
                activeTab === 'why' 
                  ? 'border-green-600 text-green-600' 
                  : 'border-transparent text-gray-600 hover:text-green-600'
              }`}
              onClick={() => setActiveTab('why')}
            >
              Why Us
            </button>
          </div>
          
          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {activeTab === 'vision' && (
              <>
                <div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    To make green energy available for everyone everywhere thereby accelerating sustainable transportation.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                    alt="Green Energy Vision" 
                    className="max-w-full rounded-lg"
                  />
                </div>
              </>
            )}
            
            {activeTab === 'mission' && (
              <>
                <div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Our mission is to revolutionize the electric vehicle charging experience by developing innovative, reliable, and accessible charging solutions that empower sustainable transportation globally.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/abe8df4b-c9a5-4e9c-bdf5-3a220b5555ed.png" 
                    alt="Our Mission" 
                    className="max-w-full rounded-lg"
                  />
                </div>
              </>
            )}
            
            {activeTab === 'why' && (
              <>
                <div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    We bring unmatched expertise, cutting-edge technology, and a customer-first approach to every charging solution we offer. Our dedication to quality, reliability, and innovation sets us apart in the EV charging industry.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="/lovable-uploads/da0b9453-8cfe-42e4-8c01-b4df54a24bb8.png" 
                    alt="Why Choose Us" 
                    className="max-w-full rounded-lg"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Company;
