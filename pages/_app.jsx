/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import '@styles/styles.sass'
import Head from 'next/head'

export default function Aeosri ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet='utf-8' />

        <meta name='application-name' content='ÆOSRI' />
        <meta name='author' content='Matheus Fernandes Bigolin' />
        {/* International Aerospace Orange */}
        <meta name='theme-color' content='#FF4F00' />
        <meta name='color-scheme' content='light' />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
      </Head>

      <Component {...pageProps} />
    </>
  )
}
