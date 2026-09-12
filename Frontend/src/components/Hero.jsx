import React, { useState, useEffect } from 'react';
import { Home, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  const heroItems = [
    {
      id: 'defence-systems',
      category: 'Aerospace & Defense',
      breadcrumb: 'Solutions > Aerospace & Defense',
      radioLabel: 'EDGE AI & COMPUTE POWERHOUSE',
      title: 'Defence Engineering Systems',
      subtitle: 'Edge AI & Compute Powerhouse',
      desc: 'High-performance edge computing and storage platform designed for mounted, mobile, and mission-critical environments. Featuring 144 Intel Xeon cores with NVIDIA L4 / RTX GPUs for AI/ML, computer vision, sensor fusion, and 512 TB scalable storage.',
      bgImage: '/HERO/IMAGE_08.jpg',
      videoUrl: null,
    },
    {
      id: 'agentic-ai',
      category: 'Agentic Intelligence',
      breadcrumb: 'Solutions > Agentic AI Systems',
      radioLabel: 'AUTONOMOUS AGENTIC AI & SENSOR FUSION',
      title: 'Agentic AI Systems',
      subtitle: 'Autonomous Context-Aware Machine Intelligence',
      desc: 'Advanced autonomous AI systems that perceive, reason, plan, and act across complex operational environments. Scoriant integrates human expertise with machine intelligence for faster, more informed decision-making across tactical scenarios.',
      bgImage: '/HERO/IMAGE_01.jpg',
      videoUrl: null,
    },
    {
      id: '5g-capabilities',
      category: 'Telecom & 5G',
      breadcrumb: 'Solutions > 5G Engineering',
      radioLabel: '5G ENGINEERING & PROTOCOL STACKS',
      title: '5G Engineering',
      subtitle: 'Carrier-Grade RAN & Protocol Stack Architecture',
      desc: 'Comprehensive 5G and engineering expertise spanning the radio access network stack—from CU and DU to Upper/Lower PHY and protocol layers. Engineered for high throughput, ultra-low latency, and mission-critical reliability.',
      bgImage: '/PRODUCT_PREVIEW_IMAGE/GEO_SPATIAL_INTELLIGENCE.jpg',
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
            opacity: 0.75,
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
              linear-gradient(180deg, rgba(11, 15, 25, 0.5) 0%, rgba(11, 15, 25, 0.25) 50%, rgba(11, 15, 25, 0.7) 100%),
              linear-gradient(90deg, rgba(11, 15, 25, 0.75) 0%, rgba(11, 15, 25, 0.4) 50%, rgba(11, 15, 25, 0.6) 100%)
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
              background: 'rgba(124, 58, 237, 0.2)',
              border: '1px solid rgba(167, 139, 250, 0.35)',
              color: '#c084fc',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '1.2px',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '18px',
            }}
          >
            <Sparkles size={13} />
            <span>Scoriant Defense & AI Architecture</span>
          </div>

          <h1
            key={`title-${currentItem.id}`}
            className="hero-main-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(30px, 4.2vw, 50px)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-1px',
              marginBottom: '16px',
              animation: 'fadeInText 0.6s ease',
            }}
          >
            {currentItem.title}
          </h1>

          <p
            key={`desc-${currentItem.id}`}
            style={{
              fontSize: 'clamp(15.5px, 1.8vw, 18px)',
              color: '#cbd5e1',
              lineHeight: 1.65,
              marginBottom: '32px',
              maxWidth: '700px',
              animation: 'fadeInText 0.6s ease',
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
