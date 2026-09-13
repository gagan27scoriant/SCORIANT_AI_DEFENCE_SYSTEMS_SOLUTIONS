import React from 'react';
import { useDataContext } from '../context/DataContext';
import { Shield, Cpu, Database, CheckCircle2, Radio, Wifi } from 'lucide-react';

export default function PillarsSection() {
  const { pillars } = useDataContext();

  const getIcon = (name) => {
    switch (name) {
      case 'Shield': return <Shield size={22} color="#ffffff" />;
      case 'Cpu': return <Cpu size={22} color="#ffffff" />;
      case 'Radio': return <Radio size={22} color="#ffffff" />;
      case 'Wifi': return <Wifi size={22} color="#ffffff" />;
      case 'Database': return <Database size={22} color="#ffffff" />;
      default: return <Cpu size={22} color="#ffffff" />;
    }
  };

  return (
    <section id="expertise" style={{ background: 'var(--bg-subtle)', padding: '75px 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="section-wrapper">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '20px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <div>
            <div className="pill-badge" style={{ marginBottom: '10px' }}>
              <span>Our Core Pillars</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 900,
                color: 'var(--text-main)',
                letterSpacing: '-0.5px',
                marginBottom: '8px',
              }}
            >
              OUR EXPERTISE SECTORS
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '15.5px', maxWidth: '680px', lineHeight: 1.55 }}>
              Three tightly integrated practice domains designed for secure deployment, rapid operationalization, and long-term lifecycle reliability.
            </p>
          </div>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 800,
              color: 'var(--primary-purple)',
              background: 'rgba(124, 58, 237, 0.08)',
              border: '1px solid rgba(124, 58, 237, 0.2)',
              padding: '6px 16px',
              borderRadius: 'var(--radius-pill)',
            }}
          >
            Field-Ready Engineering
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
          }}
        >
          {pillars.map((pillar, i) => (
            <div
              key={pillar.id}
              className="card-container"
              style={{
                borderRadius: '16px',
                padding: '24px 26px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                background: 'var(--bg-card)',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--brand-gradient)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'var(--brand-glow)',
                    }}
                  >
                    {getIcon(pillar.icon)}
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      fontSize: '32px',
                      color: 'var(--text-subtle)',
                      opacity: 0.25,
                    }}
                  >
                    0{i + 1}
                  </span>
                </div>

                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '1.2px',
                    textTransform: 'uppercase',
                    color: 'var(--primary-purple)',
                    display: 'block',
                    marginBottom: '6px',
                  }}
                >
                  {pillar.tag}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '19px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '10px',
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </h3>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {pillar.desc}
                </p>
              </div>

              <div
                className="responsive-card-bullets"
                style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {pillar.bullets.map((bullet, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={14} color="var(--primary-purple)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: 'var(--text-main)', fontWeight: 500 }}>
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* Full expertise info and bullets displayed at all viewports */
        .responsive-card-bullets {
          display: flex !important;
          opacity: 1 !important;
          max-height: none !important;
        }
      `}</style>
    </section>
  );
}
