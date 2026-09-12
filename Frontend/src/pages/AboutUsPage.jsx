import React from 'react';
import { ShieldCheck, Cpu, Zap, Lock, Award, Target, Compass, ArrowRight } from 'lucide-react';

export default function AboutUsPage() {
  const stats = [
    { label: 'Air-Gapped Compliance', value: '100%', sub: 'Zero External Cloud Dependency' },
    { label: 'Edge Inference Latency', value: '< 15ms', sub: 'Real-time Hardware Compilation' },
    { label: 'Defense & Enterprise Integrations', value: '12+', sub: 'Ruggedized Mission Compute Nodes' },
    { label: 'Operational Uptime', value: '99.99%', sub: 'High-Availability Tactical Kernels' },
  ];

  const coreValues = [
    {
      icon: <Lock size={26} color="#7c3aed" />,
      title: 'Zero-Trust Sovereignty',
      desc: 'All models, datasets, and telemetry remain strictly inside host perimeter hardware. Zero phone-home calls, AES-256 GCM encryption, and hardware-enforced RBAC.',
    },
    {
      icon: <Cpu size={26} color="#7c3aed" />,
      title: 'Hardware-Accelerated Engineering',
      desc: 'Direct-to-silicon compilation for NVIDIA TensorRT, Intel Xeon, AMD Xilinx FPGA, and Qualcomm Neural Engine without abstraction layer overhead.',
    },
    {
      icon: <Zap size={26} color="#7c3aed" />,
      title: 'Autonomous Edge Intelligence',
      desc: 'Enabling unmanned systems, tactical command nodes, and industrial telemetry sensors to evaluate, decide, and act autonomously without network connectivity.',
    },
    {
      icon: <Award size={26} color="#7c3aed" />,
      title: 'Military-Grade Reliability',
      desc: 'Engineered against MIL-STD-810H environmental standards and NIST SP 800-53 security controls to ensure fault-tolerant mission success.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Vikramaditya Sen',
      role: 'Chief Executive Officer & Co-Founder',
      bio: 'Ex-Defense R&D Lead with 16+ years specializing in sovereign edge computing, air-gapped security protocols, and mission-critical telemetry systems.',
      initials: 'VS',
    },
    {
      name: 'Ananya Deshmukh',
      role: 'Chief Technology Officer',
      bio: 'Pioneer in FPGA neural compiler acceleration and low-latency agentic orchestration. Former Lead AI Architect at defense telemetry labs.',
      initials: 'AD',
    },
    {
      name: 'Col. Rajesh Verma (Retd.)',
      role: 'Head of Defense & Security Operations',
      bio: '25+ years in tactical military command, strategic electronic warfare integration, and air-gapped defense infrastructure deployment.',
      initials: 'RV',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Foundation & Stealth R&D',
      desc: 'Scoriant founded by defense AI researchers to engineer sovereign, cloud-independent neural engine architectures.',
    },
    {
      year: '2022',
      title: 'Sub-15ms Edge Compilation Breakthrough',
      desc: 'Achieved ultra-low latency direct FPGA neural inference benchmarks for real-time sensor fusion.',
    },
    {
      year: '2023',
      title: 'Strategic Ecosystem Integrations',
      desc: 'Partnered with STACO & T-SECOND for joint hardware-level telemetry and air-gapped storage validation.',
    },
    {
      year: '2024',
      title: 'Sovereign AI Suite Deployment',
      desc: 'Full operational release of Scoriant Agentic & Computer Vision platforms for mission-critical enterprise environments.',
    },
  ];

  return (
    <div style={{ paddingTop: '90px', background: '#f8fafc', color: '#0f172a', minHeight: '100vh' }}>
      {/* 1. Hero Section */}
      <section style={{ padding: '80px 0 60px', position: 'relative', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '400px',
            background: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.08) 0%, rgba(248, 250, 252, 0) 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
          }}
        />

        <div className="section-wrapper" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(124, 58, 237, 0.1)',
              border: '1px solid rgba(124, 58, 237, 0.25)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '24px',
            }}
          >
            <ShieldCheck size={16} color="#7c3aed" />
            <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: '#7c3aed' }}>
              About Scoriant Technologies
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(32px, 4.5vw, 54px)',
              fontWeight: 900,
              letterSpacing: '-1px',
              lineHeight: 1.15,
              color: '#0f172a',
              maxWidth: '900px',
              margin: '0 auto 20px',
            }}
          >
            Pioneering Autonomous Intelligence For{' '}
            <span style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Mission-Critical Operations
            </span>
          </h1>

          <p
            style={{
              fontSize: '17px',
              color: '#475569',
              lineHeight: 1.65,
              maxWidth: '780px',
              margin: '0 auto 48px',
            }}
          >
            Scoriant engineers hardware-accelerated, 100% air-gapped AI solutions that empower defense forces, aerospace operators, and enterprise industrial networks with real-time edge intelligence and absolute data sovereignty.
          </p>

          {/* Stats Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '20px',
              maxWidth: '1100px',
              margin: '0 auto',
            }}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  textAlign: 'center',
                  boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '34px',
                    fontWeight: 900,
                    color: '#0f172a',
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#7c3aed', marginBottom: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '12px', color: '#64748b' }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section style={{ padding: '70px 0', borderTop: '1px solid #e2e8f0', background: '#ffffff' }}>
        <div className="section-wrapper">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }} className="responsive-two-col">
            {/* Mission Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid rgba(124, 58, 237, 0.25)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(124, 58, 237, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Target size={24} color="#7c3aed" />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '14px',
                }}
              >
                Our Core Mission
              </h2>
              <p style={{ color: '#475569', fontSize: '15.5px', lineHeight: 1.7 }}>
                To eliminate cloud reliance in mission-critical operations by embedding autonomous, sovereign AI directly into edge telemetry devices, unmanned platforms, and secure tactical command nodes.
              </p>
            </div>

            {/* Vision Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                border: '1px solid rgba(59, 130, 246, 0.25)',
                borderRadius: '20px',
                padding: '40px',
                boxShadow: '0 10px 30px rgba(15, 23, 42, 0.04)',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'rgba(59, 130, 246, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px',
                }}
              >
                <Compass size={24} color="#3b82f6" />
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '24px',
                  fontWeight: 800,
                  color: '#0f172a',
                  marginBottom: '14px',
                }}
              >
                Our Long-Term Vision
              </h2>
              <p style={{ color: '#475569', fontSize: '15.5px', lineHeight: 1.7 }}>
                To establish the benchmark standard for sovereign defense AI and zero-trust industrial ecosystems across allied defense networks, space telemetry systems, and heavy industrial automation worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Engineering Core Values */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #e2e8f0', background: '#f8fafc' }}>
        <div className="section-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#7c3aed' }}>
              Built For Sovereign Trust
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 900,
                color: '#0f172a',
                marginTop: '8px',
              }}
            >
              Our Engineering Principles
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {coreValues.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  boxShadow: '0 6px 20px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div style={{ marginBottom: '16px' }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '18px',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '10px',
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section style={{ padding: '80px 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="section-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#7c3aed' }}>
              Leadership & Defense Expertise
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 900,
                color: '#0f172a',
                marginTop: '8px',
              }}
            >
              Executive Leadership Team
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {leadership.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '32px 28px',
                  textAlign: 'left',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginBottom: '20px',
                    boxShadow: '0 4px 14px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  {member.initials}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 800,
                    color: '#0f172a',
                    marginBottom: '4px',
                  }}
                >
                  {member.name}
                </h3>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#7c3aed', marginBottom: '14px' }}>
                  {member.role}
                </div>
                <p style={{ color: '#475569', fontSize: '14px', lineHeight: 1.6 }}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Company Milestones Timeline */}
      <section style={{ padding: '80px 0', borderTop: '1px solid #e2e8f0', background: '#f8fafc' }}>
        <div className="section-wrapper">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', color: '#7c3aed' }}>
              Evolution & Milestones
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 900,
                color: '#0f172a',
                marginTop: '8px',
              }}
            >
              Journey to Defense Autonomy
            </h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {milestones.map((item, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '24px',
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px 28px',
                  alignItems: 'flex-start',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '20px',
                    fontWeight: 900,
                    color: '#7c3aed',
                    background: 'rgba(124, 58, 237, 0.1)',
                    padding: '8px 16px',
                    borderRadius: '10px',
                    border: '1px solid rgba(124, 58, 237, 0.2)',
                  }}
                >
                  {item.year}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#475569', fontSize: '14.5px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA Section */}
      <section style={{ padding: '70px 0 90px', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div className="section-wrapper">
          <div
            style={{
              background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
              border: '1px solid rgba(124, 58, 237, 0.3)',
              borderRadius: '24px',
              padding: '48px 40px',
              textAlign: 'center',
              boxShadow: '0 20px 40px rgba(15, 23, 42, 0.06)',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                fontWeight: 900,
                color: '#0f172a',
                marginBottom: '14px',
              }}
            >
              Deploy Sovereign Intelligence on Your Infrastructure
            </h2>
            <p style={{ color: '#475569', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6 }}>
              Contact our defense engineering team to schedule a technical deep-dive and air-gapped pilot demonstration.
            </p>

            <button
              onClick={() => alert('Briefing request initiated. Our defense team will reach out directly.')}
              style={{
                background: 'linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '14px 32px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '15px',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(124, 58, 237, 0.35)',
                transition: 'all 0.2s ease',
              }}
            >
              <span>Schedule Executive Briefing</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .responsive-two-col {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
