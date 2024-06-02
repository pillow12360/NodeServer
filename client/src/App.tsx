import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
