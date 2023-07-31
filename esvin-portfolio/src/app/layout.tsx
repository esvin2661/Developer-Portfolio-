'use client';
import React from 'react';
import { Providers } from "./providers";
import Navbar from './components/Navbar';
import Footer from './components/Footer';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
       <Providers>{ children }</Providers>
      <Footer />
    </div>
  );
}

