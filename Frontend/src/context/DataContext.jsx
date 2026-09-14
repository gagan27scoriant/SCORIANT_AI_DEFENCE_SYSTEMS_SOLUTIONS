import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PRODUCTS_DATA as INITIAL_PRODUCTS,
  REAL_WORLD_USE_CASES as INITIAL_USE_CASES,
  PILLARS_DATA as INITIAL_PILLARS,
} from '../data/scoriantData';

// Initial Jobs list
const INITIAL_JOBS = [
  {
    id: 'ai-research-engineer',
    title: 'Senior AI Research Engineer — LLM & Agentic Systems',
    department: 'AI & Intelligence Engineering',
    location: 'Bangalore, India',
    type: 'Full Time',
    experience: '4+ Years',
    badge: 'Urgent Hiring',
    tags: ['LLM Fine-Tuning', 'PyTorch', 'Vector RAG', 'Agentic Workflows'],
    shortDesc: 'Engineer next-generation autonomous AI agents and fine-tune domain-specific LLMs for air-gapped defence and enterprise deployments.',
    roleOverview: 'The Senior AI Research Engineer will be responsible for designing and fine-tuning domain-specific Large Language Models (LLMs) and building context-aware agentic AI architectures for mission-critical defence and enterprise environments.',
    keyResponsibilities: [
      'Design, train, and fine-tune domain-adapted Large Language Models (LLMs) and multimodal neural networks.',
      'Develop Retrieval-Augmented Generation (RAG) pipelines with hybrid semantic vector indexing and deep citations.',
      'Implement autonomous agentic routing workflows with human-in-the-loop oversight and tool-calling execution.',
      'Optimize AI inference pipelines for air-gapped hardware, NVIDIA TensorRT, and edge compute platforms.'
    ],
    requiredQualifications: [
      '4+ years of hands-on experience in PyTorch, Transformers, Deep Learning, and LLM fine-tuning.',
      'Proven expertise with RAG frameworks, vector databases (Qdrant, FAISS, Milvus), and agentic orchestration.',
      'Strong proficiency in Python, CUDA acceleration, and ONNX / TensorRT quantization pipelines.'
    ]
  },
  {
    id: 'defence-hardware-engineer',
    title: 'Embedded AI Hardware & FPGA Acceleration Engineer',
    department: 'Defence Systems Hardware',
    location: 'Bangalore, India',
    type: 'Full Time',
    experience: '3+ Years',
    badge: 'Hardware Core',
    tags: ['NVIDIA TensorRT', 'AMD Xilinx FPGA', 'Sub-15ms Latency', 'C++ / CUDA'],
    shortDesc: 'Design and optimize direct-to-silicon compilation pipelines for edge GPU/FPGA accelerators operating in high-vibration, tactical units.',
    roleOverview: 'The Embedded AI Hardware Engineer will lead the optimization and compilation of deep neural networks directly onto silicon target hardware engineered for tactical command posts.',
    keyResponsibilities: [
      'Compile and quantize deep neural models for sub-15ms inference latency on NVIDIA TensorRT and FPGA targets.',
      'Design thermal and shock-resilient hardware enclosure architectures for tactical field deployments.',
      'Optimize memory bandwidth, PCIe bus communication, and sensor telemetry ingestion streams.'
    ],
    requiredQualifications: [
      '3+ years of experience in C/C++, CUDA, VHDL/Verilog, and TensorRT hardware compilation.',
      'Deep understanding of embedded Linux, PCIe architecture, and FPGA micro-architectures.'
    ]
  },
  {
    id: 'computer-vision-lead',
    title: 'Computer Vision & Real-Time Video Analytics Lead',
    department: 'Surveillance & Reconnaissance',
    location: 'Delaware, USA',
    type: 'Full Time',
    experience: '5+ Years',
    badge: 'Core Team',
    tags: ['OpenCV', 'TensorRT', 'ANPR', 'Cross-Camera Tracking'],
    shortDesc: 'Lead the development of 60 FPS real-time multi-camera video intelligence, anomaly detection, and ANPR platforms.',
    roleOverview: 'The Computer Vision Lead will architect and scale 60 FPS real-time multi-camera video intelligence systems, object tracking algorithms, and ANPR platforms.',
    keyResponsibilities: [
      'Architect real-time multi-stream video analytics pipelines utilizing OpenCV and TensorRT acceleration.',
      'Develop cross-camera object detection, vehicle tracking, and Automatic Number Plate Recognition (ANPR).',
      'Engineer real-time threat alert generation and automated perimeter intrusion detection algorithms.'
    ],
    requiredQualifications: [
      '5+ years of experience building production computer vision & deep learning video systems.',
      'Expert knowledge of OpenCV, PyTorch, TensorRT, DeepStream, and GStreamer.'
    ]
  }
];

