import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { Mail, MapPin, Building, Phone, Clock, Send, User, FileText, CheckCircle2, ChevronDown, Sparkles, ShieldCheck, Zap, Globe } from 'lucide-react';
import { useDataContext } from '../context/DataContext';
import { submitContactForm } from '../services/api';
import SEO from '../components/SEO';
import { buildGraph, getBreadcrumbSchema, getOrganizationSchema } from '../utils/seoSchemas';

const getPreloadedMessageForProduct = (productTitle) => {
  const normalized = (productTitle || '').toLowerCase();
  if (normalized.includes('storage') || normalized.includes('secure')) {
    return `Hi Scoriant Team,\n\nI would like to schedule a product demonstration and technical briefing for the Secure Storage & Deployment Platform. We are interested in understanding its air-gapped deployment architecture, hardware-enforced AES-256 encryption, and local cluster synchronization capabilities.`;
  }
  if (normalized.includes('knowledge') || normalized.includes('studio')) {
    return `Hi Scoriant Team,\n\nI would like to request a demonstration for AI Knowledge Studio. We are interested in exploring its multimodal transcription, multi-speaker diarization, and sovereign on-premises LLM processing workflows.`;
  }
  if (normalized.includes('document') || normalized.includes('chatbot') || normalized.includes('rag')) {
    return `Hi Scoriant Team,\n\nI would like to schedule a live demonstration for the Document Intelligence Chatbot. We want to evaluate its layout-aware OCR, vector RAG retrieval with exact page citations, and air-gapped deployment requirements.`;
  }
  if (normalized.includes('spatial') || normalized.includes('satellite') || normalized.includes('geospatial')) {
    return `Hi Scoriant Team,\n\nI would like to request a demonstration for the Geo-Spatial Change Detection Platform. We are interested in evaluating its Vision Transformer satellite image analysis, GIS integration, and automated change alerting.`;
  }
  if (normalized.includes('surveillance') || normalized.includes('video') || normalized.includes('cctv')) {
    return `Hi Scoriant Team,\n\nI would like to schedule a demonstration for the Smart Surveillance Platform. We are interested in its real-time multi-camera video analytics, TensorRT edge inference, ANPR, and cross-camera tracking capabilities.`;
  }
  if (normalized.includes('gurukula') || normalized.includes('lms') || normalized.includes('learning')) {
    return `Hi Scoriant Team,\n\nI would like to request a demonstration for GuruKula AI. We are interested in exploring the 24/7 contextual AI Tutor, automated grading engines, and institutional multi-tenant LMS deployment.`;
  }
  return `Hi Scoriant Team,\n\nI would like to schedule a technical demonstration and consultation for ${productTitle}. We are interested in evaluating its capabilities, air-gapped deployment architecture, and integration with our organization's systems.`;
};

