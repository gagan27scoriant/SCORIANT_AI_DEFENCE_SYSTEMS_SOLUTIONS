import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CONSENT_KEY = 'scoriant_cookie_consent';

/**
 * Light-Themed, Ultra-Slim, Full-Width Cookie Consent Bar.
 * - Light theme: Crisp white background, slate-800 text, purple accents.
 * - Low height: Single-row horizontal bar across the bottom of the screen.
 * - Non-blocking: No background overlay; page remains fully clickable and accessible.
 * - "Accept All" button + "✕" Reject button.
 * - "Privacy Policy" links directly to the full /privacy-policy page (no popup card).
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(CONSENT_KEY);
    if (!saved) {
      // Subtle delay so initial page loads smoothly
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'all');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(CONSENT_KEY, 'essential');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="region"
      aria-label="Cookie and Privacy Preferences"
      className="scoriant-cookie-light-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        background: '#ffffff',
        borderTop: '1px solid #e2e8f0',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.08), 0 -1px 3px rgba(0, 0, 0, 0.03)',
        zIndex: 9999,
        animation: 'cookieSlideUpFull 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="scoriant-cookie-light-inner"
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          padding: '8px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          minHeight: '44px',
        }}
      >
        {/* Left: Single-Row Text Notice with Link to Full Privacy Policy Page */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            minWidth: 0,
            flex: 1,
          }}
        >
          <span
            aria-hidden="true"
            style={{
              fontSize: '16px',
              flexShrink: 0,
              lineHeight: 1,
            }}
          >
            🍪
          </span>
          <p
            style={{
              margin: 0,
              fontSize: '13px',
              color: '#334155',
              lineHeight: 1.4,
              fontWeight: 500,
            }}
          >
            We use essential and analytics cookies to secure and optimize your experience.{' '}
            <Link
              to="/privacy-policy"
              id="cookie-privacy-policy-link"
              style={{
                color: '#7c3aed',
                textDecoration: 'underline',
                fontWeight: 700,
                fontSize: '13px',
                whiteSpace: 'nowrap',
              }}
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Right: Accept Button and "X" Reject Button */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            flexShrink: 0,
          }}
        >
          <button
            id="cookie-accept-all"
            onClick={accept}
            style={{
              background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 8px rgba(124, 58, 237, 0.25)',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.opacity = '0.92';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Accept All
          </button>

          {/* "X" Reject Button */}
          <button
            id="cookie-reject-x"
            onClick={decline}
            title="Reject & Close"
            aria-label="Reject non-essential cookies and close"
            style={{
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              borderRadius: '8px',
              width: '30px',
              height: '30px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#475569',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              padding: 0,
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#fee2e2';
              e.currentTarget.style.borderColor = '#fca5a5';
              e.currentTarget.style.color = '#dc2626';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#f1f5f9';
              e.currentTarget.style.borderColor = '#cbd5e1';
              e.currentTarget.style.color = '#475569';
            }}
          >
            <X size={15} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cookieSlideUpFull {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @media (max-width: 640px) {
          .scoriant-cookie-light-inner {
            padding: 8px 14px !important;
            gap: 10px !important;
          }
          .scoriant-cookie-light-inner p {
            font-size: 11px !important;
          }
        }
      `}</style>
    </aside>
  );
}
