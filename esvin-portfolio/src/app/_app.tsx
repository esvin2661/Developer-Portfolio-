import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';

function MyWrapper({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyWrapper;
