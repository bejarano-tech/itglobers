import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function TheoricalTest() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Knowledge Test &rarr;</title>
        <meta name="description" content="Knowledge Test &rarr;" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenidos a la prueba técnica para <a href="https://itglobers.com">ITGlobers!</a>
        </h1>

        <p className={styles.description}>
          Inicia eligiendo alguno de los siguientes links
        </p>

        <div className={styles.grid}>
          <a href="/code-test" className={styles.card}>
            <h2>Prueba Front End  &rarr;</h2>
            <p>Encuentra la prueba ténica de front end react developer en esta página.</p>
          </a>
          <a href="/theoretical-test" className={styles.card}>
            <h2>Knowledge Test &rarr;</h2>
            <p>Encuentra la prueba de conocimiento front end react developer en esta página!</p>
          </a>
        </div>
      </main> */}

      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/fredbesan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho por{' '}
          <span className={styles.logo}>
            Frederick Bejarano Sanchez
          </span>
        </a>
      </footer>
    </div>
  )
}
