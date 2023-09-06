import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Navbar from "./components/Navbar";

const theme = extendTheme({
  // Your theme configurations here
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Navbar />
    </ChakraProvider>
  );
}

export default App;
