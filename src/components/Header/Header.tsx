import React from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Link href="#!" className={styles.logo}>
          <Image src="/logo.svg" alt="Logo" width={190} height={19.64} draggable={false} />
        </Link>
        <div className={styles.list}>
          <Link href="#products" className={styles.link}>Our Products</Link>
          <Link href="#features" className={styles.link}>Features</Link>
          <Link href="#reviews" className={styles.link}>Reviews</Link>
          <Link href="#contact" className={styles.link}>Contact Us</Link>
        </div>
        <div className={styles.action}>
          <Link href="#!" className={styles.signin}>Sign In</Link>
          <Link href="#!" className={styles.start}>Get Started</Link>
        </div>
      </div>
    </header>
  )
}

export default Header