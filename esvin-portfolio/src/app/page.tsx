"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import SkillsPage from "./skills/page";
import ProjectSection from "./components/ProjectSection";
import PhotoSection from "./components/PhotoSection";
import GitHubContributions from "./components/GitHubContributions";
import './styles.css'; 


//Handles smooth scrolling , Figure out how to slow down the transition. 
const scrolltosection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const Home = () => {
  return (
    <div>
      <div className="hero-section">
        <HeroSection />
      </div>
      <div className="github-contributions">
        <GitHubContributions />
      </div>
      <div className="skills-section">
        <SkillsPage />
      </div>
      <div className="project-section">
        <ProjectSection />
      </div>
      <div className="photo-section">
        <PhotoSection />
      </div>
    </div>
  );
};

export default Home;
