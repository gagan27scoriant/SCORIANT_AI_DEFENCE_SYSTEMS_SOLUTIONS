import React from 'react';
import { Sparkles, Target, Compass, Layers, ArrowRight } from 'lucide-react';
import PillarsSection from '../components/PillarsSection';

export default function AboutUsPage() {
  return (
    <div style={{ background: 'var(--bg-primary)', color: 'var(--text-main)', minHeight: '100vh' }}>
      {/* 1. Hero Section (Home Hero Aesthetic featuring Scoriant & 3 Core Domains) */}
      <section
        id="about-hero"
        style={{
          position: 'relative',
          width: '100%',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          overflow: 'hidden',
          background: '#0b0f19',
          color: '#f8fafc',
          paddingTop: '150px',
          paddingBottom: '80px',
        }}
      >
        {/* Background Image Backdrop */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
          }}
        >
          <img
            src="/HERO/ABOUT_US.jpg"
            alt="About Scoriant Hero"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: 0.85,
              filter: 'contrast(1.05) brightness(0.95)',
            }}
          />

          {/* Dark Overlay Gradients */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: `
                linear-gradient(180deg, rgba(11, 15, 25, 0.45) 0%, rgba(11, 15, 25, 0.2) 50%, rgba(11, 15, 25, 0.65) 100%),
                linear-gradient(90deg, rgba(11, 15, 25, 0.55) 0%, rgba(11, 15, 25, 0.2) 50%, rgba(11, 15, 25, 0.45) 100%)
              `,
            }}
          />
        </div>

        {/* Hero Content */}
        <div
          className="section-wrapper"
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            paddingTop: '40px',
            paddingBottom: '20px',
          }}
        >
          <div style={{ maxWidth: '960px' }}>
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
              <Sparkles size={13} />
              <span>SCORIANT AI SOLUTIONS & ENGINEERING</span>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(34px, 4.8vw, 56px)',
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1.15,
                letterSpacing: '-0.5px',
                marginBottom: '18px',
              }}
            >
              About{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #a78bfa 0%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                SCORIANT
              </span>
            </h1>

            <p
              style={{
                fontSize: 'clamp(16px, 1.85vw, 19px)',
                color: '#cbd5e1',
                lineHeight: 1.75,
                marginBottom: '36px',
                maxWidth: '880px',
                fontWeight: 450,
              }}
            >
              Scoriant AI & Defence Systems is an engineering-driven pioneer specializing in sovereign AI platforms, air-gapped compute architectures, and mission-critical defence systems. Combining direct-to-silicon hardware acceleration with autonomous agentic intelligence, we empower aerospace agencies, defence establishments, and regulated enterprises with real-time situational awareness, carrier-grade 5G protocol stacks, and high-performance edge computing engineered for disconnected and extreme environments.
            </p>

            <div>
              <a
                href="#our-identity"
                className="btn-primary"
                style={{
                  textDecoration: 'none',
                  fontSize: '15px',
                  padding: '14px 34px',
                }}
              >
                <span>Explore Scoriant Identity</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR IDENTITY Section (Content from image + Scoriant Technical Highlights) */}
      <section
        id="our-identity"
        style={{
          padding: '85px 0 70px',
          background: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="section-wrapper">
          <div style={{ maxWidth: '980px', margin: '0 auto' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 800,
                letterSpacing: '1.8px',
                textTransform: 'uppercase',
                color: 'var(--primary-purple)',
                display: 'inline-block',
                marginBottom: '10px',
              }}
            >
              OUR IDENTITY
            </span>

            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(28px, 3.8vw, 42px)',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.2,
                letterSpacing: '-0.5px',
                marginBottom: '32px',
              }}
            >
              Empowering Organizations Through Intelligent AI Innovation
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
              <p
                style={{
                  fontSize: '16.5px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Scoriant AI Solutions is a technology-driven organization focused on developing enterprise-grade Artificial Intelligence platforms that transform data into actionable intelligence. We specialize in delivering secure, scalable, and intelligent solutions that help organizations automate processes, enhance decision-making, and unlock the full value of their digital assets.
              </p>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                Our expertise spans across Artificial Intelligence, Computer Vision, Document Intelligence, Speech Analytics, Geospatial Intelligence, and Intelligent Automation, enabling businesses, government agencies, educational institutions, and enterprises to solve complex operational challenges through cutting-edge AI technologies.
              </p>

              <p
                style={{
                  fontSize: '16.5px',
                  color: 'var(--text-muted)',
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                By combining advanced machine learning models, enterprise-grade security, multilingual capabilities, and flexible deployment architectures, Scoriant delivers innovative solutions that are built for real-world impact and long-term scalability.
              </p>
            </div>

            {/* Scoriant Core Architectural Highlights */}
            <div
              style={{
                background: 'var(--bg-subtle)',
                borderRadius: '20px',
                padding: '32px 30px',
                border: '1px solid var(--border-light)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 800,
                  color: 'var(--text-main)',
                  marginBottom: '20px',
                }}
              >
                Scoriant Core Technical Highlights
              </h3>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '20px',
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    padding: '20px',
                    borderRadius: '16px',
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-purple)', marginBottom: '6px' }}>
                    ✦ 100% Air-Gapped Data Sovereignty
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                    Hardware-enforced zero-trust architecture ensuring all telemetry and models remain strictly on host perimeter hardware with zero external phone-home dependencies.
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    padding: '20px',
                    borderRadius: '16px',
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--primary-blue)', marginBottom: '6px' }}>
                    ⚡ Sub-15ms Hardware Compilation
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                    Direct-to-silicon compilation for NVIDIA TensorRT, Intel Xeon, and AMD Xilinx FPGA accelerators engineered for real-time edge neural inference.
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-light)',
                    padding: '20px',
                    borderRadius: '16px',
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 800, color: '#10b981', marginBottom: '6px' }}>
                    🛡️ Carrier-Grade 5G & Sensor Fusion
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--text-muted)', margin: 0, lineHeight: 1.55 }}>
                    Full 5G RAN protocol stack engineering seamlessly integrated with computer vision and tactical command sensor networks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION, OUR VISION & WHAT WE DO (Compact Modern Layout) */}
      <section
        style={{
          padding: '60px 0',
          background: 'var(--bg-primary)',
          borderBottom: '1px solid var(--border-light)',
        }}
      >
        <div className="section-wrapper">
          {/* Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div className="pill-badge" style={{ marginBottom: '10px' }}>
              <Layers size={13} />
              <span>STRATEGIC FOUNDATION</span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(24px, 3.2vw, 36px)',
                fontWeight: 900,
                color: 'var(--text-main)',
                lineHeight: 1.2,
                letterSpacing: '-0.5px',
              }}
            >
              Our Purpose & Core Capabilities
            </h2>
          </div>

          {/* Top Row: Mission & Vision (2-Column Grid) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '24px',
            }}
          >
            {/* 1. Our Mission */}
            <div
              className="card-container"
              style={{
                borderRadius: '18px',
                padding: '26px 24px',
                background: 'var(--bg-card)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #7c3aed 0%, #a78bfa 100%)',
                }}
              />

              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(124, 58, 237, 0.1)',
                      border: '1px solid rgba(124, 58, 237, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(124, 58, 237, 0.12)',
                    }}
                  >
                    <Target size={22} color="var(--primary-purple)" />
                  </div>

                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 800,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      color: 'var(--primary-purple)',
                      background: 'rgba(124, 58, 237, 0.08)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    01 / PURPOSE
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                  }}
                >
                  Our Mission
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  To empower organizations with secure, intelligent, and scalable AI solutions that drive innovation, improve operational efficiency, and accelerate digital transformation.
                </p>
              </div>
            </div>

            {/* 2. Our Vision */}
            <div
              className="card-container"
              style={{
                borderRadius: '18px',
                padding: '26px 24px',
                background: 'var(--bg-card)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: 'linear-gradient(90deg, #3b82f6 0%, #60a5fa 100%)',
                }}
              />

              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '18px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 14px rgba(59, 130, 246, 0.12)',
                    }}
                  >
                    <Compass size={22} color="var(--primary-blue)" />
                  </div>

                  <span
                    style={{
                      fontSize: '10.5px',
                      fontWeight: 800,
                      letterSpacing: '1.2px',
                      textTransform: 'uppercase',
                      color: 'var(--primary-blue)',
                      background: 'rgba(59, 130, 246, 0.08)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-pill)',
                    }}
                  >
                    02 / ASPIRATION
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    lineHeight: 1.25,
                    marginBottom: '10px',
                  }}
                >
                  Our Vision
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '14.5px',
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  To become a trusted global leader in enterprise AI by building intelligent systems that seamlessly integrate advanced technology with real-world business and government needs.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Full-Width Spotlight Card: What We Do */}
          <div
            className="card-container"
            style={{
              borderRadius: '18px',
              padding: '28px 28px',
              background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-subtle) 100%)',
              border: '1px solid var(--border-light)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: '5px',
                background: 'var(--brand-gradient)',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '14px',
                flexWrap: 'wrap',
                gap: '10px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    border: '1px solid rgba(16, 185, 129, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Layers size={22} color="#10b981" />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '21px',
                    fontWeight: 900,
                    color: 'var(--text-main)',
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  What We Do
                </h3>
              </div>

              <span
                style={{
                  fontSize: '10.5px',
                  fontWeight: 800,
                  letterSpacing: '1.2px',
                  textTransform: 'uppercase',
                  color: '#10b981',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                03 / EXECUTION & PLATFORMS
              </span>
            </div>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '14.5px',
                lineHeight: 1.65,
                marginBottom: '20px',
                maxWidth: '1060px',
              }}
            >
              We design and develop AI-powered platforms that enable organizations to process information faster, automate critical workflows, improve situational awareness, and make data-driven decisions with confidence. Our solutions are engineered to support both cloud and on-premise environments, ensuring flexibility, security, and compliance for mission-critical operations.
            </p>

            {/* 4 Execution Pillars Badges */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
                gap: '12px',
              }}
            >
              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#7c3aed' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Faster Data Processing
                </span>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#3b82f6' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Critical Workflow Automation
                </span>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Enhanced Situational Awareness
                </span>
              </div>

              <div
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-light)',
                  padding: '10px 16px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Cloud & On-Premise Hybrid Security
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Pillars (Cloned from Home Page) */}
      <PillarsSection />
    </div>
  );
}
