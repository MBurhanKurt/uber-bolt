import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Testimonials />
    </div>
  );
}