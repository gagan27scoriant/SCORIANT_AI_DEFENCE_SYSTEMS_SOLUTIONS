import React from 'react';
import { Handshake } from 'lucide-react';

export default function GlobalPartnersSection() {
  const partnerLogos = [
    { name: 'STACO', src: '/partners/STACO.png' },
    { name: 'T-SECOND', src: '/partners/T-SECOND.png' },
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
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
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
              marginBottom: '10px',
              letterSpacing: '-0.5px',
            }}
          >
            Global Technology Partners
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
            Collaborating with leading innovators to deliver state-of-the-art AI and edge defense solutions.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '60px',
            flexWrap: 'wrap',
          }}
        >
          {partnerLogos.map((partner, idx) => (
            <div
              key={idx}
              className="card-container"
              style={{
                padding: '24px 44px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '220px',
              }}
            >
              <img
                src={partner.src}
                alt={partner.name}
                style={{
                  height: '65px',
                  width: 'auto',
                  maxWidth: '200px',
                  objectFit: 'contain',
                  filter: 'contrast(1.1)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

