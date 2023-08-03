import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { AppProps } from 'next/app';


function MyWrapper({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyWrapper;
