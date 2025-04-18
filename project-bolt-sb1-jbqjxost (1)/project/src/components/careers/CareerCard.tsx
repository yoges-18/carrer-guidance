import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bookmark, Award, TrendingUp, Briefcase } from 'lucide-react';
import { Career } from '../../types/careerTypes';

interface CareerCardProps {
  career: Career;
}

const CareerCard: React.FC<CareerCardProps> = ({ career }) => {
  // Function to format salary to readable format with K for thousands
  const formatSalary = (salary: number) => {
    if (salary >= 1000) {
      return `$${(salary / 1000).toFixed(0)}K`;
    }
    return `$${salary}`;
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-all hover:border-indigo-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-start space-x-4">
            <div className="bg-indigo-100 text-indigo-800 h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0">
              {career.icon || <Briefcase size={24} />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
              <p className="text-indigo-600 text-sm">{career.field}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-indigo-600" aria-label="Bookmark career">
            <Bookmark size={20} />
          </button>
        </div>
        
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">
          {career.description}
        </p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center">
            <Award className="text-indigo-500 mr-2" size={18} />
            <div>
              <p className="text-xs text-gray-500">Education</p>
              <p className="text-sm font-medium text-gray-800">{career.education}</p>
            </div>
          </div>
          <div className="flex items-center">
            <TrendingUp className="text-green-500 mr-2" size={18} />
            <div>
              <p className="text-xs text-gray-500">Avg. Salary</p>
              <p className="text-sm font-medium text-gray-800">{formatSalary(career.salary)}/year</p>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {career.skills.slice(0, 3).map((skill, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {skill}
            </span>
          ))}
          {career.skills.length > 3 && (
            <span className="px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
              +{career.skills.length - 3} more
            </span>
          )}
        </div>
        
        <Link 
          to={`/career-explorer/${career.id}`}
          className="inline-flex items-center text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
        >
          View details <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;