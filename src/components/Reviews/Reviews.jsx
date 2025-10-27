import React from 'react'
import styles from './Reviews.module.scss'
import Link from 'next/link'
import Image from 'next/image'

const Review = ({ava, name, job, text}) => {
  return (
    <div className={styles.item}>
      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.info}>
            <div className={styles.ava}>
              <Image src={`/our-clients-${ava}.png`} alt="" width={48} height={48} draggable={false} />
            </div>
            <div>
              <p className={styles.name}>{name}</p>
              <p className={styles.desc}>{job}</p>
            </div>
          </div>
          <div className={styles.quote}>
            <Image src="/quote.svg" alt="" width={24} height={24} draggable={false} />
          </div>
        </div>
        <p className={styles.comment}>
          {text}
        </p>
      </div>
    </div>
  )
}

const Reviews = () => {
  return (
    <section id="reviews">
      <div className={`container ${styles.container}`}>
        <h2 className={styles.title}>Our clients trust us</h2>
        <div className={styles.cards}>
          <div className={styles.slide}>
            <div className={styles.inner}>
              <Review ava="1" name="Devon Lane" job="Freedom Road Transport" text="Since implementing the GPS tracker from ZigZag Solutions, we've seen a significant improvement in our logistics operations. We now have complete visibility into our fleet and can make real-time decisions to optimize our routing and scheduling."/>
              <Review ava="2" name="Liam Carter" job="XIAN Logistics INC" text="ZigZag ELD has completely transformed our fleet management. The real-time GPS tracking and compliance tools have helped us improve efficiency, reduce delays, and stay ahead of regulatory requirements."/>
              <Review ava="3" name="Ethan Mitchell" job="ALFA Relocation INC" text="Since adopting ZigZag ELD, we’ve been able to minimize paperwork and ensure FMCSA compliance effortlessly. It’s a game-changer for logistics companies looking to streamline operations."/>
              <Review ava="4" name="Jackson Reed" job="Global Freight Express" text="ZigZag ELD is the perfect all-in-one tool for fleet management. The intuitive dashboard and instant notifications have made it easy to address issues and keep our operations running smoothly."/>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.inner}>
              <Review ava="1" name="Devon Lane" job="Freedom Road Transport" text="Since implementing the GPS tracker from ZigZag Solutions, we've seen a significant improvement in our logistics operations. We now have complete visibility into our fleet and can make real-time decisions to optimize our routing and scheduling."/>
              <Review ava="2" name="Liam Carter" job="XIAN Logistics INC" text="ZigZag ELD has completely transformed our fleet management. The real-time GPS tracking and compliance tools have helped us improve efficiency, reduce delays, and stay ahead of regulatory requirements."/>
              <Review ava="3" name="Ethan Mitchell" job="ALFA Relocation INC" text="Since adopting ZigZag ELD, we’ve been able to minimize paperwork and ensure FMCSA compliance effortlessly. It’s a game-changer for logistics companies looking to streamline operations."/>
              <Review ava="4" name="Jackson Reed" job="Global Freight Express" text="ZigZag ELD is the perfect all-in-one tool for fleet management. The intuitive dashboard and instant notifications have made it easy to address issues and keep our operations running smoothly."/>
            </div>
          </div>
          <div className={styles.slide}>
            <div className={styles.inner}>
              <Review ava="1" name="Devon Lane" job="Freedom Road Transport" text="Since implementing the GPS tracker from ZigZag Solutions, we've seen a significant improvement in our logistics operations. We now have complete visibility into our fleet and can make real-time decisions to optimize our routing and scheduling."/>
              <Review ava="2" name="Liam Carter" job="XIAN Logistics INC" text="ZigZag ELD has completely transformed our fleet management. The real-time GPS tracking and compliance tools have helped us improve efficiency, reduce delays, and stay ahead of regulatory requirements."/>
              <Review ava="3" name="Ethan Mitchell" job="ALFA Relocation INC" text="Since adopting ZigZag ELD, we’ve been able to minimize paperwork and ensure FMCSA compliance effortlessly. It’s a game-changer for logistics companies looking to streamline operations."/>
              <Review ava="4" name="Jackson Reed" job="Global Freight Express" text="ZigZag ELD is the perfect all-in-one tool for fleet management. The intuitive dashboard and instant notifications have made it easy to address issues and keep our operations running smoothly."/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews