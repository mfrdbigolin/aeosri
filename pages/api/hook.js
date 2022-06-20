/* Copyright (C) 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import formatArticle from '@utils/formatArticle'
import 'dotenv/config'
import { createArticle, deleteArticle, repopulate, updateArticle } from '../../db/articles.js'

export default async function handler (req, res) {
  if (req.method !== 'POST') {
    res.status(404).send(`Cannot ${req.method} /api/hook`)
    return
  }

  if (req.headers.authorization !== process.env.HOOK_SECRET) {
    res.status(401).send('Invalid authorization header')
    return
  }

  // Strapi’s test trigger is used to repopulate the database; a workaround at
  // the moment.
  if (req.body.event === 'trigger-test') {
    console.log(`REPOP ${Date()}`)

    await repopulate().then(async articles => {
      try {
        await res.unstable_revalidate('/')
        articles.forEach(async ({ slug }) =>
          await res.unstable_revalidate(`/${slug}`)
        )

        res.status(200).send('Successful repopulation')
      } catch (err) {
        res.status(500).send('Unsuccessful revalidation')
      }
    })

    return
  }

  const entry = req.body.entry
  let slug = entry.slug
  const event = {
    'entry.publish': 'PUB',
    'entry.update': 'UPDATE',
    'entry.delete': 'DEL',
    'entry.unpublish': 'UNPUB'
  }[req.body.event]

  console.log(event, Date())

  if (event === 'PUB') {
    const article = await formatArticle(entry)

    await createArticle(article)

    res.status(201)
  } else if (event === 'UPDATE') {
    const article = await formatArticle(entry)
    slug = article.slug

    await updateArticle(article.id, article)

    res.status(200)
  } else if (['DEL', 'UNPUB'].includes(event)) {
    await deleteArticle(slug)

    res.status(200)
  }

  try {
    await res.unstable_revalidate('/')
    await res.unstable_revalidate(`/${slug}`)

    res.send('Successful revalidation')
  } catch (err) {
    res.status(500).send('Unsuccessful revalidation')
  }
}
