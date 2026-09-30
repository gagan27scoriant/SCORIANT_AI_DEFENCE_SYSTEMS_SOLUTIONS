import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2, Shield, Zap, Cpu, Server, Globe, FileText, BrainCircuit, Eye, GraduationCap, Layers } from 'lucide-react';
import { useDataContext } from '../context/DataContext';
import DemoModal from '../components/DemoModal';
import SEO from '../components/SEO';
import { buildGraph, getProductSchema, getBreadcrumbSchema, getTopSolutionsItemListSchema, getStartupFAQSchema } from '../utils/seoSchemas';

export default function OurSolutionsPage() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { products } = useDataContext();

  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoProductTitle, setDemoProductTitle] = useState('');

  const selectedSolutionDetail = productId
    ? products.find((p) => p.id === productId)
    : null;

  // Explicit emoji mapping for compact cards
  const EMOJI_MAP = {
    'secure-storage': '🗄️',
    'ai-knowledge-studio': '🧠',
    'document-intelligence': '📄',
    'geospatial-intelligence': '🛰️',
    'smart-surveillance': '📹',
    'gurukula-ai': '🎓',
    'conversational-ai-platform': '🎙️',
    'kavacha-ai': '🛡️',
    'intelligent-fusion': '🔮',
    'logistics-ai': '📦',
  };

  const handleOpenDemo = (productTitle = '') => {
    navigate(`/contact?product=${encodeURIComponent(productTitle)}#send-message-section`, {
      state: {
        product: productTitle,
      },
    });
  };

  const handleSelectSolution = (product) => {
    navigate(`/solutions/${product.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToSolutions = () => {
    navigate('/solutions');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStyledTitle = (title) => {
    if (!title) return null;
    const words = title.split(' ');
    if (words.length <= 1) {
      return (
        <span
          className="gradient-text-clip"
          style={{
            display: 'inline-block',
            backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #38bdf8 100%)',
            backgroundColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: 'transparent',
            WebkitBoxDecorationBreak: 'clone',
            boxDecorationBreak: 'clone',
            verticalAlign: 'baseline',
            whiteSpace: 'nowrap',
          }}
        >
          {title}
        </span>
      );
    }
    const highlightCount = words.length >= 4 ? 2 : 1;
    const prefix = words.slice(0, words.length - highlightCount).join(' ');
    const highlightWords = words.slice(words.length - highlightCount);
    return (
      <>
        {prefix}{' '}
        {highlightWords.map((word, idx) => (
          <React.Fragment key={idx}>
            <span
              className="gradient-text-clip"
              style={{
                display: 'inline-block',
                backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 50%, #38bdf8 100%)',
                backgroundColor: 'transparent',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: 'transparent',
                WebkitBoxDecorationBreak: 'clone',
                boxDecorationBreak: 'clone',
                verticalAlign: 'baseline',
                whiteSpace: 'nowrap',
              }}
            >
              {word}
            </span>
            {idx < highlightWords.length - 1 ? ' ' : ''}
          </React.Fragment>
        ))}
      </>
    );
  };

  // Dedicated Full Product Detail Page View
  if (selectedSolutionDetail) {
    const product = selectedSolutionDetail;
    const emoji = EMOJI_MAP[product.id] || '⚡';

    const productSchema = buildGraph(
      getProductSchema(product),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Solutions', url: '/solutions' },
        { name: product.title, url: `/solutions/${product.id}` }
      ])
    );

    return (
      <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh', paddingTop: '80px' }}>
        <SEO
          title={`${product.title} | Top Products & Best Solutions`}
          description={(product.short || product.detail || '').substring(0, 160)}
          canonical={`/solutions/${product.id}`}
          image={product.image}
          type="product"
          keywords={`Top Products, Best Solutions, ${product.title}, ${product.category}, Secure Storage Box, Top AI Startups, Top 5G Startups`}
          schema={productSchema}
        />

        {/* 1. Solution Hero Section (Title + Tagline + Live Specs Bar) */}
        <section
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '62vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            overflow: 'hidden',
            background: '#0b0f19',
            color: '#f8fafc',
            paddingTop: '70px',
            paddingBottom: '70px',
          }}
        >
          {/* Background Media */}
          <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
            <img
              src={product.image}
              alt={product.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center',
                opacity: 0.85,
                filter: 'contrast(1.05) brightness(0.95)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(180deg, rgba(11, 15, 25, 0.5) 0%, rgba(11, 15, 25, 0.3) 50%, rgba(11, 15, 25, 0.75) 100%),
                  linear-gradient(90deg, rgba(11, 15, 25, 0.65) 0%, rgba(11, 15, 25, 0.25) 50%, rgba(11, 15, 25, 0.55) 100%)
                `,
              }}
            />
          </div>

          <div className="section-wrapper" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
            <div style={{ maxWidth: '960px' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(124, 58, 237, 0.25)',
                  border: '1px solid rgba(167, 139, 250, 0.4)',
                  color: '#c084fc',
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  padding: '6px 18px',
                  borderRadius: 'var(--radius-pill)',
                  marginBottom: '20px',
                }}
              >
                <span style={{ fontSize: '16px' }}>{emoji}</span>
                <span>{product.category} — {product.badge}</span>
              </div>

              {/* Title with Glowing Blue/Purple Gradient Highlight */}
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 54px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.5px',
                  marginBottom: '18px',
                }}
              >
                {renderStyledTitle(product.title)}
              </h1>

              {/* Small Tagline */}
              <p
                style={{
                  fontSize: 'clamp(16px, 1.85vw, 20px)',
                  color: '#cbd5e1',
                  lineHeight: 1.6,
                  marginBottom: '28px',
                  maxWidth: '860px',
                  fontWeight: 500,
                }}
              >
                {product.short}
              </p>

              {/* Hero Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => handleOpenDemo(product.title)}
                  className="btn-primary"
                  style={{
                    fontSize: '15px',
                    padding: '14px 34px',
                  }}
                >
                  <span>Request Demo</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Detailed Overview Section Below Hero */}
        <section
          style={{
            padding: '80px 0 90px 0',
            background: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          <div className="section-wrapper">
            <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--primary-purple)',
                  display: 'inline-block',
                  marginBottom: '12px',
                }}
              >
                SOLUTION OVERVIEW & DEPLOYMENT ARCHITECTURE
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.4vw, 40px)',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  textTransform: 'uppercase',
                  marginBottom: '26px',
                  letterSpacing: '-0.5px',
                }}
              >
                About {product.title}
              </h2>
              <div
                style={{
                  fontSize: '16.5px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.9,
                  whiteSpace: 'pre-line',
                }}
              >
                {product.detail}
              </div>
            </div>
          </div>
        </section>

        {/* 3. Key Engineering Highlights / Feature Matrix */}
        <section style={{ padding: '85px 0', background: 'var(--bg-primary)' }}>
          <div className="section-wrapper">
            <div style={{ textAlign: 'left', maxWidth: '1200px', margin: '0 auto 40px auto' }}>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 800,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: 'var(--primary-purple)',
                  display: 'inline-block',
                  marginBottom: '10px',
                }}
              >
                SYSTEM CAPABILITIES & SPECIFICATIONS
              </span>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(26px, 3.5vw, 38px)',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.5px',
                }}
              >
                Key Engineering Highlights
              </h2>
            </div>

            {/* Bullets Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                gap: '20px',
                maxWidth: '1200px',
                margin: '0 auto 60px auto',
              }}
            >
              {product.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '16px',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    boxShadow: '0 4px 16px rgba(0,0,0,0.02)',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '10px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--primary-purple)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text-main)', lineHeight: 1.6, margin: 0 }}>
                      {bullet}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Banner */}
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                background: 'linear-gradient(135deg, #0b0f19 0%, #1e1b4b 100%)',
                borderRadius: '24px',
                padding: '48px 40px',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '24px',
                    fontWeight: 900,
                    marginBottom: '8px',
                    textTransform: 'uppercase',
                  }}
                >
                  Ready to Deploy {product.title}?
                </h3>
                <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0, maxWidth: '600px' }}>
                  Connect with our defence and AI engineering team to schedule a custom air-gapped demo or deployment consultation.
                </p>
              </div>

              <button
                onClick={() => handleOpenDemo(product.title)}
                className="btn-primary"
                style={{ fontSize: '15px', padding: '14px 32px' }}
              >
                <span>Request Demo Now</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* Demo Modal */}
        <DemoModal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          initialProduct={demoProductTitle}
        />
      </div>
    );
  }

  // Default Our Solutions Page Layout (Clean Hero with Title & Small Tagline Only)
  const catalogSchema = buildGraph(
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Solutions', url: '/solutions' }
    ]),
    getTopSolutionsItemListSchema(products),
    getStartupFAQSchema()
  );

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      <SEO
        title="Top Products & Best Solutions in AI, 5G & Secure Storage"
        description="Discover Scoriant's top products and best solutions, featuring air-gapped secure storage box platforms, carrier-grade 5G protocol stacks, and autonomous AI systems."
        canonical="/solutions"
        keywords="Top Products, Best Solutions, Top Startups of AI, Top 5G Startups, Top Storage Box, Secure Storage Box, Air-Gapped AI, Sovereign Defence Solutions"
        schema={catalogSchema}
      />
      {/* 1. Main Hero Section (Clean Title + Small Tagline Only) */}
      <section
        id="solutions-hero"
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
          paddingTop: '150px',
          paddingBottom: '80px',
        }}
      >
        {/* Background Image Backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <img
            src="/HERO/OUR_SOLUTIONS_PAGE.jpg"
            alt="Scoriant Solutions Hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.85,
              filter: 'contrast(1.05) brightness(0.95)',
            }}
          />

          {/* Dark Overlay Gradients */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(180deg, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.25) 50%, rgba(11, 15, 25, 0.7) 100%),
                linear-gradient(90deg, rgba(11, 15, 25, 0.6) 0%, rgba(11, 15, 25, 0.2) 50%, rgba(11, 15, 25, 0.5) 100%)
              `,
            }}
          />
        </div>

        {/* Hero Content */}
        <div
          className="section-wrapper"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            paddingTop: '30px',
            paddingBottom: '20px',
          }}
        >
          <div style={{ maxWidth: '960px' }}>
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
              <span>SCORIANT AI & DEFENCE SOLUTIONS SUITE</span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(34px, 4.8vw, 56px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
                marginBottom: '16px',
              }}
            >
              Our{' '}
              <span
                className="gradient-text-clip"
                style={{
                  display: 'inline-block',
                  backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                  backgroundColor: 'transparent',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  color: 'transparent',
                  WebkitBoxDecorationBreak: 'clone',
                  boxDecorationBreak: 'clone',
                  verticalAlign: 'baseline',
                  whiteSpace: 'nowrap',
                }}
              >
                Solutions
              </span>
            </h1>
            <p
              style={{
                fontSize: 'clamp(16px, 1.8vw, 19px)',
                color: '#cbd5e1',
                lineHeight: 1.65,
                marginBottom: '0px',
                maxWidth: '780px',
                fontWeight: 450,
              }}
            >
              Enterprise-grade AI platforms, sovereign compute architectures, and air-gapped defence solutions engineered for mission-critical reliability and complete data sovereignty.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Technology Stack / Compact Cards Section */}
      <section
        id="core-tech-stack"
        style={{
          paddingTop: '80px',
          paddingBottom: '110px',
          background: 'var(--bg-primary)',
        }}
      >
        <div className="section-wrapper">
          {/* Section Header */}
          <div style={{ textAlign: 'left', maxWidth: '1280px', margin: '0 auto 48px auto' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(124, 58, 237, 0.1)',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                color: 'var(--primary-purple)',
                fontSize: '12px',
                fontWeight: 800,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                padding: '6px 18px',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '16px',
              }}
            >
              Core Technology Stack
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.2,
                marginBottom: '16px',
                letterSpacing: '-0.5px',
              }}
            >
              Intelligent Infrastructure
            </h2>

            <p
              style={{
                fontSize: 'clamp(15.5px, 1.8vw, 18px)',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: '840px',
              }}
            >
              Explore our enterprise-grade AI platforms designed for security, intelligence, and real-world deployment across government, defence, and enterprise environments.
            </p>
          </div>

          {/* Compact Product Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '24px',
              maxWidth: '1280px',
              margin: '0 auto',
            }}
          >
            {products.map((product) => {
              const emoji = EMOJI_MAP[product.id] || '⚡';

              return (
                <div
                  key={product.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '20px',
                    padding: '24px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: 'var(--shadow-card)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  className="card-container"
                >
                  {/* Top Ambient Line */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)',
                    }}
                  />

                  <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                    {/* Emoji Header */}
                    <div style={{ marginBottom: '16px' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '14px',
                          background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
                          border: '1px solid rgba(124, 58, 237, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                        }}
                      >
                        {emoji}
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '18.5px',
                        fontWeight: 800,
                        color: 'var(--text-main)',
                        marginBottom: '10px',
                        lineHeight: 1.3,
                        letterSpacing: '-0.2px',
                        minHeight: '48px',
                        display: 'flex',
                        alignItems: 'flex-start',
                      }}
                    >
                      {product.title}
                    </h3>

                    {/* Short Description */}
                    <p
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        lineHeight: 1.55,
                        marginBottom: '20px',
                        minHeight: '66px',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {product.short}
                    </p>
                  </div>

                  {/* Card Actions Footer: Single Centered "Know More" Button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      paddingTop: '16px',
                      borderTop: '1px solid var(--border-light)',
                      marginTop: 'auto',
                    }}
                  >
                    <button
                      onClick={() => handleSelectSolution(product)}
                      className="btn-primary"
                      style={{
                        width: '100%',
                        fontSize: '14px',
                        padding: '10px 20px',
                        fontWeight: 700,
                        justifyContent: 'center',
                      }}
                    >
                      <span>Know More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Demo Booking Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        initialProduct={demoProductTitle}
      />
    </div>
  );
}
