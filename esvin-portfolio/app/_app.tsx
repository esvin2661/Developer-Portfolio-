import React from 'react';
import { useRouter } from 'next/router';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import RootLayout from './layout';
import '../styles.css';

interface AppProps {
  Component: React.ComponentType<any>; // Explicitly define the type of Component
  pageProps: any; // Adjust this type according to your actual pageProps type
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (!router.isReady) {
    console.log('Router is not ready!');
    router.push("/");
  }

  return (
    <ChakraProvider>
      <CSSReset />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </ChakraProvider>
  );
}

export default MyApp;