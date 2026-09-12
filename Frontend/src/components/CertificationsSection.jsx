import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" style={{ background: 'var(--bg-secondary)', padding: '70px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="section-wrapper" style={{ padding: '0 24px' }}>
        <div style={{ marginBottom: '40px' }}>
          <div className="pill-badge" style={{ marginBottom: '10px' }}>
            <Award size={14} />
            <span>Certifications & Standards</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              letterSpacing: '-0.5px',
              marginBottom: '8px',
              textTransform: 'uppercase',
            }}
          >
            COMPLIANCE & CERTIFICATION BADGES
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '15.5px', maxWidth: '680px', lineHeight: 1.55 }}>
            Our systems are built and validated to the highest international defense and enterprise compliance standards.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div
            style={{
              padding: '12px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '24px',
              transition: 'transform 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <img
              src="/certificates/ISO_2015.png"
              alt="ISO 9001:2015"
              style={{ height: '100px', width: 'auto', objectFit: 'contain' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--text-main)' }}>
                ISO 9001:2015
              </div>
              <div style={{ fontSize: '14px', color: 'var(--primary-purple)', fontWeight: 700 }}>
                Quality Management System Certified
              </div>
              <div style={{ fontSize: '13px', color: 'var(--text-subtle)', marginTop: '4px' }}>
                Defence Hardware & Software Operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
