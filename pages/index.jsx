/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Divider from '@components/Divider'
import Footer from '@components/Footer'
import ListArticles from '@components/ListArticles'
import { getAllArticles } from '@db/articles'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { FaGitAlt, FaSearchMinus, FaSearchPlus } from 'react-icons/fa'
import styles from './index.module.sass'

export default function Aeosri ({ articles, NUMBER_RECENT_ARTICLES }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <>
      <Head>
        <title>[ÆOSRI]</title>

        <meta
          name='description'
          content='ÆOSRI is the place where my thoughts are poured.'
        />
      </Head>

      <div className={styles.wrapper}>
        <header className={styles.header}>
          <section title='Just a temporary logo' className={styles.logo}>
            <Image
              src='/placeholder.svg'
              alt='ÆOSRI logo'
              width='360'
              height='240'
            />
          </section>

          <h1>
            ⟦ÆOSRI⟧

            <a title='mfrdbigolin/aeosri' href='https://github.com/mfrdbigolin/aeosri'>
              <FaGitAlt />
            </a>
          </h1>

          <p>Welcome to ÆOSRI!</p>
        </header>

        <div className={styles.articles}>
          <Divider color={styles.textColor} />

          <section className={styles.recent}>
            <h2>
              {articles.length > NUMBER_RECENT_ARTICLES
                ? 'Recently published'
                : 'Articles published'}
            </h2>

            <ListArticles articles={articles} number={NUMBER_RECENT_ARTICLES} />
          </section>

          <section className={styles.moreArticles}>
            {articles.length > NUMBER_RECENT_ARTICLES &&
              <button
                name='Show more articles'
                onClick={() => setShowMore(!showMore)}
              >
                {!showMore ? <FaSearchPlus /> : <FaSearchMinus />}
              </button>}

            {showMore &&
              <>
                <h2>More articles</h2>

                <ListArticles
                  articles={articles}
                  start={NUMBER_RECENT_ARTICLES}
                  number={Infinity}
                />
              </>}
          </section>

          <Divider color={styles.textColor} />
        </div>

        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps () {
  const articles = await getAllArticles()
  // Stringify the publication Date to satisfy Next.js’s distaste for objects.
  const JSONArticles = articles.map(({ publDate, ...rest }) => {
    return { publDate: publDate.toJSON(), ...rest }
  })
  const NUMBER_RECENT_ARTICLES = parseInt(process.env.NUMBER_RECENT_ARTICLES, 10) || 4

  return {
    props: {
      articles: JSONArticles,
      NUMBER_RECENT_ARTICLES
    }
  }
}