export default function ContactPage() {
  const { locations: officesData, products } = useDataContext();
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // Toggle state for office selection: 'india' | 'usa'
  const [activeOffice, setActiveOffice] = useState('india');

  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    productOfInterest: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const office = officesData[activeOffice] || officesData['india'];

  const productOptions = [
    ...(products || []).map((p) => p.title),
    '5G Engineering & Network Protocol Stack',
    'Agentic AI Systems & Platform',
    'Autonomous AI Defence Systems',
    'Other / Custom Defence AI Solution',
  ].filter((v, i, a) => a.indexOf(v) === i);

  // Preload product info and message when arriving via Request Demo CTA
  useEffect(() => {
    const productParam = searchParams.get('product') || location.state?.product || location.state?.productTitle;
    const messageParam = searchParams.get('message') || location.state?.preloadedMessage || location.state?.message;

    if (productParam) {
      // Find matching product title
      const matched = (products || []).find(
        (p) =>
          p.id === productParam ||
          p.title.toLowerCase() === productParam.toLowerCase() ||
          p.title.toLowerCase().includes(productParam.toLowerCase()) ||
          productParam.toLowerCase().includes(p.title.toLowerCase())
      );
      const titleToSet = matched ? matched.title : productParam;
      const initialMessage = messageParam || getPreloadedMessageForProduct(titleToSet);

      setFormData((prev) => ({
        ...prev,
        productOfInterest: titleToSet,
        message: initialMessage,
      }));

      // Smooth scroll down to send-message-section
      setTimeout(() => {
        const el = document.getElementById('send-message-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    } else if (location.hash === '#send-message-section') {
      setTimeout(() => {
        const el = document.getElementById('send-message-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 200);
    }
  }, [searchParams, location, products]);

  const handleChange = (e) => {
    setErrorMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
      setSubmitted(true);
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(err.message || 'Failed to submit inquiry. Please provide a valid email and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactSchema = buildGraph(
    getOrganizationSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Contact', url: '/contact' }
    ])
  );

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      <SEO
        title="Contact Scoriant | Enterprise & Defence Technology Inquiries"
        description="Connect with Scoriant AI Defence Systems Solutions for enterprise deployments, technical briefings, product demonstrations, and confidential defence inquiries."
        canonical="/contact"
        image="/HERO/CONTACT_ME_PAGE.jpg"
        schema={contactSchema}
      />
      {/* 1. Hero Section (Home Hero Theme) */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '140px',
          paddingBottom: '60px',
          background: '#0b0f19',
          color: '#f8fafc',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <img
            src="/HERO/CONTACT_ME_PAGE.jpg"
            alt="Contact Scoriant Hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.8,
              filter: 'contrast(1.05) brightness(0.95)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(180deg, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.25) 50%, rgba(11, 15, 25, 0.75) 100%),
                linear-gradient(90deg, rgba(11, 15, 25, 0.65) 0%, rgba(11, 15, 25, 0.2) 50%, rgba(11, 15, 25, 0.5) 100%)
              `,
            }}
          />
        </div>

        <div className="section-wrapper" style={{ position: 'relative', zIndex: 10, textAlign: 'left', paddingTop: '20px', paddingBottom: '20px' }}>
          <div style={{ maxWidth: '750px', margin: '0' }}>
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
                padding: '5px 14px',
                borderRadius: 'var(--radius-pill)',
                marginBottom: '16px',
              }}
            >
              <Mail size={13} />
              <span>GET IN TOUCH</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4.5vw, 50px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-1px',
                marginBottom: '14px',
              }}
            >
              Get in Touch with{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Scoriant
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(15.5px, 1.8vw, 18px)',
                color: '#cbd5e1',
                lineHeight: 1.6,
                margin: '0',
                maxWidth: '680px',
              }}
            >
              We're here to answer your questions, discuss your requirements, or schedule a product demonstration with our team.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Office Locations Section (Real-World Use Cases Layout) */}
      <section
        id="office-locations"
        style={{
          background: 'var(--bg-subtle)',
          padding: '40px 0',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="section-wrapper" style={{ paddingTop: 0, paddingBottom: 0 }}>
          {/* Section Header with India & USA Toggle Buttons */}
          <div style={{ marginBottom: '36px' }}>
            <div className="pill-badge" style={{ marginBottom: '10px' }}>
              <span>GLOBAL FOOTPRINT</span>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '16px',
                flexWrap: 'wrap',
              }}
            >
              <div>
                <h2
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(24px, 3.2vw, 32px)',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    lineHeight: 1.15,
                    marginBottom: '4px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  OUR OFFICE'S
                </h2>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', maxWidth: '600px', lineHeight: 1.45, margin: 0 }}>
                  Connect with our global innovation centres engineered for mission-critical AI, defence operations, and next-generation intelligence platforms.
                </p>
              </div>

              {/* TOGGLE BUTTONS FOR INDIA & USA */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'var(--bg-card)',
                  padding: '4px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  boxShadow: '0 4px 14px rgba(0,0,0,0.04)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setActiveOffice('india')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 18px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: activeOffice === 'india' ? 800 : 700,
                    letterSpacing: '0.4px',
                    textTransform: 'uppercase',
                    color: activeOffice === 'india' ? '#ffffff' : 'var(--text-muted)',
                    background: activeOffice === 'india' ? 'var(--brand-gradient)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: activeOffice === 'india' ? '0 4px 14px rgba(124, 58, 237, 0.3)' : 'none',
                  }}
                >
                  <span>INDIA OFFICE</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveOffice('usa')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '7px 18px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: activeOffice === 'usa' ? 800 : 700,
                    letterSpacing: '0.4px',
                    textTransform: 'uppercase',
                    color: activeOffice === 'usa' ? '#ffffff' : 'var(--text-muted)',
                    background: activeOffice === 'usa' ? 'var(--brand-gradient)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: activeOffice === 'usa' ? '0 4px 14px rgba(124, 58, 237, 0.3)' : 'none',
                  }}
                >
                  <span>USA OFFICE</span>
                </button>
              </div>
            </div>
          </div>

          {/* OFFICE SPOTLIGHT CARD */}
          <div
            key={activeOffice}
            className="card-container office-use-case-grid"
            style={{
              borderRadius: '14px',
              padding: '22px 28px',
              display: 'grid',
              gridTemplateColumns: '1.15fr 1fr',
              gap: '28px',
              alignItems: 'center',
              background: 'var(--bg-card)',
              animation: 'fadeInText 0.5s ease',
              border: '1px solid var(--border-light)',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06), 0 3px 10px rgba(124, 58, 237, 0.04)',
            }}
          >
            {/* Left Column: Office Address Details */}
            <div>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '23px',
                  fontWeight: 900,
                  color: 'var(--text-main)',
                  lineHeight: 1.15,
                  marginBottom: '2px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.3px',
                }}
              >
                {office.title || (activeOffice === 'india' ? 'INDIA OFFICE' : 'USA OFFICE')}
              </h3>

              <h4
                style={{
                  fontSize: '13.5px',
                  fontWeight: 800,
                  color: 'var(--primary-purple)',
                  marginBottom: '14px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px',
                }}
              >
                {office.company || 'Scoriant AI Defence Systems Solutions'}
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', margin: 0 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '9px' }}>
                  <MapPin size={16} color="var(--primary-purple)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.45, margin: 0 }}>
                    {office.address}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <Mail size={15} color="var(--primary-purple)" style={{ flexShrink: 0 }} />
                  <a
                    href={`mailto:${office.email}`}
                    style={{
                      fontSize: '13px',
                      fontWeight: 700,
                      color: 'var(--primary-purple)',
                      textDecoration: 'none',
                    }}
                  >
                    {office.email}
                  </a>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <Clock size={15} color="var(--text-subtle)" style={{ flexShrink: 0 }} />
                  <span style={{ fontSize: '12.5px', color: 'var(--text-subtle)', fontWeight: 600 }}>
                    {office.hours}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Embedded Map View */}
            <div
              style={{
                position: 'relative',
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 6px 18px rgba(0,0,0,0.06)',
                border: '1px solid var(--border-light)',
                height: '180px',
                background: '#f8fafc',
              }}
            >
              <iframe
                title={`${office.title} Location Map`}
                src={office.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              />

              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  color: '#0f172a',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-pill)',
                  fontSize: '11px',
                  fontWeight: 700,
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <MapPin size={12} color="var(--primary-purple)" />
                <span>Live Location Map</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LIGHT THEMED SEPARATOR SECTION (Between Office Locations & Dark Contact Form) */}
      <section
        style={{
          background: '#ffffff',
          padding: '40px 0',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="section-wrapper" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div style={{ width: '100%', minHeight: '20px' }} />
        </div>
      </section>

      {/* 3. Send me a Message Section (DARK THEME Background with 50% Transparent Glass Card) */}
      <section
        id="send-message-section"
        style={{
          background: '#0b0f19',
          backgroundImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, rgba(124, 58, 237, 0.38) 0%, rgba(59, 130, 246, 0.18) 45%, #0b0f19 85%)',
          color: '#f8fafc',
          padding: '75px 0 85px',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        }}
      >
        {/* Ambient Product Section Glow Accent */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '500px',
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(59, 130, 246, 0.12) 50%, transparent 80%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-wrapper" style={{ position: 'relative', zIndex: 10, paddingTop: 0, paddingBottom: 0 }}>
          {/* CARD CONTAINER WITH 50% TRANSPARENT BACKGROUND (80% WIDTH) */}
          <div
            style={{
              background: 'rgba(19, 27, 46, 0.50)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.14)',
              borderRadius: '16px',
              padding: '40px 44px 36px 44px',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
              position: 'relative',
              overflow: 'hidden',
              width: '80%',
              margin: '0 auto',
            }}
          >
            {/* Top Border Accent Line */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #a855f7 0%, #3b82f6 50%, #60a5fa 100%)',
              }}
            />

            {/* Header Title: "Stay Ahead at the Edge" (Centered) */}
            <div style={{ marginBottom: '24px', textAlign: 'center' }}>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(24px, 3.5vw, 32px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.15,
                  margin: 0,
                  letterSpacing: '-0.3px',
                }}
              >
                Stay Ahead at the Edge
              </h2>
            </div>

            {submitted ? (
              <div
                style={{
                  textAlign: 'center',
                  padding: '40px 20px',
                  background: 'rgba(124, 58, 237, 0.15)',
                  borderRadius: '12px',
                  border: '1px solid rgba(167, 139, 250, 0.3)',
                }}
              >
                <CheckCircle2 size={48} color="#a78bfa" style={{ marginBottom: '16px' }} />
                <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                  Request Submitted!
                </h3>
                <p style={{ fontSize: '14.5px', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 20px 0' }}>
                  Thank you for reaching out to Scoriant. Our intelligence team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      companyName: '',
                      email: '',
                      phone: '',
                      productOfInterest: '',
                      message: '',
                    });
                  }}
                  style={{
                    padding: '10px 24px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {/* ROW 1: Name (Full Width) */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '7px' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      background: 'rgba(255, 255, 255, 0.07)',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                {/* ROW 2: Company Name & Email Address */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                  {/* Company Name */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '7px' }}>
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      placeholder="Company Name"
                      value={formData.companyName}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        background: 'rgba(255, 255, 255, 0.07)',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '7px' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter Email"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        background: 'rgba(255, 255, 255, 0.07)',
                        color: '#ffffff',
                        fontSize: '14px',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>
                </div>

                {/* ROW 3: Phone Number & Product of Interest */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                  {/* Phone Number */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '7px' }}>
                      Phone Number *
                    </label>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '8px',
                        border: '1px solid rgba(255, 255, 255, 0.14)',
                        background: 'rgba(255, 255, 255, 0.07)',
                        overflow: 'hidden',
                      }}
                    >
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 / +1 Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          background: 'transparent',
                          border: 'none',
                          color: '#ffffff',
                          fontSize: '14px',
                          outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  </div>

                  {/* Product of Interest */}
                  <div>
                    <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '7px' }}>
                      Product of Interest
                    </label>
                    <div style={{ position: 'relative' }}>
                      <select
                        name="productOfInterest"
                        value={formData.productOfInterest}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          padding: '11px 36px 11px 14px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255, 255, 255, 0.14)',
                          background: 'rgba(255, 255, 255, 0.07)',
                          color: formData.productOfInterest ? '#ffffff' : '#94a3b8',
                          fontSize: '14px',
                          outline: 'none',
                          appearance: 'none',
                          boxSizing: 'border-box',
                          cursor: 'pointer',
                        }}
                      >
                        <option value="" disabled style={{ background: '#0b0f19', color: '#94a3b8' }}>
                          Select
                        </option>
                        {productOptions.map((prod, idx) => (
                          <option key={idx} value={prod} style={{ background: '#0b0f19', color: '#ffffff' }}>
                            {prod}
                          </option>
                        ))}
                      </select>
                      <div
                        style={{
                          position: 'absolute',
                          right: '0',
                          top: '0',
                          bottom: '0',
                          width: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderLeft: '1px solid rgba(255, 255, 255, 0.14)',
                          pointerEvents: 'none',
                        }}
                      >
                        <ChevronDown size={15} color="#ffffff" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* ROW 4: Message (Full Width) */}
                <div>
                  <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 600, color: '#ffffff', marginBottom: '7px' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Additional details"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.14)',
                      background: 'rgba(255, 255, 255, 0.07)',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      fontFamily: 'inherit',
                    }}
                  />
                </div>

                {/* Error Notice */}
                {errorMessage && (
                  <div
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(239, 68, 68, 0.2)',
                      border: '1px solid rgba(239, 68, 68, 0.4)',
                      borderRadius: '8px',
                      color: '#fca5a5',
                      fontSize: '13.5px',
                      fontWeight: 600,
                      lineHeight: 1.5,
                      textAlign: 'center',
                    }}
                  >
                    ⚠️ {errorMessage}
                  </div>
                )}

                {/* Submit Button: "Submit Now" (Centered Purple-Blue Gradient Button) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    display: 'block',
                    margin: '12px auto 0 auto',
                    padding: '11px 34px',
                    fontSize: '15px',
                    fontWeight: 700,
                    color: '#ffffff',
                    background: 'linear-gradient(135deg, #a855f7 0%, #3b82f6 100%)',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: isSubmitting ? 'wait' : 'pointer',
                    boxShadow: '0 8px 22px rgba(168, 85, 247, 0.35)',
                    opacity: isSubmitting ? 0.85 : 1,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Now'}
                </button>
              </form>
            )}
          </div>
        </div>

        <style>{`
          @keyframes fadeInText {
            from { opacity: 0.3; transform: translateY(4px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 900px) {
            .office-use-case-grid {
              grid-template-columns: 1fr !important;
              padding: 24px !important;
              gap: 24px !important;
            }
          }
        `}</style>
      </section>

      {/* 4. Light-Themed Empty Separator Section (Before Footer) */}
      <section
        style={{
          background: '#ffffff',
          padding: '50px 0',
          borderTop: '1px solid var(--border-light)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="section-wrapper" style={{ paddingTop: 0, paddingBottom: 0 }}>
          {/* Light Theme Empty Container */}
          <div
            style={{
              width: '100%',
              minHeight: '20px',
            }}
          />
        </div>
      </section>
    </div>
  );
}
