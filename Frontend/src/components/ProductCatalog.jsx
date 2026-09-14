import React, { useState } from 'react';
import { useDataContext } from '../context/DataContext';
import { ArrowRight, CheckCircle2, X, ExternalLink, ShieldAlert, Cpu, Server, BrainCircuit, FileText, Globe, Eye, GraduationCap, MessageSquare, ShieldCheck, Network, Boxes } from 'lucide-react';

export default function ProductCatalog({ onOpenDemoModal }) {
  const { products } = useDataContext();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  const getProductIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server size={22} color="var(--primary-purple)" />;
      case 'BrainCircuit': return <BrainCircuit size={22} color="var(--primary-purple)" />;
      case 'FileText': return <FileText size={22} color="var(--primary-purple)" />;
      case 'Globe': return <Globe size={22} color="var(--primary-purple)" />;
      case 'Eye': return <Eye size={22} color="var(--primary-purple)" />;
      case 'GraduationCap': return <GraduationCap size={22} color="var(--primary-purple)" />;
      case 'MessageSquare': return <MessageSquare size={22} color="var(--primary-purple)" />;
      case 'ShieldCheck': return <ShieldCheck size={22} color="var(--primary-purple)" />;
      case 'Network': return <Network size={22} color="var(--primary-purple)" />;
      case 'Boxes': return <Boxes size={22} color="var(--primary-purple)" />;
      default: return <Cpu size={22} color="var(--primary-purple)" />;
    }
  };

  return (
    <section id="products" className="section-wrapper" style={{ paddingTop: '60px', paddingBottom: '100px' }}>
      <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 40px auto' }}>
        <div className="pill-badge" style={{ marginBottom: '16px' }}>
          <span>Product Portfolio</span>
        </div>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(28px, 3.5vw, 40px)',
            fontWeight: 800,
            color: 'var(--text-main)',
            lineHeight: 1.2,
            marginBottom: '16px',
          }}
        >
          Enterprise AI & Defence Technology Suite
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
          High-performance, secure platforms engineered for air-gapped security, real-time analytics, and intelligent automation.
        </p>
      </div>

      {/* Category Tabs */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '10px',
          flexWrap: 'wrap',
          marginBottom: '48px',
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '10px 22px',
              borderRadius: 'var(--radius-pill)',
              fontSize: '14px',
              fontWeight: 600,
              border: selectedCategory === cat ? 'none' : '1px solid var(--border-light)',
              background: selectedCategory === cat ? 'var(--brand-gradient)' : 'var(--bg-card)',
              color: selectedCategory === cat ? '#ffffff' : 'var(--text-muted)',
              cursor: 'pointer',
              boxShadow: selectedCategory === cat ? 'var(--brand-glow)' : 'none',
              transition: 'all 0.25s ease',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '32px',
        }}
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="card-container"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderRadius: '20px',
            }}
          >
            <div>
              {/* Product Media Header */}
              <div
                style={{
                  height: '220px',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  background: '#0f172a',
                }}
              >
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(8px)',
                    color: '#ffffff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                  }}
                >
                  {product.badge}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: '#eef2ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {getProductIcon(product.icon)}
                  </div>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--primary-purple)' }}>
                    {product.category}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}
                >
                  {product.title}
                </h3>

                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {product.short}
                </p>

                {/* Key Bullet Summary */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {product.bullets.slice(0, 3).map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--text-main)' }}>
                      <CheckCircle2 size={14} color="var(--primary-purple)" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer Actions */}
            <div
              style={{
                padding: '20px 28px',
                borderTop: '1px solid var(--border-light)',
                background: 'var(--bg-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <button
                onClick={() => setActiveModalProduct(product)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-purple)',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>Read Full Specs</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onOpenDemoModal}
                className="btn-primary"
                style={{ padding: '8px 18px', fontSize: '13px' }}
              >
                Request Demo
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 2000,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
          onClick={() => setActiveModalProduct(null)}
        >
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-light)',
              borderRadius: '24px',
              maxWidth: '780px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0,0,0,0.3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div style={{ position: 'relative', height: '260px', background: '#0a0f1d' }}>
              <img
                src={activeModalProduct.image}
                alt={activeModalProduct.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveModalProduct(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Content */}
            <div style={{ padding: '36px' }}>
              <div className="pill-badge" style={{ marginBottom: '12px' }}>
                <span>{activeModalProduct.category}</span>
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '26px',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  marginBottom: '16px',
                }}
              >
                {activeModalProduct.title}
              </h2>

              <p
                style={{
                  fontSize: '15px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  whiteSpace: 'pre-line',
                  marginBottom: '28px',
                }}
              >
                {activeModalProduct.detail}
              </p>

              <h4 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '16px' }}>
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
                      background: 'var(--bg-subtle)',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-light)',
                    }}
                  >
                    <CheckCircle2 size={18} color="var(--primary-purple)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--text-main)' }}>
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                <button onClick={() => setActiveModalProduct(null)} className="btn-secondary">
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveModalProduct(null);
                    onOpenDemoModal();
                  }}
                  className="btn-primary"
                >
                  Book Demo for {activeModalProduct.title}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
