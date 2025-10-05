"use client";
import { useState, useEffect } from "react";
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';
import Preloader from './components/Preloader';

import { ScrollSmoother, ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  const [loading, setLoading] = useState(true);

  // initialize ScrollSmoother after loading
  useGSAP(() => {
    if (!loading) {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
      });
    }
  }, [loading]);

  return (
    <main>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div id="smooth-wrapper" className={`${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-700'}`}>
        <div id="smooth-content">
          <Navbar />
          <HeroSection startAnimation={!loading} />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  );
};

export default App;
