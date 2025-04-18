import React, { useState } from 'react';
import { Search, MapPin, Filter, Check } from 'lucide-react';
import { collegeData } from '../data/collegeData';

const CollegeFinderPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredColleges, setFilteredColleges] = useState(collegeData);
  const [filters, setFilters] = useState({
    type: 'all', // 'public', 'private', 'all'
    tuition: 'all', // 'low', 'medium', 'high', 'all'
    programs: [] as string[],
    location: 'all',
  });

  const handleFilterChange = (filterType: string, value: string | string[]) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    // Apply filters
    let filtered = collegeData;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        college.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Type filter
    if (newFilters.type !== 'all') {
      filtered = filtered.filter(college => college.type === newFilters.type);
    }
    
    // Tuition filter
    if (newFilters.tuition !== 'all') {
      if (newFilters.tuition === 'low') {
        filtered = filtered.filter(college => college.tuition < 15000);
      } else if (newFilters.tuition === 'medium') {
        filtered = filtered.filter(college => college.tuition >= 15000 && college.tuition < 30000);
      } else if (newFilters.tuition === 'high') {
        filtered = filtered.filter(college => college.tuition >= 30000);
      }
    }
    
    // Programs filter
    if (newFilters.programs.length > 0) {
      filtered = filtered.filter(college =>
        newFilters.programs.some(program => college.programs.includes(program))
      );
    }
    
    // Location filter
    if (newFilters.location !== 'all') {
      filtered = filtered.filter(college =>
        college.location.toLowerCase().includes(newFilters.location.toLowerCase())
      );
    }
    
    setFilteredColleges(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    handleFilterChange('search', searchTerm);
  };

  // Program areas for filter
  const programAreas = [
    'Computer Science',
    'Engineering',
    'Business',
    'Healthcare',
    'Arts',
    'Sciences',
    'Education',
    'Law'
  ];

  // Location options
  const locations = ['East Coast', 'West Coast', 'Midwest', 'South'];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">College Finder</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover colleges and universities that match your academic interests, budget, and location preferences.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Search Bar */}
            <div className="md:col-span-3">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search for colleges by name or location..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 px-4 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
            
            {/* Filters */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">College Type</label>
              <select
                value={filters.type}
                onChange={(e) => handleFilterChange('type', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Types</option>
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Tuition Range</label>
              <select
                value={filters.tuition}
                onChange={(e) => handleFilterChange('tuition', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Ranges</option>
                <option value="low">Low (&lt; $15,000)</option>
                <option value="medium">Medium ($15,000 - $30,000)</option>
                <option value="high">High (&gt; $30,000)</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <select
                value={filters.location}
                onChange={(e) => handleFilterChange('location', e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Locations</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div className="md:col-span-3">
              <label className="block text-sm font-medium text-gray-700 mb-2">Programs & Fields of Study</label>
              <div className="flex flex-wrap gap-2">
                {programAreas.map((program, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      const currentPrograms = filters.programs;
                      const newPrograms = currentPrograms.includes(program)
                        ? currentPrograms.filter(p => p !== program)
                        : [...currentPrograms, program];
                      handleFilterChange('programs', newPrograms);
                    }}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.programs.includes(program)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {filters.programs.includes(program) && (
                      <Check size={14} className="inline mr-1" />
                    )}
                    {program}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* College Results */}
        <div className="mb-10">
          <p className="text-sm text-gray-600 mb-4">Showing {filteredColleges.length} colleges</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all hover:border-indigo-200"
              >
                <img 
                  src={college.image} 
                  alt={college.name} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{college.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      college.type === 'public' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-purple-100 text-purple-800'
                    }`}>
                      {college.type.charAt(0).toUpperCase() + college.type.slice(1)}
                    </span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <MapPin size={16} className="text-gray-500 mr-1" />
                    <span className="text-gray-600 text-sm">{college.location}</span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-500">Annual Tuition</p>
                      <p className="text-sm font-medium text-gray-800">${college.tuition.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Acceptance Rate</p>
                      <p className="text-sm font-medium text-gray-800">{college.acceptanceRate}%</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-1">Notable Programs</p>
                    <div className="flex flex-wrap gap-1">
                      {college.programs.slice(0, 3).map((program, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-full"
                        >
                          {program}
                        </span>
                      ))}
                      {college.programs.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{college.programs.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium">
                    View Details & Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* No Results */}
        {filteredColleges.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
              <Search size={28} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No colleges found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find more college options.
            </p>
          </div>
        )}
        
        {/* College Search Tips */}
        <div className="bg-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">College Search Tips</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Finding the Right Fit</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>Consider location, size, and campus culture</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>Research program strengths and faculty</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>Visit campuses virtually or in-person if possible</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-indigo-800 mb-2">Application Strategy</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>Apply to a mix of safety, target, and reach schools</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>Keep track of application deadlines and requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <Check size={12} className="text-white" />
                  </span>
                  <span>Research financial aid and scholarship opportunities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeFinderPage;