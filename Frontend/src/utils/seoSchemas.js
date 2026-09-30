const SITE_URL = 'https://scoriant.com';
const LOGO_URL = `${SITE_URL}/SCORIANT_LOGO1.png`;

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Strip @context from individual nodes when they will be placed inside
 * a @graph array — the top-level @context covers the whole graph.
 */
function stripContext(obj) {
  if (!obj || typeof obj !== 'object') return obj;
  const { '@context': _removed, ...rest } = obj;
  return rest;
}

// ─── Schemas ─────────────────────────────────────────────────────────────────

/**
 * Build a @graph wrapper that correctly positions @context at the top level only.
 * @param {...object} nodes – Schema.org node objects
 */
export function buildGraph(...nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean).map(stripContext),
  };
}

/**
 * Organization schema — describes Scoriant as a company.
 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Scoriant AI Defence Systems Solutions',
    alternateName: [
      'Scoriant',
      'Scoriant Deep-Tech Startup',
      'Scoriant AI & 5G Solutions',
    ],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    description:
      'Scoriant is a top deep-tech startup engineering sovereign edge AI, carrier-grade 5G protocol stacks, and defence-grade air-gapped secure storage box platforms.',
    slogan:
      'Top Deep-Tech Startup Pioneering Sovereign AI, Carrier-Grade 5G, and Secure Storage Box Platforms',
    keywords:
      'top startups of AI, top 5G startups, top storage box, best solutions, top products, secure storage box, air-gapped AI, 5G RAN protocol stack, sovereign defence systems',
    knowsAbout: [
      'Artificial Intelligence Startups',
      '5G Telecommunications & RAN Protocol Stacks',
      'Secure Storage Box & Air-Gapped Infrastructure',
      'Autonomous Agentic AI Systems',
      'Tactical Edge Computing & Hardware Acceleration',
      'Defence AI Solutions & Border Surveillance',
      'Computer Vision & Geospatial Intelligence',
    ],
    award: [
      'Top Deep-Tech & AI Defence Startup',
      'Excellence in Air-Gapped Secure Storage & 5G Innovation',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Sales & Defence Inquiries',
        email: 'info@scoriant.com',
        telephone: '+91-80-4123-5890',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
    address: [
      {
        '@type': 'PostalAddress',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560078',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        addressLocality: 'San Jose',
        addressRegion: 'CA',
        addressCountry: 'US',
      },
    ],
    sameAs: [SITE_URL],
  };
}

/**
 * WebSite schema — enables Google Sitelinks search box.
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Scoriant AI Defence Systems Solutions',
    alternateName: 'Scoriant',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/solutions?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * SoftwareApplication schema for a Scoriant solution / product.
 * @param {object} product – product object from PRODUCTS_DATA
 */
export function getProductSchema(product) {
  if (!product) return null;

  const imageUrl = product.image
    ? product.image.startsWith('http')
      ? product.image
      : `${SITE_URL}${product.image}`
    : LOGO_URL;

  // Truncate description to ≤ 250 chars for schema compliance
  const desc =
    (product.short || (product.detail ? product.detail.substring(0, 250) : '') || product.title)
      .replace(/\n/g, ' ')
      .trim();

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.title,
    applicationCategory: product.category || 'Security & Defence AI Infrastructure',
    operatingSystem:
      'Air-Gapped On-Premises / Linux / Ruggedized Edge Hardware / Private 5G Mesh',
    description: desc,
    image: imageUrl,
    url: `${SITE_URL}/solutions/${product.id}`,
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      category: 'Enterprise License',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Scoriant AI Defence Systems Solutions',
      logo: LOGO_URL,
    },
  };
}

/**
 * JobPosting schema for a Scoriant career listing.
 * Eligible for Google Jobs rich results.
 * @param {object} job – job object from INITIAL_JOBS / DataContext
 */
