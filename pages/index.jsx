/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Head from 'next/head'

import Footer from '@components/Footer'
import Header from '@components/Header'
import Recent from '@components/Recent'
import ColorSwitch from '@components/ColorSwitch'

import { Center, Divider, Heading, Wrap } from '@chakra-ui/react'

import { getAllPosts } from '@api'

const TITLE = '*Aeosri*'

export default function Index (props) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>

        <meta
          name='description'
          content='Aeosri is the place where my thoughts are poured.'
        />
      </Head>

      <Wrap align='center'>
        <ColorSwitch />
      </Wrap>

      <Header />

      <Divider />

      <Center>
        <Heading as='h2' size='md'>Recently published</Heading>
      </Center>
      <Center>
        <Recent posts={props.posts} />
      </Center>

      <Divider />

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