// Initial Office Locations
const INITIAL_LOCATIONS = {
  india: {
    tag: 'HEADQUARTERS / INDIA',
    title: 'INDIA OFFICE',
    company: 'Scoriant AI Defence Systems Solutions',
    address: '3rd Floor Sree Gururaya Mansion, 8th Main Rd, KSRTC Layout, J.P. Nagar, Bengaluru 560078',
    phone: '+91 (080) 4123-5890',
    email: 'info@scoriant.com',
    hours: 'Mon - Fri: 9:00 AM - 7:00 PM IST',
    mapUrl: 'https://maps.google.com/maps?q=3rd%20Floor%20Sree%20Gururaya%20Mansion,%208th%20Main%20Rd,%20KSRTC%20Layout,%20J.P.%20Nagar,%20Bengaluru%20560078&t=&z=15&ie=UTF8&iwloc=&output=embed',
  },
  usa: {
    tag: 'OPERATIONS CENTER / USA',
    title: 'USA OFFICE',
    company: 'Scoriant AI Defence Systems Solutions',
    address: '531A Giuffrida Avenue, San Jose',
    phone: '+1 (408) 555-0198',
    email: 'info@scoriant.com',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM PST',
    mapUrl: 'https://maps.google.com/maps?q=531A%20Giuffrida%20Avenue,%20San%20Jose&t=&z=14&ie=UTF8&iwloc=&output=embed',
  },
};

const DataContext = createContext(null);

