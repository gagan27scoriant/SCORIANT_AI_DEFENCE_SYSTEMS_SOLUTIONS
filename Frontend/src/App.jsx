import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import CookieConsent from './components/CookieConsent';

// Code-split pages for faster initial page load speed
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const OurSolutionsPage = lazy(() => import('./pages/OurSolutionsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
    '/privacy-policy',
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

      {/* Main Content Page Router with Suspense Fallback */}
      <main>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/solutions" element={<OurSolutionsPage />} />
            <Route path="/solutions/:productId" element={<OurSolutionsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/careers/:jobId" element={<CareersPage />} />
            <Route path="/careers/:jobId/apply" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            
            {/* Secret Admin Gate */}
            <Route path="/secret-admin-gate" element={<AdminDashboardPage />} />
            <Route path="/admin-portal" element={<AdminDashboardPage />} />

            {/* 404 Error Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>

      {/* Shared Footer (Hidden on 404 routes) */}
      {isKnownRoute && <Footer />}

      {/* GDPR/DPDP Cookie Consent Banner */}
      <CookieConsent />
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
