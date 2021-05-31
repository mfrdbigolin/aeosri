/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'

// TODO: error treatment for posts without frontmatter.
export async function getAllPosts () {
  const posts = []

  readdirSync('./_html/').forEach(slug => {
    const post = readFileSync(`./_html/${slug}`, 'utf8')
    const filt = matter(post)

    posts.push({ ...filt.data, slug: slug.match(/.+(?=[.]\w*)\b/)[0] })
  })

  return posts
}

export async function getPost (slug) {
  const post = readFileSync(`./_html/${slug}.html`, 'utf8')
  const filt = matter(post)

  return {
    ...filt.data,
    slug,
    content: filt.content
  }
}