export function DataProvider({ children }) {
  // Products
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('scoriant_products');
    if (!saved) return INITIAL_PRODUCTS;
    try {
      const parsed = JSON.parse(saved);
      const mapped = parsed.map((p) => {
        const init = INITIAL_PRODUCTS.find((ip) => ip.id === p.id);
        if (init) {
          return {
            ...p,
            image: init.image,
            detail: init.detail,
            architecturePillars: init.architecturePillars,
            deploymentCapabilities: init.deploymentCapabilities,
            bullets: init.bullets || p.bullets,
          };
        }
        return p;
      });
      // Append any new products that are in INITIAL_PRODUCTS but not in localStorage
      INITIAL_PRODUCTS.forEach((ip) => {
        if (!mapped.some((p) => p.id === ip.id)) {
          mapped.push(ip);
        }
      });
      return mapped;
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  });

  // Jobs
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('scoriant_jobs');
    return saved ? JSON.parse(saved) : INITIAL_JOBS;
  });

  // Use Cases
  const [useCases, setUseCases] = useState(() => {
    const saved = localStorage.getItem('scoriant_usecases');
    if (!saved) return INITIAL_USE_CASES;
    try {
      const parsed = JSON.parse(saved);
      return parsed.map((uc) => {
        const init = INITIAL_USE_CASES.find((iuc) => iuc.id === uc.id);
        if (init) {
          return { ...uc, image: init.image };
        }
        return uc;
      });
    } catch (e) {
      return INITIAL_USE_CASES;
    }
  });

  // Pillars
  const [pillars, setPillars] = useState(() => {
    const saved = localStorage.getItem('scoriant_pillars');
    return saved ? JSON.parse(saved) : INITIAL_PILLARS;
  });

  // Locations
  const [locations, setLocations] = useState(() => {
    const saved = localStorage.getItem('scoriant_locations');
    if (!saved) return INITIAL_LOCATIONS;
    try {
      const parsed = JSON.parse(saved);
      return {
        india: {
          ...INITIAL_LOCATIONS.india,
          ...parsed.india,
          title: INITIAL_LOCATIONS.india.title,
          company: INITIAL_LOCATIONS.india.company,
        },
        usa: {
          ...INITIAL_LOCATIONS.usa,
          ...parsed.usa,
          title: INITIAL_LOCATIONS.usa.title,
          company: INITIAL_LOCATIONS.usa.company,
        },
      };
    } catch {
      return INITIAL_LOCATIONS;
    }
  });

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem('scoriant_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('scoriant_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('scoriant_usecases', JSON.stringify(useCases));
  }, [useCases]);

  useEffect(() => {
    localStorage.setItem('scoriant_pillars', JSON.stringify(pillars));
  }, [pillars]);

  useEffect(() => {
    localStorage.setItem('scoriant_locations', JSON.stringify(locations));
  }, [locations]);

  // --- CRUD JOBS ---
  const addJob = (job) => {
    const newJob = { ...job, id: job.id || `job-${Date.now()}` };
    setJobs((prev) => [newJob, ...prev]);
  };

  const updateJob = (id, updatedData) => {
    setJobs((prev) => prev.map((j) => (j.id === id ? { ...j, ...updatedData } : j)));
  };

  const deleteJob = (id) => {
    setJobs((prev) => prev.filter((j) => j.id !== id));
  };

  // --- CRUD PRODUCTS ---
  const addProduct = (product) => {
    const newProd = { ...product, id: product.id || `prod-${Date.now()}` };
    setProducts((prev) => [...prev, newProd]);
  };

  const updateProduct = (id, updatedData) => {
    setProducts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p)));
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // --- CRUD USE CASES ---
  const addUseCase = (uc) => {
    const newUc = { ...uc, id: uc.id || `uc-${Date.now()}` };
    setUseCases((prev) => [...prev, newUc]);
  };

  const updateUseCase = (id, updatedData) => {
    setUseCases((prev) => prev.map((u) => (u.id === id ? { ...u, ...updatedData } : u)));
  };

  const deleteUseCase = (id) => {
    setUseCases((prev) => prev.filter((u) => u.id !== id));
  };

  // --- CRUD PILLARS ---
  const addPillar = (pillar) => {
    const newPillar = { ...pillar, id: pillar.id || `pillar-${Date.now()}` };
    setPillars((prev) => [...prev, newPillar]);
  };

  const updatePillar = (id, updatedData) => {
    setPillars((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedData } : p)));
  };

  const deletePillar = (id) => {
    setPillars((prev) => prev.filter((p) => p.id !== id));
  };

  // --- CRUD LOCATIONS ---
  const updateLocation = (key, updatedData) => {
    setLocations((prev) => ({
      ...prev,
      [key]: { ...prev[key], ...updatedData },
    }));
  };

  // Reset to Defaults
  const resetToDefaults = () => {
    localStorage.removeItem('scoriant_products');
    localStorage.removeItem('scoriant_jobs');
    localStorage.removeItem('scoriant_usecases');
    localStorage.removeItem('scoriant_pillars');
    localStorage.removeItem('scoriant_locations');
    setProducts(INITIAL_PRODUCTS);
    setJobs(INITIAL_JOBS);
    setUseCases(INITIAL_USE_CASES);
    setPillars(INITIAL_PILLARS);
    setLocations(INITIAL_LOCATIONS);
  };

  return (
    <DataContext.Provider
      value={{
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
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  const ctx = useContext(DataContext);
  if (!ctx) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return ctx;
}
