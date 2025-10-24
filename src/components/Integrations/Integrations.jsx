import React from 'react'
import styles from './Integrations.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Integrations = () => {
  return (
    <section id="integrations">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Integrations</h2>
        <div className={styles.content}>
          <div className={styles.item}>
            <div className={styles.itemImg}>
              <Image src="/project-44.webp" alt={""} width={130} height={44} draggable={false} />
            </div>
            <p className={styles.itemTitle}>Project 44</p>
            <p className={styles.itemDesc}>Real-Time Visibility & Powerful AI For Your Entire Supply Chain</p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemImg}>
              <Image src="/go-highway.png" alt={""} width={130} height={83} draggable={false} />
            </div>
            <p className={styles.itemTitle}>Go Highway</p>
            <p className={styles.itemDesc}>A service to verify carriers and prevent freight fraud.</p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemImg}>
              <Image src="/macro-point.png" alt={""} width={130} height={50} draggable={false} />
            </div>
            <p className={styles.itemTitle}>Descarte MacroPoint</p>
            <p className={styles.itemDesc}>Global leader in supply chain technology</p>
          </div>
          <div className={styles.item}>
            <div className={styles.itemImg}>
              <Image src="/trucker-tools.png" alt={""} width={130} height={50} draggable={false} />
            </div>
            <p className={styles.itemTitle}>TruckerTools</p>
            <p className={styles.itemDesc}>Digital tools to power the freight network of the future.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations