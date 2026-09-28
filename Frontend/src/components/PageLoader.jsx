import React from 'react';

/**
 * Light-themed, ultra-clean defense-grade page loading indicator.
 * Appears during route transitions and lazy component hydration.
 */
export default function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page content"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc',
        zIndex: 99999,
        gap: '22px',
      }}
    >
      {/* Top indeterminate accent bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#e2e8f0',
          overflow: 'hidden',
          zIndex: 100000,
        }}
      >
        <div
          style={{
            width: '40%',
            height: '100%',
            background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #06b6d4)',
            boxShadow: '0 0 10px rgba(124, 58, 237, 0.45)',
            animation: 'scoriantTopBar 1.2s infinite ease-in-out',
          }}
        />
      </div>

      {/* Pulsing Central Scoriant Emblem in Light Card */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '18px',
        }}
      >
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '24px',
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 16px 40px -4px rgba(124, 58, 237, 0.22), 0 4px 14px rgba(15, 23, 42, 0.06)',
            animation: 'scoriantPulseLight 1.8s infinite ease-in-out',
          }}
        >
          <img
            src="/SCORIANT_LOGO_NAVBAR.png"
            alt="Scoriant Emblem"
            style={{ width: '64px', height: '64px', objectFit: 'contain' }}
          />
        </div>

        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '20px',
              fontWeight: 900,
              letterSpacing: '3px',
              color: '#0f172a',
              textTransform: 'uppercase',
            }}
          >
            SCORIANT
          </div>
          <div
            style={{
              fontSize: '12.5px',
              fontWeight: 700,
              letterSpacing: '2px',
              color: '#7c3aed',
              marginTop: '6px',
              textTransform: 'uppercase',
            }}
          >
            INITIALIZING SECURE SYSTEMS...
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scoriantTopBar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(250%); }
        }
        @keyframes scoriantPulseLight {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 12px 32px -4px rgba(124, 58, 237, 0.2), 0 4px 12px rgba(15, 23, 42, 0.05);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 16px 40px -4px rgba(124, 58, 237, 0.35), 0 8px 16px rgba(15, 23, 42, 0.08);
          }
        }
      `}</style>
    </div>
  );
}
