import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <div className="flex items-center space-x-2 mb-5">
              <div className="flex justify-center items-center w-10 h-10 bg-indigo-500 text-white rounded-lg">
                <Compass size={20} />
              </div>
              <span className="text-xl font-bold text-white">CareerCompass</span>
            </div>
            <p className="text-gray-400 mb-6">
              Guiding 12th-grade students toward fulfilling career paths through personalized insights 
              and comprehensive resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-indigo-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/career-quiz" className="text-gray-400 hover:text-indigo-400 transition-colors">Career Quiz</Link>
              </li>
              <li>
                <Link to="/career-explorer" className="text-gray-400 hover:text-indigo-400 transition-colors">Explore Careers</Link>
              </li>
              <li>
                <Link to="/college-finder" className="text-gray-400 hover:text-indigo-400 transition-colors">College Finder</Link>
              </li>
              <li>
                <Link to="/scholarships" className="text-gray-400 hover:text-indigo-400 transition-colors">Scholarships</Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-indigo-400 transition-colors">Resources</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Career Guides</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">College Application Tips</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Exam Preparation</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Scholarship Alerts</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Career Blogs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Success Stories</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="text-indigo-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">123 Education Lane, Knowledge City, 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-indigo-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-indigo-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">support@careercompass.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} CareerCompass. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;