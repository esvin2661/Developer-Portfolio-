'use client'
import React from 'react';
import HeroSection from "./components/HeroSection";
import SkillsPage from "./skills/page";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsPage />
    </div>
  );
};

export default Home;
