'use client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SkillsPage from './skills/page';
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
      <ChakraProvider>
        <NavBar />
       { children }
       <Footer />
      </ChakraProvider>
    </div>
  );
}

