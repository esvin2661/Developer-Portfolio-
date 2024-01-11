import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Navbar from "./components/Navbar"; 
import Footer from "./components/Footer"; 

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <ChakraProvider>
        <CSSReset />
        <Navbar />
        {children}
        <Footer />
      </ChakraProvider>
    </div>
  );
};

export default RootLayout;
