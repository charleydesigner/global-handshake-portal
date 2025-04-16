
import { Link } from "react-router-dom";
import { Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-secondary" />
              <span className="text-xl font-bold">Global Workforce Connect</span>
            </div>
            <p className="text-gray-400 mb-4">
              Connecting skilled workers with global opportunities for a better future.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-secondary">Home</Link></li>
              <li><Link to="/biodata" className="text-gray-400 hover:text-secondary">Apply Now</Link></li>
              <li><Link to="/documents" className="text-gray-400 hover:text-secondary">Document Upload</Link></li>
              <li><Link to="/interview" className="text-gray-400 hover:text-secondary">Book Interview</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Countries</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">UAE</span></li>
              <li><span className="text-gray-400">Saudi Arabia</span></li>
              <li><span className="text-gray-400">Qatar</span></li>
              <li><span className="text-gray-400">Singapore</span></li>
              <li><span className="text-gray-400">Malaysia</span></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span className="text-gray-400">123 Recruitment Plaza, Business District</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-secondary" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-secondary" />
                <span className="text-gray-400">info@globalworkforceconnect.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Global Workforce Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
