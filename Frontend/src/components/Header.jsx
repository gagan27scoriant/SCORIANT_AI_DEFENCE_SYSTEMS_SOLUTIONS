import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Sparkles } from 'lucide-react';
import { useDataContext } from '../context/DataContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSolutionsHovered, setIsSolutionsHovered] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { products } = useDataContext();

  const EMOJI_MAP = {
    'secure-storage': '🗄️',
    'ai-knowledge-studio': '🧠',
    'document-intelligence': '📄',
    'geospatial-intelligence': '🛰️',
    'smart-surveillance': '📹',
    'gurukula-ai': '🎓',
    'conversational-ai-platform': '🎙️',
    'kavacha-ai': '🛡️',
    'intelligent-fusion': '🔮',
    'logistics-ai': '📦',
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'ABOUT US', path: '/about' },
    { label: 'OUR SOLUTIONS', path: '/solutions', hasDropdown: true },
    { label: 'CAREERS', path: '/careers' },
    { label: 'CONTACT US', path: '/contact' },
  ];

  const isPathActive = (linkPath) => {
    if (linkPath === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(linkPath);
  };

  const handleProductClick = (e, productId) => {
    e.preventDefault();
    e.stopPropagation();
    setIsSolutionsHovered(false);
    setMobileMenuOpen(false);
    navigate(`/solutions/${productId}`);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled
          ? 'rgba(255, 255, 255, 0.96)'
          : 'rgba(255, 255, 255, 0.88)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.8)',
        boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: '1320px',
          margin: '0 auto',
          padding: '18px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <img
            src="/SCORIANT_LOGO_NAVBAR.png"
            alt="Scoriant Logo"
            style={{
              height: '48px',
              width: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.06))',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 900,
                color: '#0f172a',
                letterSpacing: '1.2px',
                lineHeight: 1.05,
              }}
            >
              SCORIANT
            </span>
            <span
              style={{
                fontSize: '12px',
                fontWeight: 900,
                color: '#7c3aed',
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                marginTop: '1px',
              }}
            >
              AI Defence Systems Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = isPathActive(link.path);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.path}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setIsSolutionsHovered(true)}
                  onMouseLeave={() => setIsSolutionsHovered(false)}
                >
                  <Link
                    to={link.path}
                    style={{
                      position: 'relative',
                      fontSize: '13.5px',
                      fontWeight: isActive ? 800 : 700,
                      color: isActive || isSolutionsHovered ? '#7c3aed' : '#475569',
                      padding: '12px 4px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      style={{
                        transform: isSolutionsHovered ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                      }}
                    />

                    {isActive && (
                      <span
                        style={{
                          position: 'absolute',
                          bottom: '2px',
                          left: 0,
                          right: 0,
                          height: '3px',
                          borderRadius: '4px',
                          background: 'var(--brand-gradient)',
                          boxShadow: '0 2px 10px rgba(124, 58, 237, 0.5)',
                        }}
                      />
                    )}
                  </Link>

                  {/* Dropdown Solutions Menu - Clean Minimal Product List */}
                  {isSolutionsHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: '8px',
                        zIndex: 2000,
                      }}
                    >
                      <div
                        style={{
                          background: '#ffffff',
                          border: '1px solid rgba(226, 232, 240, 0.95)',
                          borderRadius: '14px',
                          boxShadow: '0 18px 40px -8px rgba(15, 23, 42, 0.12), 0 4px 16px rgba(124, 58, 237, 0.06)',
                          padding: '8px',
                          minWidth: '280px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '2px',
                          backdropFilter: 'blur(20px)',
                        }}
                      >
                        {products.map((product) => (
                          <div
                            key={product.id}
                            onClick={(e) => handleProductClick(e, product.id)}
                            style={{
                              padding: '9px 14px',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontSize: '13.5px',
                              fontWeight: 650,
                              color: '#334155',
                              transition: 'all 0.18s ease',
                              background: 'transparent',
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)';
                              e.currentTarget.style.color = '#7c3aed';
                              e.currentTarget.style.paddingLeft = '18px';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = 'transparent';
                              e.currentTarget.style.color = '#334155';
                              e.currentTarget.style.paddingLeft = '14px';
                            }}
                          >
                            {product.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  position: 'relative',
                  fontSize: '13.5px',
                  fontWeight: isActive ? 800 : 700,
                  color: isActive ? '#7c3aed' : '#475569',
                  padding: '6px 2px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.8px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#0f172a';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#475569';
                }}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-4px',
                      left: 0,
                      right: 0,
                      height: '3px',
                      borderRadius: '4px',
                      background: 'var(--brand-gradient)',
                      boxShadow: '0 2px 10px rgba(124, 58, 237, 0.5)',
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#0f172a',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            background: '#ffffff',
            borderBottom: '1px solid #e2e8f0',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxHeight: '80vh',
            overflowY: 'auto',
          }}
        >
          {navLinks.map((link) => {
            const isActive = isPathActive(link.path);

            if (link.hasDropdown) {
              return (
                <div key={link.path} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '16px',
                      fontWeight: 800,
                      color: isActive ? '#7c3aed' : '#0f172a',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>

                  {/* Sub products for mobile */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', paddingLeft: '12px' }}>
                    {products.map((p) => (
                      <div
                        key={p.id}
                        onClick={(e) => handleProductClick(e, p.id)}
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 600,
                          color: '#475569',
                          padding: '6px 0',
                          cursor: 'pointer',
                        }}
                      >
                        {p.title}
                      </div>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '16px',
                  fontWeight: 600,
                  color: isActive ? '#7c3aed' : '#0f172a',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
