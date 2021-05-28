import { useState } from 'react';
import classnames from 'classnames';
import { useFormik } from 'formik';
import Head from 'next/head';
import Image from 'next/image';
import FormVanilla from '../components/FormVanilla';
import styles from '../styles/CodeTest.module.css'

export default function CodeTest({links}) {

  const [open, setOpen] = useState(false);
  const [selectedAirline, setSelectedAirline] = useState(links[0]);

  const nameValidation = (fieldName: string, fieldValue: string) => {
    if (fieldValue.trim() === '') {
      return `${fieldName} is required`
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return 'Entrada inválida';
    }
    if (fieldValue.trim().length < 3) {
      return `${fieldName} debe tener al menos 3 letras`      
    }
    return null;
  }

  const emailValidation = (email: string) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email,
      )
    ) {
      return null;
    }
    if (email.trim() === '') {
      return 'Por favor ingrese su Email';
    }
    return 'Por favor ingrese un Email válido';
  }

  const cellphoneValidation = (cellphone: string) => {
    if(
      /^\d{10}$/.test(
        cellphone,
      )
    ) {
      return null;
    }
    if (cellphone.trim() === '') {
      return 'Por favor ingrese un número de Celular';
    }
    return 'Por favor ingrese un número válido'
  }

  const ageValidation = (age: number) => {
    if (!age) {
      return 'La Edad no es opcional';
    }
    if (age < 18) {
      return 'La Edad debe ser mayor a 18 años'
    }
    if (age > 100) {
      return 'La Edad debe ser menor a 100 años'
    }
    return null
  }

  const validate = {
    name: (name: string) => nameValidation('Name', name),
    email: emailValidation,
    cellphone: cellphoneValidation,
    age: ageValidation,
  }

  const initialValues = {
    name: '',
    email: '',
    cellphone: '',
    age: '',
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Prueba Front End  &rarr;</title>
          <meta name="description" content="Prueba Front End" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <a className={styles.logo}>Prueba</a>
          <ul className={classnames(styles.nav, {[`${styles.open}`]: open})}>
            {links.map((link: {slug: string, title: string}) => (
              <li>
                <a onClick={() => setSelectedAirline(link)}>{link.title}</a>
              </li>
            ))}
          </ul>
          <span
            onClick={() => setOpen(!open)} 
            className={styles.close}>X</span>
        </header>

        <main className={styles.main}>
          <h1 className={styles.title}>Hola, bienvenido, sabemos que quieres viajar en un <span className={styles.airline_name}>{selectedAirline.title}</span>, por favor diligencia el siguiente formulario:</h1>
          <FormVanilla validate={validate} initialValues={initialValues}/>
        </main>

      </div>
      <footer className={styles.footer}>
        <a
          href="https://linkedin.com/fredbesan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hecho por{' '}
          <span className={styles.footer_logo}>
            Frederick Bejarano Sanchez
          </span>
        </a>
      </footer>
    </>
  )
}

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/links')
  const data = await res.json()
  console.log(data);
  return {
    props: {
      ...data,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}