import React, { useState } from 'react';
import { Search, BookOpen, PlayCircle, FileText, Clock, ArrowRight } from 'lucide-react';
import { resourcesData } from '../data/resourcesData';

const ResourcesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredResources, setFilteredResources] = useState(resourcesData);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterResources(searchTerm, activeCategory);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    filterResources(searchTerm, category);
  };

  const filterResources = (search: string, category: string) => {
    let filtered = resourcesData;
    
    // Search filter
    if (search) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(search.toLowerCase()) ||
        resource.description.toLowerCase().includes(search.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(search.toLowerCase()))
      );
    }
    
    // Category filter
    if (category !== 'all') {
      filtered = filtered.filter(resource => resource.type === category);
    }
    
    setFilteredResources(filtered);
  };

  const categories = [
    { id: 'all', name: 'All Resources' },
    { id: 'article', name: 'Articles' },
    { id: 'video', name: 'Videos' },
    { id: 'guide', name: 'Guides' },
    { id: 'tool', name: 'Tools' }
  ];

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Career Resources</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore articles, guides, videos, and tools to help you navigate your educational and career journey.
          </p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-8">
          <form onSubmit={handleSearch}>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for resources..."
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
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredResources.filter(resource => resource.featured).map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all hover:border-indigo-200 h-full flex flex-col"
              >
                <img 
                  src={resource.image} 
                  alt={resource.title} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow flex flex-col">
                  <div className="mb-2 flex items-center">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      resource.type === 'article' ? 'bg-blue-100 text-blue-800' :
                      resource.type === 'video' ? 'bg-red-100 text-red-800' :
                      resource.type === 'guide' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </span>
                    <span className="ml-2 text-xs text-gray-500 flex items-center">
                      <Clock size={12} className="mr-1" />
                      {resource.readTime}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-grow">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 mt-auto"
                  >
                    {resource.type === 'article' ? 'Read article' :
                     resource.type === 'video' ? 'Watch video' :
                     resource.type === 'guide' ? 'View guide' :
                     'Use tool'}
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">All Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.filter(resource => !resource.featured).map((resource, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-all hover:border-indigo-200"
              >
                <div className="p-6">
                  <div className="mb-2 flex items-center">
                    <span className={`p-2 rounded-lg mr-3 ${
                      resource.type === 'article' ? 'bg-blue-100 text-blue-800' :
                      resource.type === 'video' ? 'bg-red-100 text-red-800' :
                      resource.type === 'guide' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {resource.type === 'article' ? <BookOpen size={18} /> :
                       resource.type === 'video' ? <PlayCircle size={18} /> :
                       resource.type === 'guide' ? <FileText size={18} /> :
                       <BookOpen size={18} />}
                    </span>
                    <div>
                      <span className="text-xs font-medium text-gray-700">
                        {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                      </span>
                      <span className="mx-2 text-gray-300">•</span>
                      <span className="text-xs text-gray-500">{resource.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {resource.tags.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                        +{resource.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <a 
                    href={resource.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-indigo-600 font-medium flex items-center hover:text-indigo-800"
                  >
                    {resource.type === 'article' ? 'Read article' :
                     resource.type === 'video' ? 'Watch video' :
                     resource.type === 'guide' ? 'View guide' :
                     'Use tool'}
                    <ArrowRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* No Results */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
            <div className="inline-block p-3 bg-gray-100 rounded-full mb-4">
              <Search size={28} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No resources found</h3>
            <p className="text-gray-600">
              Try adjusting your search or category filter to find more resources.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourcesPage;