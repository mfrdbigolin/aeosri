import Head from 'next/head'

import Meta from '../components/meta'
import Header from '../components/header'
import Footer from '../components/footer'
import Nav from '../components/nav'

export default function Index () {
  return (
      <>
        <Meta />
        <Head>
          <title>*Aeosri* — 'nuff said</title>
        </Head>

        <Header />
        <main>
          <Nav />
        </main>
        <Footer />
      </>
  )
}
