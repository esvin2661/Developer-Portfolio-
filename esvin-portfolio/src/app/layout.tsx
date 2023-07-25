import React from 'react';
import Navbar from './components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <h1>Layout</h1>
      {children}
    </div>
  );
}

