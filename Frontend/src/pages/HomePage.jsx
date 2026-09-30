import React from 'react';
import SEO from '../components/SEO';
import { buildGraph, getOrganizationSchema, getWebSiteSchema, getStartupFAQSchema } from '../utils/seoSchemas';
import Hero from '../components/Hero';
import WhyUsSection from '../components/WhyUsSection';
import PillarsSection from '../components/PillarsSection';
import GlobalPartnersSection from '../components/GlobalPartnersSection';
import TechStackSection from '../components/TechStackSection';
import UseCasesSection from '../components/UseCasesSection';
import ClientMarquee from '../components/ClientMarquee';
import CertificationsSection from '../components/CertificationsSection';

export default function HomePage() {
  const homeSchema = buildGraph(
    getOrganizationSchema(),
    getWebSiteSchema(),
    getStartupFAQSchema()
  );

  return (
    <>
      <SEO
        title="Top Deep-Tech Startup for AI, 5G & Secure Storage Box Infrastructure"
        description="Ranked among the top startups for AI, 5G protocol stacks, and defence-grade secure storage box systems. Explore our best solutions and top sovereign products."
        canonical="/"
        keywords="Top AI Startups, Top 5G Startups, Top Storage Box, Best Solutions, Top Products, Defence AI, Secure Storage Platform, 5G Telecom, Edge Computing"
        schema={homeSchema}
      />
      <Hero />
      <WhyUsSection />
      <PillarsSection />
      <GlobalPartnersSection />
      <TechStackSection />
      <ClientMarquee />
      <UseCasesSection />
      <CertificationsSection />
    </>
  );
}
