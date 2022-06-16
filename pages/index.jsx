/* Copyright (C) 2021, 2022 Matheus Fernandes Bigolin <mfrdrbigolin@disroot.org>
 * SPDX-License-Identifier: MIT
 */

import Divider from '@components/Divider'
import Footer from '@components/Footer'
import styles from '@components/index.module.sass'
import Recent from '@components/Recent'
import { getAllArticles } from '@db/articles'
import Head from 'next/head'
import Image from 'next/image'

const NUMBER_RECENT_ARTICLES = 4

export default function Aeosri ({ articles }) {
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
              src='/static/placeholder.svg'
              alt='ÆOSRI logo'
              width='360'
              height='240'
            />
          </section>

          <h1>
            ⟦ÆOSRI⟧

            <a title='mfrdbigolin/aeosri' href='https://github.com/mfrdbigolin/aeosri'>
              <ion-icon size='large' name='git-branch' />
            </a>
          </h1>

          <p>Welcome to ÆOSRI!</p>
        </header>

        <Divider color={styles.textColor} />

        <section className={styles.recent}>
          <h2>Recently published</h2>

          <Recent articles={articles} numArticles={NUMBER_RECENT_ARTICLES} />
        </section>

        <Divider color={styles.textColor} />

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

  return {
    props: {
      articles: JSONArticles
    }
  }
}
