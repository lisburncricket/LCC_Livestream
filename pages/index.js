import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="LCC Livestreains" />
        <p className="description">
          <iframe src="https://player.twitch.tv/?channel=lisburncricket&parent=startling-truffle-86bd3c.netlify.app&parent=www.startling-truffle-86bd3c.netlify.app" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
        </p>
      </main>

      <Footer />
    </div>
  )
}
