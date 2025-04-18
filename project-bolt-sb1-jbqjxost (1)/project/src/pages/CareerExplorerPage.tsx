import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, Minus } from 'lucide-react';
import CareerCard from '../components/careers/CareerCard';
import FilterSidebar from '../components/careers/FilterSidebar';
import { careerRecommendations } from '../data/careerData';

const CareerExplorerPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCareers, setFilteredCareers] = useState(careerRecommendations);
  const [filters, setFilters] = useState({
    fields: [],
    educationLevel: [],
    salaryRange: [0, 150000],
    skills: [],
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const filtered = careerRecommendations.filter(career => {
      // Search term filter
      const matchesSearch = career.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            career.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            career.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
      
      // Field filter
      const matchesField = filters.fields.length === 0 || 
                          filters.fields.includes(career.field);
      
      // Education level filter
      const matchesEducation = filters.educationLevel.length === 0 ||
                              filters.educationLevel.includes(career.education);
      
      // Salary range filter
      const matchesSalary = career.salary >= filters.salaryRange[0] && 
                            career.salary <= filters.salaryRange[1];
      
      // Skills filter
      const matchesSkills = filters.skills.length === 0 ||
                            filters.skills.some(skill => career.skills.includes(skill));
      
      return matchesSearch && matchesField && matchesEducation && matchesSalary && matchesSkills;
    });
    
    setFilteredCareers(filtered);
  }, [searchTerm, filters]);

  const handleFilterChange = (newFilters: any) => {
    setFilters({ ...filters, ...newFilters });
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Explorer</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and explore various career paths based on your interests, education level, and salary expectations.
          </p>
        </div>
        
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative w-full md:w-2/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for careers, skills, or fields..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-4 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 md:ml-4 w-full md:w-auto justify-center"
            >
              <Filter size={20} className="mr-2 text-gray-600" />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
              {showFilters ? 
                <Minus size={18} className="ml-2 text-gray-600" /> : 
                <Plus size={18} className="ml-2 text-gray-600" />
              }
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar - Mobile */}
          {showFilters && (
            <div className="md:hidden mb-6 w-full">
              <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
            </div>
          )}
          
          {/* Filters Sidebar - Desktop */}
          <div className="hidden md:block w-1/4">
            <FilterSidebar filters={filters} onFilterChange={handleFilterChange} />
          </div>
          
          {/* Career Results */}
          <div className="w-full md:w-3/4">
            {filteredCareers.length > 0 ? (
              <div>
                <p className="text-sm text-gray-600 mb-4">Showing {filteredCareers.length} results</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {filteredCareers.map((career, index) => (
                    <CareerCard key={index} career={career} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
                  <Search size={28} className="text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No careers found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filters to find more career options.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerExplorerPage;