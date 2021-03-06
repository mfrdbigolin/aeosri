/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { getPost, getAllPosts } from '@api'
import Head from 'next/head'

import Footer from '@components/Footer'

// TODO: also include an ID system.

export default function Article (props) {
  const date = new Date(props.date)
  const formattedDate =
        new Intl.DateTimeFormat('en', { dateStyle: 'long' }).format(date)

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>

      <p><em>{props.description}</em></p>

      <p>
        <time dateTime={date}>
          {formattedDate}
        </time>
      </p>

      <p><strong>{props.tags}</strong></p>

      <article>
        <h1>{props.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </article>

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
