import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  testimonial: {
    name: string;
    role: string;
    content: string;
    avatar: string;
  };
}

const TestimonialCard: React.FC<TestimonialProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-lg hover:border-indigo-200">
      <div className="mb-4 text-indigo-500">
        <Quote size={24} />
      </div>
      <p className="text-gray-600 mb-6 italic">{testimonial.content}</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;