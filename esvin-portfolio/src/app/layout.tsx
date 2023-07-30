"use client"
import React from 'react';
import Navbar from './components/Navbar';
import About from './about/page';
import Skills from './skills/page';
import Projects from './projects/page';
import Photos from './photos/page';
import Contact from './contact/page';
import Footer from './components/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      {children}
      <About /> 
      <Skills />
      <Projects /> 
      <Photos /> 
      <Contact /> 
      <Footer />
    </div>
  );
}

