"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import SkillsPage from "./skills/page";
import GitHubContributions from "./components/GitHubContributions";
import ProjectSection from "./components/ProjectSection";
import PhotoSection from "./components/PhotosSection";
import './styles.css'; 


//Handles smooth scrolling , Figure out how to slow down the transition. 
const scrolltosection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const About = () => {
  return (
    <div className="smooth-scrolling">
        <HeroSection />
        <GitHubContributions />
        <SkillsPage />
        <div className="project-section">
        <ProjectSection />
      </div>
      <div className="photo-section">
        <PhotoSection />
      </div>
   </div>
  );
};


export default About; 
