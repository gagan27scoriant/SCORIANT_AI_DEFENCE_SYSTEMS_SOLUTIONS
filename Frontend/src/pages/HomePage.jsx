import React from 'react';
import Hero from '../components/Hero';
import WhyUsSection from '../components/WhyUsSection';
import PillarsSection from '../components/PillarsSection';
import GlobalPartnersSection from '../components/GlobalPartnersSection';
import TechStackSection from '../components/TechStackSection';
import UseCasesSection from '../components/UseCasesSection';
import ClientMarquee from '../components/ClientMarquee';
import CertificationsSection from '../components/CertificationsSection';

export default function HomePage() {
  return (
    <>
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
