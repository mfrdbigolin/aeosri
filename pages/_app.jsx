/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { ChakraProvider } from '@chakra-ui/react'
import theme from '@styles/theme'

export default function Aeosri ({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
