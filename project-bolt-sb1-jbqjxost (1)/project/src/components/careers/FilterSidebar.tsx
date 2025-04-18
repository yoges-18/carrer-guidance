import React, { useState } from 'react';
import { Sliders, ChevronDown, ChevronUp, X } from 'lucide-react';
import { careerFields, educationLevels, skillsList } from '../../data/careerData';

interface FilterSidebarProps {
  filters: {
    fields: string[];
    educationLevel: string[];
    salaryRange: number[];
    skills: string[];
  };
  onFilterChange: (newFilters: any) => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({ filters, onFilterChange }) => {
  const [expandedSections, setExpandedSections] = useState({
    fields: true,
    education: true,
    salary: true,
    skills: true,
  });

  const toggleSection = (section: string) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section as keyof typeof expandedSections],
    });
  };

  const handleFieldChange = (field: string) => {
    const updatedFields = filters.fields.includes(field)
      ? filters.fields.filter((f) => f !== field)
      : [...filters.fields, field];
    
    onFilterChange({ fields: updatedFields });
  };

  const handleEducationChange = (level: string) => {
    const updatedLevels = filters.educationLevel.includes(level)
      ? filters.educationLevel.filter((l) => l !== level)
      : [...filters.educationLevel, level];
    
    onFilterChange({ educationLevel: updatedLevels });
  };

  const handleSalaryChange = (min: number, max: number) => {
    onFilterChange({ salaryRange: [min, max] });
  };

  const handleSkillChange = (skill: string) => {
    const updatedSkills = filters.skills.includes(skill)
      ? filters.skills.filter((s) => s !== skill)
      : [...filters.skills, skill];
    
    onFilterChange({ skills: updatedSkills });
  };

  const clearAllFilters = () => {
    onFilterChange({
      fields: [],
      educationLevel: [],
      salaryRange: [0, 150000],
      skills: [],
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <Sliders className="text-indigo-600 mr-2" size={20} />
          <h3 className="font-bold text-gray-900">Filters</h3>
        </div>
        
        {(filters.fields.length > 0 || filters.educationLevel.length > 0 || 
          filters.skills.length > 0 || filters.salaryRange[0] > 0 || 
          filters.salaryRange[1] < 150000) && (
          <button
            onClick={clearAllFilters}
            className="text-sm text-indigo-600 flex items-center hover:text-indigo-800"
          >
            <X size={16} className="mr-1" />
            Clear all
          </button>
        )}
      </div>
      
      {/* Field Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('fields')}
          className="flex justify-between items-center w-full font-medium text-gray-800 mb-3"
        >
          Career Fields
          {expandedSections.fields ? (
            <ChevronUp size={18} className="text-gray-500" />
          ) : (
            <ChevronDown size={18} className="text-gray-500" />
          )}
        </button>
        
        {expandedSections.fields && (
          <div className="space-y-2 pl-2">
            {careerFields.map((field, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`field-${index}`}
                  checked={filters.fields.includes(field)}
                  onChange={() => handleFieldChange(field)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={`field-${index}`} className="ml-2 text-sm text-gray-700">
                  {field}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Education Level Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('education')}
          className="flex justify-between items-center w-full font-medium text-gray-800 mb-3"
        >
          Education Level
          {expandedSections.education ? (
            <ChevronUp size={18} className="text-gray-500" />
          ) : (
            <ChevronDown size={18} className="text-gray-500" />
          )}
        </button>
        
        {expandedSections.education && (
          <div className="space-y-2 pl-2">
            {educationLevels.map((level, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`education-${index}`}
                  checked={filters.educationLevel.includes(level)}
                  onChange={() => handleEducationChange(level)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={`education-${index}`} className="ml-2 text-sm text-gray-700">
                  {level}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Salary Range Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('salary')}
          className="flex justify-between items-center w-full font-medium text-gray-800 mb-3"
        >
          Salary Range
          {expandedSections.salary ? (
            <ChevronUp size={18} className="text-gray-500" />
          ) : (
            <ChevronDown size={18} className="text-gray-500" />
          )}
        </button>
        
        {expandedSections.salary && (
          <div className="pl-2">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>${filters.salaryRange[0] / 1000}K</span>
              <span>${filters.salaryRange[1] / 1000}K</span>
            </div>
            <input
              type="range"
              min="0"
              max="150000"
              step="10000"
              value={filters.salaryRange[0]}
              onChange={(e) => handleSalaryChange(parseInt(e.target.value), filters.salaryRange[1])}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <input
              type="range"
              min="0"
              max="150000"
              step="10000"
              value={filters.salaryRange[1]}
              onChange={(e) => handleSalaryChange(filters.salaryRange[0], parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer mt-4"
            />
            
            <div className="flex justify-between mt-4">
              <button
                onClick={() => handleSalaryChange(0, 50000)}
                className={`text-xs px-2 py-1 rounded-full ${
                  filters.salaryRange[0] === 0 && filters.salaryRange[1] === 50000
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                $0-50K
              </button>
              <button
                onClick={() => handleSalaryChange(50000, 100000)}
                className={`text-xs px-2 py-1 rounded-full ${
                  filters.salaryRange[0] === 50000 && filters.salaryRange[1] === 100000
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                $50K-100K
              </button>
              <button
                onClick={() => handleSalaryChange(100000, 150000)}
                className={`text-xs px-2 py-1 rounded-full ${
                  filters.salaryRange[0] === 100000 && filters.salaryRange[1] === 150000
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                $100K+
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Skills Filter */}
      <div className="mb-6">
        <button
          onClick={() => toggleSection('skills')}
          className="flex justify-between items-center w-full font-medium text-gray-800 mb-3"
        >
          Skills
          {expandedSections.skills ? (
            <ChevronUp size={18} className="text-gray-500" />
          ) : (
            <ChevronDown size={18} className="text-gray-500" />
          )}
        </button>
        
        {expandedSections.skills && (
          <div className="space-y-2 pl-2">
            {skillsList.map((skill, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`skill-${index}`}
                  checked={filters.skills.includes(skill)}
                  onChange={() => handleSkillChange(skill)}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor={`skill-${index}`} className="ml-2 text-sm text-gray-700">
                  {skill}
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;