import React from 'react'
import styles from './Download.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Download = () => {
  return (
    <section className={styles.download} id="download">
      <div className={`container ${styles.container}`}>
        <div className={styles.info}>
          <span className={styles.span}>
            <Image src="/Fire.svg" alt="" width={16} height={16} draggable={false} />
            Download our app
          </span>
          <h2 className={styles.title}>Join ZIGZAG ELD<br/>Today!</h2>
          <p className={styles.description}>1000+ ★★★★★ reviews on Google Play and App Store</p>
        </div>
        <div className={styles.action}>
          <Link href="#!" target="_blank" rel="noopener noreferrer">
            <Image src="/google-play.svg" alt="Google Play" width={170} height={52} draggable={false} />
          </Link>
          <Link href="#!" target="_blank" rel="noopener noreferrer">
            <Image src="/app-store.svg" alt="Google Play" width={170} height={52} draggable={false} />
          </Link>
        </div>
        <Image src="/mockups.png" alt="" width={551} height={801} draggable={false} />
      </div>
    </section>
  )
}

export default Download