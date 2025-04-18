import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import CareerQuizPage from './pages/CareerQuizPage';
import CareerExplorerPage from './pages/CareerExplorerPage';
import CollegeFinderPage from './pages/CollegeFinderPage';
import ScholarshipPage from './pages/ScholarshipPage';
import ResourcesPage from './pages/ResourcesPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/career-quiz" element={<CareerQuizPage />} />
            <Route path="/career-explorer" element={<CareerExplorerPage />} />
            <Route path="/college-finder" element={<CollegeFinderPage />} />
            <Route path="/scholarships" element={<ScholarshipPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;