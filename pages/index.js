import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>lorem iuiuntv iuviunrever oinrivuber v iuhviubozg tr uhrivurtv uozurybo uybuye  </p>
      <p className={styles.text}>lorem iuiuntv iuviunrever oinrivuber v iuhviubozg tr uhrivurtv uozurybo uybuye  </p>

      <Link href={'/ninjas/'}><a className={styles.btn}>See all ninjas</a></Link>
  </div>
}
