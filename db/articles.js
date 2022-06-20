/* Copyright (C) 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import prisma from '@db/prisma'
import formatArticle from '@utils/formatArticle'
import https from 'https'

export function getArticle (slug) {
  return prisma.article.findFirst({ where: { slug } })
}

export function getAllArticles () {
  return prisma.article.findMany({
    select: {
      slug: true,
      title: true,
      publDate: true
    },
    orderBy: {
      publDate: 'desc'
    }
  })
}

export function createArticle (article) {
  return prisma.article.create({
    data: article
  })
}

export async function updateArticle (id, article) {
  if (await prisma.article.count({ where: { id } }) >= 1) {
    return prisma.article.update({
      where: { id },
      data: article
    })
  }
}

export async function deleteArticle (slug) {
  if (await prisma.article.count({ where: { slug } }) >= 1) {
    return prisma.article.delete({ where: { slug } })
  }
}

export async function repopulate () {
  return new Promise((resolve, reject) => {
    const options = {
      host: process.env.CMS_URL,
      path: '/api/articles',
      method: 'GET',
      port: '443'
    }

    const req = https.request(options, res => {
      const data = []

      res.on('data', chunk => {
        data.push(chunk)
      })

      res.on('end', async () => {
        const articles = JSON.parse(Buffer.concat(data).toString()).data
        const formattedArticles = []

        for (const article of articles) {
          const formattedArticle = await formatArticle(article)

          formattedArticles.push(formattedArticle)
        }

        // Wipe all articles and recreate them in the database.
        // TODO: If there is an upsertMany query in the future, use it.
        await prisma.$transaction([
          prisma.article.deleteMany({}),
          prisma.article.createMany({
            data: formattedArticles
          })
        ])

        resolve(formattedArticles)
      })
    })

    req.on('error', err => {
      reject(new Error(`REPOP ERROR: ${err.message}`))
    })

    req.end()
  })
}
