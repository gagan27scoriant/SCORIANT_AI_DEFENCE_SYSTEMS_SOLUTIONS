import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
  return (
    <section id="certifications" style={{ background: 'var(--bg-secondary)', padding: '70px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="section-wrapper" style={{ padding: '0 24px', textAlign: 'center' }}>
        <div className="pill-badge" style={{ marginBottom: '12px' }}>
          <Award size={14} />
          <span>Certifications & Standards</span>
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 900,
            color: 'var(--text-main)',
            lineHeight: 1.2,
            marginBottom: '10px',
            letterSpacing: '-0.5px',
          }}
        >
          Compliance & Certification Badges
        </h2>

        <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '640px', margin: '0 auto 36px auto' }}>
          Our systems are built and validated to the highest international defense and enterprise compliance standards.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '40px', flexWrap: 'wrap' }}>
          <div
            className="card-container"
            style={{
              padding: '24px 40px',
              borderRadius: '18px',
              background: 'var(--bg-card)',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <img
              src="/certificates/ISO_2015.png"
              alt="ISO 9001:2015"
              style={{ height: '75px', width: 'auto', objectFit: 'contain' }}
            />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: 'var(--text-main)' }}>
                ISO 9001:2015
              </div>
              <div style={{ fontSize: '13px', color: 'var(--primary-purple)', fontWeight: 700 }}>
                Quality Management System Certified
              </div>
              <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '2px' }}>
                Defence Hardware & Software Operations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
