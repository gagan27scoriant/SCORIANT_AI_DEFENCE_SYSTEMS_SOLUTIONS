export const PILLARS_DATA = [
  {
    id: "pillar-01",
    tag: "Pillar 01",
    title: "Defence Engineering Systems",
    subtitle: "Enterprise Mission-Critical Infrastructure",
    desc: "Enterprise-grade infrastructure engineered for secure, scalable, and mission-critical operations across cloud, edge, on-premise, and air-gapped defence environments.",
    bullets: [
      "Air-gapped and offline operational support",
      "High-availability and resilient architecture",
      "Enterprise-grade security & RBAC access control",
      "Built for extreme & disconnected environments"
    ],
    gradient: "linear-gradient(135deg, #1e293b, #0f172a)",
    icon: "Shield"
  },
  {
    id: "pillar-02",
    tag: "Pillar 02",
    title: "Agentic AI Systems",
    subtitle: "Autonomous Context-Aware AI",
    desc: "Advanced autonomous AI systems that perceive, reason, plan, and act across complex operational environments. Designed to integrate human expertise with machine intelligence for faster, more informed decision-making.",
    bullets: [
      "Autonomous planning & execution workflows",
      "Context-aware reasoning & adaptive execution",
      "Human-in-the-loop governance & oversight"
    ],
    gradient: "linear-gradient(135deg, #4c1d95, #6d28d9)",
    icon: "Cpu"
  },
  {
    id: "pillar-03",
    tag: "Pillar 03",
    title: "5G Engineering & Network Stack",
    subtitle: "Carrier-Grade RAN & Protocol Stack Architecture",
    desc: "Comprehensive 5G radio access network stack engineering—spanning CU/DU architecture, Upper/Lower PHY layers, and protocol stacks built for ultra-low latency, high throughput, and mission-critical reliability.",
    bullets: [
      "Carrier-grade 5G RAN & protocol stack architecture",
      "CU, DU & PHY layer direct-to-silicon compilation",
      "Ultra-low latency & mission-critical reliability"
    ],
    gradient: "linear-gradient(135deg, #0284c7, #38bdf8)",
    icon: "Radio"
  }
];

export const PRODUCTS_DATA = [
  {
    id: "secure-storage",
    category: "Infrastructure",
    icon: "Server",
    title: "Secure Storage & Deployment Platform",
    short: "Enterprise-Grade Secure Storage Box & Air-Gapped Infrastructure for AI, Data, and Mission-Critical Deployments.",
    detail: `Secure Storage & Deployment Platform is a defence-grade sovereign secure storage box and infrastructure ecosystem engineered for high-assurance storage, automated model packaging, and air-gapped deployment of mission-critical AI workloads across hostile and extreme operational environments.

Built specifically for aerospace agencies, defence establishments, intelligence services, and regulated enterprises, the platform completely eliminates external telemetry beacons, cloud dependencies, and third-party phone-home vulnerabilities. It enforces direct-to-silicon AES-256-GCM cryptographic encryption with post-quantum key isolation, immutable write-once audit logging, and hardware-security-module (HSM) clearance boundaries.

The deployment subsystem utilizes sovereign OCI-compliant container runtimes that encapsulate quantized LLMs, computer vision weights, execution binaries, and runtime dependencies into standalone deployable containers. High-throughput PCIe 5.0 and direct DMA NVMe pipelines sustain multi-gigabyte-per-second I/O throughput, guaranteeing zero latency bottlenecks during high-concurrency neural inference.

Across tactical field hubs, mobile command vehicles, and forward operating bases, the platform establishes autonomous peer-to-peer data replication over local area networks (LAN) and private 5G mesh architectures without requiring connection to central master servers, ensuring unbroken computational survivability.`,
    architecturePillars: [
      {
        step: "01",
        title: "Cryptographic Storage & Ingestion",
        desc: "Hardware-accelerated AES-256-GCM disk encryption with post-quantum ready key isolation, immutable write-once audit logging, and automated partitioned volume integrity checks."
      },
      {
        step: "02",
        title: "Model Containerization & Packaging",
        desc: "Secure, air-gapped container runtimes (OCI compliant) that package quantized LLM/CV weights, dependencies, and inference engines into self-contained deployable units."
      },
      {
        step: "03",
        title: "Edge Mesh & Local Telemetry",
        desc: "Autonomous peer-to-peer data replication across tactical local area networks (LAN) and private 5G mesh without requiring internet or external master servers."
      }
    ],
    deploymentCapabilities: [
      {
        title: "100% Air-Gapped Autonomy",
        desc: "Runs completely disconnected with zero external cloud dependencies or telemetry beacons."
      },
      {
        title: "Tactical & Ruggedized Nodes",
        desc: "Direct support for MIL-SPEC rugged edge servers, mobile command vehicles, and embedded units."
      },
      {
        title: "Zero-Trust Cryptographic RBAC",
        desc: "Granular multi-level classification clearance, role access partitioning, and hardware security module (HSM) support."
      },
      {
        title: "High-Throughput Local Bus",
        desc: "Optimized PCIe 5.0 and NVMe direct storage pipes ensuring sustained multi-gigabyte/s inference throughput."
      }
    ],
    bullets: [
      "Air-Gapped & Offline Operation Capability",
      "End-to-End High Performance Data Encryption",
      "Secure Data-in-Transit & Protocol Protection",
      "Edge & Embedded Hardware Deployment Support",
      "Redundant Failover & Resilience Mechanisms",
      "Secure AI Model Hosting & Model Protection",
      "Mission-Critical Application Containerization",
      "High-Throughput Analytics Workload Engine"
    ],
    image: "/HERO/PRODUCTS/SECURE_STORAGE.jpg",
    badge: "Air-Gapped Ready",
    specs: [
      { label: "Deployment", value: "Air-Gapped / On-Prem" },
      { label: "Latency", value: "< 15ms Edge Inference" },
      { label: "Security", value: "AES-256 & Hardware RBAC" }
    ]
  },
  {
    id: "ai-knowledge-studio",
    category: "Agentic AI",
    icon: "BrainCircuit",
    title: "AI Knowledge Studio",
    short: "Intelligence Platform Transforming Meetings into Actionable Knowledge Through Agent-Driven AI Workflows.",
    detail: `AI Knowledge Studio is a sovereign multimodal intelligence system designed to ingest, process, and analyze complex enterprise meetings, tactical voice communications, high-definition video feeds, and multi-format classified documents into unified, searchable operational intelligence.

The platform utilizes an autonomous query-first agent coordinator that classifies operational intent and dynamically orchestrates specialized neural sub-agents. These sub-agents perform real-time acoustic beamforming, multi-speaker diarization, accent-resilient speech recognition, deep semantic entity indexing, and automated action-item matrix synthesis.

Engineered with comprehensive multilingual and dialect adaptation, the system provides native recognition tuned for 14+ regional Indian languages and international dialects, handling acronym-dense military jargon, engineering nomenclature, and operational codes with exceptional transcription fidelity.

Deployable entirely on internal enterprise server clusters, GPU stacks, or sovereign air-gapped networks, AI Knowledge Studio guarantees strict departmental data partitioning. Executive deliberations, classified briefings, and engineering reviews remain strictly compartmentalized, enabling instant cross-meeting conversational search and verifiable citations with zero data leakage.`,
    architecturePillars: [
      {
        step: "01",
        title: "Multimodal Acoustic & Vision Ingestion",
        desc: "Ingests raw audio, multi-stream video, scanned briefs, and slide decks, applying advanced acoustic noise reduction and video frame extraction."
      },
      {
        step: "02",
        title: "Agentic Tool Router & Diarization",
        desc: "Multi-agent coordinator identifies distinct speaker biometric footprints, generates precise time-coded transcripts, and indexes semantic concepts."
      },
      {
        step: "03",
        title: "Synthesis, Translation & Export",
        desc: "Context-aware LLM generates executive briefs, action-item matrices, and multilingual translations, outputting formal reports directly into enterprise systems."
      }
    ],
    deploymentCapabilities: [
      {
        title: "On-Premises GPU Server Stacks",
        desc: "Optimized for NVIDIA TensorRT-LLM and local CUDA clusters for high-concurrency transcription & inference."
      },
      {
        title: "Multi-Lingual & Accent Adaptation",
        desc: "Native acoustic models tuned for 12+ regional Indian and global accents, military jargon, and technical terminology."
      },
      {
        title: "Departmental Data Sovereignty",
        desc: "Strict compartmentalized access; executive meetings and engineering logs remain isolated within assigned teams."
      },
      {
        title: "Real-Time & Batch Processing",
        desc: "Supports sub-second live stream transcription as well as multi-terabyte asynchronous historical archive processing."
      }
    ],
    bullets: [
      "Audio, Video, Document & Image Deep Processing",
      "Real-Time Speech-to-Text & Diarization",
      "Speaker Identification & Conversation Separation",
      "Interactive Document & Transcript Q&A",
      "Multilingual Translation & Accent Adaptation",
      "Text-to-Speech & Executive Artifact Export"
    ],
    image: "/HERO/PRODUCTS/AI_KNOWLEDGE_STUDIO.jpg",
    badge: "Multi-Modal AI",
    specs: [
      { label: "Modalities", value: "Audio, Video, Docs, Scans" },
      { label: "Architecture", value: "Agentic Tool Router" },
      { label: "Languages", value: "12+ Regional Accents" }
    ]
  },
  {
    id: "document-intelligence",
    category: "Document AI",
    icon: "FileText",
    title: "Document Intelligence Chatbot",
    short: "AI-Powered Knowledge Platform for Conversational Access to Enterprise Documents.",
    detail: `The Document Intelligence Chatbot transforms massive, heterogeneous enterprise document archives, technical manuals, contracts, and classified dossiers into an interactive, high-precision conversational knowledge intelligence ecosystem.

The system combines layout-aware optical character recognition (OCR), multi-column text reconstruction, dense semantic vector embeddings, and BM25 lexical search into a hybrid Retrieval-Augmented Generation (RAG) architecture. It allows analysts, command personnel, and researchers to interrogate millions of pages in natural language and receive synthesized answers within seconds.

Crucially, the platform enforces strict grounding guardrails: every generated response is linked to exact physical source pages, bounding-box coordinates, and verbatim snippets. Analysts can click directly into the integrated side-by-side document viewer to audit the physical source of each fact, completely eliminating model hallucination risks in high-stakes environments.

Equipped with automated directory watchers, role-based document governance, and air-gapped local model execution (supporting Llama 3, Mistral, and Qwen weights), the platform indexes newly deposited manuals and classified files continuously while enforcing strict departmental clearance boundaries.`,
    architecturePillars: [
      {
        step: "01",
        title: "Layout-Aware OCR & Parsing",
        desc: "Parses complex tables, diagrams, scanned forms, PDFs, DOCX, and PPTX files while preserving structural context and hierarchy."
      },
      {
        step: "02",
        title: "Hybrid Vector & Keyword Indexing",
        desc: "Combines dense neural embeddings with BM25 lexical search to achieve high recall across specialized technical terminology and codes."
      },
      {
        step: "03",
        title: "Source-Grounded Citation Generation",
        desc: "Retrieves top context segments and executes constrained generation with exact page and bounding-box citation rendering."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Air-Gapped & Sovereign Deployment",
        desc: "Executes 100% locally with open-weight models (Llama 3, Mistral, Qwen) on private server hardware."
      },
      {
        title: "Verifiable Citation Bounding Boxes",
        desc: "Direct side-by-side interactive document viewer highlighting the exact physical source of each generated answer."
      },
      {
        title: "Role-Based Document Governance",
        desc: "Users only receive answers sourced from documents their specific security clearance and department allows."
      },
      {
        title: "Continuous Real-Time Ingestion",
        desc: "Automated directory watchers and API endpoints index newly deposited manuals, contracts, and reports in seconds."
      }
    ],
    bullets: [
      "Multi-Format Processing (PDF, DOCX, PPTX, XLSX, Scans)",
      "Conversational Document Q&A with Vector RAG",
      "Semantic Search & Deep Citation Tracking",
      "Multilingual Automatic Translation & OCR",
      "Source-Grounded Responses with Direct Page References",
      "Department-Wise RBAC & Data Sovereignty"
    ],
    image: "/HERO/PRODUCTS/DOCUMENT_INTELLEGENCE.jpg",
    badge: "RAG Powered",
    specs: [
      { label: "Search Engine", value: "Vector RAG + OCR" },
      { label: "Accuracy", value: "100% Page Citation" },
      { label: "Formats", value: "PDF, Word, PPTX, Scans" }
    ]
  },
  {
    id: "geospatial-intelligence",
    category: "Geospatial AI",
    icon: "Globe",
    title: "Geo-Spatial Change Detection",
    short: "AI-Powered Geospatial Intelligence for Monitoring Land, Infrastructure, and Environmental Changes.",
    detail: `Geo-Spatial Change Detection Platform is a high-resolution earth observation and geospatial intelligence platform engineered to ingest, coregister, and analyze multi-temporal satellite, aerial, and drone imagery for dynamic situational awareness.

Powered by Vision Transformer (ViT) deep learning backbones, the platform conducts sub-pixel geometric orthorectification, radiational calibration, and multi-spectral anomaly detection. It autonomously identifies infrastructure construction, runway alterations, coastal erosion, deforestation, water reservoir fluctuations, and tactical vehicular or encampment movements across vast geographical regions.

The multi-sensor fusion pipeline unifies Optical, Synthetic Aperture Radar (SAR), and multispectral data streams, ensuring continuous round-the-clock monitoring through cloud cover, sandstorms, and adverse atmospheric conditions.

Integrating natively with OGC Web Map Services (WMS/WFS), ESRI ArcGIS, QGIS, and custom defence C4ISR consoles, the system vectorizes detected changes into standard GeoJSON and Shapefile layers, automatically triggering real-time anomaly alerts to monitoring command centers when pre-set Area of Interest (AOI) thresholds are breached.`,
    architecturePillars: [
      {
        step: "01",
        title: "Image Registration & Coregistration",
        desc: "Applies automated geometric orthorectification, radiational calibration, and sub-pixel alignment across temporal imagery epochs."
      },
      {
        step: "02",
        title: "Vision Transformer Feature Extraction",
        desc: "Deep ViT networks analyze contextual spatial relationships to segment built structures, roads, vegetation, and surface variations."
      },
      {
        step: "03",
        title: "GIS Vectorization & Alert Dispatch",
        desc: "Converts detected changes into standard GeoJSON/Shapefile layers and triggers real-time anomaly alerts to monitoring centers."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Tactical Ground Station Integration",
        desc: "Runs directly at ground receiving stations or edge nodes for rapid satellite pass-to-insight processing."
      },
      {
        title: "Standard GIS Interoperability",
        desc: "Seamless integration with OGC Web Map Services (WMS/WFS), ESRI ArcGIS, QGIS, and custom defence C4ISR map engines."
      },
      {
        title: "Multi-Sensor Fusion Capability",
        desc: "Combines Optical, Synthetic Aperture Radar (SAR), and multispectral imagery to maintain visibility through weather and cloud cover."
      },
      {
        title: "Historical Timeline Comparison",
        desc: "Automated differential slider visualization comparing baseline satellite surveys across days, months, or years."
      }
    ],
    bullets: [
      "Satellite & Aerial Geospatial Image Analysis",
      "Transformer-Based Deep Learning Models",
      "Pixel-Level Image Comparison & Feature Extraction",
      "Land Use & Urban Expansion Analysis",
      "Timestamp-Based Historical Timeline Comparison",
      "Geospatial Visualization & GIS Map Overlays"
    ],
    image: "/HERO/PRODUCTS/GEOSPATIAL-01.jpg",
    badge: "Satellite AI",
    specs: [
      { label: "Model Type", value: "Vision Transformer (ViT)" },
      { label: "Precision", value: "Pixel-Level Detection" },
      { label: "Integration", value: "GIS & Map Overlays" }
    ]
  },
  {
    id: "smart-surveillance",
    category: "Computer Vision",
    icon: "Eye",
    title: "Smart Surveillance Platform",
    short: "AI-Powered Video Intelligence Platform for Real-Time Monitoring, Threat Detection, and Situational Awareness.",
    detail: `Smart Surveillance Platform is an enterprise-scale computer vision ecosystem designed to convert high-density CCTV and camera networks into proactive situational awareness hubs with zero cloud bandwidth requirements.

The platform executes hardware-accelerated multi-stream video decoding and edge inference at up to 60 frames per second using NVIDIA DeepStream and TensorRT runtimes. It performs simultaneous real-time multi-object detection, perimeter intrusion identification, Automatic Number Plate Recognition (ANPR), and facial biometric cross-referencing against secure watchlists.

Utilizing state-of-the-art ByteTrack and Re-Identification (Re-ID) neural algorithms, the platform tracks subjects and vehicles across non-overlapping camera fields, generating complete spatiotemporal trajectory maps and anomaly logs.

Integrated directly with a centralized command center dashboard, the system automates threat escalation, generates chronological forensic incident dossiers, and dispatches critical breach alerts to security personnel within milliseconds of a perimeter violation while supporting automated dynamic privacy masking for public audit compliance.`,
    architecturePillars: [
      {
        step: "01",
        title: "Multi-Stream Video Pipeline",
        desc: "Hardware-accelerated RTSP/H.265 ingestion utilizing NVIDIA DeepStream and TensorRT for concurrent 32+ channel processing per node."
      },
      {
        step: "02",
        title: "Detection, ANPR & Biometrics",
        desc: "YOLO/Transformer-based neural backbones execute sub-15ms object classification, vehicle license identification, and face verification."
      },
      {
        step: "03",
        title: "Cross-Camera Tracking & Event Engine",
        desc: "ByteTrack and Re-ID algorithms trace subjects across different facility zones and trigger automated alert payloads."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Edge Appliance & NVR Integration",
        desc: "Direct deployment on NVIDIA Jetson Orin modules, ruggedized industrial PCs, or centralized data center racks."
      },
      {
        title: "Ultra-Low Latency Inference",
        desc: "Sub-15ms detection latency ensures zero delay in physical gate triggers, perimeter sirens, and operator dispatch."
      },
      {
        title: "Privacy & Compliance Masking",
        desc: "Automated real-time dynamic face/license plate blurring for public area compliance and audit preservation."
      },
      {
        title: "Centralized C4ISR Command Dashboard",
        desc: "Unified web console delivering interactive video walls, heatmaps, incident logs, and searchable forensic metadata."
      }
    ],
    bullets: [
      "Real-Time Video Stream Processing & Analytics",
      "Object, Threat & Intrusion Detection",
      "Cross-Camera Person & Vehicle Tracking",
      "Automatic Number Plate Recognition (ANPR)",
      "Facial Recognition & Watchlist Matching",
      "Centralized Command Dashboard & Smart Alerts"
    ],
    image: "/HERO/PRODUCTS/SMART_SURVELLIENCE.jpg",
    badge: "Real-Time Vision",
    specs: [
      { label: "Performance", value: "60 FPS Stream Analytics" },
      { label: "Analytics", value: "ANPR + Cross-Cam Tracking" },
      { label: "Latency", value: "< 12ms TensorRT Edge" }
    ]
  },
  {
    id: "gurukula-ai",
    category: "EdTech AI",
    icon: "GraduationCap",
    title: "GuruKula AI",
    short: "Intelligent Learning Management System Empowering Students, Educators, Institutions, and Training Centers.",
    detail: `GuruKula AI is an intelligent enterprise Learning Management System (LMS) engineered to transform universities, defence training academies, and corporate development institutions into adaptive AI-driven learning ecosystems.

The platform integrates a 24/7 contextual AI Tutor that explains complex concepts, answers student queries through interactive Socratic step-by-step reasoning, and adheres strictly to accredited institutional curriculum guidelines. Automated evaluation engines evaluate code submissions in secure execution sandboxes and grade essays and quizzes with real-time rubric-aligned feedback.

Dynamic learning pathways analyze diagnostic performance metrics in real time, automatically tailoring instructional pacing and quiz difficulty to individual learner velocity and knowledge gaps.

Engineered for sovereign institutional deployment, GuruKula AI can run entirely within on-premise campus servers to protect student data and eliminate recurring cloud expenses. It integrates seamlessly with standard educational frameworks including SCORM, LTI, Canvas, Moodle, and campus single sign-on (SSO) protocols.`,
    architecturePillars: [
      {
        step: "01",
        title: "Curriculum Knowledge Ingestion",
        desc: "Indexes textbooks, video lectures, lecture notes, and lab manuals into an institutional RAG knowledge base with pedagogical guardrails."
      },
      {
        step: "02",
        title: "Interactive AI Tutor & Doubt Engine",
        desc: "Socratic-method conversational tutor guides learners with progressive hints rather than direct answers, reinforcing critical thinking."
      },
      {
        step: "03",
        title: "Automated Evaluation & Analytics",
        desc: "Automated code execution sandbox and natural language rubric grading generate instantaneous feedback and competency mastery maps."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Multi-Tenant Institutional Architecture",
        desc: "Supports multi-campus isolation with customized department branding, role segregation, and cohort tracking."
      },
      {
        title: "Sovereign On-Premise / Campus Deployment",
        desc: "Capable of running entirely within campus private servers to ensure student data privacy and zero cloud fees."
      },
      {
        title: "Adaptive Learning Pathways",
        desc: "Dynamic quiz difficulty adjustment based on real-time diagnostic performance metrics for personalized education."
      },
      {
        title: "Enterprise LMS Standard Integration",
        desc: "Full compatibility with SCORM, LTI, Canvas, Moodle, and existing university single sign-on (SSO) systems."
      }
    ],
    bullets: [
      "AI-Driven Personalized Learning Workflows",
      "Course Creation & Digital Content Hub",
      "Automated Assessments & Adaptive Quizzes",
      "AI Tutor & 24/7 Contextual Doubt Resolution",
      "Comprehensive Analytics & Progress Tracking",
      "Multi-Institution & Multi-Tenant Architecture"
    ],
    image: "/HERO/PRODUCTS/GURUKULA.jpg",
    badge: "AI LMS Ecosystem",
    specs: [
      { label: "AI Tutor", value: "24/7 Context Doubt Engine" },
      { label: "Workflows", value: "Adaptive Skill Tracking" },
      { label: "Architecture", value: "Multi-Tenant Cloud/On-Prem" }
    ]
  },
  {
    id: "conversational-ai-platform",
    category: "Conversational AI",
    icon: "MessageSquare",
    title: "Conversational AI Platform",
    short: "Intelligent Voice-Based AI Solution Enabling Natural, Real-Time Human-Machine Interaction Through STT, LLMs, and TTS.",
    detail: `Conversational AI Platform is an enterprise-grade, voice-first machine intelligence ecosystem engineered to enable instantaneous, highly natural, and sovereign human-machine dialogue across mission-critical environments. Combining ultra-low-latency Speech-to-Text (STT), fine-tuned domain-specific Large Language Models (LLMs), and lifelike neural Text-to-Speech (TTS), the platform bridges operational personnel and complex autonomous command architectures with zero friction.

Built to operate with complete independence from external cloud providers, the platform is 100% air-gapped capable, running directly on secure on-premises GPU infrastructure, tactical field servers, and ruggedized edge appliances. It ensures that sensitive voice transmissions, operational commands, strategic briefings, and classified telemetry remain strictly contained within sovereign organizational perimeters.

At the acoustic ingestion layer, the platform incorporates advanced neural beamforming, dynamic noise suppression (spectral gating and Wiener filtering), and acoustic isolation algorithms capable of extracting crystal-clear phonemes even in extreme 85+ dB acoustic environments—including vehicular cockpits, industrial command rooms, flight decks, and tactical field deployments. Multi-accent phoneme adaptation supports 14+ Indian regional languages, international dialects, defense radio protocols, and specialized jargon.

The cognitive dialogue engine features full-duplex conversational turn-taking with instant barge-in (interruption handling), voice activity detection (VAD), and contextual state tracking. Integrated Retrieval-Augmented Generation (RAG) empowers the system to ground natural voice conversations against live telemetry feeds, standard operating procedures (SOPs), classified technical manuals, and multi-tenant enterprise knowledge graphs in sub-250ms voice-to-voice turnarounds.

Optimized with TensorRT-LLM and custom quantized inference runtimes, Conversational AI Platform delivers unmatched throughput and concurrency, enabling multi-operator voice control, autonomous dispatch assistance, hands-free field equipment operations, and interactive executive command intelligence.`,
    architecturePillars: [
      {
        step: "01",
        title: "Real-Time Speech-to-Text (STT)",
        desc: "Noise-robust acoustic ingestion and accent-adaptive phoneme decoding converting live operational speech into text with sub-second latency."
      },
      {
        step: "02",
        title: "Context-Aware LLM Dialogue Engine",
        desc: "Domain-specialized Large Language Model architecture performing intent routing, multi-turn reasoning, and policy-governed response generation."
      },
      {
        step: "03",
        title: "Low-Latency Text-to-Speech (TTS)",
        desc: "Neural voice synthesis engine delivering human-grade, emotion-adaptive acoustic outputs with customizable voice profiles and tactical clarity."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Sub-Second End-to-End Latency",
        desc: "Engineered with direct streaming pipelines ensuring seamless, uninterrupted real-time voice conversations."
      },
      {
        title: "Multilingual & Dialect Resilience",
        desc: "Native speech and acoustic models tailored for regional Indian accents, tactical codes, and industry vocabulary."
      },
      {
        title: "100% Air-Gapped & Sovereign Execution",
        desc: "Executes entirely on local GPUs without internet connectivity or external API streaming dependencies."
      },
      {
        title: "Hands-Free Command Control",
        desc: "Direct integration into tactical dashboards, vehicle headsets, and mission-critical audio consoles."
      }
    ],
    bullets: [
      "Real-Time Streaming Speech-to-Text (STT)",
      "Context-Aware LLM Dialogue & Reasoning Engine",
      "Ultra-Realistic Neural Text-to-Speech (TTS)",
      "Multilingual Recognition & Regional Accent Adaptation",
      "Acoustic Noise Suppression & Speaker Isolation",
      "Air-Gapped On-Premises & Edge Deployment"
    ],
    image: "/HERO/PRODUCTS/CONVERSATIONAL_AI.jpg",
    badge: "Voice & Speech AI",
    specs: [
      { label: "Latency", value: "< 250ms Voice-to-Voice" },
      { label: "Modalities", value: "Streaming Audio & Text" },
      { label: "Deployment", value: "Air-Gapped / On-Prem / Edge" }
    ]
  },
  {
    id: "kavacha-ai",
    category: "Defence & Border AI",
    icon: "ShieldCheck",
    title: "Kavacha AI",
    short: "Intelligent Border Surveillance Platform Designed to Enhance Security and Situational Awareness Across Sensitive Border Zones.",
    detail: `Kavacha AI is a mission-critical, autonomous border surveillance and perimeter defence ecosystem engineered to maximize situational awareness across highly sensitive border frontiers, remote outposts, and strategic installations.

The platform continuously processes multi-spectrum video feeds—integrating high-definition daylight optical, long-range thermal, and night-vision infrared sensors. Powered by custom Vision Transformer (ViT) and YOLO object detection backbones, Kavacha AI delivers sub-pixel precision in classifying personnel, military vehicles, camouflaged targets, concealed weapons, and low-altitude unmanned aerial vehicles (UAVs).

Engineered to operate reliably in extreme operational environments, the system maintains continuous detection fidelity through thick fog, blinding sandstorms, dense jungle canopies, and total-darkness night conditions. Real-time geometric geofencing and virtual tripwires analyze intrusion vectors, velocity, and formation dynamics to generate instant threat-priority scores.

Operating on ruggedized MIL-SPEC edge appliances installed directly at border observation posts, Kavacha AI functions 100% autonomously without external cloud or internet connectivity. It synchronizes incident dossiers, thermal metadata, and automated alert payloads directly into central Tactical Operations Center (TOC) C4ISR mapping walls.`,
    architecturePillars: [
      {
        step: "01",
        title: "Multi-Spectrum Thermal & Optical Ingestion",
        desc: "Processes high-definition day/night optical, long-range thermal, and infrared camera streams simultaneously across extensive borders."
      },
      {
        step: "02",
        title: "Deep Neural Object & Intruder Detection",
        desc: "YOLO & Vision Transformer backbones engineered for sub-pixel object detection, camouflaged target recognition, and breach tracking."
      },
      {
        step: "03",
        title: "Tactical Threat Matrix & Automated Alerts",
        desc: "Dynamic threat scoring engine evaluating intrusion trajectory, speed, and classification to trigger perimeter defenses and command alerts."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Extreme Weather & Low-Light Resilience",
        desc: "Maintains high-accuracy target tracking through fog, sandstorms, zero-light night conditions, and dense foliage."
      },
      {
        title: "Edge Embedded Rugged Computing",
        desc: "Runs on ruggedized MIL-SPEC edge compute modules deployed in remote border outposts and surveillance towers."
      },
      {
        title: "Geofencing & Breach Vectoring",
        desc: "Automated virtual tripwires and geometric polygon boundaries with directional crossing classification."
      },
      {
        title: "C4ISR Command Wall Integration",
        desc: "Direct feed synchronization into tactical operations center (TOC) GIS mapping systems."
      }
    ],
    bullets: [
      "Continuous Border & Perimeter Zone Monitoring",
      "Thermal, Infrared & Optical Multi-Spectrum Vision",
      "Camouflaged Intruder & Vehicle Object Detection",
      "Automated Threat Scoring & Breach Alerting",
      "Thermal ANPR & Low-Visibility Recognition",
      "Air-Gapped Disconnected Outpost Architecture"
    ],
    image: "/HERO/PRODUCTS/Kavacha_AI.jpg",
    badge: "Border Surveillance",
    specs: [
      { label: "Detection Range", value: "Long-Range Optical/Thermal" },
      { label: "Processing", value: "Real-Time Edge Multi-Stream" },
      { label: "Environment", value: "MIL-SPEC Extreme Climates" }
    ]
  },
  {
    id: "intelligent-fusion",
    category: "Threat Intelligence",
    icon: "Network",
    title: "Intelligent Fusion",
    short: "Converts Unstructured Intelligence Documents into Actionable Threat Intelligence Using Rule-Based Methods and GLiNER ML Models.",
    detail: `Intelligent Fusion is an advanced sovereign intelligence fusion platform engineered to transform massive volumes of unstructured intelligence artifacts into actionable, structured threat intelligence and multi-dimensional knowledge graphs.

The platform ingests heterogeneous, multi-source materials—including classified cables, intercept transcripts, field situation reports (SITREPs), redacted PDFs, DOCX briefs, and scanned photographic evidence. It applies advanced optical character recognition (OCR) and layout normalization to extract raw narrative intelligence with high precision.

At the entity extraction core, Intelligent Fusion utilizes GLiNER (Generalist Model for Named Entity Recognition) alongside deterministic rule-based heuristic engines. This hybrid architecture enables zero-shot and few-shot extraction of custom entity classes—such as militant cells, operative aliases, front organizations, weapons serials, geographic waypoints, financial flows, and tactical events—without requiring model retraining.

Extracted entities and relationships are automatically compiled into an interactive link-analysis knowledge graph. Analysts can explore hidden organizational hierarchies, uncover temporal event sequences, detect behavioral anomalies, and verify every link back to exact textual spans in original source materials within an air-gapped sovereign intelligence vault.`,
    architecturePillars: [
      {
        step: "01",
        title: "Heterogeneous Ingestion & Preprocessing",
        desc: "High-throughput parser handling redacted PDFs, intelligence cables, DOCX, scanned reports, and OCR-extracted transcripts."
      },
      {
        step: "02",
        title: "GLiNER & Multi-Task Entity Extraction",
        desc: "Zero-shot and few-shot neural Named Entity Recognition (NER) and Relation Extraction (RE) identifying persons, organizations, locations, equipment, and events."
      },
      {
        step: "03",
        title: "Dynamic Threat Knowledge Graph & Link Analysis",
        desc: "Correlates extracted entities into an interactive, multi-dimensional knowledge graph for automated anomaly and relationship discovery."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Zero-Shot GLiNER Neural Engine",
        desc: "Identifies arbitrary, customized entity classes on-the-fly without requiring extensive model retraining."
      },
      {
        title: "Strict Multi-Level Compartmentalization",
        desc: "Supports intelligence classification clearances (Confidential, Secret, Top Secret) per document partition."
      },
      {
        title: "Explainable Evidence Chains",
        desc: "Every extracted node and relationship links back with exact textual spans in original source materials."
      },
      {
        title: "Air-Gapped Sovereign Intelligence Vault",
        desc: "Runs 100% disconnected inside high-security analytical environments."
      }
    ],
    bullets: [
      "Unstructured Intelligence Ingestion (PDFs, DOCX, Scans, Intercepts)",
      "GLiNER Machine Learning & Rule-Based Entity Extraction",
      "Complex Relationship, Hierarchy & Event Mapping",
      "Automated Threat Knowledge Graph Generation",
      "Interactive Link Analysis & Anomaly Detection",
      "Sovereign Air-Gapped Intelligence Processing"
    ],
    image: "/HERO/PRODUCTS/FUSION.jpg",
    badge: "Threat Intelligence",
    specs: [
      { label: "Entity Engine", value: "GLiNER + Rule Hybrid" },
      { label: "Output", value: "Interactive Knowledge Graph" },
      { label: "Clearance", value: "Multi-Level Clearance RBAC" }
    ]
  },
  {
    id: "logistics-ai",
    category: "Computer Vision",
    icon: "Boxes",
    title: "Logistics AI – Warehouse Intelligence",
    short: "Transforms Warehouse Images and Videos into Actionable Operational Insights Using Computer Vision and AI.",
    detail: `Logistics AI – Warehouse Scene Intelligence is an enterprise computer vision platform engineered to transform industrial camera feeds and mobile video streams into real-time operational insights, inventory accuracy, and workplace safety intelligence.

The platform executes real-time multi-camera spatial tracking and perspective calibration across large-scale logistics hubs, high-bay storage facilities, and distribution centers. Deep neural detection networks identify, count, and classify pallets, forklifts, Automated Guided Vehicles (AGVs), personnel, packaging containers, and storage bay racks with 99%+ precision.

Automating continuous inventory auditing, Logistics AI visually scans shelf occupancies, identifies misplaced cargo, and updates stock metrics without requiring manual handheld barcode scanning. Real-time spatial density heatmaps track aisle occupancy rates, detect throughput bottlenecks, and optimize material handling equipment routing.

For workplace safety compliance, the platform provides sub-15ms proximity alerting to prevent collisions between forklifts, AGVs, and personnel while continuously monitoring Personal Protective Equipment (PPE) compliance (safety vests, helmets, restricted-zone incursions). It integrates natively with enterprise WMS and ERP systems (SAP, Oracle, Manhattan Associates) via high-speed REST and MQTT APIs.`,
    architecturePillars: [
      {
        step: "01",
        title: "Spatial Scene & Camera Calibration",
        desc: "Performs multi-camera 3D perspective transformation and spatial coordinate mapping across multi-level warehouse bays."
      },
      {
        step: "02",
        title: "Deep Object Detection & Density Estimation",
        desc: "High-precision convolutional and transformer models detecting pallets, packaging, forklifts, AGVs, and inventory items."
      },
      {
        step: "03",
        title: "Spatial Analytics & Heatmap Intelligence",
        desc: "Computes aisle occupancy rates, congestion bottlenecks, inventory localization maps, and safety proximity alerts in real time."
      }
    ],
    deploymentCapabilities: [
      {
        title: "Automated Real-Time Inventory Auditing",
        desc: "Eliminates manual barcode scanning cycles with continuous visual stock counting and shelf vacancy detection."
      },
      {
        title: "Forklift & AGV Safety Collision Prevention",
        desc: "Sub-15ms proximity alerting preventing collisions between material handling vehicles and warehouse personnel."
      },
      {
        title: "PPE & Safety Protocol Compliance",
        desc: "Real-time identification of safety vests, helmets, and restricted-zone pedestrian infractions."
      },
      {
        title: "Seamless WMS & ERP Integration",
        desc: "Integrates directly with SAP, Oracle, Manhattan Associates, and custom Warehouse Management Systems."
      }
    ],
    bullets: [
      "Warehouse Scene & Multi-Camera Video Analytics",
      "Pallet, Forklift, AGV & Cargo Object Detection",
      "Real-Time Spatial Density & Heatmap Mapping",
      "Automated Stock Counting & Shelf Vacancy Auditing",
      "Worker Safety & PPE Compliance Monitoring",
      "Aisle Congestion & Traffic Flow Optimization"
    ],
    image: "/HERO/PRODUCTS/LOGISTIC_AI.jpg",
    badge: "Warehouse Scene AI",
    specs: [
      { label: "Capabilities", value: "Spatial Density & Object Localization" },
      { label: "Integration", value: "WMS / ERP / Edge NVR" },
      { label: "Accuracy", value: "99%+ Counting Precision" }
    ]
  }
];

export const REAL_WORLD_USE_CASES = [
  {
    id: "uc-1",
    tag: "Defence & Security",
    title: "Air-Gapped Command Center Deployment",
    subtitle: "Real-Time Operational Intelligence in Disconnected Operational Zones",
    desc: "Deploying air-gapped edge computing units running Scoriant's Secure Storage & Surveillance platforms inside remote tactical command hubs without internet dependency.",
    metrics: ["100% Offline Autonomy", "< 50ms Latency", "Zero Data Leaks"],
    image: "/HERO/REAL_WORLD_EXAMPLES/Air-Gapped Command Center Deployment.jpg"
  },
  {
    id: "uc-2",
    tag: "Video Intelligence",
    title: "AI-Based Video Analytics",
    subtitle: "Edge Computer-Vision & Situational Awareness",
    desc: "Deploy computer-vision applications for object detection, tracking, surveillance, intrusion detection, safety monitoring, perimeter security and situational awareness without continuously sending high-bandwidth video to a central data center.",
    metrics: ["Edge Object Tracking", "Perimeter Security", "Zero Cloud Bandwidth"],
    image: "/HERO/REAL_WORLD_EXAMPLES/AI-Based Video Analytics.jpg"
  },
  {
    id: "uc-3",
    tag: "Tactical Operations",
    title: "Remote Operations & Situational Awareness",
    subtitle: "Local AI Services for Mobile & Field Command",
    desc: "Provide a local AI and data-processing capability at temporary command posts, field locations, remote sites or mobile platforms. Multiple users can access the same data and AI services through LAN or private 5G.",
    metrics: ["LAN & Private 5G Access", "Multi-User Command", "Field Deployment"],
    image: "/HERO/REAL_WORLD_EXAMPLES/Remote Operations & Situational Awareness.jpg"
  },
  {
    id: "uc-4",
    tag: "Mission Intelligence",
    title: "Offline Mission Intelligence",
    subtitle: "Onboard AI Analysis in Air-Gapped Environments",
    desc: "Process and analyze mission-critical data locally using onboard AI models, enabling intelligence and decision support even in air-gapped, disconnected or low-connectivity environment.",
    metrics: ["100% Offline Autonomy", "Air-Gapped Models", "Low-Connectivity Support"],
    image: "/HERO/REAL_WORLD_EXAMPLES/Offline Mission Intelligence.jpg"
  },
  {
    id: "uc-5",
    tag: "Rapid AI Deployment",
    title: "Mobile and Temporary AI Deployment",
    subtitle: "Compact Form-Factor for Rapid Field Operations",
    desc: "The compact form factor makes the platform suitable where a permanent data center is not practical—for example, temporary operations, field deployments, emergency response locations, temporary work sites and rapidly changing operational environments.",
    metrics: ["Compact Edge Form Factor", "Emergency Response", "Rapid Relocation"],
    image: "/HERO/REAL_WORLD_EXAMPLES/Mobile and Temporary AI Deployment.jpg"
  },
  {
    id: "uc-6",
    tag: "Reconnaissance & Sensors",
    title: "Field Sensor & UAV Data Processing",
    subtitle: "Local Reconnaissance & Sensor Stream Ingestion",
    desc: "Capture and process data from UAVs, Cameras, Ground sensors and other reconnaissance systems locally, reducing the need to transmit large volumes of raw data to distant data centers.",
    metrics: ["UAV Stream Ingestion", "Local Reconnaissance", "Reduced Data Latency"],
    image: "/HERO/REAL_WORLD_EXAMPLES/Field Sensor & UAV Data Processing.jpg"
  }
];

export const CLIENT_LOGOS = [
  { name: "ADA DRDO", src: "/CLIENTS/ADA-DRDO.png" },
  { name: "ADEE", src: "/CLIENTS/ADEE.png" },
  { name: "BEL", src: "/CLIENTS/BEL.png" },
  { name: "DRDO", src: "/CLIENTS/DRDO.png" },
  { name: "HAL", src: "/CLIENTS/HAL.png" },
  { name: "ISRO", src: "/CLIENTS/ISRO.png" },
  { name: "L&T Defence", src: "/CLIENTS/L&T.png" },
  { name: "TATA", src: "/CLIENTS/TATA.png" }
];

export const PARTNERS_AND_CERTS = [
  { name: "ISO 9001:2015", src: "/certificates/ISO_2015.png", type: "Certification" },
  { name: "STACO", src: "/partners/STACO.png", type: "Technology Partner" },
  { name: "T-SECOND", src: "/partners/T-SECOND.png", type: "Innovation Partner" }
];

export const CAPABILITIES_METRICS = [
  { label: "Real-time Telemetry Processing", pct: 95, detail: "Low-latency stream ingestion from edge sensors" },
  { label: "On-premise AI Inference Speed", pct: 92, detail: "Optimized GPU/NPU quantization pipelines" },
  { label: "Multi-sensor Data Fusion", pct: 88, detail: "Combined visual, spatial, and acoustic data" },
  { label: "Secure Air-Gapped LLM Deployment", pct: 90, detail: "Zero cloud phone-home data protection" },
  { label: "Embedded Hardware Optimization", pct: 85, detail: "Tailored micro-architecture builds" }
];

