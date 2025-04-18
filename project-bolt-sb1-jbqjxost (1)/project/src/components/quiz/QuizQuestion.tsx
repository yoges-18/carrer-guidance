import React from 'react';
import { Question } from '../../types/quizTypes';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: string | undefined;
  onSelectAnswer: (answer: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({ 
  question, 
  selectedAnswer, 
  onSelectAnswer 
}) => {
  return (
    <div className="quiz-question animate-fadeIn">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">{question.question}</h2>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <div 
            key={index}
            onClick={() => onSelectAnswer(option)}
            className={`p-4 border rounded-lg cursor-pointer transition-all 
              ${selectedAnswer === option 
                ? 'border-indigo-500 bg-indigo-50' 
                : 'border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50'}`}
          >
            <div className="flex items-center">
              <div 
                className={`w-5 h-5 mr-3 rounded-full border flex items-center justify-center
                  ${selectedAnswer === option
                    ? 'border-indigo-600 bg-indigo-600' 
                    : 'border-gray-300'}`}
              >
                {selectedAnswer === option && (
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                )}
              </div>
              <span className={`${selectedAnswer === option ? 'text-indigo-800 font-medium' : 'text-gray-700'}`}>
                {option}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;