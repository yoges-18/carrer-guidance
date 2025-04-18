import React from 'react';
import { Career } from '../types/careerTypes';
import { Code, BookOpen, Stethoscope, Briefcase, PenTool, Server, BarChart, Leaf, Building, Microscope } from 'lucide-react';

export const careerFields = [
  "Technology",
  "Healthcare",
  "Business",
  "Arts & Design",
  "Engineering",
  "Education",
  "Science",
  "Finance",
  "Law",
  "Social Services"
];

export const educationLevels = [
  "High School Diploma",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Doctoral Degree",
  "Professional Certification"
];

export const skillsList = [
  "Programming",
  "Data Analysis",
  "Project Management",
  "Communication",
  "Leadership",
  "Design",
  "Problem Solving",
  "Critical Thinking",
  "Research",
  "Creativity",
  "Teamwork",
  "Technical Writing"
];

export const careerRecommendations: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    field: "Technology",
    description: "Design, develop, and maintain software systems and applications using programming languages, frameworks, and engineering best practices.",
    education: "Bachelor's Degree",
    salary: 110000,
    growth: "22% (Much faster than average)",
    skills: ["Programming", "Problem Solving", "Algorithms", "Software Design", "Testing"],
    interests: ["Solving complex problems", "Technology", "Mathematics"],
    icon: <Code size={24} />
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    field: "Technology",
    description: "Analyze complex data sets to identify patterns, develop predictive models, and extract actionable insights to solve business problems.",
    education: "Master's Degree",
    salary: 120000,
    growth: "36% (Much faster than average)",
    skills: ["Machine Learning", "Statistics", "Programming", "Data Visualization", "SQL"],
    interests: ["Data analysis", "Mathematics", "Research"],
    icon: <BarChart size={24} />
  },
  {
    id: "physician",
    title: "Physician",
    field: "Healthcare",
    description: "Diagnose and treat illnesses, prescribe medications, and provide preventative care to maintain patient health and wellbeing.",
    education: "Doctoral Degree",
    salary: 208000,
    growth: "3% (Average)",
    skills: ["Clinical Knowledge", "Diagnosis", "Patient Care", "Communication", "Decision Making"],
    interests: ["Biology", "Chemistry", "Helping others"],
    icon: <Stethoscope size={24} />
  },
  {
    id: "graphic-designer",
    title: "Graphic Designer",
    field: "Arts & Design",
    description: "Create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, or captivate consumers.",
    education: "Bachelor's Degree",
    salary: 53000,
    growth: "3% (Average)",
    skills: ["Design Software", "Typography", "Color Theory", "Layout", "Creative Thinking"],
    interests: ["Art", "Design", "Creativity"],
    icon: <PenTool size={24} />
  },
  {
    id: "financial-analyst",
    title: "Financial Analyst",
    field: "Finance",
    description: "Evaluate investments and advise individuals or organizations on financial decisions by analyzing financial information and market trends.",
    education: "Bachelor's Degree",
    salary: 83000,
    growth: "9% (Faster than average)",
    skills: ["Financial Modeling", "Research", "Data Analysis", "Excel", "Financial Statements"],
    interests: ["Mathematics", "Economics", "Business"],
    icon: <BarChart size={24} />
  },
  {
    id: "teacher",
    title: "Teacher",
    field: "Education",
    description: "Instruct students in various subjects, develop lesson plans, assess student progress, and create an engaging learning environment.",
    education: "Bachelor's Degree",
    salary: 61000,
    growth: "4% (Average)",
    skills: ["Curriculum Development", "Classroom Management", "Communication", "Assessment", "Adaptability"],
    interests: ["Teaching", "Helping others", "Subject expertise"],
    icon: <BookOpen size={24} />
  },
  {
    id: "civil-engineer",
    title: "Civil Engineer",
    field: "Engineering",
    description: "Design, develop, and supervise infrastructure projects and systems, including roads, buildings, airports, tunnels, dams, and water supply systems.",
    education: "Bachelor's Degree",
    salary: 88000,
    growth: "7% (Faster than average)",
    skills: ["Structural Analysis", "AutoCAD", "Project Management", "Technical Drawing", "Problem Solving"],
    interests: ["Mathematics", "Physics", "Building things"],
    icon: <Building size={24} />
  },
  {
    id: "biologist",
    title: "Biologist",
    field: "Science",
    description: "Study living organisms and their relationship to the environment, conducting research to increase knowledge about life processes.",
    education: "Doctoral Degree",
    salary: 65000,
    growth: "5% (Average)",
    skills: ["Research", "Lab Techniques", "Data Analysis", "Scientific Writing", "Microscopy"],
    interests: ["Biology", "Research", "Nature"],
    icon: <Microscope size={24} />
  },
  {
    id: "marketing-manager",
    title: "Marketing Manager",
    field: "Business",
    description: "Plan, direct, and coordinate marketing strategies and campaigns to promote products, services, or brands to target audiences.",
    education: "Bachelor's Degree",
    salary: 135000,
    growth: "10% (Faster than average)",
    skills: ["Market Research", "Campaign Management", "Social Media", "Analytics", "Communication"],
    interests: ["Business", "Psychology", "Communication"],
    icon: <Briefcase size={24} />
  },
  {
    id: "environmental-scientist",
    title: "Environmental Scientist",
    field: "Science",
    description: "Study, develop, and advise on policies and plans for preventing, controlling, or reducing environmental issues such as pollution.",
    education: "Bachelor's Degree",
    salary: 73000,
    growth: "8% (Faster than average)",
    skills: ["Research", "Data Analysis", "Sampling", "Environmental Regulations", "Report Writing"],
    interests: ["Environmental studies", "Chemistry", "Geography"],
    icon: <Leaf size={24} />
  },
  {
    id: "cybersecurity-analyst",
    title: "Cybersecurity Analyst",
    field: "Technology",
    description: "Plan and implement security measures to protect computer networks and systems from cyberattacks and data breaches.",
    education: "Bachelor's Degree",
    salary: 103000,
    growth: "33% (Much faster than average)",
    skills: ["Network Security", "Encryption", "Threat Analysis", "Security Tools", "Incident Response"],
    interests: ["Computer security", "Technology", "Problem solving"],
    icon: <Server size={24} />
  },
  {
    id: "architect",
    title: "Architect",
    field: "Arts & Design",
    description: "Plan and design buildings and structures, considering functionality, aesthetics, safety, and client needs.",
    education: "Bachelor's Degree",
    salary: 82000,
    growth: "3% (Average)",
    skills: ["CAD Software", "Design", "Project Management", "Technical Drawing", "Building Codes"],
    interests: ["Design", "Art", "Mathematics"],
    icon: <Building size={24} />
  }
];