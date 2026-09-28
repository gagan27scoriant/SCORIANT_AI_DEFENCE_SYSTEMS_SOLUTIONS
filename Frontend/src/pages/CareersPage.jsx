import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight, ArrowLeft, UploadCloud, CheckCircle2, X, Send, Sparkles, Building, ChevronRight, FileText } from 'lucide-react';
import { useDataContext } from '../context/DataContext';
import { submitCareerApplication } from '../services/api';
import SEO from '../components/SEO';
import { buildGraph, getJobPostingSchema, getBreadcrumbSchema } from '../utils/seoSchemas';

export default function CareersPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { jobs } = useDataContext();

  const [resumeFile, setResumeFile] = useState(null);
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    educationQualification: '',
    expectedSalary: '',
    city: '',
    state: '',
    country: '',
    linkedinUrl: '',
    message: '',
    fileName: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const selectedJobDetail = jobId ? jobs.find((j) => j.id === jobId) : null;

  const handleSelectJob = (job) => {
    setSubmitted(false);
    setErrorMessage('');
    navigate(`/careers/${job.id}/apply`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToOpenings = () => {
    setSubmitted(false);
    setErrorMessage('');
    navigate('/careers');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleChange = (e) => {
    setErrorMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setResumeFile(file);
      setFormData({ ...formData, fileName: file.name });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    const jobTitle = selectedJobDetail ? selectedJobDetail.title : 'Engineering Role';
    try {
      await submitCareerApplication(
        {
          ...formData,
          jobRole: jobTitle,
        },
        resumeFile
      );
      setSubmitted(true);
    } catch (err) {
      console.error('Career application error:', err);
      setErrorMessage(err.message || 'Failed to submit application. Please provide a valid email and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render Full 2-Column Job Application Detail Page when a job is selected
  if (selectedJobDetail) {
    const job = selectedJobDetail;

    const jobSchema = buildGraph(
      getJobPostingSchema(job),
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Careers', url: '/careers' },
        { name: job.title, url: `/careers/${job.id}` }
      ])
    );

    return (
      <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '100px' }}>
        <SEO
          title={`${job.title} — Careers at Scoriant`}
          description={(job.shortDesc || job.roleOverview || '').substring(0, 160)}
          canonical={`/careers/${job.id}`}
          schema={jobSchema}
        />
        {/* 2-Column Application Layout Container */}
        <div className="section-wrapper" style={{ paddingTop: '20px', paddingBottom: 0 }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
              gap: '32px',
              maxWidth: '1280px',
              margin: '0 auto',
              alignItems: 'start',
            }}
          >
            {/* LEFT COLUMN: Job Overview & Description Card */}
            <div
              className="card-container"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '24px',
                padding: '36px 34px',
                boxShadow: 'var(--shadow-card)',
                display: 'flex',
                flexDirection: 'column',
                gap: '26px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Ambient Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)',
                }}
              />

              {/* Job Title & Metadata */}
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1px solid rgba(124, 58, 237, 0.25)',
                    color: 'var(--primary-purple)',
                    fontSize: '11.5px',
                    fontWeight: 800,
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: 'var(--radius-pill)',
                    marginBottom: '14px',
                  }}
                >
                  <Briefcase size={12} />
                  <span>{job.type} • {job.location}</span>
                </div>

                <h1
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '26px',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    marginBottom: '14px',
                    lineHeight: 1.25,
                    letterSpacing: '-0.3px',
                  }}
                >
                  {job.title}
                </h1>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', paddingTop: '10px', borderTop: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <MapPin size={16} color="var(--primary-purple)" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, width: '85px', color: 'var(--text-subtle)' }}>Location</span>
                    <span>—</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{job.location}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Briefcase size={16} color="var(--primary-blue)" style={{ flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, width: '85px', color: 'var(--text-subtle)' }}>Job Type</span>
                    <span>—</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{job.type}</span>
                  </div>
                </div>
              </div>

              {/* Role Overview */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '10px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  Role Overview
                </h3>
                <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                  {job.roleOverview}
                </p>
              </div>

              {/* Key Responsibilities */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '12px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  Key Responsibilities
                </h3>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {job.keyResponsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              {/* Required Qualifications */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    marginBottom: '12px',
                    letterSpacing: '-0.2px',
                  }}
                >
                  Required Qualifications
                </h3>
                <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                  {job.requiredQualifications.map((qual, idx) => (
                    <li key={idx}>{qual}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* RIGHT COLUMN: "Apply for this Opportunity" Application Form Card */}
            <div
              className="card-container"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-light)',
                borderRadius: '24px',
                padding: '36px 34px',
                boxShadow: 'var(--shadow-card)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top Ambient Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)',
                }}
              />

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div
                    style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '50%',
                      background: 'rgba(16, 185, 129, 0.1)',
                      color: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px auto',
                    }}
                  >
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: 800, color: 'var(--text-main)', marginBottom: '12px' }}>
                    Application Submitted!
                  </h3>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '440px', margin: '0 auto 24px auto' }}>
                    Thank you for applying for <strong>{job.title}</strong>. Our engineering talent team will review your application and respond shortly.
                  </p>
                  <button onClick={handleBackToOpenings} className="btn-primary">
                    Return to Open Positions
                  </button>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      border: '1px solid rgba(124, 58, 237, 0.25)',
                      color: 'var(--primary-purple)',
                      fontSize: '11.5px',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '4px 14px',
                      borderRadius: 'var(--radius-pill)',
                      marginBottom: '12px',
                    }}
                  >
                    <Sparkles size={12} />
                    <span>APPLICATION FORM</span>
                  </div>

                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '23px',
                      fontWeight: 900,
                      color: 'var(--text-main)',
                      marginBottom: '6px',
                      letterSpacing: '-0.3px',
                    }}
                  >
                    Apply for this Opportunity
                  </h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', marginBottom: '22px', lineHeight: 1.5 }}>
                    Submit your credentials for <strong>{job.title}</strong> to Scoriant talent team.
                  </p>

                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Name */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          background: '#f8fafc',
                          fontSize: '14px',
                          color: 'var(--text-main)',
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Phone & Email Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          Phone *
                        </label>
                        <div style={{ display: 'flex', alignItems: 'center', background: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '10px', overflow: 'hidden' }}>
                          <span style={{ padding: '0 10px', fontSize: '13px', color: 'var(--text-subtle)', fontWeight: 600, borderRight: '1px solid #cbd5e1', background: '#f1f5f9' }}>
                            🇮🇳 +91
                          </span>
                          <input
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone number"
                            style={{
                              width: '100%',
                              padding: '11px',
                              border: 'none',
                              background: 'transparent',
                              fontSize: '14px',
                              color: 'var(--text-main)',
                              outline: 'none',
                            }}
                          />
                        </div>
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Email address"
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {/* Job Role */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Job Role
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={job.title}
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          background: '#f1f5f9',
                          fontSize: '14px',
                          color: '#475569',
                          fontWeight: 700,
                          outline: 'none',
                        }}
                      />
                    </div>

                    {/* Education Qualification & Expected Salary Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          Education Qualification *
                        </label>
                        <input
                          type="text"
                          name="educationQualification"
                          required
                          value={formData.educationQualification}
                          onChange={handleChange}
                          placeholder="e.g. B.Tech / M.Tech / MCA"
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          Expected Salary *
                        </label>
                        <input
                          type="text"
                          name="expectedSalary"
                          required
                          value={formData.expectedSalary}
                          onChange={handleChange}
                          placeholder="e.g. ₹18 LPA / $120k"
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {/* City & State Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          City
                        </label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          placeholder="City"
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          State
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="State"
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {/* Country & LinkedIn Profile URL Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          Country
                        </label>
                        <input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          placeholder="Country"
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                          LinkedIn Profile URL
                        </label>
                        <input
                          type="url"
                          name="linkedinUrl"
                          value={formData.linkedinUrl}
                          onChange={handleChange}
                          placeholder="https://linkedin.com/in/..."
                          style={{
                            width: '100%',
                            padding: '11px 14px',
                            borderRadius: '10px',
                            border: '1px solid #cbd5e1',
                            background: '#f8fafc',
                            fontSize: '14px',
                            color: 'var(--text-main)',
                            outline: 'none',
                          }}
                        />
                      </div>
                    </div>

                    {/* Message / Cover Note */}
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us more about yourself..."
                        style={{
                          width: '100%',
                          padding: '11px 14px',
                          borderRadius: '10px',
                          border: '1px solid #cbd5e1',
                          background: '#f8fafc',
                          fontSize: '14px',
                          color: 'var(--text-main)',
                          outline: 'none',
                          resize: 'vertical',
                        }}
                      />
                    </div>

                    {/* Attach Resume / CV */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', margin: '4px 0 10px 0', flexWrap: 'wrap' }}>
                      <label style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                        Attach Resume (PDF/DOC):
                      </label>
                      <div style={{ position: 'relative', display: 'inline-block' }}>
                        <button
                          type="button"
                          className="btn-secondary"
                          style={{
                            padding: '8px 18px',
                            borderRadius: '8px',
                            fontSize: '13px',
                            fontWeight: 700,
                            cursor: 'pointer',
                          }}
                        >
                          Choose File
                        </button>
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                          style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: 0,
                            cursor: 'pointer',
                            width: '100%',
                            height: '100%',
                          }}
                        />
                      </div>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500 }}>
                        {formData.fileName ? formData.fileName : 'No file chosen*'}
                      </span>
                    </div>

                    {/* Error Notice */}
                    {errorMessage && (
                      <div
                        style={{
                          padding: '12px 16px',
                          background: 'rgba(239, 68, 68, 0.1)',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          borderRadius: '10px',
                          color: '#ef4444',
                          fontSize: '13.5px',
                          fontWeight: 600,
                          lineHeight: 1.5,
                        }}
                      >
                        ⚠️ {errorMessage}
                      </div>
                    )}

                    {/* Submit Application Button */}
                    <div style={{ marginTop: '10px' }}>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary"
                        style={{
                          width: '100%',
                          padding: '13px 32px',
                          fontSize: '15px',
                          fontWeight: 700,
                          borderRadius: '10px',
                          justifyContent: 'center',
                        }}
                      >
                        <span>{isSubmitting ? 'Submitting Application...' : 'Submit Application'}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default Careers Page Layout (Hero + Openings List Grid)
  const careersCatalogSchema = buildGraph(
    getBreadcrumbSchema([
      { name: 'Home', url: '/' },
      { name: 'Careers', url: '/careers' }
    ])
  );

  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      <SEO
        title="Careers at Scoriant | Engineering Defence & Edge AI"
        description="Join Scoriant to engineer mission-critical AI, edge hardware acceleration, autonomous agentic platforms, and 5G network stacks."
        canonical="/careers"
        image="/HERO/CARRER_PAGE.jpg"
        schema={careersCatalogSchema}
      />
      {/* 1. Hero Section */}
      <section
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '140px',
          paddingBottom: '45px',
          background: '#0b0f19',
          color: '#f8fafc',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <img
            src="/HERO/CARRER_PAGE.jpg"
            alt="Scoriant Careers Hero"
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

        <div className="section-wrapper" style={{ position: 'relative', zIndex: 10, textAlign: 'left', paddingTop: '10px', paddingBottom: '10px' }}>
          <div style={{ maxWidth: '820px' }}>
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
                borderRadius: 'var(--radius-pill)',
                marginBottom: '20px',
              }}
            >
              <Briefcase size={13} />
              <span>CAREERS & CULTURE</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(32px, 4.5vw, 54px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
                marginBottom: '18px',
              }}
            >
              Careers at{' '}
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
                fontSize: 'clamp(16px, 1.9vw, 19.5px)',
                color: '#cbd5e1',
                lineHeight: 1.65,
                margin: 0,
                maxWidth: '780px',
              }}
            >
              Join a team of engineers, AI researchers, and data scientists building mission-critical technology for the future of intelligence and defence.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Current Openings Section */}
      <section
        style={{
          padding: '45px 0 100px',
          background: 'var(--bg-secondary)',
        }}
      >
        <div className="section-wrapper">
          <div style={{ textAlign: 'left', width: '80%', maxWidth: '1100px', margin: '0 auto 40px auto' }}>
            <div className="pill-badge" style={{ marginBottom: '14px' }}>
              <span>ACTIVE HIRING</span>
            </div>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.2,
                marginBottom: '12px',
                letterSpacing: '-0.5px',
              }}
            >
              Current Openings ({jobs.length})
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', margin: 0 }}>
              Explore active positions across our engineering hubs in India and Delaware, USA.
            </p>
          </div>

          {/* Job Openings List Grid */}
          <div
            style={{
              width: '80%',
              maxWidth: '1100px',
              margin: '0 auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}
          >
            {jobs.map((job) => (
              <div
                key={job.id}
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  borderRadius: '24px',
                  padding: '32px 36px',
                  boxShadow: '0 20px 48px -10px rgba(15, 23, 42, 0.12), 0 4px 16px rgba(124, 58, 237, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                className="card-container"
              >
                {/* Top Accent Line */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3.5px',
                    background: 'linear-gradient(90deg, #7c3aed 0%, #3b82f6 100%)',
                  }}
                />

                {/* Header Row: Department Pill & Badge */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '12px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 800,
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      color: 'var(--primary-purple)',
                      background: 'rgba(124, 58, 237, 0.08)',
                      border: '1px solid rgba(124, 58, 237, 0.2)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    {job.department}
                  </span>

                  <span
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 800,
                      color: '#10b981',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      textTransform: 'uppercase',
                    }}
                  >
                    ● {job.badge}
                  </span>
                </div>

                {/* Job Title */}
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '22px',
                    fontWeight: 800,
                    color: 'var(--text-main)',
                    lineHeight: 1.3,
                    letterSpacing: '-0.3px',
                    margin: 0,
                  }}
                >
                  {job.title}
                </h3>

                {/* 2 Rows: Location & Job Type */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={15} color="var(--primary-purple)" />
                    <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Location</span>
                    <span>—</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{job.location}</span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Briefcase size={15} color="var(--primary-blue)" />
                    <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Job Type</span>
                    <span>—</span>
                    <span style={{ fontWeight: 700, color: 'var(--text-main)' }}>{job.type}</span>
                  </div>
                </div>

                {/* Tags & Action Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '20px',
                    borderTop: '1px solid var(--border-light)',
                    flexWrap: 'wrap',
                    gap: '16px',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {job.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          color: 'var(--text-main)',
                          background: 'var(--bg-subtle)',
                          border: '1px solid var(--border-light)',
                          padding: '4px 12px',
                          borderRadius: '8px',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => handleSelectJob(job)}
                    className="btn-primary"
                    style={{
                      fontSize: '14px',
                      padding: '10px 24px',
                      fontWeight: 700,
                    }}
                  >
                    <span>Apply Now</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
