import React, { useState } from 'react';
import { Bookmark, Award, School, BookOpen, User, Settings, LogOut, Book, Compass, Plus, Clock, Calendar } from 'lucide-react';
import { careerRecommendations } from '../data/careerData';
import { collegeData } from '../data/collegeData';
import { scholarshipData } from '../data/scholarshipData';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Simulate saved data (in a real app, this would come from a database)
  const savedCareers = careerRecommendations.slice(0, 3);
  const savedColleges = collegeData.slice(0, 2);
  const savedScholarships = scholarshipData.slice(0, 3);

  // Mock user profile data
  const userProfile = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    grade: "12th Grade",
    school: "Washington High School",
    interests: ["Computer Science", "Engineering", "Mathematics"],
    skills: ["Programming", "Problem Solving", "Leadership"],
    profileComplete: 75, // percentage
  };

  // Recent activities (would be fetched from a database in a real app)
  const recentActivities = [
    { id: 1, type: "quiz", name: "Career Assessment Quiz", date: "2 days ago" },
    { id: 2, type: "save", name: "Saved Software Engineer career", date: "4 days ago" },
    { id: 3, type: "search", name: "Searched for Computer Science programs", date: "1 week ago" },
    { id: 4, type: "save", name: "Saved MIT to favorites", date: "1 week ago" },
    { id: 5, type: "apply", name: "Applied for Gates Scholarship", date: "2 weeks ago" },
  ];

  // Quiz results (would be fetched from a database in a real app)
  const quizResults = {
    topCareers: ["Software Engineer", "Data Scientist", "Cybersecurity Analyst"],
    strengths: ["Analytical thinking", "Problem solving", "Creativity"],
    interests: ["Technology", "Engineering", "Sciences"],
    dateCompleted: "October 15, 2025",
  };

  return (
    <div className="pt-24 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 text-xl font-bold">
                  {userProfile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900">{userProfile.name}</h3>
                  <p className="text-sm text-gray-600">{userProfile.grade}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-sm text-gray-700 mb-1">Profile Completion</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${userProfile.profileComplete}%` }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">{userProfile.profileComplete}% complete</p>
              </div>
              
              <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors text-sm font-medium">
                Complete Profile
              </button>
            </div>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <nav className="divide-y divide-gray-100">
                <button 
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'overview' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Compass className="mr-3" size={18} />
                  Overview
                </button>
                <button 
                  onClick={() => setActiveTab('saved-careers')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'saved-careers' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Bookmark className="mr-3" size={18} />
                  Saved Careers
                </button>
                <button 
                  onClick={() => setActiveTab('saved-colleges')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'saved-colleges' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <School className="mr-3" size={18} />
                  Saved Colleges
                </button>
                <button 
                  onClick={() => setActiveTab('saved-scholarships')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'saved-scholarships' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Award className="mr-3" size={18} />
                  Scholarships
                </button>
                <button 
                  onClick={() => setActiveTab('quiz-results')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'quiz-results' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <BookOpen className="mr-3" size={18} />
                  Quiz Results
                </button>
                <button 
                  onClick={() => setActiveTab('profile')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'profile' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <User className="mr-3" size={18} />
                  Profile
                </button>
                <button 
                  onClick={() => setActiveTab('settings')}
                  className={`flex items-center w-full px-6 py-3 text-sm font-medium ${
                    activeTab === 'settings' 
                      ? 'text-indigo-600 bg-indigo-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Settings className="mr-3" size={18} />
                  Settings
                </button>
                <button 
                  className="flex items-center w-full px-6 py-3 text-sm font-medium text-red-600 hover:bg-red-50"
                >
                  <LogOut className="mr-3" size={18} />
                  Sign Out
                </button>
              </nav>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="flex-grow">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div>
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Bookmark className="text-indigo-600 mr-3" size={24} />
                      <h3 className="font-bold text-gray-900">Saved Careers</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{savedCareers.length}</p>
                    <button 
                      onClick={() => setActiveTab('saved-careers')} 
                      className="text-indigo-600 text-sm font-medium mt-2 hover:text-indigo-800"
                    >
                      View all
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <School className="text-indigo-600 mr-3" size={24} />
                      <h3 className="font-bold text-gray-900">Saved Colleges</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{savedColleges.length}</p>
                    <button 
                      onClick={() => setActiveTab('saved-colleges')} 
                      className="text-indigo-600 text-sm font-medium mt-2 hover:text-indigo-800"
                    >
                      View all
                    </button>
                  </div>
                  
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Award className="text-indigo-600 mr-3" size={24} />
                      <h3 className="font-bold text-gray-900">Scholarships</h3>
                    </div>
                    <p className="text-3xl font-bold text-gray-800">{savedScholarships.length}</p>
                    <button 
                      onClick={() => setActiveTab('saved-scholarships')} 
                      className="text-indigo-600 text-sm font-medium mt-2 hover:text-indigo-800"
                    >
                      View all
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Quiz Results Summary */}
                  <div className="md:col-span-2 bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <BookOpen className="text-indigo-600 mr-3" size={24} />
                        <h3 className="font-bold text-gray-900">Career Quiz Results</h3>
                      </div>
                      <span className="text-xs text-gray-500">Completed on {quizResults.dateCompleted}</span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Top Career Matches</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {quizResults.topCareers.map((career, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1 h-1 bg-indigo-500 rounded-full mr-2"></span>
                              {career}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Your Strengths</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {quizResults.strengths.map((strength, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                              {strength}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Your Interests</h4>
                        <ul className="space-y-1 text-sm text-gray-600">
                          {quizResults.interests.map((interest, index) => (
                            <li key={index} className="flex items-center">
                              <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                              {interest}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => setActiveTab('quiz-results')} 
                      className="text-indigo-600 text-sm font-medium hover:text-indigo-800"
                    >
                      View full results
                    </button>
                  </div>
                  
                  {/* Recent Activity */}
                  <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-center mb-4">
                      <Clock className="text-indigo-600 mr-3" size={24} />
                      <h3 className="font-bold text-gray-900">Recent Activity</h3>
                    </div>
                    
                    <ul className="space-y-3">
                      {recentActivities.map((activity) => (
                        <li key={activity.id} className="flex items-start">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-3 ${
                            activity.type === 'quiz' ? 'bg-blue-100 text-blue-600' :
                            activity.type === 'save' ? 'bg-green-100 text-green-600' :
                            activity.type === 'search' ? 'bg-purple-100 text-purple-600' :
                            'bg-orange-100 text-orange-600'
                          }`}>
                            {activity.type === 'quiz' ? <BookOpen size={14} /> :
                             activity.type === 'save' ? <Bookmark size={14} /> :
                             activity.type === 'search' ? <Search size={14} /> :
                             <Plus size={14} />}
                          </div>
                          <div>
                            <p className="text-sm text-gray-800">{activity.name}</p>
                            <p className="text-xs text-gray-500">{activity.date}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Upcoming Deadlines */}
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <div className="flex items-center mb-4">
                    <Calendar className="text-indigo-600 mr-3" size={24} />
                    <h3 className="font-bold text-gray-900">Upcoming Deadlines</h3>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Name
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Type
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Deadline
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                            Gates Millennium Scholars Program
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                              Scholarship
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                            January 15, 2026
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                              Not Started
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">
                            <a href="#">Apply Now</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                            MIT Early Action
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                              Application
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                            November 1, 2025
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-indigo-100 text-indigo-800">
                              In Progress
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">
                            <a href="#">Continue</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 font-medium">
                            FAFSA Application
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-800">
                              Financial Aid
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600">
                            January 30, 2026
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap">
                            <span className="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">
                              Not Started
                            </span>
                          </td>
                          <td className="px-4 py-4 whitespace-nowrap text-sm text-indigo-600 font-medium">
                            <a href="#">Start Now</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
            
            {/* Other tabs would be implemented here */}
            {activeTab !== 'overview' && (
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm flex items-center justify-center h-96">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Coming Soon</h3>
                  <p className="text-gray-600">The {activeTab.replace('-', ' ')} feature is under development.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

// Import missing components that would be implemented in a full app
const Search = Compass;