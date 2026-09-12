import React, { useState } from 'react';
import { Home, ChevronRight, Circle, Disc, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const heroItems = [
    {
      id: 'defence-systems',
      category: 'Aerospace & Defense',
      breadcrumb: 'Solutions > Aerospace & Defense',
      radioLabel: 'DEFENCE ENGINEERING & AIR-GAPPED SYSTEMS',
      title: 'Defence Engineering Systems',
      subtitle: 'Rugged Edge AI & Mission-Critical Infrastructure',
      desc: 'Scoriant delivers enterprise-grade infrastructure engineered for secure, scalable, and mission-critical operations across cloud, edge, on-premise, and air-gapped defense environments. Built for extreme operational readiness without internet dependency.',
      bgImage: '/PRODUCT_PREVIEW_IMAGE/SECURE_STORAGE.jpg',
      videoUrl: '/HERO.mp4',
    },
    {
      id: 'agentic-ai',
      category: 'Agentic Intelligence',
      breadcrumb: 'Solutions > Agentic AI Systems',
      radioLabel: 'AUTONOMOUS AGENTIC AI & SENSOR FUSION',
      title: 'Agentic AI Systems',
      subtitle: 'Autonomous Context-Aware Machine Intelligence',
      desc: 'Advanced autonomous AI systems that perceive, reason, plan, and act across complex operational environments. Scoriant integrates human expertise with machine intelligence for faster, more informed decision-making across tactical scenarios.',
      bgImage: '/PRODUCT_PREVIEW_IMAGE/AI_KNOWLEDGE_STUDIO.jpg',
      videoUrl: null,
    },
    {
      id: 'geospatial-intelligence',
      category: 'Data & Geospatial',
      breadcrumb: 'Solutions > Satellite & Geospatial Intelligence',
      radioLabel: 'GEO-SPATIAL SATELLITE & SMART SURVEILLANCE',
      title: 'Data Science & Intelligence Platforms',
      subtitle: 'Multi-Source Sensor & Satellite Analytics',
      desc: 'Unified data platforms transforming information from satellite imagery, sensors, CCTV feeds, and documents into actionable operational intelligence at scale with pixel-level deep learning change detection.',
      bgImage: '/PRODUCT_PREVIEW_IMAGE/GEO_SPATIAL_INTELLIGENCE.jpg',
      videoUrl: null,
    },
  ];

  const currentItem = heroItems[activeTab];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '85vh',
        maxHeight: '920px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        background: '#0b0f19',
        color: '#f8fafc',
      }}
    >
      {/* Background Image / Video Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {currentItem.videoUrl ? (
          <video
            key={currentItem.id}
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.35,
            }}
          >
            <source src={currentItem.videoUrl} type="video/mp4" />
          </video>
        ) : (
          <img
            src={currentItem.bgImage}
            alt={currentItem.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.3,
              filter: 'contrast(1.1)',
              transition: 'opacity 0.6s ease',
            }}
          />
        )}

        {/* Dark Overlay Gradients */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(180deg, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.5) 40%, rgba(11, 15, 25, 0.95) 100%),
              linear-gradient(90deg, rgba(11, 15, 25, 0.9) 0%, rgba(11, 15, 25, 0.65) 50%, rgba(11, 15, 25, 0.85) 100%)
            `,
          }}
        />
      </div>

      {/* Top Floating Pill Breadcrumb */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          paddingTop: '110px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(17, 24, 39, 0.85)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            color: '#f8fafc',
            padding: '7px 20px',
            borderRadius: 'var(--radius-pill)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(12px)',
            fontSize: '13px',
            fontWeight: 600,
          }}
        >
          <Home size={14} color="#a78bfa" />
          <ChevronRight size={13} color="#64748b" />
          <span>{currentItem.breadcrumb}</span>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className="section-wrapper"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingBottom: '70px',
          paddingTop: '40px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr',
            gap: '60px',
            alignItems: 'end',
          }}
          className="tsecond-hero-grid"
        >
          {/* Left Column */}
          <div style={{ maxWidth: '640px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(124, 58, 237, 0.2)',
                border: '1px solid rgba(167, 139, 250, 0.35)',
                color: '#c084fc',
                fontSize: '12px',
                fontWeight: 700,
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                padding: '4px 14px',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '16px',
              }}
            >
              <Sparkles size={13} />
              <span>Scoriant Defense & AI Architecture</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 4.5vw, 54px)',
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.12,
                letterSpacing: '-1px',
                marginBottom: '16px',
              }}
            >
              {currentItem.title}
            </h1>

            <p
              style={{
                fontSize: 'clamp(15px, 1.8vw, 17px)',
                color: '#94a3b8',
                lineHeight: 1.65,
                marginBottom: '32px',
              }}
            >
              {currentItem.desc}
            </p>

            {/* CTA */}
            <div>
              <a
                href="#tech-stack"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--brand-gradient)',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '15px',
                  padding: '14px 32px',
                  borderRadius: 'var(--radius-pill)',
                  textDecoration: 'none',
                  boxShadow: 'var(--brand-glow)',
                  transition: 'all 0.25s ease',
                }}
              >
                <span>Explore Technology Stack</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: Floating Selector Card */}
          <div
            style={{
              background: '#131b2e',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: '#a78bfa',
                marginBottom: '4px',
              }}
            >
              Select Operational Capability
            </div>

            {heroItems.map((item, idx) => {
              const isSelected = activeTab === idx;
              return (
                <div
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    background: isSelected
                      ? 'rgba(124, 58, 237, 0.22)'
                      : 'rgba(255, 255, 255, 0.03)',
                    border: isSelected
                      ? '1px solid rgba(167, 139, 250, 0.4)'
                      : '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    }
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isSelected ? (
                      <Disc size={20} color="#c084fc" />
                    ) : (
                      <Circle size={20} color="#64748b" />
                    )}
                  </div>

                  <span
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      letterSpacing: '0.6px',
                      color: isSelected ? '#ffffff' : '#94a3b8',
                      lineHeight: 1.3,
                    }}
                  >
                    {item.radioLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tsecond-hero-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </section>
  );
}
