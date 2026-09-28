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
    alternateName: 'Scoriant',
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
    },
    description:
      'Scoriant builds high-performance edge data systems, agentic AI platforms, document intelligence, and defence-grade air-gapped infrastructure.',
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
