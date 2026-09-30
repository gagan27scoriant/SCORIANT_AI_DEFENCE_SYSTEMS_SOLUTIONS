import React, { useState } from 'react';
import { WHY_REASONS } from '../data/scoriantData';
import { ShieldCheck, Bot, Wrench, Layers, Sparkles, Zap, Plus, Minus } from 'lucide-react';

export default function WhyUsSection() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (idx) => {
    setExpandedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'ShieldCheck': return <ShieldCheck size={22} color="var(--primary-purple)" />;
      case 'Bot': return <Bot size={22} color="var(--primary-purple)" />;
      case 'Wrench': return <Wrench size={22} color="var(--primary-purple)" />;
      case 'Layers': return <Layers size={22} color="var(--primary-purple)" />;
      case 'Sparkles': return <Sparkles size={22} color="var(--primary-purple)" />;
      case 'Zap': return <Zap size={22} color="var(--primary-purple)" />;
      default: return <ShieldCheck size={22} color="var(--primary-purple)" />;
    }
  };

  return (
    <section id="why-scoriant" className="section-wrapper" style={{ padding: '70px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
        <div className="pill-badge" style={{ marginBottom: '12px' }}>
          <span>Top Deep-Tech Startup • AI, 5G & Secure Storage Innovation</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 900,
            color: 'var(--text-main)',
            lineHeight: 1.15,
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}
        >
          Why Scoriant for Sovereign AI & 5G Solutions?
        </h2>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          Recognized among the top deep-tech startups delivering sovereign AI platforms, carrier-grade 5G protocol stacks, and air-gapped secure storage box architectures engineered for extreme mission-critical performance.
        </p>
      </div>

      <div
        className="why-us-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '20px',
        }}
      >
        {WHY_REASONS.map((item, idx) => {
          const isExpanded = !!expandedCards[idx];
          return (
            <div
              key={idx}
              className={`card-container why-us-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleCard(idx)}
              style={{
                padding: '20px 24px',
                borderRadius: '14px',
                background: 'var(--bg-card)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                cursor: 'pointer',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1 }}>
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: '#eef2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {getIcon(item.icon)}
                  </div>

                  <h3
                    className="why-us-card-title"
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '16.5px',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      lineHeight: 1.25,
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>

                {/* Small + / - Mark on Top Right */}
                <div
                  className="plus-toggle-btn"
                  style={{
                    background: 'transparent',
                    color: 'var(--primary-purple)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                  }}
                >
                  {isExpanded ? <Minus size={16} color="var(--primary-purple)" /> : <Plus size={16} color="var(--primary-purple)" />}
                </div>
              </div>

              {/* Description Info Content */}
              <div
                className="why-us-card-body"
                style={{
                  marginTop: isExpanded ? '14px' : '0px',
                  maxHeight: isExpanded ? '300px' : '0px',
                  opacity: isExpanded ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        /* Desktop (> 767px): show info by default, hide toggle button */
        @media (min-width: 768px) {
          .why-us-card-body {
            max-height: 300px !important;
            opacity: 1 !important;
            margin-top: 14px !important;
          }
          .plus-toggle-btn {
            display: none !important;
          }
          .why-us-card {
            cursor: default !important;
          }
        }

        /* Mobile Screens (<= 767px): Enclosed cards with refined title typography */
        @media (max-width: 767px) {
          .why-us-card {
            padding: 14px 16px !important;
            border: 1px solid var(--border-light);
          }
          .why-us-card-title {
            font-size: 15px !important;
            font-weight: 600 !important;
            letter-spacing: -0.2px !important;
          }
          .why-us-card.expanded {
            border-color: var(--primary-purple);
            box-shadow: 0 6px 20px -6px rgba(124, 58, 237, 0.12);
          }
        }
      `}</style>
    </section>
  );
}
