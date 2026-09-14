import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#0b0f19',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: '#f8fafc',
      }}
    >
      <div className="section-wrapper" style={{ paddingBottom: '40px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1.5fr',
            gap: '48px',
          }}
          className="footer-grid"
        >
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <img
                src="/SCORIANT_LOGO_NAVBAR.png"
                alt="Scoriant Logo"
                style={{
                  height: '46px',
                  width: 'auto',
                  objectFit: 'contain',
                  background: '#ffffff',
                  padding: '4px',
                  borderRadius: '10px',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.3)',
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 900, color: '#ffffff', letterSpacing: '1.2px', lineHeight: 1.05 }}>
                  SCORIANT
                </div>
                <div style={{ fontSize: '11px', fontWeight: 900, color: '#a78bfa', letterSpacing: '1.8px', textTransform: 'uppercase', marginTop: '2px' }}>
                  AI Defence Systems Solutions
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px', maxWidth: '340px' }}>
              Engineering the Autonomous Future of Defence and Intelligence — high-performance edge data systems, agentic AI platforms, and defence-grade air-gapped infrastructure.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/certificates/ISO_2015.png" alt="ISO 9001:2015" style={{ height: '32px' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#cbd5e1' }}>
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Solutions Column */}
          <div className="footer-col">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Solutions
            </h4>
            <ul className="responsive-footer-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13.5px' }}>
              <li><Link to="/solutions/secure-storage" style={{ color: '#94a3b8', textDecoration: 'none' }}>Secure Storage</Link></li>
              <li><Link to="/solutions/conversational-ai-platform" style={{ color: '#94a3b8', textDecoration: 'none' }}>Conversational AI</Link></li>
              <li><Link to="/solutions/kavacha-ai" style={{ color: '#94a3b8', textDecoration: 'none' }}>Kavacha AI (Border Vision)</Link></li>
              <li><Link to="/solutions/intelligent-fusion" style={{ color: '#94a3b8', textDecoration: 'none' }}>Intelligent Fusion</Link></li>
              <li><Link to="/solutions/logistics-ai" style={{ color: '#94a3b8', textDecoration: 'none' }}>Logistics & Warehouse AI</Link></li>
              <li><Link to="/solutions" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>View All 10 Solutions →</Link></li>
            </ul>
          </div>

          {/* Navigation Column */}
          <div className="footer-col">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Navigation
            </h4>
            <ul className="responsive-footer-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li><Link to="/" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/solutions" style={{ color: '#94a3b8', textDecoration: 'none' }}>Our Solutions</Link></li>
              <li><Link to="/careers" style={{ color: '#94a3b8', textDecoration: 'none' }}>Careers</Link></li>
              <li><Link to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Contact
            </h4>
            <div className="responsive-footer-list" style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#94a3b8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#a78bfa" />
                <span>info@scoriant.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#a78bfa" />
                <span>Bengaluru, Karnataka, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#a78bfa" />
                <span>Delaware, USA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <a
                  href="https://in.linkedin.com/company/scoriant-ai-defence-systems-solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#a78bfa';
                    const textSpan = e.currentTarget.querySelector('span');
                    if (textSpan) textSpan.style.textDecoration = 'underline';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    const textSpan = e.currentTarget.querySelector('span');
                    if (textSpan) textSpan.style.textDecoration = 'none';
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ flexShrink: 0, borderRadius: '3px' }}
                  >
                    <rect width="24" height="24" rx="4" fill="#7c3aed" />
                    <path
                      d="M7.4 9.6H4.8V18H7.4V9.6ZM6.1 8.4C6.9 8.4 7.6 7.7 7.6 6.9C7.6 6.1 6.9 5.4 6.1 5.4C5.3 5.4 4.6 6.1 4.6 6.9C4.6 7.7 5.3 8.4 6.1 8.4ZM19.2 18H16.6V13.8C16.6 12.8 16.6 11.5 15.2 11.5C13.8 11.5 13.6 12.6 13.6 13.7V18H11V9.6H13.5V10.7H13.5C13.9 10 14.8 9.3 16 9.3C18.6 9.3 19.2 11 19.2 13.2V18Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                  <span>Scoriant AI Defence Systems Solutions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '24px',
          maxWidth: '1280px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '13px',
          color: '#64748b',
        }}
      >
        <div>
          © {new Date().getFullYear()} Scoriant AI Defence Systems Solutions. All rights reserved.
        </div>
        <div>
          Engineering the Autonomous Future
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
          .footer-col {
            padding: 16px;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 14px;
            cursor: pointer;
            transition: all 0.3s ease;
          }
          .footer-col h4 {
            margin-bottom: 0 !important;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .footer-col h4::after {
            content: '+';
            font-size: 16px;
            color: #a78bfa;
            font-weight: 400;
            transition: transform 0.3s ease;
          }
          .footer-col:hover h4::after,
          .footer-col:active h4::after {
            content: '-';
            transform: rotate(180deg);
          }
          .responsive-footer-list {
            max-height: 0 !important;
            opacity: 0 !important;
            overflow: hidden !important;
            margin-top: 0 !important;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
          }
          .footer-col:hover .responsive-footer-list,
          .footer-col:active .responsive-footer-list {
            max-height: 300px !important;
            opacity: 1 !important;
            margin-top: 14px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
