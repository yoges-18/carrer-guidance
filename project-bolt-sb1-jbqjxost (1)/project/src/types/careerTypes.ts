import { ReactNode } from 'react';

export interface Career {
  id: string;
  title: string;
  field: string;
  description: string;
  education: string;
  salary: number;
  growth: string;
  skills: string[];
  interests: string[];
  icon?: ReactNode;
}

export interface College {
  id: string;
  name: string;
  location: string;
  type: string;
  ranking: number;
  tuition: number;
  programs: string[];
  acceptanceRate: number;
  image: string;
}

export interface Scholarship {
  id: string;
  name: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  fieldsOfStudy: string[];
  link: string;
}