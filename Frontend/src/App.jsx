import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurSolutionsPage from './pages/OurSolutionsPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import NotFoundPage from './pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const location = useLocation();

  const knownRoutes = [
    '/',
    '/about',
    '/solutions',
    '/careers',
    '/contact',
    '/secret-admin-gate',
    '/admin-portal',
  ];

  const isKnownRoute =
    knownRoutes.includes(location.pathname) ||
    location.pathname.startsWith('/solutions/') ||
    location.pathname.startsWith('/careers/');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <ScrollToTop />
      
      {/* Header Navigation (Hidden on 404 routes) */}
      {isKnownRoute && <Header />}

      {/* Main Content Page Router */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/solutions" element={<OurSolutionsPage />} />
          <Route path="/solutions/:productId" element={<OurSolutionsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/careers/:jobId" element={<CareersPage />} />
          <Route path="/careers/:jobId/apply" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          
          {/* Secret Admin Gate */}
          <Route path="/secret-admin-gate" element={<AdminDashboardPage />} />
          <Route path="/admin-portal" element={<AdminDashboardPage />} />

          {/* 404 Error Page */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Shared Footer (Hidden on 404 routes) */}
      {isKnownRoute && <Footer />}
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
