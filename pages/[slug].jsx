/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import styles from '@components/article.module.sass'
import Date from '@components/Date'
import Divider, { InnerDivider } from '@components/Divider'
import Footer from '@components/Footer'
import { getAllArticles, getArticle } from '@db/articles'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Article ({ article }) {
  const pageTitle = `${article.title} ║ ÆOSRI`

  return (
    <>
      <Head>
        <title>{pageTitle}</title>

        <meta
          name='description'
          content={article.description}
        />
      </Head>

      <div className={styles.back}>
        <Link href='/' passHref>
          <a>
            <Image
              src='/static/placeholder.svg'
              alt='ÆOSRI logo'
              width='120'
              height='80'
            />
          </a>
        </Link>
      </div>

      <article id={styles.article}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            {article.title}
          </h1>

          <h2 className={styles.description}>
            {article.description ? article.description : null}
          </h2>

          <section className={styles.date}>
            <span><Date dateString={article.publDate} /></span>

            {article.updtDate
              ? <span><small>Last updated on</small> <Date dateString={article.updtDate} /></span>
              : null}
          </section>
        </header>

        <InnerDivider color={styles.textColor} />

        <main
          id={styles.content}
          dangerouslySetInnerHTML={{
            __html: article.content
          }}
        />
      </article>

      <Divider color={styles.textColor} />

      <Footer />
    </>
  )
}

export async function getStaticPaths () {
  const articles = await getAllArticles()

  const paths = articles.map(article => {
    return {
      params: { slug: article.slug }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps ({ params }) {
  let { publDate, updtDate, ...rest } = await getArticle(params.slug)

  // Don’t show the update date if the article was published on the same date.
  updtDate = publDate.toDateString() !== updtDate.toDateString() ? updtDate : null

  const JSONArticle = {
    publDate: publDate.toJSON(),
    updtDate: updtDate ? updtDate.toJSON() : null,
    ...rest
  }

  return {
    props: {
      article: JSONArticle
    }
  }
}
