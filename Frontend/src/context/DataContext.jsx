import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  PRODUCTS_DATA as INITIAL_PRODUCTS,
  REAL_WORLD_USE_CASES as INITIAL_USE_CASES,
  PILLARS_DATA as INITIAL_PILLARS,
} from '../data/scoriantData';

// Initial Jobs list (Default: 0 active openings)
const INITIAL_JOBS = [];

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

  // Jobs (Default: 0 active job openings)
  const [jobs, setJobs] = useState(() => {
    try {
      const saved = localStorage.getItem('scoriant_jobs_v2');
      if (saved) return JSON.parse(saved);
      // Clean up legacy cache if present
      localStorage.removeItem('scoriant_jobs');
    } catch (e) {
      // ignore
    }
    return INITIAL_JOBS;
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
    localStorage.setItem('scoriant_jobs_v2', JSON.stringify(jobs));
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
    localStorage.removeItem('scoriant_jobs_v2');
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
