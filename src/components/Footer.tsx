
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#0e2a47] text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Get a Quote
                </Link>
              </li>
              <li>
                <Link to="/company" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Company
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products/powerup-32" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  PowerUp 32
                </Link>
              </li>
              <li>
                <Link to="/products/powerup-60" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  PowerUp 60
                </Link>
              </li>
              <li>
                <Link to="/products/powerup-mobile" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  PowerUp Mobile
                </Link>
              </li>
              <li>
                <Link to="/energy-maestro" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  EnergyMÆSTRO
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white mb-4">Industries</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/industries/auto-dealership" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Auto Dealership
                </Link>
              </li>
              <li>
                <Link to="/industries/automakers" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Automakers
                </Link>
              </li>
              <li>
                <Link to="/industries/hospitality" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Hospitality Sector
                </Link>
              </li>
              <li>
                <Link to="/industries/apartments" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/industries/parking" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Parking Operators
                </Link>
              </li>
              <li>
                <Link to="/industries/retail" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link to="/industries/workplace" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  Workplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Talk to our agent</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">
                Mon-Fri, 8:00 AM - 5:00 PM (ET)
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-evblue-400 mr-2" />
                <a href="mailto:sales@schonmobility.com" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  sales@schonmobility.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-evblue-400 mr-2" />
                <a href="tel:+12345678990" className="text-gray-300 hover:text-evblue-300 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="text-evblue-400 mr-2 mt-1" />
                <span className="text-gray-300">
                  123 Main St, City, Country
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Schön Mobility. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