export function getJobPostingSchema(job) {
  if (!job) return null;

  const isUsa = job.location ? job.location.toLowerCase().includes('usa') || job.location.toLowerCase().includes('delaware') : false;

  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: job.title,
    description: [
      job.roleOverview || job.shortDesc || job.title,
      ...(job.keyResponsibilities || []),
      ...(job.requiredQualifications || []),
    ]
      .filter(Boolean)
      .join(' '),
    datePosted: '2026-01-01',
    validThrough: '2027-12-31',
    employmentType: job.type === 'Full Time' ? 'FULL_TIME' : 'CONTRACTOR',
    experienceRequirements: job.experience || '',
    hiringOrganization: {
      '@type': 'Organization',
      name: 'Scoriant AI Defence Systems Solutions',
      sameAs: SITE_URL,
      logo: LOGO_URL,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: isUsa ? 'San Jose' : 'Bengaluru',
        addressRegion: isUsa ? 'CA' : 'Karnataka',
        addressCountry: isUsa ? 'US' : 'IN',
      },
    },
    skills: (job.tags || []).join(', '),
    industry: 'Defence Technology / Artificial Intelligence',
    occupationalCategory: job.department || 'Engineering',
  };
}

/**
 * BreadcrumbList schema.
 * @param {Array<{ name: string, url: string }>} items
 */
export function getBreadcrumbSchema(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * ItemList schema for "Top Products & Best Solutions in AI, 5G, and Secure Storage".
 * Triggers Google search carousels and list snippets for discovery & commercial queries:
 * "top startups of AI", "top 5G startups", "top storage box", "best solutions", "top products".
 * @param {Array<object>} products
 */
export function getTopSolutionsItemListSchema(products = []) {
  if (!products || !products.length) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Top Products & Best Solutions in AI, 5G, and Secure Storage',
    description:
      'Ranked list of top enterprise and defence-grade solutions by Scoriant, featuring air-gapped secure storage box infrastructure, carrier-grade 5G protocol stacks, and autonomous agentic AI platforms.',
    numberOfItems: products.length,
    itemListElement: products.map((product, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: product.title,
      description: (product.short || product.detail || '').substring(0, 220).trim(),
      url: `${SITE_URL}/solutions/${product.id}`,
    })),
  };
}

/**
 * FAQPage schema for high-intent Google Search queries:
 * - "top startups of AI"
 * - "top 5G startups"
 * - "top storage box"
 * - "best solutions"
 * - "top products"
 * Triggers Google SERP expandable rich FAQ accordion.
 */
export function getStartupFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Why is Scoriant recognized among the top startups in AI, 5G, and secure storage?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scoriant is a top deep-tech engineering startup that pioneers sovereign edge AI compute, carrier-grade 5G Radio Access Network (RAN) protocol stacks (CU/DU/PHY), and defence-grade air-gapped secure storage box platforms with hardware-enforced AES-256-GCM encryption.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are Scoriant’s best solutions and top products for enterprise and defence?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scoriant’s top products and best solutions include the Secure Storage & Deployment Platform (ruggedized secure storage box), Kavacha AI (border defense), Gurukula AI (defence knowledge base), Carrier-Grade 5G Protocol Stacks, AI Knowledge Studio, and Satellite Vision Geospatial Intelligence.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Scoriant’s Secure Storage Box platform the best solution for air-gapped environments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scoriant’s Secure Storage & Deployment Platform delivers an all-in-one sovereign storage box engineered for high-assurance environments. It features direct-to-silicon AES-256-GCM encryption, post-quantum key isolation, OCI-compliant container packaging for neural weights, and autonomous peer-to-peer data replication with zero cloud telemetry.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why is Scoriant considered a top 5G startup for critical telecommunications?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Scoriant engineers carrier-grade 5G Radio Access Network (RAN) architectures, high-throughput protocol stacks from L1 to L3, and private 5G mesh networks optimized for tactical forward operating bases and enterprise campuses.',
        },
      },
    ],
  };
}

