import React from 'react'

import styles from './Intro.module.scss'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className={`container ${styles.container}`}>
        <div className={styles.intro}>
            <div className={styles.content}>
                <span className={styles.span}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" _ngcontent-ng-c4262270575="" aria-hidden="true">
                        <g id="Camera" _ngcontent-ng-c4262270575="">
                        <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M4.99609 4.37305C3.2702 4.37305 1.87109 5.77216 1.87109 7.49805V12.5022C1.87109 14.2281 3.2702 15.6272 4.99609 15.6272H10.8756C12.5239 15.6272 13.8741 14.3511 13.9922 12.733L15.9034 13.9111C16.3535 14.1885 16.9183 14.2007 17.3799 13.943C17.8415 13.6853 18.1275 13.198 18.1275 12.6694V7.33075C18.1275 6.8021 17.8415 6.31483 17.3799 6.05713C16.9183 5.79942 16.3535 5.81162 15.9034 6.08902L13.9922 7.26712C13.874 5.64906 12.5238 4.37305 10.8756 4.37305H4.99609ZM3.12109 7.49805C3.12109 6.46251 3.96056 5.62305 4.99609 5.62305H10.8756C11.9112 5.62305 12.7506 6.46251 12.7506 7.49805V12.5022C12.7506 13.5377 11.9112 14.3772 10.8756 14.3772H4.99609C3.96056 14.3772 3.12109 13.5377 3.12109 12.5022V7.49805ZM16.5594 7.15311C16.6237 7.11342 16.7045 7.11168 16.7706 7.14855C16.8366 7.18541 16.8775 7.25512 16.8775 7.33075V12.6694C16.8775 12.745 16.8366 12.8147 16.7706 12.8516C16.7045 12.8884 16.6237 12.8867 16.5594 12.847L14.0008 11.2699V8.73022L16.5594 7.15311Z" fill="#0F79FC" _ngcontent-ng-c4262270575=""></path>
                        </g>
                    </svg>
                    AI Dash Camera Coming Soon!
                </span>
                <h1 className={styles.title}>All-in-One Fleet<br/>Management App</h1>
                <p className={styles.desc}>Streamline Your Fleet Management, Reduce Costs, and Improve Delivery Times with Real-Time GPS Tracking</p>
                <div className={styles.btns}>
                    <button className={styles.btnPrimary}>Get Started</button>
                    <button className={styles.btnSecondary}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                        <path d="M20.0029 15.6953C20.417 15.6953 20.7527 16.0313 20.7529 16.4453C20.7529 18.8243 18.8243 20.7529 16.4453 20.7529H7.55371C5.17487 20.7528 3.24609 18.8242 3.24609 16.4453C3.24629 16.0314 3.58218 15.6955 3.99609 15.6953C4.41019 15.6953 4.7459 16.0313 4.74609 16.4453C4.74609 17.9958 6.0033 19.2528 7.55371 19.2529H16.4453C17.9958 19.2529 19.2529 17.9958 19.2529 16.4453C19.2531 16.0313 19.5889 15.6954 20.0029 15.6953ZM12 3.24609C12.4141 3.24621 12.75 3.58293 12.75 3.99707V12.8574L15.0273 10.5801C15.3203 10.2875 15.7951 10.2873 16.0879 10.5801C16.3806 10.8729 16.3805 11.3477 16.0879 11.6406L12.5303 15.1982C12.4429 15.2856 12.3387 15.3476 12.2285 15.3828C12.1876 15.3959 12.1452 15.4052 12.1016 15.4111C12.0319 15.4206 11.9612 15.4202 11.8916 15.4102C11.855 15.4049 11.8188 15.3971 11.7842 15.3867C11.6692 15.3522 11.5606 15.2891 11.4697 15.1982L7.91211 11.6406C7.61929 11.3477 7.61924 10.8729 7.91211 10.5801C8.20499 10.2874 8.67981 10.2873 8.97266 10.5801L11.25 12.8574V3.99707C11.25 3.58286 11.5858 3.24609 12 3.24609Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                      </svg>
                      Download App
                    </button>
                </div>
            </div>
            <div className={styles.img}>
                <Image src="/intro.png" alt="intro" width={1381} height={565} draggable={false} />
            </div>
        </div>
    </div>
  )
}

export default Intro