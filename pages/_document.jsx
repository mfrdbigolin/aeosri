/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Document, { Html, Head, Main, NextScript } from 'next/document'

import Meta from '@components/Meta'

import { ColorModeScript } from '@chakra-ui/react'

import theme from '@styles/theme'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' type='image/svg+xml' href='/static/favicon.svg' />
        </Head>
        <Meta />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
