import React from 'react';
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
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: '#ffffff', lineHeight: 1.1 }}>
                  SCORIANT
                </div>
                <div style={{ fontSize: '10px', fontWeight: 700, color: '#a78bfa', letterSpacing: '1px', textTransform: 'uppercase' }}>
                  Technologies
                </div>
              </div>
            </div>

            <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '24px', maxWidth: '340px' }}>
              Engineering the Autonomous Future of Defence and Intelligence — high-performance edge data systems, agentic AI platforms, and defense-grade air-gapped infrastructure.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/certificates/ISO_2015.png" alt="ISO 9001:2015" style={{ height: '32px' }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#cbd5e1' }}>
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Solutions
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li><a href="#tech-stack" style={{ color: '#94a3b8', textDecoration: 'none' }}>Secure Storage</a></li>
              <li><a href="#tech-stack" style={{ color: '#94a3b8', textDecoration: 'none' }}>AI Knowledge Studio</a></li>
              <li><a href="#tech-stack" style={{ color: '#94a3b8', textDecoration: 'none' }}>Document Intelligence</a></li>
              <li><a href="#tech-stack" style={{ color: '#94a3b8', textDecoration: 'none' }}>Geo-Spatial AI</a></li>
              <li><a href="#tech-stack" style={{ color: '#94a3b8', textDecoration: 'none' }}>Smart Surveillance</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
              <li><a href="#hero" style={{ color: '#94a3b8', textDecoration: 'none' }}>Home</a></li>
              <li><a href="#why-scoriant" style={{ color: '#94a3b8', textDecoration: 'none' }}>Why Scoriant</a></li>
              <li><a href="#expertise" style={{ color: '#94a3b8', textDecoration: 'none' }}>Our Expertise</a></li>
              <li><a href="#global-partners" style={{ color: '#94a3b8', textDecoration: 'none' }}>Partners</a></li>
              <li><a href="#clients" style={{ color: '#94a3b8', textDecoration: 'none' }}>Clients</a></li>
              <li><a href="#certifications" style={{ color: '#94a3b8', textDecoration: 'none' }}>Certifications</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#94a3b8' }}>
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
            gap: 32px !important;
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
