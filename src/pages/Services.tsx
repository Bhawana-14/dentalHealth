import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Services as ServicesSection, WhyChooseUs } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { FAQ } from '../components/Team';
import { Testimonials } from '../components/Footer';

export const ServicesPage = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="Our Services" 
        subtitle="Comprehensive dental solutions tailored to your unique needs, using the latest technology and techniques."
      />
      <ServicesSection />
      <WhyChooseUs />
      <Portfolio />
      <FAQ />
      <Testimonials />
    </div>
  );
};
