import React from 'react';
import SEO from '../components/SEO';
import { buildGraph, getOrganizationSchema, getWebSiteSchema } from '../utils/seoSchemas';
import Hero from '../components/Hero';
import WhyUsSection from '../components/WhyUsSection';
import PillarsSection from '../components/PillarsSection';
import GlobalPartnersSection from '../components/GlobalPartnersSection';
import TechStackSection from '../components/TechStackSection';
import UseCasesSection from '../components/UseCasesSection';
import ClientMarquee from '../components/ClientMarquee';
import CertificationsSection from '../components/CertificationsSection';

export default function HomePage() {
  const homeSchema = buildGraph(getOrganizationSchema(), getWebSiteSchema());

  return (
    <>
      <SEO
        title="Mission-Critical AI & Sovereign Defence Infrastructure"
        description="Scoriant delivers enterprise edge data systems, autonomous agentic AI platforms, 5G network stacks, and defence-grade air-gapped infrastructure."
        canonical="/"
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
