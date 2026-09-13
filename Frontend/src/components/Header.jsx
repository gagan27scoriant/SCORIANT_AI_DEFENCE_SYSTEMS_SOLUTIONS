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
            src="/SCORIANT_LOGO.png"
            alt="Scoriant Logo"
            style={{
              height: '42px',
              width: 'auto',
              objectFit: 'contain',
              background: '#ffffff',
              padding: '4px 8px',
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
            }}
          />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 800,
                color: '#0f172a',
                letterSpacing: '1.5px',
                lineHeight: 1.1,
              }}
            >
              SCORIANT
            </span>
            <span
              style={{
                fontSize: '11.5px',
                fontWeight: 900,
                color: '#7c3aed',
                letterSpacing: '2.0px',
                textTransform: 'uppercase',
              }}
            >
              AI and Defence Systems
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

                  {/* Dropdown Solutions Menu */}
                  {isSolutionsHovered && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: '10px',
                        zIndex: 2000,
                      }}
                    >
                      <div
                        style={{
                          background: '#ffffff',
                          border: '1px solid rgba(226, 232, 240, 0.95)',
                          borderRadius: '18px',
                          boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15), 0 6px 20px rgba(124, 58, 237, 0.08)',
                          padding: '12px',
                          width: '360px',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '8px',
                          backdropFilter: 'blur(20px)',
                        }}
                      >
                        {/* Header banner inside dropdown */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '4px 8px 8px 8px',
                            borderBottom: '1px solid #f1f5f9',
                          }}
                        >
                          <span
                            style={{
                              fontSize: '11px',
                              fontWeight: 800,
                              color: '#7c3aed',
                              letterSpacing: '1.2px',
                              textTransform: 'uppercase',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                            }}
                          >
                            <Sparkles size={13} />
                            <span>Enterprise & Defence Suite</span>
                          </span>
                          <Link
                            to="/solutions"
                            onClick={() => setIsSolutionsHovered(false)}
                            style={{
                              fontSize: '11.5px',
                              fontWeight: 700,
                              color: '#64748b',
                              textDecoration: 'none',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              transition: 'color 0.2s ease',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.color = '#7c3aed')}
                            onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
                          >
                            <span>View All</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>

                        {/* 1-Column List of Products */}
                        <div
                          style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                          }}
                        >
                          {products.map((product) => (
                            <div
                              key={product.id}
                              onClick={(e) => handleProductClick(e, product.id)}
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                padding: '8px 10px',
                                borderRadius: '10px',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                background: 'transparent',
                                border: '1px solid transparent',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(124, 58, 237, 0.08)';
                                e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.15)';
                                e.currentTarget.style.transform = 'translateX(2px)';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'transparent';
                                e.currentTarget.style.borderColor = 'transparent';
                                e.currentTarget.style.transform = 'translateX(0)';
                              }}
                            >
                              <div
                                style={{
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: '8px',
                                  background: 'rgba(124, 58, 237, 0.08)',
                                  border: '1px solid rgba(124, 58, 237, 0.15)',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  fontSize: '16px',
                                  flexShrink: 0,
                                }}
                              >
                                {EMOJI_MAP[product.id] || '⚡'}
                              </div>
                              <div style={{ display: 'flex', flexDirection: 'column', minWidth: 0, flex: 1 }}>
                                <span
                                  style={{
                                    fontSize: '13px',
                                    fontWeight: 800,
                                    color: '#0f172a',
                                    lineHeight: 1.3,
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                  }}
                                >
                                  {product.title}
                                </span>
                                <span
                                  style={{
                                    fontSize: '10.5px',
                                    fontWeight: 600,
                                    color: '#7c3aed',
                                    marginTop: '1px',
                                  }}
                                >
                                  {product.badge || product.category}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '12px' }}>
                    {products.map((p) => (
                      <div
                        key={p.id}
                        onClick={(e) => handleProductClick(e, p.id)}
                        style={{
                          fontSize: '13.5px',
                          fontWeight: 700,
                          color: '#475569',
                          padding: '6px 0',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          cursor: 'pointer',
                        }}
                      >
                        <span>{EMOJI_MAP[p.id] || '⚡'}</span>
                        <span>{p.title}</span>
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
