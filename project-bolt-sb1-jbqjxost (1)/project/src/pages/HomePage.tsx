import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, BookOpen, School, Award, Briefcase, Users } from 'lucide-react';
import FeatureCard from '../components/home/FeatureCard';
import TestimonialCard from '../components/home/TestimonialCard';

const HomePage: React.FC = () => {
  const features = [
    {
      title: 'Career Assessment Quiz',
      description: 'Discover career paths that match your personality, skills, and interests through our interactive assessment.',
      icon: <Compass className="text-indigo-500" size={24} />,
      link: '/career-quiz'
    },
    {
      title: 'Explore Careers',
      description: 'Research different career options with detailed information on education requirements, salary, and job outlook.',
      icon: <Briefcase className="text-indigo-500" size={24} />,
      link: '/career-explorer'
    },
    {
      title: 'College Finder',
      description: 'Find the right college or university based on your location, budget, and academic preferences.',
      icon: <School className="text-indigo-500" size={24} />,
      link: '/college-finder'
    },
    {
      title: 'Scholarship Opportunities',
      description: 'Explore scholarships and financial aid options to help fund your education and achieve your goals.',
      icon: <Award className="text-indigo-500" size={24} />,
      link: '/scholarships'
    },
    {
      title: 'Career Resources',
      description: 'Access articles, guides, and videos to help you navigate your career journey successfully.',
      icon: <BookOpen className="text-indigo-500" size={24} />,
      link: '/resources'
    },
    {
      title: 'Connect with Mentors',
      description: 'Get guidance from professionals and experts in your field of interest through our mentorship program.',
      icon: <Users className="text-indigo-500" size={24} />,
      link: '/resources'
    }
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Medical Student',
      content: 'The career quiz was spot-on! It helped me confirm my passion for medicine and guided me toward the right pre-med programs. I&apos;m now pursuing my dream of becoming a doctor.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Rahul Patel',
      role: 'Engineering Student',
      content: 'I was confused between engineering disciplines, but the detailed career explorer section helped me understand which branch aligns with my interests and future goals.',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Aisha Khan',
      role: 'Design Student',
      content: 'The college finder tool saved me countless hours of research. I found a graphic design program that perfectly fits my budget and career aspirations!',
      avatar: 'https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-r from-indigo-100 via-purple-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your <span className="text-indigo-600">Perfect Career</span> Path
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Personalized guidance for 12th-grade students to explore career options, find the right college, and plan for a successful future.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link 
                  to="/career-quiz" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Take Career Quiz
                  <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link 
                  to="/career-explorer" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-100 text-indigo-600 font-medium rounded-lg border border-gray-200 transition-colors shadow-sm hover:shadow-md"
                >
                  Explore Careers
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.pexels.com/photos/7516363/pexels-photo-7516363.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students looking at career options" 
                className="rounded-lg shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}></div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Help You Succeed</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform provides everything you need to make informed decisions about your future career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Quiz CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-white mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-4">Not Sure Where to Start?</h2>
              <p className="text-indigo-100 text-lg max-w-xl">
                Take our interactive career assessment quiz to get personalized recommendations based on your interests, skills, and preferences.
              </p>
            </div>
            <Link 
              to="/career-quiz" 
              className="px-8 py-4 bg-white text-indigo-600 hover:bg-indigo-50 font-bold rounded-lg transition-colors shadow-md hover:shadow-lg text-lg flex items-center"
            >
              Start Career Quiz <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students who found their ideal career path using our platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">12,000+</div>
              <div className="text-gray-600">Career Paths</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">5,000+</div>
              <div className="text-gray-600">Colleges</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">3,000+</div>
              <div className="text-gray-600">Scholarships</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">50,000+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest career insights, scholarship opportunities, and educational resources.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 flex-grow rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;