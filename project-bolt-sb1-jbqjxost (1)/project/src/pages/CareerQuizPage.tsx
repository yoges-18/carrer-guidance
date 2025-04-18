import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import QuizQuestion from '../components/quiz/QuizQuestion';
import QuizResult from '../components/quiz/QuizResult';
import { quizQuestions } from '../data/quizData';

const CareerQuizPage: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({
      ...answers,
      [questionId]: answer,
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartQuiz = () => {
    setShowIntro(false);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setQuizCompleted(false);
    setShowIntro(true);
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;

  if (showIntro) {
    return (
      <div className="pt-28 min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">Career Assessment Quiz</h1>
            
            <div className="text-center mb-8">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full mb-4">
                <Check size={36} />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Find Your Perfect Career Match</h2>
              <p className="text-gray-600 mb-6">
                This interactive quiz will help you discover career paths that align with your interests, skills, and values. 
                Answer honestly for the most accurate results.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-indigo-900 mb-3">What to expect:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1"><Check size={14} className="text-white" /></span>
                  <span>15 questions about your interests, skills, and preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1"><Check size={14} className="text-white" /></span>
                  <span>Takes approximately 5-10 minutes to complete</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1"><Check size={14} className="text-white" /></span>
                  <span>Personalized career recommendations based on your answers</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-flex mr-2 mt-1 bg-indigo-500 rounded-full p-1"><Check size={14} className="text-white" /></span>
                  <span>Option to save your results to your dashboard</span>
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <button
                onClick={handleStartQuiz}
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-medium rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Start Quiz <ArrowRight className="inline ml-2" size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (quizCompleted) {
    return <QuizResult answers={answers} onRestartQuiz={restartQuiz} />;
  }

  return (
    <div className="pt-28 min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 md:p-10">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Question {currentQuestionIndex + 1} of {quizQuestions.length}</span>
              <span className="text-sm font-medium text-indigo-600">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <QuizQuestion
            question={currentQuestion}
            selectedAnswer={answers[currentQuestion.id]}
            onSelectAnswer={(answer) => handleAnswer(currentQuestion.id, answer)}
          />

          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentQuestionIndex === 0
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              <ArrowLeft size={18} className="mr-2" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
              className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
                !answers[currentQuestion.id]
                  ? 'bg-indigo-300 cursor-not-allowed text-white'
                  : 'bg-indigo-600 hover:bg-indigo-700 text-white'
              }`}
            >
              {currentQuestionIndex < quizQuestions.length - 1 ? (
                <>
                  Next <ArrowRight size={18} className="ml-2" />
                </>
              ) : (
                'View Results'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerQuizPage;