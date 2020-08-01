import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PCM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Playing Cards Market
        </h1>

        <p className={styles.description}>
          Connecting with sellers in {' '} <code className={styles.code}>r/PlayingCardsMarket</code> was never this easy.

        </p>

        <div className={styles.grid}>

          <Link href="/buy">
            <a
              className={styles.card}
            >
              <h3>Buy &rarr;</h3>
              <p>Discover what people are selling and get in touch with them.</p>
            </a>
          </Link>

          <Link href="/sell">
            <a
              className={styles.card}
            >
              <h3>Sell &rarr;</h3>
              <p>Contact us to make your products visible on the website.</p>
            </a>
          </Link>

        </div>
      </main>
      <footer className={styles.footer}>
        <Link href="/faqs" target="_blank" rel="noopener noreferrer">
          FAQs
        </Link>
      </footer>
    </div>
  )
}
