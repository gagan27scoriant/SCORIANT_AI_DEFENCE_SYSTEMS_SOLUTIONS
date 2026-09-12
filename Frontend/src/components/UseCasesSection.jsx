import React, { useState } from 'react';
import { REAL_WORLD_USE_CASES } from '../data/scoriantData';

export default function UseCasesSection() {
  const [activeUseCase, setActiveUseCase] = useState(0);

  const useCase = REAL_WORLD_USE_CASES[activeUseCase];

  return (
    <section
      id="use-cases"
      style={{
        background: 'var(--bg-subtle)',
        padding: '75px 0',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
      }}
    >
      <div className="section-wrapper">
        {/* Section Header */}
        <div style={{ marginBottom: '32px' }}>
          <div className="pill-badge" style={{ marginBottom: '12px' }}>
            <span>Deployment Proof Points</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(26px, 3.5vw, 38px)',
              fontWeight: 900,
              color: 'var(--text-main)',
              lineHeight: 1.15,
              marginBottom: '12px',
              letterSpacing: '-0.5px',
            }}
          >
            Real-World Use Cases
          </h2>
          <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', maxWidth: '640px', lineHeight: 1.55 }}>
            Proven deployment architectures solving complex challenges across air-gapped defense networks, smart factories, enterprise document intelligence, and satellite monitoring.
          </p>
        </div>

        {/* Tab Selector */}
        <div
          style={{
            display: 'flex',
            gap: '10px',
            overflowX: 'auto',
            paddingBottom: '14px',
            marginBottom: '28px',
          }}
        >
          {REAL_WORLD_USE_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveUseCase(idx)}
              style={{
                padding: '10px 20px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '13.5px',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                border: activeUseCase === idx ? 'none' : '1px solid var(--border-light)',
                background: activeUseCase === idx ? 'var(--brand-gradient)' : 'var(--bg-card)',
                color: activeUseCase === idx ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer',
                boxShadow: activeUseCase === idx ? 'var(--brand-glow)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              {item.tag}
            </button>
          ))}
        </div>

        {/* Use Case Spotlight Card */}
        <div
          className="card-container use-case-grid"
          style={{
            borderRadius: '18px',
            padding: '28px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            background: 'var(--bg-card)',
          }}
        >
          {/* Left Text */}
          <div>
            <div
              style={{
                fontSize: '11.5px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--primary-purple)',
                marginBottom: '8px',
              }}
            >
              {useCase.tag}
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 800,
                color: 'var(--text-main)',
                lineHeight: 1.25,
                marginBottom: '10px',
              }}
            >
              {useCase.title}
            </h3>

            <h4
              style={{
                fontSize: '15px',
                fontWeight: 600,
                color: 'var(--text-subtle)',
                marginBottom: '16px',
              }}
            >
              {useCase.subtitle}
            </h4>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                marginBottom: '24px',
              }}
            >
              {useCase.desc}
            </p>

            {/* Verified Metrics Chips */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {useCase.metrics.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-light)',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--primary-purple)' }}>
                    {m}
                  </span>
                  <span style={{ fontSize: '10.5px', color: 'var(--text-subtle)', fontWeight: 600 }}>
                    Verified Metric
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Media Frame (Widescreen 16:9 aspect ratio) */}
          <div
            style={{
              position: 'relative',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0,0,0,0.12)',
              border: '1px solid var(--border-light)',
              aspectRatio: '16 / 9',
              background: '#f8fafc',
            }}
          >
            <img
              src={useCase.image}
              alt={useCase.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '14px',
                left: '14px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                color: '#0f172a',
                padding: '4px 12px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '11px',
                fontWeight: 700,
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
              }}
            >
              Enterprise Deployment
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .use-case-grid {
            grid-template-columns: 1fr !important;
            padding: 20px !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
