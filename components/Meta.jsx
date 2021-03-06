/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Head from 'next/head'

export default function Meta () {
  return (
    <Head>
      <meta charSet='utf-8' />

      <meta name='application-name' content='Aeosri' />
      <meta name='author' content='Matheus Fernandes Bigolin' />
      <meta
        name='description'
        content='Aeosri is my personal writing website.'
      />
      <meta name='theme-color' content='#a510e5' />
      <meta name='color-scheme' content='dark light' />

      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
    </Head>
  )
}
