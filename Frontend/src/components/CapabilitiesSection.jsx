import React from 'react';
import { CAPABILITIES_METRICS } from '../data/scoriantData';
import { Activity, ShieldCheck, Cpu, Zap } from 'lucide-react';

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="section-wrapper" style={{ padding: '80px 24px' }}>
      <div
        className="card-container capabilities-grid"
        style={{
          borderRadius: '24px',
          padding: '50px',
          background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-subtle) 100%)',
          border: '1px solid var(--border-light)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '48px',
          alignItems: 'center',
        }}
      >
        {/* Left Column Text */}
        <div>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Activity size={14} />
            <span>Empirical Performance Benchmarks</span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(28px, 3.5vw, 38px)',
              fontWeight: 800,
              color: 'var(--text-main)',
              lineHeight: 1.2,
              marginBottom: '16px',
            }}
          >
            Engineered for High-Throughput Mission Demands
          </h2>
          <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '28px' }}>
            Scoriant solutions undergo continuous stress-testing across air-gapped defence networks, edge hardware nodes, and enterprise telemetry feeds to guarantee maximum availability and minimal latency.
          </p>

          <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ background: 'var(--bg-card)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-purple)' }}>&lt; 15ms</div>
              <div style={{ fontSize: '12px', color: 'var(--text-subtle)', fontWeight: 600 }}>Edge Inference Latency</div>
            </div>
            <div style={{ background: 'var(--bg-card)', padding: '16px 20px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
              <div style={{ fontSize: '24px', fontWeight: 800, color: 'var(--primary-blue)' }}>99.99%</div>
              <div style={{ fontSize: '12px', color: 'var(--text-subtle)', fontWeight: 600 }}>Operational Uptime</div>
            </div>
          </div>
        </div>

        {/* Right Column Progress Bars */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {CAPABILITIES_METRICS.map((cap, idx) => (
            <div key={idx}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'baseline' }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text-main)' }}>
                  {cap.label}
                </span>
                <span style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-purple)' }}>
                  {cap.pct}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div
                style={{
                  height: '10px',
                  width: '100%',
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-pill)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${cap.pct}%`,
                    background: 'var(--brand-gradient)',
                    borderRadius: 'var(--radius-pill)',
                    transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>

              <div style={{ fontSize: '12px', color: 'var(--text-subtle)', marginTop: '4px' }}>
                {cap.detail}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .capabilities-grid {
            grid-template-columns: 1fr !important;
            padding: 28px !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
