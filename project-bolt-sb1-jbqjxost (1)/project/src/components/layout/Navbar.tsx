import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, X, User, BookOpen, Compass, School, Award, Laptop, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={18} /> },
    { name: 'Career Quiz', path: '/career-quiz', icon: <BookOpen size={18} /> },
    { name: 'Explore Careers', path: '/career-explorer', icon: <Compass size={18} /> },
    { name: 'College Finder', path: '/college-finder', icon: <School size={18} /> },
    { name: 'Scholarships', path: '/scholarships', icon: <Award size={18} /> },
    { name: 'Resources', path: '/resources', icon: <Laptop size={18} /> },
  ];

  return (
    <nav 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex justify-center items-center w-10 h-10 bg-indigo-500 text-white rounded-lg">
                <Compass size={20} />
              </div>
              <span className={`text-xl font-bold ${isScrolled ? 'text-indigo-600' : 'text-indigo-600'}`}>
                CareerCompass
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors
                    ${location.pathname === link.path
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
                    }`}
                >
                  <span>{link.icon}</span>
                  <span>{link.name}</span>
                </Link>
              ))}
              <Link
                to="/dashboard"
                className="flex items-center space-x-2 ml-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 text-sm font-medium rounded-md transition-colors"
              >
                <User size={18} />
                <span>Dashboard</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
              onClick={() => setIsOpen(false)}
            >
              <span>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
          <Link
            to="/dashboard"
            className="flex items-center space-x-3 px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={() => setIsOpen(false)}
          >
            <User size={18} />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;