import React, { useState } from 'react';
import { Send, FileText, Globe, Eye, Mic, Sparkles, RefreshCw, CheckCircle2, AlertTriangle, ShieldCheck, Search } from 'lucide-react';

export default function InteractiveDemos() {
  const [activeTab, setActiveTab] = useState('rag');

  /* RAG Simulator State */
  const [queryInput, setQueryInput] = useState('');
  const [ragHistory, setRagHistory] = useState([
    {
      sender: 'user',
      text: 'What are the air-gapped operational features of Scoriant Secure Storage?'
    },
    {
      sender: 'bot',
      text: 'Scoriant Secure Storage supports 100% air-gapped operations with end-to-end data encryption, edge hardware containerization, and failover redundancy. Data remains protected without requiring any internet phone-home connections.',
      citations: ['SECURE_STORAGE_SPEC.pdf - Page 4', 'AIR_GAP_SECURITY_WHITE_PAPER.pdf - Section 2.1']
    }
  ]);
  const [isProcessingRag, setIsProcessingRag] = useState(false);

  /* Geo-Spatial Slider State */
  const [sliderPos, setSliderPos] = useState(50);

  /* Surveillance Stream State */
  const [activeCam, setActiveCam] = useState('Gate Alpha');
  const [detectionFilter, setDetectionFilter] = useState('all');

  const handleRagSubmit = (e) => {
    e?.preventDefault();
    if (!queryInput.trim() || isProcessingRag) return;

    const userText = queryInput;
    setQueryInput('');
    setRagHistory((prev) => [...prev, { sender: 'user', text: userText }]);
    setIsProcessingRag(true);

    setTimeout(() => {
      let botResponse = `Based on Scoriant's vector indexing across defence specifications: "${userText}" is addressed using enterprise-grade encryption, on-premise model inference, and role-based access controls (RBAC).`;
      let citations = ['SCORIANT_ENTERPRISE_ARCHITECTURE.pdf - Page 12', 'AGENTIC_AI_GOVERNANCE.pdf - Section 5.3'];

      if (userText.toLowerCase().includes('satellite') || userText.toLowerCase().includes('geospatial')) {
        botResponse = 'Scoriant Geo-Spatial Change Detection uses transformer deep learning to perform pixel-level comparison across multi-temporal satellite imagery, identifying land cover shifts, urban expansion, and infrastructure modifications.';
        citations = ['GEOSPATIAL_AI_SPEC.pdf - Page 8'];
      } else if (userText.toLowerCase().includes('video') || userText.toLowerCase().includes('surveillance')) {
        botResponse = 'The Smart Surveillance Platform analyzes CCTV feeds in real time for object tracking, ANPR vehicle recognition, cross-camera person identification, and instant incident summarization.';
        citations = ['SMART_SURVEILLANCE_DOC.pdf - Page 15'];
      }

      setRagHistory((prev) => [
        ...prev,
        { sender: 'bot', text: botResponse, citations }
      ]);
      setIsProcessingRag(false);
    }, 900);
  };

  return (
    <section id="interactive-demos" className="section-wrapper" style={{ padding: '100px 24px' }}>
      <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px auto' }}>
        <div className="pill-badge" style={{ marginBottom: '16px' }}>
          <Sparkles size={14} />
          <span>Hands-On Interactive AI Sandbox</span>
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
          Test Drive Scoriant Autonomous AI Systems
        </h2>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)' }}>
          Experience our Retrieval-Augmented Generation (RAG), Geo-Spatial Change Detection, and Smart Video Analytics engines live in your browser.
        </p>
      </div>

      {/* Simulator Nav Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '36px',
          flexWrap: 'wrap',
        }}
      >
        <button
          onClick={() => setActiveTab('rag')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '14px',
            fontWeight: 600,
            border: activeTab === 'rag' ? 'none' : '1px solid var(--border-light)',
            background: activeTab === 'rag' ? 'var(--brand-gradient)' : 'var(--bg-card)',
            color: activeTab === 'rag' ? '#ffffff' : 'var(--text-muted)',
            cursor: 'pointer',
            boxShadow: activeTab === 'rag' ? 'var(--brand-glow)' : 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <FileText size={16} />
          <span>Document RAG Simulator</span>
        </button>

        <button
          onClick={() => setActiveTab('geo')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '14px',
            fontWeight: 600,
            border: activeTab === 'geo' ? 'none' : '1px solid var(--border-light)',
            background: activeTab === 'geo' ? 'var(--brand-gradient)' : 'var(--bg-card)',
            color: activeTab === 'geo' ? '#ffffff' : 'var(--text-muted)',
            cursor: 'pointer',
            boxShadow: activeTab === 'geo' ? 'var(--brand-glow)' : 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <Globe size={16} />
          <span>Geo-Spatial Slider</span>
        </button>

        <button
          onClick={() => setActiveTab('surveillance')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            borderRadius: 'var(--radius-pill)',
            fontSize: '14px',
            fontWeight: 600,
            border: activeTab === 'surveillance' ? 'none' : '1px solid var(--border-light)',
            background: activeTab === 'surveillance' ? 'var(--brand-gradient)' : 'var(--bg-card)',
            color: activeTab === 'surveillance' ? '#ffffff' : 'var(--text-muted)',
            cursor: 'pointer',
            boxShadow: activeTab === 'surveillance' ? 'var(--brand-glow)' : 'none',
            transition: 'all 0.2s ease',
          }}
        >
          <Eye size={16} />
          <span>Video Analytics Sandbox</span>
        </button>
      </div>

      {/* Simulator Container */}
      <div
        className="card-container"
        style={{
          borderRadius: '24px',
          minHeight: '480px',
          padding: '36px',
          background: 'var(--bg-card)',
        }}
      >
        {/* TAB 1: RAG CHATBOT SIMULATOR */}
        {activeTab === 'rag' && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '420px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Interactive Document Intelligence RAG Engine
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>
                  Vector Semantic Search with Direct Page Citations
                </p>
              </div>
              <span style={{ fontSize: '12px', background: '#eef2ff', color: '#4f46e5', fontWeight: 700, padding: '4px 12px', borderRadius: '10px' }}>
                Vector Indexing Active
              </span>
            </div>

            {/* Chat Box History */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                padding: '16px',
                background: 'var(--bg-subtle)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                marginBottom: '20px',
                maxHeight: '320px',
              }}
            >
              {ragHistory.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '82%',
                    background: msg.sender === 'user' ? 'var(--brand-gradient)' : 'var(--bg-card)',
                    color: msg.sender === 'user' ? '#ffffff' : 'var(--text-main)',
                    padding: '14px 20px',
                    borderRadius: '18px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.05)',
                    border: msg.sender === 'bot' ? '1px solid var(--border-light)' : 'none',
                  }}
                >
                  <p style={{ fontSize: '14.5px', lineHeight: 1.6 }}>{msg.text}</p>
                  {msg.citations && (
                    <div style={{ marginTop: '10px', paddingTop: '8px', borderTop: '1px solid var(--border-light)' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary-purple)' }}>
                        Source Citations:
                      </span>
                      {msg.citations.map((c, i) => (
                        <div key={i} style={{ fontSize: '11.5px', color: 'var(--text-subtle)', marginTop: '2px' }}>
                          📄 {c}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {isProcessingRag && (
                <div style={{ alignSelf: 'flex-start', fontSize: '13px', color: 'var(--primary-purple)', fontWeight: 600 }}>
                  ⚡ Performing semantic vector lookup across defence corpus...
                </div>
              )}
            </div>

            {/* Suggested Prompts */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--text-subtle)', alignSelf: 'center' }}>Try Prompt:</span>
              {[
                'How does air-gapped security work?',
                'Tell me about satellite change detection',
                'What video analytics features exist?'
              ].map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQueryInput(p);
                  }}
                  style={{
                    fontSize: '12px',
                    background: 'var(--bg-subtle)',
                    border: '1px solid var(--border-light)',
                    color: 'var(--text-main)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-pill)',
                    cursor: 'pointer',
                  }}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form onSubmit={handleRagSubmit} style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                value={queryInput}
                onChange={(e) => setQueryInput(e.target.value)}
                placeholder="Ask a question about Scoriant's products or air-gapped specs..."
                style={{
                  flex: 1,
                  padding: '14px 20px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--bg-primary)',
                  color: 'var(--text-main)',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button type="submit" className="btn-primary" style={{ padding: '0 24px' }}>
                <Send size={16} />
                <span>Submit Query</span>
              </button>
            </form>
          </div>
        )}

        {/* TAB 2: GEOSPATIAL BEFORE / AFTER SLIDER */}
        {activeTab === 'geo' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Interactive Geo-Spatial Change Detection Slider
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>
                  Drag the slider to compare baseline timeline vs automated AI change extraction map.
                </p>
              </div>
              <span style={{ fontSize: '12px', background: '#ecfdf5', color: '#059669', fontWeight: 700, padding: '4px 12px', borderRadius: '10px' }}>
                Pixel-Level Match: 99.2%
              </span>
            </div>

            {/* Image Comparison Container */}
            <div
              style={{
                position: 'relative',
                height: '360px',
                borderRadius: '16px',
                overflow: 'hidden',
                userSelect: 'none',
                border: '1px solid var(--border-light)',
              }}
            >
              {/* After Image (Background) */}
              <img
                src="/HERO/PRODUCTS/GEOSPATIAL-01.jpg"
                alt="After"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(15,23,42,0.85)',
                  color: '#ffffff',
                  fontSize: '12px',
                  fontWeight: 700,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                }}
              >
                Timeline B (Recent Satellite Scan)
              </div>

              {/* Before Image (Clipped Overlay) */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: `${sliderPos}%`,
                  overflow: 'hidden',
                }}
              >
                <img
                  src="/HERO/PRODUCTS/SECURE_STORAGE.jpg"
                  alt="Before"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    maxWidth: 'none',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    background: 'rgba(124, 58, 237, 0.9)',
                    color: '#ffffff',
                    fontSize: '12px',
                    fontWeight: 700,
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                  }}
                >
                  Timeline A (Baseline Image)
                </div>
              </div>

              {/* Vertical Slider Handle Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  left: `${sliderPos}%`,
                  width: '4px',
                  background: '#ffffff',
                  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
                  transform: 'translateX(-50%)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'var(--brand-gradient)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: 800,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                  }}
                >
                  ↔
                </div>
              </div>
            </div>

            {/* Slider Control Range */}
            <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-subtle)' }}>Timeline A</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                style={{ flex: 1, accentColor: 'var(--primary-purple)', cursor: 'pointer' }}
              />
              <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-subtle)' }}>Timeline B</span>
            </div>
          </div>
        )}

        {/* TAB 3: SURVEILLANCE VIDEO ANALYTICS SANDBOX */}
        {activeTab === 'surveillance' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)' }}>
                  Smart Surveillance Live AI Feed Simulation
                </h4>
                <p style={{ fontSize: '13px', color: 'var(--text-subtle)' }}>
                  Real-time object classification, ANPR vehicle tagger, and intruder detection.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Gate Alpha', 'Warehouse 3', 'Perimeter Wall'].map((cam) => (
                  <button
                    key={cam}
                    onClick={() => setActiveCam(cam)}
                    style={{
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-pill)',
                      fontSize: '12px',
                      fontWeight: 600,
                      border: 'none',
                      background: activeCam === cam ? 'var(--brand-gradient)' : 'var(--bg-subtle)',
                      color: activeCam === cam ? '#ffffff' : 'var(--text-muted)',
                      cursor: 'pointer',
                    }}
                  >
                    {cam}
                  </button>
                ))}
              </div>
            </div>

            <div
              style={{
                position: 'relative',
                height: '360px',
                borderRadius: '16px',
                overflow: 'hidden',
                background: '#090d16',
                border: '1px solid var(--border-light)',
              }}
            >
              <img
                src="/HERO/PRODUCTS/SMART_SURVELLIENCE.jpg"
                alt="Camera Stream"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* Simulated AI Bounding Boxes */}
              <div
                style={{
                  position: 'absolute',
                  top: '25%',
                  left: '20%',
                  width: '120px',
                  height: '140px',
                  border: '2px solid #10b981',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.1)',
                }}
              >
                <div style={{ background: '#10b981', color: '#ffffff', fontSize: '10px', fontWeight: 800, padding: '2px 6px' }}>
                  PERSON (98.4%)
                </div>
              </div>

              <div
                style={{
                  position: 'absolute',
                  top: '40%',
                  right: '25%',
                  width: '180px',
                  height: '110px',
                  border: '2px solid #3b82f6',
                  borderRadius: '6px',
                  background: 'rgba(59, 130, 246, 0.1)',
                }}
              >
                <div style={{ background: '#3b82f6', color: '#ffffff', fontSize: '10px', fontWeight: 800, padding: '2px 6px' }}>
                  VEHICLE (KA-01-AB-1234)
                </div>
              </div>

              {/* Live Overlay telemetry */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '12px 20px',
                  borderRadius: '12px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#ffffff',
                }}
              >
                <span style={{ fontSize: '13px', fontWeight: 700 }}>Stream: {activeCam}</span>
                <span style={{ fontSize: '13px', color: '#10b981', fontWeight: 700 }}>FPS: 60.0 | Latency: 12ms</span>
                <span style={{ fontSize: '13px', color: '#94a3b8' }}>Model: YOLOv8-X TensorRT</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
