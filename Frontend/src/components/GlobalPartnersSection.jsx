import React from 'react';
import { Handshake } from 'lucide-react';

export default function GlobalPartnersSection() {
  const partnerLogos = [
    {
      name: 'STACO',
      src: '/partners/STACO.png',
      height: '84px',
      maxWidth: '250px',
      filter: 'saturate(2.2) contrast(1.3) brightness(1.05)',
    },
    {
      name: 'T-SECOND',
      src: '/partners/T-SECOND.png',
      height: '84px',
      maxWidth: '250px',
      filter: 'saturate(2.2) contrast(1.3) brightness(1.05)',
    },
    {
      name: 'Tech Phosis',
      src: '/partners/Tech-phosis.png',
      height: '58px',
      maxWidth: '170px',
      filter: 'saturate(1.5) contrast(1.15) brightness(1.05)',
    },
  ];

  return (
    <section
      id="global-partners"
      style={{
        background: 'var(--bg-secondary)',
        padding: '70px 0',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="section-wrapper" style={{ padding: '0 24px' }}>
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 54px auto' }}>
          <div className="pill-badge" style={{ marginBottom: '12px' }}>
            <Handshake size={14} />
            <span>Strategic Alliances</span>
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
            Global Technology Partners
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: 0 }}>
            Collaborating with leading innovators to deliver state-of-the-art AI and edge defense solutions.
          </p>
        </div>

        <div className="global-partners-container" style={{ maxWidth: '1440px', margin: '0 auto' }}>
          <div className="global-partners-track">
            {partnerLogos.map((partner, idx) => (
              <div
                key={idx}
                className="global-partner-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  style={{
                    height: partner.height,
                    width: 'auto',
                    maxWidth: partner.maxWidth,
                    objectFit: 'contain',
                    filter: partner.filter,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop & Tablet: hidden overflow, centered row */
        .global-partners-container {
          overflow-x: hidden;
        }
        .global-partners-track {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 40px 70px;
          flex-wrap: wrap;
          width: 100%;
        }

        /* Mobile screens ONLY (<= 767px): side scrollbar enabled */
        @media (max-width: 767px) {
          .global-partners-container {
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 12px !important;
            scrollbar-width: thin !important;
            scrollbar-color: #94a3b8 var(--bg-subtle) !important;
          }
          .global-partners-container::-webkit-scrollbar {
            display: block !important;
            height: 6px !important;
          }
          .global-partners-container::-webkit-scrollbar-track {
            background: var(--bg-subtle) !important;
            border-radius: 4px !important;
          }
          .global-partners-container::-webkit-scrollbar-thumb {
            background: #94a3b8 !important;
            border-radius: 4px !important;
          }
          .global-partners-track {
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
            gap: 24px !important;
            width: max-content !important;
          }
          .global-partner-item {
            flex-shrink: 0 !important;
            padding: 8px 12px !important;
          }
        }
      `}</style>
    </section>
  );
}

