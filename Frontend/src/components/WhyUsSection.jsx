import React from 'react';
import { WHY_REASONS } from '../data/scoriantData';
import { ShieldCheck, Bot, Wrench, Layers, Sparkles, Zap } from 'lucide-react';

export default function WhyUsSection() {
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
          <span>The Scoriant Difference</span>
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
          Why Scoriant?
        </h2>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
          We stand at the frontier of intelligent engineering — combining deep hardware expertise, advanced AI architectures, and sophisticated data science to create systems that truly perform in the field.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '20px',
        }}
      >
        {WHY_REASONS.map((item, idx) => (
          <div
            key={idx}
            className="card-container"
            style={{
              padding: '22px 24px',
              borderRadius: '14px',
              background: 'var(--bg-card)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
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
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '16.5px',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  lineHeight: 1.25,
                }}
              >
                {item.title}
              </h3>
            </div>

            <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', lineHeight: 1.55 }}>
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
