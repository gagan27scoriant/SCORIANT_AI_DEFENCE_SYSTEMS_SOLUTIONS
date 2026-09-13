import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div style={{ background: '#0b0f19', color: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 404 Hero Section Only */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          overflow: 'hidden',
          background: '#0b0f19',
          color: '#f8fafc',
          padding: '120px 24px 80px 24px',
        }}
      >
        {/* Background Image Backdrop */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img
            src="/HERO/IMAGE_08.jpg"
            alt="404 Hero Backdrop"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.35,
              filter: 'brightness(0.7) contrast(1.1)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(180deg, rgba(11, 15, 25, 0.85) 0%, rgba(11, 15, 25, 0.65) 50%, rgba(11, 15, 25, 0.95) 100%),
                radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(11, 15, 25, 0.9) 70%)
              `,
            }}
          />
        </div>

        <div style={{ position: 'relative', zIndex: 10, maxWidth: '680px', margin: '0 auto' }}>
          {/* 404 Headline */}
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(56px, 9vw, 96px)',
              fontWeight: 900,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-1px',
              marginBottom: '16px',
            }}
          >
            404
          </h1>

          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(22px, 3.5vw, 34px)',
              fontWeight: 800,
              color: '#f8fafc',
              marginBottom: '16px',
            }}
          >
            Page Not Found
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 18px)',
              color: '#cbd5e1',
              lineHeight: 1.6,
              margin: '0 auto 36px auto',
              maxWidth: '540px',
            }}
          >
            The requested page or route could not be found on the Scoriant server. It may have been moved, renamed, or deleted.
          </p>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="btn-primary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 800,
              borderRadius: '12px',
              textDecoration: 'none',
              boxShadow: '0 8px 24px rgba(124, 58, 237, 0.35)',
            }}
          >
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
