import { useEffect } from 'react';

const DEFAULT_TITLE = 'Scoriant AI Defence Systems Solutions';
const DEFAULT_DESCRIPTION =
  'Scoriant builds high-performance edge data systems, agentic AI platforms, document intelligence, and defence-grade air-gapped infrastructure for smarter decisions.';
const DEFAULT_IMAGE = 'https://scoriant.com/SCORIANT_LOGO1.png';
const SITE_URL = 'https://scoriant.com';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Create-or-update a <meta name="..."> or <meta property="..."> tag.
 * Works correctly for both name= and property= attributes.
 */
function setMetaTag(selector, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    // selector looks like: meta[name="description"] or meta[property="og:title"]
    const match = selector.match(/\[(\w+)="([^"]+)"\]/);
    if (match) el.setAttribute(match[1], match[2]);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', url);
}

function injectSchema(schema) {
  const id = 'scoriant-seo-schema';
  let tag = document.getElementById(id);
  if (schema) {
    if (!tag) {
      tag = document.createElement('script');
      tag.id = id;
      tag.type = 'application/ld+json';
      document.head.appendChild(tag);
    }
    // Compact (no whitespace) for smaller payload
    tag.textContent = JSON.stringify(schema);
  } else if (tag) {
    tag.remove();
  }
}

// ─── SEO Component ────────────────────────────────────────────────────────────

/**
 * Drop-in <SEO> component. Renders nothing to the DOM — manages <head> only.
 *
 * Props:
 *   title       – Page-specific title (will be appended with " | Scoriant AI Defence Systems")
 *   description – Page-specific meta description (≤ 160 chars recommended)
 *   canonical   – Canonical path (e.g. "/solutions/kavacha-ai") or full URL
 *   image       – OG/Twitter image path or full URL
 *   type        – OG type, defaults to "website"
 *   schema      – Schema.org JSON-LD object to inject in <head>
 *   noindex     – If true, adds noindex/nofollow robots directives
 *   keywords    – Optional comma-separated meta keywords string
 */
export default function SEO({
  title,
  description,
  canonical,
  image,
  type = 'website',
  schema,
  noindex = false,
  keywords,
}) {
  useEffect(() => {
    // 1. Document title
    const formattedTitle = title
      ? `${title} | Scoriant AI Defence Systems`
      : DEFAULT_TITLE;
    document.title = formattedTitle;

    // 2. Canonical URL
    const canonicalUrl = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${window.location.pathname}`;
    setCanonical(canonicalUrl);

    // 3. Description
    const metaDesc = description || DEFAULT_DESCRIPTION;
    setMetaTag('meta[name="description"]', metaDesc);

    // 4. Keywords (optional)
    if (keywords) {
      setMetaTag('meta[name="keywords"]', keywords);
    }

    // 5. Robots
    const robotsValue = noindex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    setMetaTag('meta[name="robots"]', robotsValue);

    // 6. Open Graph
    const ogImage = image
      ? image.startsWith('http')
        ? image
        : `${SITE_URL}${image}`
      : DEFAULT_IMAGE;

    setMetaTag('meta[property="og:title"]', formattedTitle);
    setMetaTag('meta[property="og:description"]', metaDesc);
    setMetaTag('meta[property="og:url"]', canonicalUrl);
    setMetaTag('meta[property="og:image"]', ogImage);
    setMetaTag('meta[property="og:type"]', type);

    // 7. Twitter Card
    setMetaTag('meta[name="twitter:title"]', formattedTitle);
    setMetaTag('meta[name="twitter:description"]', metaDesc);
    setMetaTag('meta[name="twitter:image"]', ogImage);

    // 8. Structured Data JSON-LD
    injectSchema(schema);
  }, [title, description, canonical, image, type, schema, noindex, keywords]);

  return null;
}
