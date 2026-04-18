import React from 'react';
import { Hero, MarqueeBar } from '../components/Hero';
import { Services, WhyChooseUs } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { HowItWorks, FAQ, Team } from '../components/Team';
import { Appointment } from '../components/Appointment';
import { Testimonials } from '../components/Testimonials';
import { Stats, Skills, Gallery, Blog } from '../components/Footer';

export const Home = () => {
  return (
    <>
      <Hero />
      <MarqueeBar />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      <HowItWorks />
      {/* <Stats /> */}
      <Skills />
      <Appointment />
      <FAQ />
      <Team />
      <Testimonials />
      <Gallery />
      <Blog />
    </>
  );
};
