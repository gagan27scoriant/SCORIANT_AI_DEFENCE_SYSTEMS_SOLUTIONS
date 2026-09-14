import React, { useState } from 'react';
import { useDataContext } from '../context/DataContext';
import {
  Shield,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
  Lock,
  Key,
  RefreshCw,
  Briefcase,
  Package,
  Globe,
  Layers,
  MapPin,
  LogOut,
  Sparkles,
  ArrowRight,
  Sliders,
  Terminal,
} from 'lucide-react';

export default function AdminDashboardPage() {
  const {
    products,
    jobs,
    useCases,
    pillars,
    locations,
    addJob,
    updateJob,
    deleteJob,
    addProduct,
    updateProduct,
    deleteProduct,
    addUseCase,
    updateUseCase,
    deleteUseCase,
    addPillar,
    updatePillar,
    deletePillar,
    updateLocation,
    resetToDefaults,
  } = useDataContext();

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('scoriant_admin_authed') === 'true';
  });
  const [passwordInput, setPasswordInput] = useState('');
  const [authError, setAuthError] = useState('');

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState('jobs');

  // Modal / Form state for CRUD items
  const [editingItem, setEditingItem] = useState(null); // { type, isEdit, id }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formFields, setFormFields] = useState({});

  const handleLogin = (e) => {
    e.preventDefault();
    if (passwordInput === 'admin' || passwordInput === 'scoriant2026#admin') {
      setIsAuthenticated(true);
      localStorage.setItem('scoriant_admin_authed', 'true');
      setAuthError('');
    } else {
      setAuthError('Invalid Admin Security Key. Access Denied.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('scoriant_admin_authed');
  };

  // Open modal to add or edit
  const openForm = (type, item = null) => {
    setEditingItem({ type, isEdit: !!item, id: item?.id });
    if (item) {
      setFormFields({ ...item });
    } else {
      if (type === 'job') {
        setFormFields({
          title: '',
          department: 'AI & Intelligence Engineering',
          location: 'Bangalore, India',
          type: 'Full Time',
          experience: '3+ Years',
          badge: 'Actively Hiring',
          tags: 'LLM Fine-Tuning, PyTorch, Vector RAG',
          shortDesc: '',
          roleOverview: '',
          keyResponsibilities: '',
          requiredQualifications: '',
        });
      } else if (type === 'product') {
        setFormFields({
          title: '',
          category: 'Agentic AI',
          badge: 'Enterprise AI',
          short: '',
          detail: '',
          bullets: '',
        });
      } else if (type === 'usecase') {
        setFormFields({
          title: '',
          subtitle: '',
          tag: 'Defence & Security',
          desc: '',
          metrics: '100% Offline Autonomy, < 50ms Latency',
        });
      } else if (type === 'pillar') {
        setFormFields({
          title: '',
          subtitle: '',
          tag: 'Pillar Sector',
          desc: '',
          bullets: '',
        });
      }
    }
    setIsModalOpen(true);
  };

  const handleSaveForm = (e) => {
    e.preventDefault();
    const { type, isEdit, id } = editingItem;

    if (type === 'job') {
      const formattedJob = {
        ...formFields,
        tags: typeof formFields.tags === 'string' ? formFields.tags.split(',').map((s) => s.trim()) : formFields.tags,
        keyResponsibilities: typeof formFields.keyResponsibilities === 'string'
          ? formFields.keyResponsibilities.split('\n').filter(Boolean)
          : formFields.keyResponsibilities,
        requiredQualifications: typeof formFields.requiredQualifications === 'string'
          ? formFields.requiredQualifications.split('\n').filter(Boolean)
          : formFields.requiredQualifications,
      };
      if (isEdit) updateJob(id, formattedJob);
      else addJob(formattedJob);
    } else if (type === 'product') {
      const formattedProd = {
        ...formFields,
        bullets: typeof formFields.bullets === 'string'
          ? formFields.bullets.split('\n').filter(Boolean)
          : formFields.bullets,
      };
      if (isEdit) updateProduct(id, formattedProd);
      else addProduct(formattedProd);
    } else if (type === 'usecase') {
      const formattedUc = {
        ...formFields,
        metrics: typeof formFields.metrics === 'string' ? formFields.metrics.split(',').map((s) => s.trim()) : formFields.metrics,
      };
      if (isEdit) updateUseCase(id, formattedUc);
      else addUseCase(formattedUc);
    } else if (type === 'pillar') {
      const formattedPillar = {
        ...formFields,
        bullets: typeof formFields.bullets === 'string'
          ? formFields.bullets.split('\n').filter(Boolean)
          : formFields.bullets,
      };
      if (isEdit) updatePillar(id, formattedPillar);
      else addPillar(formattedPillar);
    }

    setIsModalOpen(false);
  };

  // If unauthenticated, render Premium Secret Gate
  if (!isAuthenticated) {
    return (
      <div style={{ background: '#0b0f19', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px', color: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
        {/* Background Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img
            src="/HERO/IMAGE_08.jpg"
            alt="Admin Gate Hero"
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2, filter: 'brightness(0.6)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(124, 58, 237, 0.15) 0%, rgba(11, 15, 25, 0.95) 75%)' }} />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '460px',
            background: 'rgba(15, 23, 42, 0.85)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(124, 58, 237, 0.35)',
            borderRadius: '28px',
            padding: '48px 36px',
            boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px rgba(124, 58, 237, 0.2)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.3) 0%, rgba(59, 130, 246, 0.3) 100%)',
              border: '1.5px solid rgba(167, 139, 250, 0.5)',
              color: '#c084fc',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px auto',
              boxShadow: '0 8px 24px rgba(124, 58, 237, 0.3)',
            }}
          >
            <Lock size={34} />
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(124, 58, 237, 0.25)',
              border: '1px solid rgba(167, 139, 250, 0.4)',
              color: '#c084fc',
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              padding: '4px 14px',
              borderRadius: 'var(--radius-pill)',
              marginBottom: '16px',
            }}
          >
            <Shield size={12} />
            <span>RESTRICTED OPERATIONS GATE</span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 900, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.3px' }}>
            Admin Command Access
          </h2>
          <p style={{ fontSize: '14px', color: '#cbd5e1', marginBottom: '32px', lineHeight: 1.6 }}>
            Enter administrator secret key to unlock live CRUD data management for Scoriant AI Defence Systems Solutions.
          </p>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ position: 'relative' }}>
              <Key size={18} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#94a3b8' }} />
              <input
                type="password"
                required
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter Secret Key (default: scoriant2026#admin)"
                style={{
                  width: '100%',
                  padding: '14px 18px 14px 48px',
                  borderRadius: '14px',
                  border: '1px solid #334155',
                  background: '#0b0f19',
                  color: '#ffffff',
                  fontSize: '14px',
                  outline: 'none',
                  boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
                }}
              />
            </div>

            {authError && (
              <div style={{ fontSize: '13px', color: '#f87171', fontWeight: 700, background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', padding: '10px', borderRadius: '10px' }}>
                {authError}
              </div>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{
                width: '100%',
                padding: '14px',
                fontSize: '15px',
                fontWeight: 800,
                borderRadius: '14px',
                marginTop: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <span>Unlock Admin Console</span>
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Full Homepage-Style Admin Command Center
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      {/* 1. HERO SECTION */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '150px',
          paddingBottom: '80px',
          background: '#0b0f19',
          color: '#f8fafc',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Hero Image Overlay */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img
            src="/HERO/IMAGE_08.jpg"
            alt="Admin Portal Hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.4,
              filter: 'contrast(1.05) brightness(0.8)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(180deg, rgba(11, 15, 25, 0.8) 0%, rgba(11, 15, 25, 0.6) 50%, rgba(11, 15, 25, 0.95) 100%),
                linear-gradient(90deg, rgba(11, 15, 25, 0.9) 0%, rgba(11, 15, 25, 0.4) 50%, rgba(11, 15, 25, 0.9) 100%)
              `,
            }}
          />
        </div>

        <div className="section-wrapper" style={{ position: 'relative', zIndex: 10, paddingTop: '10px', paddingBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px' }}>
            <div style={{ maxWidth: '780px' }}>
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
                <Shield size={14} />
                <span>COMMAND CENTER // ADMIN PORTAL</span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 4.5vw, 52px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.5px',
                  marginBottom: '18px',
                }}
              >
                System Operations &{' '}
                <span
                  style={{
                    background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  CMS Console
                </span>
              </h1>

              <p
                style={{
                  fontSize: 'clamp(15px, 1.8vw, 18.5px)',
                  color: '#cbd5e1',
                  lineHeight: 1.65,
                  margin: 0,
                  maxWidth: '740px',
                }}
              >
                Full-spectrum live CRUD control center for Scoriant AI Defence Systems Solutions. Add, modify, or remove product features, active job postings, real-world case studies, and office deployment metrics.
              </p>
            </div>

            {/* Quick Action Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '220px' }}>
              <button
                onClick={resetToDefaults}
                style={{
                  background: 'rgba(239, 68, 68, 0.2)',
                  border: '1px solid rgba(239, 68, 68, 0.4)',
                  color: '#f87171',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 14px rgba(239, 68, 68, 0.15)',
                }}
              >
                <RefreshCw size={16} />
                <span>Restore Factory Data</span>
              </button>

              <button
                onClick={handleLogout}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  fontSize: '14px',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  transition: 'all 0.2s ease',
                }}
              >
                <LogOut size={16} />
                <span>Exit Secret Admin</span>
              </button>
            </div>
          </div>

          {/* 4 STATS COUNTER CARDS */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              marginTop: '50px',
            }}
          >
            {[
              { label: 'Active Job Openings', value: jobs.length, icon: Briefcase, color: '#a78bfa' },
              { label: 'Products & Platforms', value: products.length, icon: Package, color: '#60a5fa' },
              { label: 'Use Case Deployments', value: useCases.length, icon: Globe, color: '#34d399' },
              { label: 'Expertise Pillars', value: pillars.length, icon: Layers, color: '#fbbf24' },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={i}
                  style={{
                    background: 'rgba(15, 23, 42, 0.75)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '18px',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: stat.color,
                    }}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 900, color: '#ffffff', lineHeight: 1 }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '4px', fontWeight: 600 }}>
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. ADMIN CONTENT MODULES SECTION */}
      <section style={{ padding: '70px 0 120px', background: 'var(--bg-secondary)' }}>
        <div className="section-wrapper">
          {/* TAB BAR SWITCHES */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', overflowX: 'auto', paddingBottom: '8px' }}>
            {[
              { id: 'jobs', label: `Careers (${jobs.length})`, icon: Briefcase },
              { id: 'products', label: `Products (${products.length})`, icon: Package },
              { id: 'usecases', label: `Use Cases (${useCases.length})`, icon: Globe },
              { id: 'pillars', label: `Pillars (${pillars.length})`, icon: Layers },
              { id: 'locations', label: `Office Locations`, icon: MapPin },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: isActive ? 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)' : 'var(--bg-card)',
                    color: isActive ? '#ffffff' : 'var(--text-main)',
                    border: '1px solid',
                    borderColor: isActive ? 'transparent' : 'var(--border-light)',
                    padding: '14px 24px',
                    borderRadius: '14px',
                    fontSize: '14.5px',
                    fontWeight: 800,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    whiteSpace: 'nowrap',
                    boxShadow: isActive ? '0 8px 24px rgba(124, 58, 237, 0.25)' : 'var(--shadow-card)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <Icon size={18} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: JOBS MODULE */}
          {activeTab === 'jobs' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 900, color: 'var(--text-main)', margin: 0 }}>
                    Career Positions Management
                  </h2>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                    Add, edit, or delete active job openings displayed on the Careers page.
                  </p>
                </div>

                <button
                  onClick={() => openForm('job')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14.5px', fontWeight: 800, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Plus size={18} />
                  <span>Create Job Opening</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '28px 32px',
                      boxShadow: 'var(--shadow-card)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '24px',
                      flexWrap: 'wrap',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3.5px', background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)' }} />

                    <div style={{ maxWidth: '820px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginBottom: '10px' }}>
                        <span style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--primary-purple)', background: 'rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.2)', padding: '4px 12px', borderRadius: 'var(--radius-pill)' }}>
                          {job.department}
                        </span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>📍 {job.location}</span>
                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-muted)' }}>💼 {job.type}</span>
                        {job.badge && (
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '3px 10px', borderRadius: 'var(--radius-pill)', textTransform: 'uppercase' }}>
                            ● {job.badge}
                          </span>
                        )}
                      </div>

                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 8px 0' }}>
                        {job.title}
                      </h3>
                      <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.6 }}>
                        {job.shortDesc || job.roleOverview}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button
                        onClick={() => openForm('job', job)}
                        style={{
                          background: 'rgba(124, 58, 237, 0.08)',
                          border: '1px solid rgba(124, 58, 237, 0.25)',
                          color: '#7c3aed',
                          padding: '10px 18px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Edit2 size={15} />
                        <span>Edit</span>
                      </button>

                      <button
                        onClick={() => deleteJob(job.id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.08)',
                          border: '1px solid rgba(239, 68, 68, 0.25)',
                          color: '#ef4444',
                          padding: '10px 18px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Trash2 size={15} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: PRODUCTS MODULE */}
          {activeTab === 'products' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 900, color: 'var(--text-main)', margin: 0 }}>
                    Products & Solutions Catalog
                  </h2>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                    Create, modify, or remove product cards displayed on the Our Solutions page and Header dropdown.
                  </p>
                </div>

                <button
                  onClick={() => openForm('product')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14.5px', fontWeight: 800, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Plus size={18} />
                  <span>Add Product Card</span>
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
                {products.map((prod) => (
                  <div
                    key={prod.id}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '28px 24px',
                      boxShadow: 'var(--shadow-card)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '20px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3.5px', background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)' }} />

                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#3b82f6', background: 'rgba(59, 130, 246, 0.1)', padding: '4px 10px', borderRadius: 'var(--radius-pill)' }}>
                        {prod.category}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', margin: '12px 0 8px 0' }}>
                        {prod.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                        {prod.short}
                      </p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                      <button
                        onClick={() => openForm('product', prod)}
                        style={{
                          flex: 1,
                          background: 'rgba(124, 58, 237, 0.08)',
                          border: '1px solid rgba(124, 58, 237, 0.25)',
                          color: '#7c3aed',
                          padding: '10px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <Edit2 size={15} />
                        <span>Edit Product</span>
                      </button>
                      <button
                        onClick={() => deleteProduct(prod.id)}
                        style={{
                          background: 'rgba(239, 68, 68, 0.08)',
                          border: '1px solid rgba(239, 68, 68, 0.25)',
                          color: '#ef4444',
                          padding: '10px 16px',
                          borderRadius: '10px',
                          cursor: 'pointer',
                          fontSize: '13.5px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                        }}
                      >
                        <Trash2 size={15} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: USE CASES MODULE */}
          {activeTab === 'usecases' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 900, color: 'var(--text-main)', margin: 0 }}>
                    Real-World Deployments & Use Cases
                  </h2>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                    Manage proof points and deployment metrics displayed on the Home page.
                  </p>
                </div>

                <button
                  onClick={() => openForm('usecase')}
                  className="btn-primary"
                  style={{ padding: '12px 24px', fontSize: '14.5px', fontWeight: 800, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <Plus size={18} />
                  <span>Add Use Case</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {useCases.map((uc) => (
                  <div
                    key={uc.id}
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '24px 28px',
                      boxShadow: 'var(--shadow-card)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '20px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--primary-purple)' }}>{uc.tag}</span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 6px 0' }}>{uc.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, maxWidth: '750px', lineHeight: 1.55 }}>{uc.desc}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={() => openForm('usecase', uc)} style={{ background: 'rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.25)', color: '#7c3aed', padding: '10px 18px', borderRadius: '10px', cursor: 'pointer', fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Edit2 size={15} />
                        <span>Edit</span>
                      </button>
                      <button onClick={() => deleteUseCase(uc.id)} style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#ef4444', padding: '10px 18px', borderRadius: '10px', cursor: 'pointer', fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Trash2 size={15} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: PILLARS MODULE */}
          {activeTab === 'pillars' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', fontWeight: 900, color: 'var(--text-main)', margin: 0 }}>
                    Core Pillars & Expertise Sectors
                  </h2>
                  <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', margin: '4px 0 0 0' }}>
                    Manage engineering practice sectors displayed on the Home page.
                  </p>
                </div>

                <button onClick={() => openForm('pillar')} className="btn-primary" style={{ padding: '12px 24px', fontSize: '14.5px', fontWeight: 800, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Plus size={18} />
                  <span>Add Pillar</span>
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {pillars.map((pillar) => (
                  <div key={pillar.id} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '20px', padding: '24px 28px', boxShadow: 'var(--shadow-card)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
                    <div>
                      <span style={{ fontSize: '11.5px', fontWeight: 800, color: '#38bdf8' }}>{pillar.tag}</span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '19px', fontWeight: 800, color: 'var(--text-main)', margin: '4px 0 6px 0' }}>{pillar.title}</h3>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: 0, maxWidth: '750px', lineHeight: 1.55 }}>{pillar.desc}</p>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button onClick={() => openForm('pillar', pillar)} style={{ background: 'rgba(124, 58, 237, 0.08)', border: '1px solid rgba(124, 58, 237, 0.25)', color: '#7c3aed', padding: '10px 18px', borderRadius: '10px', cursor: 'pointer', fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Edit2 size={15} />
                        <span>Edit</span>
                      </button>
                      <button onClick={() => deletePillar(pillar.id)} style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)', color: '#ef4444', padding: '10px 18px', borderRadius: '10px', cursor: 'pointer', fontSize: '13.5px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Trash2 size={15} />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: LOCATIONS MODULE */}
          {activeTab === 'locations' && (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '28px' }}>
              {['india', 'usa'].map((key) => {
                const loc = locations[key];
                return (
                  <div key={key} style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: '24px', padding: '32px', boxShadow: 'var(--shadow-card)' }}>
                    <span style={{ fontSize: '11.5px', fontWeight: 800, color: 'var(--primary-purple)' }}>{loc.tag}</span>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 900, color: 'var(--text-main)', margin: '8px 0 20px 0' }}>
                      {loc.title}
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>Office Address</label>
                        <textarea
                          rows={2}
                          value={loc.address}
                          onChange={(e) => updateLocation(key, { address: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', fontSize: '14px', outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>Phone Number</label>
                        <input
                          type="text"
                          value={loc.phone}
                          onChange={(e) => updateLocation(key, { phone: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', fontSize: '14px', outline: 'none' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>Email Address</label>
                        <input
                          type="text"
                          value={loc.email}
                          onChange={(e) => updateLocation(key, { email: e.target.value })}
                          style={{ width: '100%', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', fontSize: '14px', outline: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* CRUD MODAL FOR ADDING / EDITING ITEMS */}
      {isModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 3000, background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '28px', padding: '36px', width: '100%', maxWidth: '680px', maxHeight: '90vh', overflowY: 'auto', color: '#0f172a', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 900, marginBottom: '24px', color: '#0f172a' }}>
              {editingItem?.isEdit ? 'Edit Item Details' : 'Add New Item'} ({editingItem?.type?.toUpperCase()})
            </h3>

            <form onSubmit={handleSaveForm} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {Object.keys(formFields).map((field) => {
                const val = formFields[field];
                const isMultiLine = field === 'roleOverview' || field === 'keyResponsibilities' || field === 'requiredQualifications' || field === 'detail' || field === 'bullets' || field === 'desc';

                return (
                  <div key={field}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: '#475569', marginBottom: '6px', textTransform: 'capitalize' }}>
                      {field.replace(/([A-Z])/g, ' $1')}
                    </label>

                    {isMultiLine ? (
                      <textarea
                        rows={3}
                        value={Array.isArray(val) ? val.join('\n') : val || ''}
                        onChange={(e) => setFormFields({ ...formFields, [field]: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', fontSize: '14px', outline: 'none' }}
                      />
                    ) : (
                      <input
                        type="text"
                        value={Array.isArray(val) ? val.join(', ') : val || ''}
                        onChange={(e) => setFormFields({ ...formFields, [field]: e.target.value })}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: '10px', border: '1px solid #cbd5e1', background: '#f8fafc', color: '#0f172a', fontSize: '14px', outline: 'none' }}
                      />
                    )}
                  </div>
                );
              })}

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '14px', marginTop: '16px' }}>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{ background: '#f1f5f9', border: '1px solid #cbd5e1', color: '#475569', padding: '12px 24px', borderRadius: '10px', fontSize: '14.5px', fontWeight: 700, cursor: 'pointer' }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-primary"
                  style={{ padding: '12px 28px', fontSize: '14.5px', fontWeight: 800, borderRadius: '10px' }}
                >
                  Save Item Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
