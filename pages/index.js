import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '../comps/navbar'
import styles from '../styles/Home.module.css'
import Footer from './footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List – Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}> Homepage </h1>
        <p className={styles.text}>This is the homepage</p>
        <p className={styles.text}>This is the homepage</p>
        <p className={styles.text}>This is the homepage</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninja listing</a>
        </Link>
      </div>
    </>
  )
}
