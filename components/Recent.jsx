/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import styles from '@components/recent.module.sass'
import { differenceInDays } from 'date-fns'
import Link from 'next/link'

export default function Recent ({ articles, numArticles = 5 }) {
  const feed = articles.slice(0, numArticles)

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
                  <a>{article.title}</a>
                </Link>

                <span className={styles.dayBadge}>
                  {daysElapsed <= 1
                    ? ['Today', 'Yesterday'][daysElapsed]
                    : `${daysElapsed} days ago`}
                </span>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
