import React, { useEffect } from 'react'
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { initGA, logPageView } from '../Common/analytics';
import theme from '@/utils/theme';

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
      initGA();
    logPageView();
  }, []);
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}