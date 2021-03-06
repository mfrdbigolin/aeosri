/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Head from 'next/head'

import Footer from '@components/Footer'
import Meta from '@components/Meta'
import Header from '@components/Header'
import Recent from '@components/Recent'

import { getAllPosts } from '@api'

const TITLE = '*Aeosri*'

export default function Index (props) {
  return (
    <>
      <Meta />
      <Head>
        <title>{TITLE}</title>
      </Head>

      <Header />

      <p>Recently published articles:</p>
      <Recent posts={props.posts} />

      <Footer />
    </>
  )
}

export async function getStaticProps () {
  const posts = await getAllPosts()

  return {
    props: {
      posts: posts
    }
  }
}
