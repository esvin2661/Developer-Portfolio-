'use client'
import React from 'react';
import HeroSection from "./components/HeroSection";
import SkillsPage from "./skills/page";
import Contact from "./contact/page";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SkillsPage />
    </div>
  );
};

export default Home;
