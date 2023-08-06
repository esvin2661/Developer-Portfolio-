import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import RootLayout from './layout';
import '../styles.css';

interface AppProps {
  Component: React.ComponentType<any>; // Explicitly define the type of Component
  pageProps: any; // Adjust this type according to your actual pageProps type
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default MyApp;
