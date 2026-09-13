import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src="/SCORIANT_LOGO.png"
                alt="Scoriant Logo"
                style={{
                  height: '38px',
                  width: 'auto',
                  background: '#ffffff',
                  padding: '4px 8px',
                  borderRadius: '6px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#ffffff', letterSpacing: '1.5px', lineHeight: 1.1 }}>
                  SCORIANT
                </div>
                <div style={{ fontSize: '10px', fontWeight: 800, color: '#a78bfa', letterSpacing: '2.0px', textTransform: 'uppercase' }}>
                  AI and Defence Systems
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
            <ul className="responsive-footer-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li><Link to="/solutions/secure-storage" style={{ color: '#94a3b8', textDecoration: 'none' }}>Secure Storage</Link></li>
              <li><Link to="/solutions/ai-knowledge-studio" style={{ color: '#94a3b8', textDecoration: 'none' }}>AI Knowledge Studio</Link></li>
              <li><Link to="/solutions/document-intelligence" style={{ color: '#94a3b8', textDecoration: 'none' }}>Document Intelligence</Link></li>
              <li><Link to="/solutions/geospatial-intelligence" style={{ color: '#94a3b8', textDecoration: 'none' }}>Geo-Spatial AI</Link></li>
              <li><Link to="/solutions/smart-surveillance" style={{ color: '#94a3b8', textDecoration: 'none' }}>Smart Surveillance</Link></li>
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
          © {new Date().getFullYear()} Scoriant AI and Defence Systems. All rights reserved.
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
