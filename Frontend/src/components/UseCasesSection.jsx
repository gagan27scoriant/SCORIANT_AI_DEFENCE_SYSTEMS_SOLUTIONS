import React, { useState, useEffect } from 'react';
import { useDataContext } from '../context/DataContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function UseCasesSection() {
  const { useCases } = useDataContext();
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Automatic slideshow transition every 7 seconds
  useEffect(() => {
    if (!useCases || useCases.length === 0) return;
    const timer = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % useCases.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [useCases]);

  const handlePrev = () => {
    if (!useCases || useCases.length === 0) return;
    setActiveUseCase((prev) => (prev === 0 ? useCases.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!useCases || useCases.length === 0) return;
    setActiveUseCase((prev) => (prev + 1) % useCases.length);
  };

  const useCase = useCases[activeUseCase] || useCases[0];

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

          {/* Subtitle & Far Right Forward & Backward Buttons */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', maxWidth: '640px', lineHeight: 1.55, margin: 0 }}>
              Proven deployment architectures solving complex challenges across air-gapped defence networks, smart factories, enterprise document intelligence, and satellite monitoring.
            </p>

            {/* Forward & Backward Controls on Far Right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: 'auto' }}>
              <button
                onClick={handlePrev}
                aria-label="Previous Use Case"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-purple)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Use Case"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary-purple)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)';
                  e.currentTarget.style.color = 'var(--text-main)';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Use Case Spotlight Card */}
        <div
          key={useCase.id}
          className="card-container use-case-grid"
          style={{
            borderRadius: '18px',
            padding: '28px 32px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'center',
            background: 'var(--bg-card)',
            animation: 'fadeInText 0.6s ease',
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
          </div>
        </div>

        {/* Slide Indicator Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '28px' }}>
          {(useCases || []).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveUseCase(idx)}
              aria-label={`Go to use case ${idx + 1}`}
              style={{
                height: '6px',
                width: activeUseCase === idx ? '36px' : '10px',
                borderRadius: '4px',
                background: activeUseCase === idx ? 'var(--primary-purple)' : 'var(--border-light)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInText {
          from { opacity: 0.3; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
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
