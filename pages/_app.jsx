/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@styles/theme'

export default function Aeosri ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />

        <meta name='application-name' content='Aeosri' />
        <meta name='author' content='Matheus Fernandes Bigolin' />
        <meta name='theme-color' content='#A510E5' />
        <meta name='color-scheme' content='dark light' />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>

      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
