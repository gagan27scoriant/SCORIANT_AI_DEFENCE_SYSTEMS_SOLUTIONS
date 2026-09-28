/**
 * generate-sitemap.js
 *
 * Generates public/sitemap.xml for scoriant.com using live PRODUCTS_DATA
 * and INITIAL_JOBS sourced directly from the frontend data layer.
 *
 * Run: node scripts/generate-sitemap.js
 * Auto-runs: npm run build (via package.json script)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PRODUCTS_DATA } from '../src/data/scoriantData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://scoriant.com';
const TODAY = new Date().toISOString().split('T')[0];

// ─── Static Core Routes ───────────────────────────────────────────────────────
const staticPages = [
  { url: '/',               changefreq: 'weekly',  priority: '1.0' },
  { url: '/solutions',      changefreq: 'weekly',  priority: '0.9' },
  { url: '/about',          changefreq: 'monthly', priority: '0.8' },
  { url: '/careers',        changefreq: 'weekly',  priority: '0.8' },
  { url: '/contact',        changefreq: 'monthly', priority: '0.7' },
  { url: '/privacy-policy', changefreq: 'monthly', priority: '0.6' },
];

// ─── Product Solution Detail Routes ──────────────────────────────────────────
const productPages = PRODUCTS_DATA.map((product) => ({
  url: `/solutions/${product.id}`,
  changefreq: 'weekly',
  priority: '0.9',
}));

// ─── Career Listings ─────────────────────────────────────────────────────────
// Source job IDs from the same place as DataContext (INITIAL_JOBS equivalent).
// To add new jobs: update this list or DataContext.jsx — both in sync.
const CAREER_JOB_IDS = [
  'ai-research-engineer',
  'defence-hardware-engineer',
  'computer-vision-lead',
];

const careerPages = CAREER_JOB_IDS.map((jobId) => ({
  url: `/careers/${jobId}`,
  changefreq: 'weekly',
  priority: '0.8',
}));

// ─── Merge ───────────────────────────────────────────────────────────────────
const allUrls = [...staticPages, ...productPages, ...careerPages];

// ─── Render XML ──────────────────────────────────────────────────────────────
const sitemapXml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
  '        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"',
  '        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9',
  '        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">',
  ...allUrls.map((item) =>
    [
      '  <url>',
      `    <loc>${BASE_URL}${item.url}</loc>`,
      `    <lastmod>${TODAY}</lastmod>`,
      `    <changefreq>${item.changefreq}</changefreq>`,
      `    <priority>${item.priority}</priority>`,
      '  </url>',
    ].join('\n')
  ),
  '</urlset>',
].join('\n');

const outputPath = path.resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapXml + '\n', 'utf8');

console.log(
  `✅ [Sitemap] Generated ${allUrls.length} URLs → ${outputPath}`
);
