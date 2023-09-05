"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import SkillsPage from "./skills/page";
import ProjectSection from "./ProjectSection";
import PhotoSection from "./PhotoSection";

const scrolltosection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <div>
      <div id="hero-section">
        <HeroSection />
      </div>
      <div id="skills-section">
        <SkillsPage />
      </div>
      <div id="project-section">
        <ProjectSection />
      </div>
      <div id="photo-section">
        <PhotoSection />
      </div>
    </div>
  );
};

export default Home;
