import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Save } from 'lucide-react';
import { careerRecommendations } from '../../data/careerData';

interface QuizResultProps {
  answers: Record<number, string>;
  onRestartQuiz: () => void;
}

// This is a simple implementation that would be replaced with a more sophisticated algorithm
const calculateResults = (answers: Record<number, string>) => {
  // For this MVP, we'll return a few career fields based on interests expressed
  // In a real implementation, this would analyze the answers more thoroughly
  
  // Let's assume question 1 is about interests
  const interestAnswer = answers[1];
  
  // Get related careers based on the interest
  const recommendations = careerRecommendations.filter(career => 
    career.interests.some(interest => interestAnswer?.includes(interest))
  );
  
  // If no specific matches, return default recommendations
  return recommendations.length > 0 
    ? recommendations.slice(0, 5) 
    : careerRecommendations.slice(0, 5);
};

const QuizResult: React.FC<QuizResultProps> = ({ answers, onRestartQuiz }) => {
  const recommendedCareers = calculateResults(answers);

  return (
    <div className="pt-28 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-600 py-6 px-8 text-white">
            <h1 className="text-2xl md:text-3xl font-bold">Your Career Match Results</h1>
            <p className="text-indigo-100 mt-2">Based on your responses, we've identified these career paths for you</p>
          </div>
          
          {/* Results */}
          <div className="p-8">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full">
                <Award className="mr-2" size={20} /> 
                <span className="font-medium">Your Top Career Matches</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {recommendedCareers.map((career, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all hover:border-indigo-200"
                >
                  <div className="flex items-start">
                    <div className="bg-indigo-100 text-indigo-800 h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 mr-4">
                      {career.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{career.title}</h3>
                      <p className="text-indigo-600 text-sm mb-2">{career.field}</p>
                      <p className="text-gray-600 text-sm mb-3">{career.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {career.skills.slice(0, 3).map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      <Link 
                        to={`/career-explorer/${career.id}`} 
                        className="text-indigo-600 font-medium text-sm inline-flex items-center hover:text-indigo-800"
                      >
                        Learn more <ArrowRight size={16} className="ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <button 
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-sm hover:shadow-md transition-all w-full md:w-auto flex justify-center items-center"
              >
                <Save size={18} className="mr-2" />
                Save Results to Dashboard
              </button>
              
              <Link
                to="/career-explorer"
                className="px-6 py-3 bg-white hover:bg-gray-50 text-indigo-600 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all w-full md:w-auto text-center"
              >
                Explore More Careers
              </Link>
              
              <button
                onClick={onRestartQuiz}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-all w-full md:w-auto"
              >
                Retake Quiz
              </button>
            </div>
            
            {/* Additional Resources */}
            <div className="bg-indigo-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center">
                <BookOpen size={20} className="mr-2 text-indigo-600" />
                Next Steps
              </h3>
              <p className="text-gray-700 mb-4">
                Now that you have your career matches, consider these next steps to further explore your options:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <span className="text-white text-xs">1</span>
                  </span>
                  <span>Learn more about each career in our <Link to="/career-explorer" className="text-indigo-600 hover:underline">Career Explorer</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <span className="text-white text-xs">2</span>
                  </span>
                  <span>Find colleges and programs that offer relevant degrees in our <Link to="/college-finder" className="text-indigo-600 hover:underline">College Finder</Link></span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1">
                    <span className="text-white text-xs">3</span>
                  </span>
                  <span>Explore <Link to="/scholarships" className="text-indigo-600 hover:underline">Scholarships</Link> related to your field of interest</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;