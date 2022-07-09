/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class Aeosri extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' type='image/svg+xml' href='/favicon.svg' />

          {/* KaTeX */}
          <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/katex@0.13.13/dist/katex.min.css' integrity='sha384-RZU/ijkSsFbcmivfdRBQDtwuwVqK7GMOw6IMvKyeWL2K5UAlyp6WonmB8m7Jd0Hn' crossOrigin='anonymous' />

          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
          <link href='https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;600;700&family=Source+Code+Pro:wght@500&display=swap' rel='stylesheet' />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
