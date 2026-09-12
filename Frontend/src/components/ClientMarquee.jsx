import React from 'react';
import { CLIENT_LOGOS } from '../data/scoriantData';
import { ShieldCheck } from 'lucide-react';

export default function ClientMarquee() {
  return (
    <section
      id="clients"
      style={{
        padding: '70px 0',
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-light)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '32px', textAlign: 'center' }}>
        <div className="pill-badge" style={{ marginBottom: '12px' }}>
          <ShieldCheck size={14} />
          <span>Proven Industry Reputation</span>
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
          Trusted By Industry Leaders
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
          Serving the most demanding defence, aerospace, and technology organisations.
        </p>
      </div>

      {/* Infinite Logo Marquee */}
      <div style={{ display: 'flex', overflow: 'hidden', width: '100%', position: 'relative' }}>
        <div className="animate-marquee" style={{ gap: '70px', alignItems: 'center', paddingRight: '70px' }}>
          {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((logo, idx) => (
            <div
              key={idx}
              style={{
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(30%) opacity(0.85)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.filter = 'grayscale(0%) opacity(1)')}
              onMouseLeave={(e) => (e.currentTarget.style.filter = 'grayscale(30%) opacity(0.85)')}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{ height: '48px', width: 'auto', maxWidth: '160px', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
