interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'guide' | 'tool';
  image: string;
  link: string;
  readTime: string;
  tags: string[];
  featured: boolean;
}

export const resourcesData: Resource[] = [
  {
    id: "choosing-career-path",
    title: "How to Choose the Right Career Path for You",
    description: "A comprehensive guide to finding a career that aligns with your interests, skills, and values.",
    type: "article",
    image: "https://images.pexels.com/photos/7621138/pexels-photo-7621138.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/choosing-career",
    readTime: "8 min read",
    tags: ["Career Planning", "Self Assessment", "Decision Making"],
    featured: true
  },
  {
    id: "college-application-timeline",
    title: "College Application Timeline: Your Month-by-Month Guide",
    description: "Stay on track with your college applications with this detailed timeline of what to do and when.",
    type: "guide",
    image: "https://images.pexels.com/photos/5797908/pexels-photo-5797908.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/application-timeline",
    readTime: "12 min read",
    tags: ["College Applications", "Timeline", "Organization"],
    featured: true
  },
  {
    id: "scholarship-essay-tips",
    title: "Winning Scholarship Essays: Tips from Successful Students",
    description: "Learn how to write compelling scholarship essays with advice from students who secured major scholarships.",
    type: "article",
    image: "https://images.pexels.com/photos/4144294/pexels-photo-4144294.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/scholarship-essays",
    readTime: "10 min read",
    tags: ["Scholarships", "Essay Writing", "Financial Aid"],
    featured: true
  },
  {
    id: "interview-prep",
    title: "College Interview Preparation: What to Expect and How to Impress",
    description: "Prepare for your college interviews with these tips on common questions, appropriate attire, and follow-up etiquette.",
    type: "guide",
    image: "https://images.pexels.com/photos/5673489/pexels-photo-5673489.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/interview-prep",
    readTime: "15 min read",
    tags: ["Interviews", "College Admissions", "Communication Skills"],
    featured: false
  },
  {
    id: "stem-careers-video",
    title: "Exploring STEM Careers: A Day in the Life Series",
    description: "Watch video interviews with professionals in various STEM fields to get a sense of what their daily work involves.",
    type: "video",
    image: "https://images.pexels.com/photos/8636612/pexels-photo-8636612.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/stem-careers-video",
    readTime: "25 min watch",
    tags: ["STEM", "Career Exploration", "Day in the Life"],
    featured: false
  },
  {
    id: "resume-building",
    title: "Building Your First Resume: A Guide for High School Students",
    description: "Learn how to create an impressive resume that highlights your academic achievements, extracurricular activities, and work experience.",
    type: "guide",
    image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/resume-guide",
    readTime: "7 min read",
    tags: ["Resume", "Job Applications", "Professional Development"],
    featured: false
  },
  {
    id: "gap-year-pros-cons",
    title: "The Pros and Cons of Taking a Gap Year Before College",
    description: "Consider the benefits and drawbacks of taking a year off between high school and college with insights from students who've done it.",
    type: "article",
    image: "https://images.pexels.com/photos/3275684/pexels-photo-3275684.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/gap-year",
    readTime: "6 min read",
    tags: ["Gap Year", "College Planning", "Decision Making"],
    featured: false
  },
  {
    id: "financial-aid-calculator",
    title: "College Financial Aid Calculator",
    description: "Estimate your financial aid eligibility and potential college costs with this interactive calculator tool.",
    type: "tool",
    image: "https://images.pexels.com/photos/8296989/pexels-photo-8296989.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/financial-calculator",
    readTime: "Interactive Tool",
    tags: ["Financial Aid", "College Costs", "Budgeting"],
    featured: false
  },
  {
    id: "study-abroad-guide",
    title: "A Complete Guide to Studying Abroad: Options, Benefits, and Preparation",
    description: "Explore international education opportunities, understand the benefits of global experience, and learn how to prepare for studying abroad.",
    type: "guide",
    image: "https://images.pexels.com/photos/2574068/pexels-photo-2574068.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/study-abroad",
    readTime: "20 min read",
    tags: ["Study Abroad", "International Education", "Global Experience"],
    featured: false
  },
  {
    id: "career-quiz-video",
    title: "Career Aptitude Tests Explained: How to Use Them Effectively",
    description: "Learn how to interpret career aptitude tests results and apply them to your college and career decision-making process.",
    type: "video",
    image: "https://images.pexels.com/photos/7691725/pexels-photo-7691725.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/aptitude-tests",
    readTime: "15 min watch",
    tags: ["Career Assessment", "Aptitude Tests", "Career Planning"],
    featured: false
  },
  {
    id: "college-visit-checklist",
    title: "College Campus Visit Checklist: What to Look For and Questions to Ask",
    description: "Make the most of your college campus visits with this comprehensive checklist of things to observe and questions to ask admissions officers.",
    type: "guide",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/campus-visits",
    readTime: "5 min read",
    tags: ["Campus Visits", "College Search", "Decision Making"],
    featured: false
  },
  {
    id: "volunteer-opportunities",
    title: "Finding Meaningful Volunteer Opportunities for College Applications",
    description: "Discover how to find volunteer experiences that both benefit your community and strengthen your college applications.",
    type: "article",
    image: "https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600",
    link: "https://example.com/volunteer",
    readTime: "8 min read",
    tags: ["Volunteering", "Extracurricular Activities", "College Applications"],
    featured: false
  }
];