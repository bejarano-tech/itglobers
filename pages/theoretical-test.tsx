import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/TheoreticalTest.module.css'

export default function TheoricalTest() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Knowledge Test &rarr;</title>
        <meta name="description" content="Knowledge Test &rarr;" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Respuestas <a href="https://itglobers.com">Knowledge Test!</a>
        </h1>

        <p className={styles.question}>1: Si a: [6, 7, 3, 8] ¿cuál será el valor final de res?</p>
        <p className={styles.answer}>R:// Para  a igual a [6, 7, 3, 8] res es igual a [7,8,8,-1], por lo tanto la respuesta es la C</p>

        <p className={styles.question}>2: ¿Qué valor tiene que ir en lugar de los puntos suspensivos del código?</p>
        <p className={styles.answer}>R:// La respuesta correcta es la C. /^[A-Z][^.?!]*[.?!]$/, el resto está mal formada y no contiene la regex que cumpla con los requisitos</p>

        <p className={styles.question}>3: Si a: [2, 1, 3, 5, 3, 2], ¿qué valor retornará el algoritmo?</p>
        <p className={styles.answer}>R:// La respuesta correcta es la D retorna 3</p>

        <p className={styles.question}>4: Si l: [3, 1, 2, 3, 4, 5] y k: 3, ¿qué valor retornará el algoritmo?</p>
        <p className={styles.answer}>R:// El algoritmo según lo que indica el nombre debería retornar a. [1, 2, 4, 5], sin embargo está mal escrita la funcion, pues intenta usar iteradores pero no de llama a las funciones de la manera correcta</p>

        <p className={styles.question}>5: ¿qué crees que puede estar sucediendo?</p>
        <p className={styles.answer}>R:// b: El DOM no ha cargado o no ha terminado de cargar todos los objetos y contenidos, por lo
que debe hacer uso del evento document.ready o de un evento onload.</p>

        <p className={styles.question}>6: ¿Qué función nativa puedo usar para consultar el perfil de un cliente ya creado en VTEX, a través del correo?</p>
        <p className={styles.answer}>R:// Se puede usar useQuery para consultar un perfil por email de un cliente ya creado en VTEXT</p>

      </main>

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
