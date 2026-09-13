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
    short: "Enterprise-Grade Secure Infrastructure for AI, Data, and Mission-Critical Deployments.",
    detail: `Secure Storage & Deployment Platform is a defence-grade infrastructure solution engineered for high-assurance storage, automated model packaging, and air-gapped deployment of mission-critical AI workloads.

Built specifically for defence establishments, intelligence agencies, sovereign institutions, and sensitive enterprise datacenters, the platform eliminates external telemetry and cloud reliance. It provides hardware-enforced AES-256 encryption, zero-trust cryptographic role-based access control (RBAC), and autonomous edge cluster synchronization.

The architecture protects proprietary weights, classified datasets, and mission telemetry both at rest and in transit, guaranteeing continuous computing autonomy across tactical edge nodes and isolated central command networks.`,
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
    detail: `AI Knowledge Studio is a sovereign multimodal intelligence system designed to ingest, process, and analyze complex enterprise meetings, voice communications, video feeds, and multi-format classified documents.

The platform utilizes an autonomous query-first agent router that classifies operational intent and dynamically orchestrates specialized neural sub-agents for acoustic noise filtering, multi-speaker diarization, accent-resilient speech recognition, contextual summarization, and interactive Q&A.

Engineered to operate entirely on internal enterprise infrastructure or sovereign cloud clusters, AI Knowledge Studio ensures complete data privacy while transforming unstructured audio/video logs into indexed, searchable, and citation-backed organizational intelligence.`,
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
    detail: `The Document Intelligence Chatbot transforms massive, heterogeneous enterprise document archives into an interactive, high-precision knowledge intelligence ecosystem.

The system combines layout-aware optical character recognition (OCR), dense semantic vector indexing, BM25 hybrid keyword retrieval, and Retrieval-Augmented Generation (RAG) to allow analysts and personnel to interrogate millions of document pages in natural language.

Every response is strictly grounded in the underlying source documentation and is accompanied by exact page numbers, paragraph coordinates, and snippet references—drastically reducing hallucination risk and enabling rapid verification in mission-critical decision workflows.`,
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
    detail: `Geo-Spatial Change Detection Platform is a high-resolution geospatial intelligence solution designed to ingest, align, and analyze multi-temporal satellite, aerial, and drone imagery for comprehensive situational awareness.

Powered by Vision Transformer (ViT) deep learning backbones, the platform conducts sub-pixel image coregistration, contextual feature extraction, and multi-spectral anomaly detection. It autonomously identifies infrastructure development, terrain alterations, deforestation, coastal erosion, water body variations, and tactical troop or vehicular movements across massive geographical expanses.

The system integrates natively with existing defence and enterprise GIS platforms, delivering interactive map layer visualizations, change bounding polygons, and automated alerts for designated Areas of Interest (AOIs).`,
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
    detail: `Smart Surveillance Platform is an enterprise-scale computer vision ecosystem designed to convert high-density CCTV and camera networks into proactive situational awareness hubs.

The platform executes hardware-accelerated multi-stream video decoding and edge inference at up to 60 frames per second. It performs simultaneous real-time multi-object detection, perimeter intrusion identification, Automatic Number Plate Recognition (ANPR), facial biometric cross-referencing against secure watchlists, and trajectory analysis across non-overlapping camera fields.

Integrated with a centralized command dashboard, the system automates threat escalation, generates chronological incident dossiers, and alerts security personnel within milliseconds of a breach.`,
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
    detail: `GuruKula AI is an intelligent enterprise Learning Management System (LMS) engineered to transform academic institutions, defence training academies, and corporate development programs into adaptive AI-driven learning environments.

The platform integrates a 24/7 contextual AI Tutor that explains complex concepts, resolves student doubts through interactive step-by-step reasoning, and adheres strictly to institutional curriculum guidelines. Automated evaluation engines grade coding assignments, essays, and quantitative quizzes in real-time while providing formative feedback.

Comprehensive analytical dashboards give instructors deep visibility into student comprehension, learning velocity, and skill acquisition trajectories, enabling personalized interventions at scale.`,
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
