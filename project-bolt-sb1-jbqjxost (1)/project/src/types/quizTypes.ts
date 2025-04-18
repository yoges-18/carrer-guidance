export interface Question {
  id: number;
  question: string;
  options: string[];
}

export interface QuizResult {
  recommendedCareers: string[];
  strengths: string[];
  interestsAreas: string[];
}