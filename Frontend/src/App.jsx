import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)' }}>
      {/* Header Navigation */}
      <Header activePage={activePage} onPageChange={setActivePage} />

      {/* Main Content Page */}
      <main>
        {activePage === 'home' && <HomePage />}
        {activePage === 'about' && <AboutUsPage />}
      </main>

      {/* Shared Footer */}
      <Footer />
    </div>
  );
}
