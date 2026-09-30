import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDataContext } from '../context/DataContext';
import SEO from '../components/SEO';
import {
  Shield,
  Plus,
  Edit2,
  Trash2,
  CheckCircle2,
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
  Mail,
  Eye,
  EyeOff,
  AlertCircle,
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

  // Active Admin Tab
  const [activeTab, setActiveTab] = useState('jobs');

  // Modal / Form state for CRUD items
  const [editingItem, setEditingItem] = useState(null); // { type, isEdit, id }
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formFields, setFormFields] = useState({});

  // 2-Factor Authentication (2FA) State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('scoriant_admin_authed') === 'true' && !!sessionStorage.getItem('scoriant_admin_token');
  });
  const [authStep, setAuthStep] = useState('key'); // 'key' | 'otp'
  const [passwordInput, setPasswordInput] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otpValues, setOtpValues] = useState(['', '', '', '', '', '']);
  const [challengeId, setChallengeId] = useState('');
  const [maskedEmail, setMaskedEmail] = useState('');
  const [authError, setAuthError] = useState('');
  const [authSuccess, setAuthSuccess] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [resendCountdown, setResendCountdown] = useState(0);
  const [isResending, setIsResending] = useState(false);

  // 3 Slideshow items exactly matching HomePage Hero Section
  const heroSlides = [
    {
      id: 'defence-systems',
      category: 'Aerospace & Defence',
      title: 'Defence Engineering Systems',
      titlePrefix: 'Defence Engineering',
      titleHighlight: 'Systems',
      pillLabel: 'Aerospace & Defence',
      subtitle: 'Edge AI & Compute Powerhouse',
      desc: 'High-performance edge computing and secure storage platform engineered for mounted, mobile, and air-gapped defence environments. Delivers real-time sensor fusion, embedded AI/ML acceleration, and mission-critical reliability for aerospace and tactical command systems.',
      bgImage: '/HERO/DEFENCE_01.jpg',
    },
    {
      id: 'agentic-ai',
      category: 'Agentic Intelligence',
      title: 'Agentic AI Systems',
      titlePrefix: 'Agentic AI',
      titleHighlight: 'Systems',
      pillLabel: 'Agentic AI Systems',
      subtitle: 'Autonomous Context-Aware Machine Intelligence',
      desc: 'Autonomous, context-aware AI systems engineered to perceive, reason, plan, and execute across complex operational workflows. Combines multi-modal intelligence and dynamic agent routing with human-in-the-loop oversight for decisive operational speed.',
      bgImage: '/HERO/AGENTIC_AI.jpg',
    },
    {
      id: '5g-capabilities',
      category: 'Telecom & 5G',
      title: '5G Engineering',
      titlePrefix: '5G',
      titleHighlight: 'Engineering',
      pillLabel: 'Telecom & 5G',
      subtitle: 'Carrier-Grade RAN & Protocol Stack Architecture',
      desc: 'Carrier-grade 5G architecture and telecommunications engineering spanning the full Radio Access Network stack—from CU and DU to Upper/Lower PHY and custom protocol layers. Engineered for ultra-low latency, high throughput, and mission-critical network deployments.',
      bgImage: '/HERO/5G_01.jpg',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slideshow transition every 7 seconds matching Hero.jsx
  useEffect(() => {
    if (isAuthenticated) return;
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isAuthenticated, heroSlides.length]);

  const otpInputsRef = useRef([]);

  // Verify existing session token on mount
  useEffect(() => {
    const token = sessionStorage.getItem('scoriant_admin_token');
    if (token) {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8787';
      fetch(`${apiUrl}/api/admin/verify-token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data && data.valid) {
            setIsAuthenticated(true);
          } else {
            handleLogout();
          }
        })
        .catch(() => {
          // Allow existing valid session if backend is temporarily disconnected
        });
    }
  }, []);

  // Countdown timer for OTP resend
  useEffect(() => {
    if (resendCountdown <= 0) return;
    const interval = setInterval(() => {
      setResendCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [resendCountdown]);

  // Auto-focus first OTP input upon step change
  useEffect(() => {
    if (authStep === 'otp' && otpInputsRef.current[0]) {
      setTimeout(() => otpInputsRef.current[0]?.focus(), 150);
    }
  }, [authStep]);

  // Step 1: Submit Administrator Security Key -> Requests 6-Digit Email OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    if (!passwordInput.trim()) {
      setAuthError('Please enter the administrator security key.');
      return;
    }

    setIsVerifying(true);
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8787';

    try {
      const response = await fetch(`${apiUrl}/api/admin/request-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: passwordInput.trim() }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setChallengeId(data.challengeId);
        setMaskedEmail(data.targetEmail || 'info@scoriant.com');
        setAuthStep('otp');
        setAuthSuccess('');
        setResendCountdown(60);
        setOtpValues(['', '', '', '', '', '']);
        setPasswordInput('');
        setAuthError('');
      } else {
        setAuthError(data.error || 'Invalid Administrator Security Key. Access Denied.');
      }
    } catch (networkErr) {
      setAuthError(
        'Backend authentication service is offline. Please ensure the backend server is running on port 8787.'
      );
    } finally {
      setIsVerifying(false);
    }
  };

  // Step 2: Handle OTP input changes with auto-advance
  const handleOtpChange = (index, value) => {
    const digit = value.replace(/\D/g, '').slice(-1);
    const nextOtp = [...otpValues];
    nextOtp[index] = digit;
    setOtpValues(nextOtp);

    if (digit && index < 5) {
      otpInputsRef.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      otpInputsRef.current[index - 1]?.focus();
    }
  };

  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;

    const nextOtp = [...otpValues];
    for (let i = 0; i < 6; i++) {
      nextOtp[i] = pasted[i] || '';
    }
    setOtpValues(nextOtp);

    const nextFocusIndex = Math.min(pasted.length, 5);
    otpInputsRef.current[nextFocusIndex]?.focus();
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setAuthError('');
    setAuthSuccess('');

    const enteredOtp = otpValues.join('');
    if (enteredOtp.length !== 6) {
      setAuthError('Please enter the full 6-digit verification code.');
      return;
    }

    setIsVerifying(true);
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8787';

    try {
      const response = await fetch(`${apiUrl}/api/admin/verify-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          challengeId,
          otp: enteredOtp,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        sessionStorage.setItem('scoriant_admin_token', data.token);
        sessionStorage.setItem('scoriant_admin_authed', 'true');
        setIsAuthenticated(true);
        setAuthStep('key');
        setOtpValues(['', '', '', '', '', '']);
        setAuthError('');
      } else {
        setAuthError(data.error || 'Invalid verification OTP. Please check your email.');
      }
    } catch (networkErr) {
      setAuthError('Verification service error. Please verify backend connection.');
    } finally {
      setIsVerifying(false);
    }
  };

  // Step 2: Resend OTP
  const handleResendOtp = async () => {
    if (resendCountdown > 0 || isResending) return;

    setIsResending(true);
    setAuthError('');
    setAuthSuccess('');
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8787';

    try {
      const response = await fetch(`${apiUrl}/api/admin/resend-otp`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ challengeId }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResendCountdown(60);
        setOtpValues(['', '', '', '', '', '']);
        setAuthSuccess(data.message || 'A fresh 6-digit OTP code has been sent to info@scoriant.com.');
        otpInputsRef.current[0]?.focus();
      } else {
        setAuthError(data.error || 'Failed to resend verification code.');
      }
    } catch (err) {
      setAuthError('Network error requesting OTP resend.');
    } finally {
      setIsResending(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAuthStep('key');
    setPasswordInput('');
    setOtpValues(['', '', '', '', '', '']);
    setChallengeId('');
    setAuthError('');
    setAuthSuccess('');
    sessionStorage.removeItem('scoriant_admin_token');
    sessionStorage.removeItem('scoriant_admin_authed');
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

  // If unauthenticated, render Full-Page 70:30 Split Admin Gate (Light Theme Panel, Home Navbar & Hero)
  if (!isAuthenticated) {
    const currentSlide = heroSlides[activeSlide];

    return (
      <div
        className="admin-gate-page"
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          width: '100vw',
          margin: 0,
          padding: 0,
          background: '#0b0f19',
          color: '#f8fafc',
          overflowX: 'hidden',
          fontFamily: "'Plus Jakarta Sans', Inter, -apple-system, sans-serif",
          position: 'relative',
        }}
      >
        <SEO title="Admin Portal // Scoriant AI Defence" noindex={true} />

        {/* Global responsive styles for 70:30 full-page split */}
        <style>{`
          .admin-gate-page {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            width: 100vw;
            background: #0b0f19;
            overflow-x: hidden;
          }
          .admin-gate-body {
            display: flex;
            flex: 1;
            min-height: calc(100vh - 76px);
            width: 100%;
          }
          .admin-gate-hero-col {
            flex: 0 0 70%;
            width: 70%;
            position: relative;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            justifyContent: center;
            padding: 80px 72px 60px 72px;
            box-sizing: border-box;
          }
          .admin-gate-form-col {
            flex: 0 0 30%;
            width: 30%;
            min-width: 360px;
            background: var(--bg-subtle, #f1f5f9);
            border-left: 1px solid var(--border-light, rgba(226, 232, 240, 0.8));
            display: flex;
            flex-direction: column;
            justifyContent: center;
            align-items: center;
            padding: 48px 28px;
            box-sizing: border-box;
            position: relative;
            z-index: 20;
            overflow-y: auto;
          }
          @media (max-width: 1024px) {
            .admin-gate-body {
              flex-direction: column;
              min-height: auto;
            }
            .admin-gate-hero-col {
              flex: 0 0 auto;
              width: 100%;
              min-height: 480px;
              padding: 40px 24px;
            }
            .admin-gate-form-col {
              flex: 1 1 auto;
              width: 100%;
              min-width: 100%;
              border-left: none;
              border-top: 1px solid var(--border-light, rgba(226, 232, 240, 0.8));
              padding: 40px 20px 60px 20px;
            }
          }
        `}</style>

        {/* TOP NAVBAR: Exact Home Screen Style (Without Navlinks & No Sovereign Badge) */}
        <header
          style={{
            width: '100%',
            height: '76px',
            background: 'rgba(255, 255, 255, 0.96)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(226, 232, 240, 0.85)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            padding: '0 40px',
            boxSizing: 'border-box',
          }}
        >
          {/* Logo & Brand Identity (Same as HomePage Header) */}
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
          >
            <img
              src="/SCORIANT_LOGO_NAVBAR.png"
              alt="Scoriant Logo"
              style={{
                height: '46px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.06))',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 900,
                  color: '#0f172a',
                  letterSpacing: '1.2px',
                  lineHeight: 1.05,
                }}
              >
                SCORIANT
              </span>
              <span
                style={{
                  fontSize: '12px',
                  fontWeight: 900,
                  color: '#7c3aed',
                  letterSpacing: '1.8px',
                  textTransform: 'uppercase',
                  marginTop: '1px',
                }}
              >
                AI Defence Systems Solutions
              </span>
            </div>
          </Link>
        </header>

        {/* 70:30 SPLIT BODY */}
        <div className="admin-gate-body">
          {/* LEFT 70% SECTION: Hero Section (Positioned a bit lower down, matching Home Page) */}
          <div className="admin-gate-hero-col">
            {/* Background Images with smooth crossfade */}
            {heroSlides.map((slide, idx) => (
              <div
                key={slide.id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: idx === activeSlide ? 0.85 : 0,
                  filter: 'contrast(1.05) brightness(0.95)',
                  transform: idx === activeSlide ? 'scale(1.02)' : 'scale(1)',
                  transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 8s ease-out',
                  zIndex: 1,
                }}
              >
                <img
                  src={slide.bgImage}
                  alt={slide.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </div>
            ))}

            {/* Subtle Overlay Gradients from HomePage Hero for Text Legibility */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: `
                  linear-gradient(180deg, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.2) 50%, rgba(11, 15, 25, 0.6) 100%),
                  linear-gradient(90deg, rgba(11, 15, 25, 0.55) 0%, rgba(11, 15, 25, 0.25) 50%, rgba(11, 15, 25, 0.45) 100%)
                `,
                zIndex: 2,
              }}
            />

            {/* Hero Main Content (Positioned a bit lower down with marginTop) */}
            <div style={{ position: 'relative', zIndex: 10, maxWidth: '780px', marginTop: '36px' }}>
              {/* Category Pill */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'rgba(124, 58, 237, 0.25)',
                  border: '1px solid rgba(167, 139, 250, 0.4)',
                  color: '#c084fc',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  padding: '5px 16px',
                  borderRadius: '9999px',
                  marginBottom: '20px',
                }}
              >
                <Sparkles size={13} />
                <span>{currentSlide.pillLabel}</span>
              </div>

              {/* Main Title with Gradient Highlight */}
              <h1
                key={`title-${currentSlide.id}`}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(32px, 3.8vw, 52px)',
                  fontWeight: 900,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  letterSpacing: '-0.5px',
                  marginBottom: '16px',
                }}
              >
                {currentSlide.titlePrefix}{' '}
                <span
                  className="gradient-text-clip"
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                    backgroundColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    WebkitBoxDecorationBreak: 'clone',
                    boxDecorationBreak: 'clone',
                    verticalAlign: 'baseline',
                  }}
                >
                  {currentSlide.titleHighlight}
                </span>
              </h1>

              {/* Subtitle */}
              <div
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  color: '#a78bfa',
                  letterSpacing: '0.5px',
                  marginBottom: '16px',
                }}
              >
                {currentSlide.subtitle}
              </div>

              {/* Description */}
              <p
                key={`desc-${currentSlide.id}`}
                style={{
                  fontSize: 'clamp(14px, 1.15vw, 16.5px)',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '36px',
                  maxWidth: '720px',
                }}
              >
                {currentSlide.desc}
              </p>

              {/* Slide Navigation Indicator Dots (exact from Hero.jsx) */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginTop: '10px',
                }}
              >
                {heroSlides.map((item, idx) => {
                  const isActive = activeSlide === idx;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      style={{
                        height: '6px',
                        width: isActive ? '40px' : '12px',
                        borderRadius: '4px',
                        background: isActive ? '#a855f7' : 'rgba(255, 255, 255, 0.35)',
                        boxShadow: isActive ? '0 0 12px rgba(168, 85, 247, 0.6)' : 'none',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.4s ease',
                        padding: 0,
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT 30% SECTION: Light Theme with Our Expertise Card Design */}
          <div className="admin-gate-form-col">
            <div
              className="card-container"
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '16px',
                padding: '30px 28px',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                background: 'var(--bg-card, #ffffff)',
                border: '1px solid var(--border-light, rgba(226, 232, 240, 0.8))',
                boxShadow: 'var(--shadow-card, 0 10px 30px -5px rgba(15, 23, 42, 0.06))',
                marginTop: '44px',
              }}
            >
              {/* Tag (Matching PillarsSection card tag style) */}
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: 'var(--primary-purple, #7c3aed)',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Security Authentication
              </span>

              {/* Header Title (Matching PillarsSection card title style) */}
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '22px',
                  fontWeight: 800,
                  color: 'var(--text-main, #0f172a)',
                  marginBottom: '8px',
                  lineHeight: 1.25,
                }}
              >
                {authStep === 'key' ? 'Admin Access Portal' : 'Two-Factor Authorization'}
              </h3>

              <p
                style={{
                  fontSize: '13.5px',
                  color: 'var(--text-muted, #475569)',
                  lineHeight: 1.55,
                  marginBottom: '22px',
                }}
              >
                {authStep === 'key'
                  ? 'Enter your administrator security key to dispatch 2FA code.'
                  : 'A single-use 6-digit OTP code was sent to info@scoriant.com.'}
              </p>

              {/* Success Banner */}
              {authSuccess && (
                <div
                  style={{
                    fontSize: '12.5px',
                    color: '#047857',
                    background: '#ecfdf5',
                    border: '1px solid #a7f3d0',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    marginBottom: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textAlign: 'left',
                  }}
                >
                  <CheckCircle2 size={16} style={{ flexShrink: 0, color: '#059669' }} />
                  <span>{authSuccess}</span>
                </div>
              )}

              {/* Error Banner */}
              {authError && (
                <div
                  style={{
                    fontSize: '12.5px',
                    color: '#b91c1c',
                    fontWeight: 600,
                    background: '#fef2f2',
                    border: '1px solid #fecaca',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    marginBottom: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textAlign: 'left',
                  }}
                >
                  <AlertCircle size={16} style={{ flexShrink: 0, color: '#dc2626' }} />
                  <span>{authError}</span>
                </div>
              )}

              {/* STAGE 1: MASTER PASSWORD KEY FORM */}
              {authStep === 'key' && (
                <form onSubmit={handleRequestOtp} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {/* Clean Light Input */}
                  <div
                    style={{
                      position: 'relative',
                      background: 'var(--bg-primary, #f8fafc)',
                      border: '1.5px solid var(--border-light, #e2e8f0)',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      padding: '2px 14px 2px 16px',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <Key size={17} style={{ color: 'var(--text-subtle, #64748b)', marginRight: '10px', flexShrink: 0 }} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={passwordInput}
                      onChange={(e) => setPasswordInput(e.target.value)}
                      placeholder="Enter Administrator Security Key"
                      style={{
                        width: '100%',
                        padding: '12px 0',
                        background: 'transparent',
                        border: 'none',
                        outline: 'none',
                        color: 'var(--text-main, #0f172a)',
                        fontSize: '14px',
                        fontWeight: 500,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-subtle, #64748b)',
                        cursor: 'pointer',
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: '6px',
                      }}
                      title={showPassword ? 'Hide Key' : 'Show Key'}
                    >
                      {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  {/* Primary Request Access Button */}
                  <button
                    type="submit"
                    disabled={isVerifying}
                    style={{
                      width: '100%',
                      padding: '13px 20px',
                      background: 'var(--brand-gradient, linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%))',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      fontWeight: 700,
                      borderRadius: '12px',
                      border: 'none',
                      cursor: isVerifying ? 'not-allowed' : 'pointer',
                      opacity: isVerifying ? 0.7 : 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      transition: 'all 0.25s ease',
                      boxShadow: 'var(--brand-glow, 0 8px 24px -4px rgba(124, 58, 237, 0.4))',
                    }}
                    onMouseEnter={(e) => {
                      if (!isVerifying) {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isVerifying) e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <span>{isVerifying ? 'Verifying Key...' : 'Request Access'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}

              {/* STAGE 2: 2FA EMAIL OTP VERIFICATION FORM */}
              {authStep === 'otp' && (
                <form onSubmit={handleVerifyOtp} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div
                    style={{
                      background: 'rgba(124, 58, 237, 0.08)',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      borderRadius: '10px',
                      padding: '11px 14px',
                      fontSize: '12.5px',
                      color: '#4c1d95',
                      textAlign: 'left',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                    }}
                  >
                    <Mail size={16} style={{ color: '#7c3aed', flexShrink: 0 }} />
                    <span>
                      Verification code sent to <strong>info@scoriant.com</strong>.
                    </span>
                  </div>

                  {/* 6 Digit OTP Inputs */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '8px',
                      margin: '4px 0',
                    }}
                    onPaste={handleOtpPaste}
                  >
                    {otpValues.map((val, idx) => (
                      <input
                        key={idx}
                        ref={(el) => (otpInputsRef.current[idx] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={val}
                        onChange={(e) => handleOtpChange(idx, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                        style={{
                          width: '42px',
                          height: '50px',
                          textAlign: 'center',
                          fontSize: '22px',
                          fontWeight: 700,
                          fontFamily: 'monospace',
                          borderRadius: '8px',
                          border: val ? '2px solid #7c3aed' : '1.5px solid var(--border-light, #e2e8f0)',
                          background: val ? 'rgba(124, 58, 237, 0.06)' : 'var(--bg-primary, #f8fafc)',
                          color: 'var(--text-main, #0f172a)',
                          outline: 'none',
                          boxShadow: val ? '0 0 0 3px rgba(124, 58, 237, 0.15)' : 'none',
                          transition: 'all 0.2s ease',
                        }}
                      />
                    ))}
                  </div>

                  {/* Verify Button */}
                  <button
                    type="submit"
                    disabled={isVerifying || otpValues.join('').length !== 6}
                    style={{
                      width: '100%',
                      padding: '13px 20px',
                      background: 'var(--brand-gradient, linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%))',
                      color: '#ffffff',
                      fontSize: '14.5px',
                      fontWeight: 700,
                      borderRadius: '12px',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: isVerifying || otpValues.join('').length !== 6 ? 0.6 : 1,
                      cursor: isVerifying || otpValues.join('').length !== 6 ? 'not-allowed' : 'pointer',
                      boxShadow: 'var(--brand-glow, 0 8px 24px -4px rgba(124, 58, 237, 0.4))',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => {
                      if (!isVerifying && otpValues.join('').length === 6) {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isVerifying) e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Shield size={16} />
                    <span>{isVerifying ? 'Authenticating...' : 'Verify & Enter Portal'}</span>
                  </button>

                  {/* Resend Code button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12.5px',
                      paddingTop: '4px',
                    }}
                  >
                    <button
                      type="button"
                      onClick={handleResendOtp}
                      disabled={resendCountdown > 0 || isResending}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: resendCountdown > 0 ? '#94a3b8' : '#7c3aed',
                        cursor: resendCountdown > 0 || isResending ? 'not-allowed' : 'pointer',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '4px 8px',
                      }}
                    >
                      <RefreshCw size={13} className={isResending ? 'animate-spin' : ''} />
                      <span>
                        {resendCountdown > 0 ? `Resend Code (${resendCountdown}s)` : 'Resend Verification Code'}
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Full Homepage-Style Admin Command Center
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      <SEO title="Admin Operations Portal" noindex={true} />
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
                  className="gradient-text-clip"
                  style={{
                    display: 'inline-block',
                    whiteSpace: 'nowrap',
                    backgroundImage: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                    backgroundColor: 'transparent',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                    WebkitBoxDecorationBreak: 'clone',
                    boxDecorationBreak: 'clone',
                    verticalAlign: 'baseline',
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
                {jobs.length === 0 ? (
                  <div
                    style={{
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-light)',
                      borderRadius: '20px',
                      padding: '52px 32px',
                      textAlign: 'center',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    <div
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        background: 'rgba(124, 58, 237, 0.1)',
                        border: '1.5px solid rgba(167, 139, 250, 0.3)',
                        color: '#a78bfa',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 18px auto',
                      }}
                    >
                      <Briefcase size={28} />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '20px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
                      No Active Job Openings (0 Listed)
                    </h3>
                    <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto 26px auto', lineHeight: 1.6 }}>
                      You currently have 0 active job postings. The live Careers page is displaying the <strong>"Currently No Openings"</strong> card with the general candidate application form.
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                      <button
                        onClick={() => openForm('job')}
                        className="btn-primary"
                        style={{ padding: '12px 24px', fontSize: '14px', fontWeight: 800, borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}
                      >
                        <Plus size={16} />
                        <span>Create First Job Opening</span>
                      </button>
                      <button
                        onClick={resetToDefaults}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid var(--border-light)',
                          color: 'var(--text-main)',
                          padding: '12px 24px',
                          borderRadius: '12px',
                          fontSize: '14px',
                          fontWeight: 700,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                        }}
                      >
                        <RefreshCw size={16} />
                        <span>Restore Sample Jobs</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  jobs.map((job) => (
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
                  ))
                )}
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
