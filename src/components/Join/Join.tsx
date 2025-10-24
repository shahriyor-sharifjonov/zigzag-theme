import React from 'react'
import styles from './Join.module.scss'
import Image from "next/image";

const Join = () => {
  return (
    <section className={`${styles.join}`} id="join">
      <div className={`${styles.container} container`}>
        <span className={styles.span}>
          <Image src="/congrats.svg" alt="" width={16} height={16} draggable={false} />
          Join ZIGZAG ELD
        </span>
        <h2 className={styles.title}>Start managing your fleet <span>today</span></h2>
        <p className={styles.p}>Take control of your operations with real-time tracking, compliance tools, and insights from ZigZag ELD.</p>
        <button type="button" className={styles.btn}>Get Started</button>
      </div>
    </section>
  )
}

export default Join