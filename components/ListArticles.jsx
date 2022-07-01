/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import styles from '@components/listArticles.module.sass'
import { differenceInDays } from 'date-fns'
import Link from 'next/link'
import { useState } from 'react'

export default function ListArticles ({ articles, start = 0, number = 5 }) {
  const feed = articles.slice(start, number)
  const [over, setOver] = useState(null)

  return (
    <nav>
      <ul className={styles.feed}>
        {
          feed.map(function (article, i) {
            const publDate = new Date(article.publDate)
            const daysElapsed = differenceInDays(new Date(), publDate)

            return (
              <li className={styles.post} key={i}>
                <Link href={`/${article.slug}`}>
                  <a
                    onMouseEnter={() => setOver(article.slug)}
                    onMouseLeave={() => setOver(null)}
                  >
                    {article.title}
                  </a>
                </Link>

                <span title={publDate.toJSON()} className={styles.dayBadge}>
                  {daysElapsed <= 1
                    ? ['Today', 'Yesterday'][daysElapsed]
                    : `${daysElapsed} days ago`}
                </span>

                {over === article.slug && article.description &&
                  <span className={styles.overlay}>
                    {article.description}
                  </span>}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
