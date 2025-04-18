import React, { useState } from 'react';
import { Search, Filter, Calendar, ExternalLink, Clock, Check } from 'lucide-react';
import { scholarshipData } from '../data/scholarshipData';

const ScholarshipPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    field: 'all',
    amount: 'all', // 'low', 'medium', 'high', 'all'
  });
  const [filteredScholarships, setFilteredScholarships] = useState(scholarshipData);

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value };
    setFilters(newFilters);
    
    let filtered = scholarshipData;
    
    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(scholarship =>
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.fieldsOfStudy.some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Field filter
    if (newFilters.field !== 'all') {
      filtered = filtered.filter(scholarship =>
        scholarship.fieldsOfStudy.includes(newFilters.field)
      );
    }
    
    // Amount filter
    if (newFilters.amount !== 'all') {
      if (newFilters.amount === 'low') {
        filtered = filtered.filter(scholarship => 
          parseInt(scholarship.amount.replace(/[^0-9]/g, '')) < 5000
        );
      } else if (newFilters.amount === 'medium') {
        filtered = filtered.filter(scholarship => {
          const amount = parseInt(scholarship.amount.replace(/[^0-9]/g, ''));
          return amount >= 5000 && amount < 15000;
        });
      } else if (newFilters.amount === 'high') {
        filtered = filtered.filter(scholarship => 
          parseInt(scholarship.amount.replace(/[^0-9]/g, '')) >= 15000
        );
      }
    }
    
    setFilteredScholarships(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filtered = scholarshipData;
    
    if (searchTerm) {
      filtered = filtered.filter(scholarship =>
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        scholarship.fieldsOfStudy.some(field => field.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Apply existing filters
    if (filters.field !== 'all') {
      filtered = filtered.filter(scholarship =>
        scholarship.fieldsOfStudy.includes(filters.field)
      );
    }
    
    if (filters.amount !== 'all') {
      if (filters.amount === 'low') {
        filtered = filtered.filter(scholarship => 
          parseInt(scholarship.amount.replace(/[^0-9]/g, '')) < 5000
        );
      } else if (filters.amount === 'medium') {
        filtered = filtered.filter(scholarship => {
          const amount = parseInt(scholarship.amount.replace(/[^0-9]/g, ''));
          return amount >= 5000 && amount < 15000;
        });
      } else if (filters.amount === 'high') {
        filtered = filtered.filter(scholarship => 
          parseInt(scholarship.amount.replace(/[^0-9]/g, '')) >= 15000
        );
      }
    }
    
    setFilteredScholarships(filtered);
  };

  const fields = [
    'Computer Science',
    'Engineering',
    'Business',
    'Healthcare',
    'Arts',
    'Sciences',
    'Education',
    'Mathematics'
  ];

  // Function to check if a deadline is approaching (within 30 days)
  const isDeadlineApproaching = (deadlineStr: string) => {
    const deadline = new Date(deadlineStr);
    const today = new Date();
    const diffTime = deadline.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 30;
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Scholarships & Financial Aid</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find scholarships and financial aid opportunities to help fund your education and achieve your career goals.
          </p>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <form onSubmit={handleSearch}>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="md:col-span-2">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400" size={20} />
                  </div>
                  <input
                    type="text"
                    placeholder="Search scholarships by name or field..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>
              
              <div>
                <select
                  value={filters.field}
                  onChange={(e) => handleFilterChange('field', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="all">All Fields of Study</option>
                  {fields.map((field, index) => (
                    <option key={index} value={field}>{field}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <select
                  value={filters.amount}
                  onChange={(e) => handleFilterChange('amount', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="all">All Award Amounts</option>
                  <option value="low">Under $5,000</option>
                  <option value="medium">$5,000 - $15,000</option>
                  <option value="high">Over $15,000</option>
                </select>
              </div>
              
              <div className="md:col-span-4">
                <button
                  type="submit"
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors w-full md:w-auto"
                >
                  Find Scholarships
                </button>
              </div>
            </div>
          </form>
        </div>
        
        {/* Scholarship Results */}
        <div className="mb-10">
          <p className="text-sm text-gray-600 mb-4">Showing {filteredScholarships.length} scholarships</p>
          
          <div className="space-y-6">
            {filteredScholarships.map((scholarship, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all hover:border-indigo-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{scholarship.name}</h3>
                      
                      <div className="flex items-center text-gray-600 mb-4">
                        <Calendar size={16} className="mr-1" />
                        <span className="text-sm">
                          Deadline: <span className={`font-medium ${
                            isDeadlineApproaching(scholarship.deadline) 
                              ? 'text-orange-600' 
                              : 'text-gray-800'
                          }`}>
                            {scholarship.deadline}
                            {isDeadlineApproaching(scholarship.deadline) && (
                              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-orange-100 text-orange-800">
                                <Clock size={12} className="mr-1" />
                                Approaching
                              </span>
                            )}
                          </span>
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                          {scholarship.amount}
                        </span>
                        
                        <div className="text-sm text-gray-600 space-y-2">
                          <h4 className="font-medium text-gray-800">Eligibility:</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            {scholarship.eligibility.map((criterion, idx) => (
                              <li key={idx}>{criterion}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Fields of Study:</h4>
                        <div className="flex flex-wrap gap-2">
                          {scholarship.fieldsOfStudy.map((field, idx) => (
                            <span 
                              key={idx}
                              className="inline-block bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-full"
                            >
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-48 flex flex-col items-center md:items-end space-y-3">
                      <a 
                        href={scholarship.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-center rounded-lg transition-colors text-sm font-medium flex items-center justify-center"
                      >
                        Apply Now
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                      
                      <button className="w-full px-4 py-2 bg-white hover:bg-gray-50 text-indigo-600 border border-indigo-200 text-center rounded-lg transition-colors text-sm font-medium">
                        Save for Later
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* No Results */}
        {filteredScholarships.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
              <Search size={28} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No scholarships found</h3>
            <p className="text-gray-600">
              Try adjusting your search or filters to find more scholarship options.
            </p>
          </div>
        )}
        
        {/* Financial Aid Tips */}
        <div className="bg-indigo-50 rounded-xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Scholarship & Financial Aid Tips</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-indigo-800 mb-3 flex items-center">
                <span className="inline-flex justify-center items-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full mr-2">1</span>
                Start Early
              </h4>
              <p className="text-gray-600 mb-3">
                Begin your scholarship search as early as possible. Many scholarships have deadlines 6-12 months before the academic year starts.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Create a calendar of application deadlines</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Prepare documents in advance (transcripts, essays)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-indigo-800 mb-3 flex items-center">
                <span className="inline-flex justify-center items-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full mr-2">2</span>
                Apply for Multiple Scholarships
              </h4>
              <p className="text-gray-600 mb-3">
                Don't limit yourself to just a few high-value scholarships. Apply for many, including smaller ones that may have less competition.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Local scholarships often have better odds</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Many small scholarships can add up significantly</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="font-bold text-indigo-800 mb-3 flex items-center">
                <span className="inline-flex justify-center items-center w-8 h-8 bg-indigo-100 text-indigo-700 rounded-full mr-2">3</span>
                Complete the FAFSA
              </h4>
              <p className="text-gray-600 mb-3">
                The Free Application for Federal Student Aid (FAFSA) is essential for accessing federal financial aid, grants, and many scholarships.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Submit as soon as possible after October 1st</span>
                </li>
                <li className="flex items-start">
                  <Check size={16} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Gather tax information and financial documents early</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipPage;