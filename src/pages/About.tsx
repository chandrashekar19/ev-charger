
import Layout from '@/components/Layout';
import Mission from '@/components/Mission';
import { Link } from 'react-router-dom';
import { Users, BarChart3, Award, Target } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-evblue-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center rounded-full bg-evblue-100 px-3 py-1 text-sm font-medium text-evblue-800 mb-6">
              <span>Our Story</span>
            </div>
            <h1 className="heading-1 text-evgray-900 mb-6">
              About EVCharge
            </h1>
            <p className="text-xl text-evgray-600">
              We're on a mission to accelerate the world's transition to sustainable energy through innovative charging solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="heading-3 text-evgray-900 mb-6">
                Our Journey
              </h2>
              <p className="text-lg text-evgray-600 mb-4">
                Founded in 2015, EVCharge began with a simple vision: to make electric vehicle charging accessible, reliable, and seamless for everyone. What started as a small team of engineers and designers has grown into a global company at the forefront of EV infrastructure innovation.
              </p>
              <p className="text-lg text-evgray-600 mb-4">
                We recognized early on that the transition to electric vehicles would require more than just vehicles—it would need a robust, user-friendly charging network. Our team set out to design charging solutions that were not only technologically advanced but also beautiful and intuitive.
              </p>
              <p className="text-lg text-evgray-600">
                Today, with thousands of charging points installed across the country and partnerships with major automotive manufacturers, we continue to push the boundaries of what's possible in EV charging technology.
              </p>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="EVCharge Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 right-5 bg-white rounded-xl p-5 shadow-lg">
                <p className="text-3xl font-bold text-evblue-600">2015</p>
                <p className="text-sm text-evgray-600">Founded</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Mission />

      <section className="section bg-evgray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <h2 className="heading-2 text-evgray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-evgray-600">
              The core principles that guide our work and shape our company culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Sustainability First
              </h3>
              <p className="text-evgray-600">
                We believe that business success and environmental responsibility go hand in hand. Every decision we make considers its environmental impact, from the materials we use to the energy sources that power our charging network.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Excellence in Design
              </h3>
              <p className="text-evgray-600">
                We believe that great technology should be beautiful and intuitive. Our design philosophy emphasizes simplicity, elegance, and user-focused experiences that make charging an EV as effortless as possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Community Focus
              </h3>
              <p className="text-evgray-600">
                We see ourselves as partners in the communities we serve. From working with local businesses to providing education about electric vehicles, we strive to be a positive force in advancing sustainable transportation.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-evgray-100 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-6">
                <BarChart3 className="h-7 w-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-evgray-900 mb-3">
                Data-Driven Innovation
              </h3>
              <p className="text-evgray-600">
                We use data to continually improve our products and services, from optimizing charging speeds to determining the best locations for new charging stations. This analytical approach ensures we're always evolving to meet user needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section py-24 bg-evblue-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <h2 className="heading-2 mb-6">
              Join Our Team
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Passionate about sustainable energy? We're always looking for talented individuals to join our mission.
            </p>
            <Link 
              to="/support#careers" 
              className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-medium bg-white text-evblue-600 hover:bg-opacity-90 transition-all shadow-sm"
            >
              View Open Positions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
