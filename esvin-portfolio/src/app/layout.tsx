'use client';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import NavBar from './components/Navbar';
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
      </ChakraProvider>
    </div>
  );
}

