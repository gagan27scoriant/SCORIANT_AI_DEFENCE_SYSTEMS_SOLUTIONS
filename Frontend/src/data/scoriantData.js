export const PILLARS_DATA = [
  {
    id: "pillar-01",
    tag: "Pillar 01",
    title: "Defence Engineering Systems",
    subtitle: "Enterprise Mission-Critical Infrastructure",
    desc: "Enterprise-grade infrastructure engineered for secure, scalable, and mission-critical operations across cloud, edge, on-premise, and air-gapped defense environments.",
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
    detail: `Secure Storage & Deployment Platform is a high-security infrastructure solution designed to support the storage, management, and deployment of sensitive data, AI models, and mission-critical applications in highly regulated environments.

Built for government agencies, defense organizations, research institutions, and critical enterprise infrastructure, the platform provides air-gapped architecture, end-to-end encryption, and edge deployment capabilities.

The solution ensures sensitive data remains protected both at rest and in transit while enabling secure AI processing and application deployment in disconnected or restricted networks.`,
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
    image: "/PRODUCT_PREVIEW_IMAGE/SECURE_STORAGE.jpg",
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
    detail: `AI Knowledge Studio is an enterprise intelligence platform designed to transform audio recordings, video files, documents, images, and live conversations into structured, searchable, and actionable knowledge.

The platform leverages a query-first agent architecture that understands user intent and dynamically routes requests to specialized AI tools for transcription, speaker diarization, summarization, translation, semantic search, question answering, and executive report generation.

Supports department-wise access control (RBAC), preserving institutional knowledge while accelerating organizational decision velocity.`,
    bullets: [
      "Audio, Video, Document & Image Deep Processing",
      "Real-Time Speech-to-Text & Diarization",
      "Speaker Identification & Conversation Separation",
      "Interactive Document & Transcript Q&A",
      "Multilingual Translation & Accent Adaptation",
      "Text-to-Speech & Executive Artifact Export"
    ],
    image: "/PRODUCT_PREVIEW_IMAGE/AI_KNOWLEDGE_STUDIO.jpg",
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
    detail: `The Document Intelligence Chatbot transforms static organizational documents into an interactive knowledge ecosystem, enabling users to retrieve information through natural language conversations.

The platform supports PDFs, Word documents, PowerPoint presentations, Excel files, text documents, scanned files, and image-based content using OCR, vector indexing, and Retrieval-Augmented Generation (RAG).

When users submit a query, the platform retrieves relevant document sections using vector-based semantic search and generates source-grounded responses backed by exact page references and section citations.`,
    bullets: [
      "Multi-Format Processing (PDF, DOCX, PPTX, XLSX, Scans)",
      "Conversational Document Q&A with Vector RAG",
      "Semantic Search & Deep Citation Tracking",
      "Multilingual Automatic Translation & OCR",
      "Source-Grounded Responses with Direct Page References",
      "Department-Wise RBAC & Data Sovereignty"
    ],
    image: "/PRODUCT_PREVIEW_IMAGE/DOCUMENT INTELLIGENCE.jpg",
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
    detail: `Geo-Spatial Change Detection Platform is an advanced AI-powered geospatial intelligence solution designed to identify, analyze, and visualize changes across satellite imagery, aerial imagery, and geospatial datasets.

The platform leverages transformer-based deep learning models to understand spatial relationships, contextual patterns, and feature variations across large geographical regions.

The solution performs intelligent image alignment, density analysis, and pixel-level comparison to detect urban expansion, infrastructure development, environmental changes, deforestation, water body shifts, and disaster impacts.`,
    bullets: [
      "Satellite & Aerial Geospatial Image Analysis",
      "Transformer-Based Deep Learning Models",
      "Pixel-Level Image Comparison & Feature Extraction",
      "Land Use & Urban Expansion Analysis",
      "Timestamp-Based Historical Timeline Comparison",
      "Geospatial Visualization & GIS Map Overlays"
    ],
    image: "/PRODUCT_PREVIEW_IMAGE/GEO_SPATIAL_INTELLIGENCE.jpg",
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
    detail: `Smart Surveillance Platform is an advanced AI-driven video analytics solution designed to transform conventional CCTV and surveillance systems into intelligent security and monitoring networks.

Built using Computer Vision and Deep Learning, the platform performs object detection, threat identification, facial recognition, vehicle tracking, Automatic Number Plate Recognition (ANPR), cross-camera tracking, and anomaly detection across multiple feeds.

AI-generated incident summaries and alerts empower security operators to track individuals and vehicles seamlessly across facilities and command centers.`,
    bullets: [
      "Real-Time Video Stream Processing & Analytics",
      "Object, Threat & Intrusion Detection",
      "Cross-Camera Person & Vehicle Tracking",
      "Automatic Number Plate Recognition (ANPR)",
      "Facial Recognition & Watchlist Matching",
      "Centralized Command Dashboard & Smart Alerts"
    ],
    image: "/PRODUCT_PREVIEW_IMAGE/VIDEO_SURVELLIENCE.jpg",
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
    detail: `GuruKula is an AI-powered Learning Management System (LMS) designed to deliver personalized, scalable, and engaging learning experiences for educational institutions and corporate training programs.

The system supports course creation, automated assessments, live interactive classes, learning analytics, certification management, and an AI tutor for doubt resolution.

Adaptive learning workflows provide personalized recommendations and skill tracking, helping institutions digitize education and scale training programs effectively.`,
    bullets: [
      "AI-Driven Personalized Learning Workflows",
      "Course Creation & Digital Content Hub",
      "Automated Assessments & Adaptive Quizzes",
      "AI Tutor & 24/7 Contextual Doubt Resolution",
      "Comprehensive Analytics & Progress Tracking",
      "Multi-Institution & Multi-Tenant Architecture"
    ],
    image: "/PRODUCT_PREVIEW_IMAGE/GURUKULA_AI.jpg",
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
    tag: "Defense & Security",
    title: "Air-Gapped Command Center Deployment",
    subtitle: "Real-Time Operational Intelligence in Disconnected Operational Zones",
    desc: "Deploying air-gapped edge computing units running Scoriant's Secure Storage & Surveillance platforms inside remote tactical command hubs without internet dependency.",
    metrics: ["100% Offline Autonomy", "< 50ms Latency", "Zero Data Leaks"],
    image: "/PRODUCT_PREVIEW_IMAGE/SECURE_STORAGE.jpg"
  },
  {
    id: "uc-2",
    tag: "Video Intelligence",
    title: "AI-Based Video Analytics",
    subtitle: "Edge Computer-Vision & Situational Awareness",
    desc: "Deploy computer-vision applications for object detection, tracking, surveillance, intrusion detection, safety monitoring, perimeter security and situational awareness without continuously sending high-bandwidth video to a central data center.",
    metrics: ["Edge Object Tracking", "Perimeter Security", "Zero Cloud Bandwidth"],
    image: "/PRODUCT_PREVIEW_IMAGE/VIDEO_SURVELLIENCE.jpg"
  },
  {
    id: "uc-3",
    tag: "Tactical Operations",
    title: "Remote Operations & Situational Awareness",
    subtitle: "Local AI Services for Mobile & Field Command",
    desc: "Provide a local AI and data-processing capability at temporary command posts, field locations, remote sites or mobile platforms. Multiple users can access the same data and AI services through LAN or private 5G.",
    metrics: ["LAN & Private 5G Access", "Multi-User Command", "Field Deployment"],
    image: "/PRODUCT_PREVIEW_IMAGE/SECURE_STORAGE.jpg"
  },
  {
    id: "uc-4",
    tag: "Mission Intelligence",
    title: "Offline Mission Intelligence",
    subtitle: "Onboard AI Analysis in Air-Gapped Environments",
    desc: "Process and analyze mission-critical data locally using onboard AI models, enabling intelligence and decision support even in air-gapped, disconnected or low-connectivity environment.",
    metrics: ["100% Offline Autonomy", "Air-Gapped Models", "Low-Connectivity Support"],
    image: "/PRODUCT_PREVIEW_IMAGE/GEO_SPATIAL_INTELLIGENCE.jpg"
  },
  {
    id: "uc-5",
    tag: "Rapid AI Deployment",
    title: "Mobile and Temporary AI Deployment",
    subtitle: "Compact Form-Factor for Rapid Field Operations",
    desc: "The compact form factor makes the platform suitable where a permanent data center is not practical—for example, temporary operations, field deployments, emergency response locations, temporary work sites and rapidly changing operational environments.",
    metrics: ["Compact Edge Form Factor", "Emergency Response", "Rapid Relocation"],
    image: "/PRODUCT_PREVIEW_IMAGE/AI_KNOWLEDGE_STUDIO.jpg"
  },
  {
    id: "uc-6",
    tag: "Reconnaissance & Sensors",
    title: "Field Sensor & UAV Data Processing",
    subtitle: "Local Reconnaissance & Sensor Stream Ingestion",
    desc: "Capture and process data from UAVs, Cameras, Ground sensors and other reconnaissance systems locally, reducing the need to transmit large volumes of raw data to distant data centers.",
    metrics: ["UAV Stream Ingestion", "Local Reconnaissance", "Reduced Data Latency"],
    image: "/PRODUCT_PREVIEW_IMAGE/GURUKULA_AI.jpg"
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
