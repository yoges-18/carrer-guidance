import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeatureProps {
  feature: {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
  };
}

const FeatureCard: React.FC<FeatureProps> = ({ feature }) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:border-indigo-200 group hover:-translate-y-1">
      <div className="mb-4 p-3 bg-indigo-50 rounded-lg inline-block">{feature.icon}</div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 mb-5">{feature.description}</p>
      <Link 
        to={feature.link} 
        className="text-indigo-600 font-medium inline-flex items-center group-hover:text-indigo-700"
      >
        Learn more <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={16} />
      </Link>
    </div>
  );
};

export default FeatureCard;