export const WHY_REASONS = [
  {
    icon: "ShieldCheck",
    title: "Secure-by-Design Infrastructure",
    desc: "Security is embedded into every layer. Our platforms support role-based access control, encrypted data handling, on-premise deployment, and air-gapped environments for sensitive operations."
  },
  {
    icon: "Bot",
    title: "Enterprise Agentic Intelligence",
    desc: "Autonomous AI systems that understand context, execute multi-step tool workflows, and provide evidence-grounded insights for high-stakes decision making."
  },
  {
    icon: "Wrench",
    title: "End-to-End AI Engineering",
    desc: "From data acquisition and model quantization to deployment and lifecycle management, Scoriant delivers full-stack AI solutions tailored to enterprise goals."
  },
  {
    icon: "Layers",
    title: "Flexible Deployment Architecture",
    desc: "Deploy across cloud, on-premise, edge devices, or air-gapped networks without compromising performance or control."
  },
  {
    icon: "Sparkles",
    title: "Domain-Focused AI Innovation",
    desc: "Specialized architectures for surveillance, geospatial analytics, document intelligence, and learning management systems built for measurable impact."
  },
  {
    icon: "Zap",
    title: "Rapid Deployment & Scalability",
    desc: "Accelerate your transition from prototype to production with modular micro-services, battle-tested security, and enterprise support."
  }
];
