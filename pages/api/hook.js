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

    repopulate()

    res.status(200).send('Successful repopulation')
    return
  }

  const entry = req.body.entry
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

    res.status(201).end()
  } else if (event === 'UPDATE') {
    const article = await formatArticle(entry)

    await updateArticle(article.id, article)

    res.status(200).end()
  } else if (['DEL', 'UNPUB'].includes(event)) {
    await deleteArticle(entry.slug)

    res.status(200).end()
  }
}
