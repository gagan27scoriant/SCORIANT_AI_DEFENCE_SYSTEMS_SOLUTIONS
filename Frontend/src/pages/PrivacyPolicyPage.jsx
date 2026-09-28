import React, { useState } from 'react';
import SEO from '../components/SEO';
import {
  ShieldCheck,
  Lock,
  Layers,
  FileText,
  Plus,
  Minus,
} from 'lucide-react';

const POLICY_SECTIONS = [
  {
    id: 'commitment',
    icon: ShieldCheck,
    title: '1. Our Sovereign Privacy Commitment',
    subtitle: 'Absolute data isolation, zero commercial monetization',
    content: (
      <>
        <p style={{ margin: '0 0 10px 0' }}>
          Scoriant AI Defence Systems Solutions designs and deploys mission-critical edge data systems, agentic AI platforms, and defence-grade air-gapped infrastructure. We operate under strict sovereign security and integrity standards.
        </p>
        <p style={{ margin: 0 }}>
          <strong>We never sell, rent, monetize, or broker personal identity or organizational intelligence to commercial third parties, brokers, or advertising networks.</strong> Your interactions with our digital platforms remain sovereign and confidential.
        </p>
      </>
    ),
  },
  {
    id: 'cookies',
    icon: Layers,
    title: '2. How We Use Cookies & Local Storage',
    subtitle: 'Transparent purpose limitation: essential operations vs. anonymous telemetry',
    content: (
      <>
        <p style={{ margin: '0 0 12px 0' }}>
          Cookies are minimal data fragments stored locally in your browser to maintain functional security states:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '12px 16px',
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
              • Essential Security & Operational Cookies (Always Active)
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
              Required for core page navigation, cryptographic session gates, and remembering your consent status (<code>scoriant_cookie_consent</code>).
            </div>
          </div>

          <div
            style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '12px 16px',
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>
              • Anonymous Performance Telemetry (Optional)
            </div>
            <div style={{ fontSize: '13.5px', color: 'var(--text-muted)' }}>
              Aggregated, privacy-preserving latency diagnostics to measure network throughput across edge nodes. Contains no personal tracking or cross-site profiling.
            </div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'control',
    icon: Lock,
    title: '3. Your Consent & Autonomy Controls',
    subtitle: 'Immediate rejection via the "✕" button or browser settings',
    content: (
      <>
        <p style={{ margin: '0 0 10px 0' }}>
          You possess full control over non-essential cookies. You can accept all cookies with the <strong>"Accept All"</strong> button, or immediately reject all non-essential cookies by clicking the <strong>"✕"</strong> button on the cookie consent banner.
        </p>
        <p style={{ margin: 0 }}>
          You may also clear, block, or delete cookies at any time through your browser's privacy settings without disrupting public access to Scoriant's defence systems briefing or documentation.
        </p>
      </>
    ),
  },
  {
    id: 'compliance',
    icon: FileText,
    title: '4. Legal Alignment (DPDP Act 2023 & GDPR Standards)',
    subtitle: 'Statutory compliance with Indian and international data protection laws',
    content: (
      <>
        <p style={{ margin: '0 0 10px 0' }}>
          Our data handling processes are structured in compliance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023 (India)</strong> and harmonized with the principles of the <strong>General Data Protection Regulation (GDPR)</strong>.
        </p>
        <p style={{ margin: 0 }}>
          Data collected through contact inquiries, job applications, or demo briefings is processed solely for the legitimate operational purpose for which it was submitted, with strict retention limitation schedules.
        </p>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  // All cards open by default, expandable/collapsible like Why Scoriant section
  const [expandedCards, setExpandedCards] = useState({
    commitment: true,
    cookies: true,
    control: true,
    compliance: true,
  });

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div
      style={{
        background: 'var(--bg-primary)',
        minHeight: '100vh',
        color: 'var(--text-main)',
        paddingTop: '60px',
        paddingBottom: '90px',
      }}
    >
      <SEO
        title="Privacy & Cookie Policy | Scoriant AI Defence Systems"
        description="Learn how Scoriant AI Defence Systems Solutions protects sovereign data, maintains DPDP Act 2023 compliance, and handles cookies."
      />

      {/* Top Header Section — Left-aligned matching single-column width */}
      <div style={{ textAlign: 'left', maxWidth: '820px', margin: '0 auto 40px auto', padding: '0 24px' }}>
        <div className="pill-badge" style={{ marginBottom: '14px' }}>
          <span>Data Sovereignty & Transparency</span>
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(26px, 3.5vw, 38px)',
            fontWeight: 900,
            color: 'var(--text-main)',
            lineHeight: 1.15,
            marginBottom: '14px',
            letterSpacing: '0.8px',
            textTransform: 'uppercase',
          }}
        >
          PRIVACY & COOKIE POLICY
        </h1>
        <p style={{ fontSize: '15.5px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
          Scoriant is committed to sovereign defence data security, air-gapped infrastructure standards, and transparent cookie governance in alignment with the Digital Personal Data Protection (DPDP) Act 2023.
        </p>
      </div>

      {/* Single-Column Stacked Cards — Styled similar to Why Scoriant section cards */}
      <div
        style={{
          maxWidth: '820px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        {POLICY_SECTIONS.map((item) => {
          const isExpanded = !!expandedCards[item.id];
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className="card-container"
              onClick={() => toggleCard(item.id)}
              style={{
                padding: '22px 26px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-card)',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.boxShadow = 'var(--shadow-card)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              {/* Header Row */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flex: 1 }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: '#eef2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <IconComponent size={22} color="var(--primary-purple)" />
                  </div>

                  <div>
                    <h2
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '17px',
                        fontWeight: 700,
                        color: 'var(--text-main)',
                        lineHeight: 1.25,
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h2>
                    <div style={{ fontSize: '12.5px', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                {/* Small + / - Toggle Button */}
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: '#f8fafc',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-purple)',
                    flexShrink: 0,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isExpanded ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </div>

              {/* Collapsible / Expandable Content */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: '16px',
                    paddingTop: '16px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '14.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                    cursor: 'default',
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {item.content}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
