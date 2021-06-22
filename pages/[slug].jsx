/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { getPost, getAllPosts } from '@api'
import Head from 'next/head'
import Image from 'next/image'

import Footer from '@components/Footer'

import { Heading, Text, Divider, Center, VStack, SimpleGrid, Box, Link } from '@chakra-ui/react'

// TODO: also include an ID system.
export default function Article (props) {
  const date = new Date(props.date)
  const formattedDate =
        new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)

  return (
    <>
      <Head>
        <title>{props.slug}.org ⊙ Aeosri</title>

        <meta
          name='description'
          content={props.description + ' ⊙ Aeosri'}
        />

        {/* MathJax */}
        <script src='https://polyfill.io/v3/polyfill.min.js?features=es6' />
        <script
          id='MathJax-script' async
          src='https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js'
        />

        {/* Prism */}
        <link href='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-funky.css' rel='stylesheet' />
        <script src='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/components/prism-core.min.js' />
        <script src='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/plugins/autoloader/prism-autoloader.min.js' />

        {/* Prism, Unescaped Markup */}
        <link href='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/plugins/unescaped-markup/prism-unescaped-markup.css' rel='stylesheet' />
        <script src='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/plugins/unescaped-markup/prism-unescaped-markup.min.js' />

        {/* Prism, Normalize Whitespace */}
        <script src='https://cdn.jsdelivr.net/npm/prismjs@1.23.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js' />
      </Head>

      <SimpleGrid minChildWidth='120px' spacing='40px'>
        <VStack mb='1em' align='stretch'>
          <Text>
            <time dateTime={date}>
              {formattedDate}
            </time>
          </Text>

          <Text textStyle='italic'>{props.description}</Text>

          <Text textStyle='bold'>{props.tags}</Text>
        </VStack>

        <Center>
          <Link href='/'>
            <Image
              src='/static/placeholder.svg'
              width='60'
              height='40'
            />
          </Link>
        </Center>
      </SimpleGrid>

      <article>
        <Center>
          <Heading as='h1' mt='1.5em' mb='0.8em' fontSize='2rem'>
            {props.title}
          </Heading>
        </Center>

        <Box
          as='section'
          w='90%'
          maxW='600px'
          m='0 auto 1.5em auto'
          id='content'
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </article>

      <Divider mt='3' mb='3' />

      <Footer />
    </>
  )
}

export async function getStaticProps (context) {
  return {
    props: await getPost(context.params.slug)
  }
}

export async function getStaticPaths () {
  let paths = await getAllPosts()

  paths = paths.map(post => ({
    params: { slug: post.slug }
  }))

  return {
    paths: paths,
    fallback: false
  }
}
