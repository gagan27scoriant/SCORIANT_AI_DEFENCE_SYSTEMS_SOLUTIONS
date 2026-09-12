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
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', marginBottom: '54px', textAlign: 'center' }}>
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
            marginBottom: '14px',
            letterSpacing: '-0.5px',
          }}
        >
          Trusted By Industry Leaders
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: 0 }}>
          Serving the most demanding defence, aerospace, and technology organisations.
        </p>
      </div>

      {/* Responsive Client Logos Container */}
      <div className="client-marquee-container" style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 24px' }}>
        <div className="client-marquee-track">
          {/* Primary Set */}
          {CLIENT_LOGOS.map((logo, idx) => (
            <div
              key={`orig-${idx}`}
              className="client-logo-item"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 6px',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  height: '75px',
                  width: 'auto',
                  maxWidth: '180px',
                  objectFit: 'contain',
                  filter: 'none',
                }}
              />
            </div>
          ))}

          {/* Duplicate Set for Seamless Mobile Marquee */}
          {CLIENT_LOGOS.map((logo, idx) => (
            <div
              key={`dup-${idx}`}
              className="client-logo-item mobile-duplicate"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '4px 6px',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                style={{
                  height: '75px',
                  width: 'auto',
                  maxWidth: '180px',
                  objectFit: 'contain',
                  filter: 'none',
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .client-marquee-container {
          overflow: hidden;
          width: 100%;
        }

        /* Desktop & Tablet (> 767px): Static single row, no duplicate set */
        @media (min-width: 768px) {
          .mobile-duplicate {
            display: none !important;
          }
          .client-marquee-track {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;
            width: 100%;
            animation: none !important;
          }
          .client-logo-item {
            flex-shrink: 1 !important;
          }
        }

        /* Mobile screens ONLY (<= 767px): Low-speed moving marquee right to left */
        @media (max-width: 767px) {
          .mobile-duplicate {
            display: flex !important;
          }
          .client-marquee-track {
            display: flex;
            align-items: center;
            gap: 32px;
            width: max-content;
            animation: clientMarqueeMove 28s linear infinite;
          }
          .client-marquee-container:hover .client-marquee-track {
            animation-play-state: paused;
          }
        }

        @keyframes clientMarqueeMove {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
