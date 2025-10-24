import React from 'react'
import Link from "next/link";

import styles from './Footer.module.scss'
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Link href="#header" className={styles.up}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
            <path d="M11.4697 9.46967C11.7626 9.17678 12.2373 9.17678 12.5302 9.46967L16.5302 13.4697C16.8231 13.7626 16.8231 14.2373 16.5302 14.5302C16.2373 14.8231 15.7626 14.8231 15.4697 14.5302L11.9999 11.0605L8.53022 14.5302C8.23734 14.8231 7.76257 14.8231 7.46967 14.5302C7.17678 14.2373 7.17678 13.7626 7.46967 13.4697L11.4697 9.46967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
          </svg>
        </Link>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <Image src="/logo.svg" alt="Logo" width={190} height={19.64} draggable={false} />
            <p>All-in-One Fleet Management App</p>
          </div>
          <div className={styles.navigation}>
            <div className={styles.col}>
              <h4 className={styles.header}>MENU</h4>
              <div className={styles.list}>
                <Link href="#about" className={styles.link}>About Us</Link>
                <Link href="#features" className={styles.link}>Features</Link>
                <Link href="#mission" className={styles.link}>Our Mission</Link>
                <Link href="#reviews" className={styles.link}>Reviews</Link>
                <Link href="#contact" className={styles.link}>Contact us</Link>
              </div>
            </div>
            <div className={styles.col}>
              <h4 className={styles.header}>EMAIL</h4>
              <div className={styles.list}>
                <Link href="mailto:info@zigzageld.com" className={styles.link}>info@zigzageld.com</Link>
                <Link href="mailto:sales@zigzageld.com" className={styles.link}>sales@zigzageld.com</Link>
                <Link href="mailto:support@zigzageld.com" className={styles.link}>support@zigzageld.com</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bot}>
          <div className={styles.left}>
            <Link href="#!">Terms & Conditions</Link>
            <Link href="#!">Privacy Policy</Link>
            <Link href="#!">Cookie Policy</Link>
          </div>
          <p className={styles.copy}>© Copyright 2025, ZigZag Solutions LLC</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer