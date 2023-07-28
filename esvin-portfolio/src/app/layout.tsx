import React from 'react';
import Navbar from './components/Navbar';
import About from './about/page';
import Projects from './projects/page';
import Photos from './photos/page';
import Contact from './contact/page';
import Skills from './skills/page';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <Navbar /> 
      <About />
      <Skills />
      <Projects />
      <Photos />
      <Contact />
      <h1>Layout</h1>
      <h2>Test Layout Changes</h2>
    </div>
  );
}

