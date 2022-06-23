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
          content={article.description ?? article.title}
        />
      </Head>

      <div className={styles.back}>
        <Link href='/' passHref>
          <a>
            <Image
              src='/placeholder.svg'
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

          {article.description &&
            <h2 className={styles.description}>
              {article.description}
            </h2>}

          <section className={styles.date}>
            <span><Date dateString={article.publDate} /></span>

            {article.updtDate &&
              <span>
                <small>Last updated on</small>{' '}
                <Date dateString={article.updtDate} />
              </span>}
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

  const paths = articles.map(article => ({
    params: { slug: article.slug }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps ({ params }) {
  const article = await getArticle(params.slug)

  if (article === null) {
    return {
      notFound: true
    }
  }

  let { publDate, updtDate, ...rest } = article

  // Don’t show the update date if the article was published on the same date.
  updtDate = publDate.toDateString() !== updtDate.toDateString() ? updtDate : null

  const JSONArticle = {
    publDate: publDate.toJSON(),
    updtDate: updtDate && updtDate.toJSON(),
    ...rest
  }

  return {
    props: {
      article: JSONArticle
    },
    // Security precaution for the edge cases not covered by on-demand revalidation.
    revalidate: 30
  }
}
