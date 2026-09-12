import React, { useState, useRef } from 'react';
import { PRODUCTS_DATA } from '../data/scoriantData';
import DemoModal from './DemoModal';
import {
  Cpu,
  Server,
  BrainCircuit,
  FileText,
  Globe,
  Eye,
  GraduationCap,
  Code,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  X,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';

export default function TechStackSection() {
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const scrollTrackRef = useRef(null);

  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'Server':
        return <Server size={20} color="#a78bfa" />;
      case 'BrainCircuit':
        return <BrainCircuit size={20} color="#a78bfa" />;
      case 'FileText':
        return <FileText size={20} color="#a78bfa" />;
      case 'Globe':
        return <Globe size={20} color="#a78bfa" />;
      case 'Eye':
        return <Eye size={20} color="#a78bfa" />;
      case 'GraduationCap':
        return <GraduationCap size={20} color="#a78bfa" />;
      default:
        return <Cpu size={20} color="#a78bfa" />;
    }
  };

  const handleScroll = (direction) => {
    if (scrollTrackRef.current) {
      const scrollAmount = direction === 'left' ? -410 : 410;
      scrollTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="tech-stack"
      style={{
        background: '#0b0f19',
        color: '#f8fafc',
        padding: '80px 0',
        position: 'relative',
        overflow: 'hidden',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background glow accents */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '5%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, rgba(0,0,0,0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-wrapper" style={{ position: 'relative', zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ marginBottom: '36px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div
                className="pill-badge"
                style={{
                  background: 'rgba(124, 58, 237, 0.2)',
                  color: '#c084fc',
                  borderColor: 'rgba(167, 139, 250, 0.35)',
                  marginBottom: '12px',
                }}
              >
                <Code size={14} />
                <span>Intelligence Suite & Core Products</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 40px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '10px',
                  letterSpacing: '-0.5px',
                }}
              >
                Our Intelligence Products
              </h2>
              <p style={{ fontSize: '15.5px', color: '#94a3b8', maxWidth: '680px', lineHeight: 1.6 }}>
                Enterprise-grade AI platforms designed for air-gapped security, real-time analytics, and high-performance field deployment across defense and government organizations.
              </p>
            </div>

            {/* Horizontal Scroll Arrows */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <button
                onClick={() => handleScroll('left')}
                aria-label="Scroll Left"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.5)';
                  e.currentTarget.style.color = '#c084fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#f8fafc';
                }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => handleScroll('right')}
                aria-label="Scroll Right"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#f8fafc',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(124, 58, 237, 0.25)';
                  e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.5)';
                  e.currentTarget.style.color = '#c084fc';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
                  e.currentTarget.style.color = '#f8fafc';
                }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Single Row Products Horizontal Track */}
        <div
          ref={scrollTrackRef}
          style={{
            display: 'flex',
            gap: '24px',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingBottom: '20px',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(124, 58, 237, 0.4) #111827',
          }}
        >
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="product-card"
              style={{
                flex: '0 0 380px',
                scrollSnapAlign: 'start',
                background: '#131b2e',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.borderColor = 'rgba(167, 139, 250, 0.45)';
                e.currentTarget.style.boxShadow =
                  '0 20px 40px rgba(124, 58, 237, 0.25)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
              }}
            >
              <div>
                {/* Card Body */}
                <div style={{ padding: '26px 26px' }}>
                  {/* Category & Icon Header */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      marginBottom: '12px',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(124, 58, 237, 0.2)',
                        border: '1px solid rgba(167, 139, 250, 0.35)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getProductIcon(product.icon)}
                    </div>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: '#a78bfa',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                      }}
                    >
                      {product.category}
                    </span>
                  </div>

                  {/* Product Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '19px',
                      fontWeight: 800,
                      color: '#ffffff',
                      marginBottom: '8px',
                      lineHeight: 1.3,
                    }}
                  >
                    {product.title}
                  </h3>

                  {/* Product Summary */}
                  <p
                    style={{
                      fontSize: '13.5px',
                      color: '#94a3b8',
                      lineHeight: 1.55,
                      marginBottom: '18px',
                    }}
                  >
                    {product.short}
                  </p>

                  {/* Key Capability Bullets */}
                  <div
                    className="responsive-product-bullets"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '12px 14px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    {product.bullets.slice(0, 3).map((b, i) => (
                      <div
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          fontSize: '12.5px',
                          color: '#cbd5e1',
                          fontWeight: 500,
                        }}
                      >
                        <CheckCircle2
                          size={14}
                          color="#a78bfa"
                          style={{ flexShrink: 0 }}
                        />
                        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {b}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Full product info and bullets displayed at all viewports */
        .responsive-product-bullets {
          display: flex !important;
          opacity: 1 !important;
          max-height: none !important;
        }
      `}</style>

      {/* In-depth Product Specifications Modal */}
      {activeModalProduct && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2200,
            background: 'rgba(9, 13, 22, 0.85)',
            backdropFilter: 'blur(12px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            style={{
              background: '#131b2e',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              borderRadius: '24px',
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
              color: '#f8fafc',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Image Header */}
            <div style={{ position: 'relative', height: '250px', background: '#0b0f19' }}>
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(180deg, rgba(19, 27, 46, 0.2) 0%, rgba(19, 27, 46, 0.95) 100%)',
                }}
              />
              <button
                onClick={() => setActiveModalProduct(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#f8fafc',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '32px 36px' }}>
              <div
                className="pill-badge"
                style={{
                  background: 'rgba(124, 58, 237, 0.2)',
                  color: '#c084fc',
                  borderColor: 'rgba(167, 139, 250, 0.35)',
                  marginBottom: '12px',
                }}
              >
                <span>{activeModalProduct.category}</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '26px',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                {activeModalProduct.title}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: '#94a3b8',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line',
                  marginBottom: '28px',
                }}
              >
                {activeModalProduct.detail}
              </p>

              {/* Technical Specifications Grid */}
              {activeModalProduct.specs && (
                <div style={{ marginBottom: '28px' }}>
                  <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                    Empirical Technical Specs
                  </h4>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '12px',
                    }}
                  >
                    {activeModalProduct.specs.map((spec, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          padding: '12px 16px',
                          borderRadius: '12px',
                        }}
                      >
                        <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 700, textTransform: 'uppercase' }}>
                          {spec.label}
                        </div>
                        <div style={{ fontSize: '14px', color: '#a78bfa', fontWeight: 800, marginTop: '4px' }}>
                          {spec.value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                Key Technical Capabilities & Features
              </h4>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '12px',
                  marginBottom: '32px',
                }}
              >
                {activeModalProduct.bullets.map((b, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '10px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="#a78bfa"
                      style={{ marginTop: '2px', flexShrink: 0 }}
                    />
                    <span style={{ fontSize: '13.5px', fontWeight: 500, color: '#cbd5e1' }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveModalProduct(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: '#f8fafc',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '10px 22px',
                    borderRadius: 'var(--radius-pill)',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalProduct(null);
                    setIsDemoModalOpen(true);
                  }}
                  className="btn-primary"
                  style={{ padding: '10px 24px' }}
                >
                  Book Demo for {activeModalProduct.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </section>
  );
}

