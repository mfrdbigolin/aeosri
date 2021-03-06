/* Copyright (C) 2021 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'

// TODO: error treatment for posts without frontmatter.
export async function getAllPosts () {
  const posts = []

  readdirSync('./_html/').forEach(postSlug => {
    const post = readFileSync(`./_html/${postSlug}`, 'utf8')
    const filt = matter(post)

    // I don't think it is necessary to export everything.
    posts.push(filt.data)
  })

  return posts
}

export async function getPost (slug) {
  const file = readFileSync(`./_html/${slug}.html`, 'utf8')
  const filt = matter(file)

  return {
    ...filt.data,
    content: filt.content
  }
}
