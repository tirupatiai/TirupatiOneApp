import React from 'react';
import Hero from '../../components/Hero';
import { Services } from '../../components/Services';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import { CTA } from '../../components/CTA';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <main className="flex-grow">
        <Services />
        <Features />
        <Testimonials />
        <CTA />
      </main>
    </div>
  );
};