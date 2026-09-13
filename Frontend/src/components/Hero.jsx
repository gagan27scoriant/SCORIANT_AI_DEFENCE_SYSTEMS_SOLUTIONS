import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const heroItems = [
    {
      id: 'defence-systems',
      category: 'Aerospace & Defence',
      breadcrumb: 'Solutions > Aerospace & Defence',
      radioLabel: 'EDGE AI & COMPUTE POWERHOUSE',
      title: 'Defence Engineering Systems',
      titlePrefix: 'Defence Engineering',
      titleHighlight: 'Systems',
      pillLabel: 'Aerospace & Defence',
      subtitle: 'Edge AI & Compute Powerhouse',
      desc: 'High-performance edge computing and secure storage platform engineered for mounted, mobile, and air-gapped defence environments. Delivers real-time sensor fusion, embedded AI/ML acceleration, and mission-critical reliability for aerospace and tactical command systems.',
      bgImage: '/HERO/DEFENCE_01.jpg',
      videoUrl: null,
    },
    {
      id: 'agentic-ai',
      category: 'Agentic Intelligence',
      breadcrumb: 'Solutions > Agentic AI Systems',
      radioLabel: 'AUTONOMOUS AGENTIC AI & SENSOR FUSION',
      title: 'Agentic AI Systems',
      titlePrefix: 'Agentic AI',
      titleHighlight: 'Systems',
      pillLabel: 'Agentic AI Systems',
      subtitle: 'Autonomous Context-Aware Machine Intelligence',
      desc: 'Autonomous, context-aware AI systems engineered to perceive, reason, plan, and execute across complex operational workflows. Combines multi-modal intelligence and dynamic agent routing with human-in-the-loop oversight for decisive operational speed.',
      bgImage: '/HERO/AGENTIC_AI.jpg',
      videoUrl: null,
    },
    {
      id: '5g-capabilities',
      category: 'Telecom & 5G',
      breadcrumb: 'Solutions > 5G Engineering',
      radioLabel: '5G ENGINEERING & PROTOCOL STACKS',
      title: '5G Engineering',
      titlePrefix: '5G',
      titleHighlight: 'Engineering',
      pillLabel: 'Telecom & 5G',
      subtitle: 'Carrier-Grade RAN & Protocol Stack Architecture',
      desc: 'Carrier-grade 5G architecture and telecommunications engineering spanning the full Radio Access Network stack—from CU and DU to Upper/Lower PHY and custom protocol layers. Engineered for ultra-low latency, high throughput, and mission-critical network deployments.',
      bgImage: '/HERO/5G_01.jpg',
      videoUrl: null,
    },
  ];

  // Automatic slideshow transition every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % heroItems.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroItems.length]);

  const currentItem = heroItems[activeTab];

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0b0f19',
        color: '#f8fafc',
      }}
    >
      {/* Background Image Backdrop */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <img
          key={currentItem.id}
          src={currentItem.bgImage}
          alt={currentItem.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.85,
            filter: 'contrast(1.05) brightness(0.95)',
            transition: 'opacity 0.8s ease',
          }}
        />

        {/* Subtle Overlay Gradients for Text Legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(180deg, rgba(11, 15, 25, 0.35) 0%, rgba(11, 15, 25, 0.15) 50%, rgba(11, 15, 25, 0.5) 100%),
              linear-gradient(90deg, rgba(11, 15, 25, 0.5) 0%, rgba(11, 15, 25, 0.2) 50%, rgba(11, 15, 25, 0.4) 100%)
            `,
          }}
        />
      </div>

      {/* Main Content Area */}
      <div
        className="section-wrapper"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '175px',
          paddingBottom: '60px',
        }}
      >
        <div style={{ maxWidth: '920px', marginTop: '30px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(124, 58, 237, 0.25)',
              border: '1px solid rgba(167, 139, 250, 0.4)',
              color: '#c084fc',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              padding: '5px 16px',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '20px',
            }}
          >
            <Sparkles size={13} />
            <span>{currentItem.pillLabel}</span>
          </div>

          <h1
            key={`title-${currentItem.id}`}
            className="hero-main-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.5px',
              marginBottom: '20px',
              animation: 'fadeInText 0.6s ease',
            }}
          >
            {currentItem.titlePrefix}{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {currentItem.titleHighlight}
            </span>
          </h1>

          <p
            key={`desc-${currentItem.id}`}
            style={{
              fontSize: 'clamp(16px, 1.8vw, 19px)',
              color: '#cbd5e1',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '820px',
              animation: 'fadeInText 0.6s ease',
            }}
          >
            {currentItem.desc}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}>
            <Link
              to="/solutions"
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
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <span>Our Solutions</span>
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                fontWeight: 700,
                fontSize: '15px',
                padding: '14px 32px',
                borderRadius: 'var(--radius-pill)',
                textDecoration: 'none',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.18)';
                e.currentTarget.style.borderColor = '#ffffff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span>About Us</span>
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Centered Slide Navigation Indicator Dots in Next Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              width: '100%',
              marginTop: '40px',
            }}
          >
            {heroItems.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  style={{
                    height: '6px',
                    width: isActive ? '40px' : '12px',
                    borderRadius: '4px',
                    background: isActive ? 'var(--primary-purple)' : 'rgba(255, 255, 255, 0.35)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.4s ease',
                    padding: 0,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInText {
          from {
            opacity: 0.3;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (min-width: 900px) {
          .hero-main-title {
            white-space: nowrap !important;
          }
        }
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
