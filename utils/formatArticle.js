/* Copyright (C) 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import formatMarkdown from '@utils/formatMarkdown'

export default async function formatArticle (cmsData) {
  const id = cmsData.id
  let { slug, title, description, content, date, publishedAt, createdAt, updatedAt } = cmsData.attributes ?? cmsData

  const publDate = new Date(date ?? publishedAt ?? createdAt ?? updatedAt)
  const updtDate = new Date(updatedAt)

  content = await formatMarkdown(content)

  const article = { slug, id, title, publDate, updtDate, description, content }

  return article
}
