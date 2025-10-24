'use client';
import React, { useState } from 'react'
import Image from 'next/image'
import styles from './Products.module.scss'

const Products = () => {
  const [activeTab, setActiveTab] = useState('drivers');

  return (
    <section id="products" className={styles.products}>
      <div className={styles.container}>
        <span className={styles.subtitle}>Unique Solution</span>
        <h2 className={styles.title}>Our Products</h2>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M3.75 6C3.75 5.30921 4.30921 4.75 5 4.75H19C19.6908 4.75 20.25 5.30921 20.25 6V18C20.25 18.6908 19.6908 19.25 19 19.25H13C12.5858 19.25 12.25 19.5858 12.25 20C12.25 20.4142 12.5858 20.75 13 20.75H19C20.5192 20.75 21.75 19.5192 21.75 18V6C21.75 4.48079 20.5192 3.25 19 3.25H5C3.48079 3.25 2.25 4.48079 2.25 6V9C2.25 9.41421 2.58579 9.75 3 9.75C3.41421 9.75 3.75 9.41421 3.75 9V6Z" fill="#0F79FC"/>
                  <path d="M4.3962 17.166C3.62488 17.166 2.88321 17.4576 2.31804 17.9803C1.98392 18.2893 1.72271 18.6699 1.55439 19.0926L1.30346 19.7224C1.15015 20.1072 1.33781 20.5434 1.72261 20.6968C2.10741 20.8501 2.54363 20.6624 2.69694 20.2776L2.94801 19.6474C3.03367 19.4323 3.16673 19.2385 3.3365 19.0816C3.6253 18.8144 4.00358 18.666 4.3962 18.666H6.6042C6.99678 18.666 7.37542 18.814 7.66321 19.0809L7.66404 19.0817C7.83381 19.2387 7.9668 19.4324 8.05246 19.6476L8.30346 20.2776C8.45677 20.6624 8.89299 20.8501 9.27779 20.6968C9.66259 20.5434 9.85025 20.1072 9.69694 19.7224L9.44594 19.0924C9.27767 18.6698 9.01677 18.2896 8.68279 17.9807C8.11662 17.4559 7.37344 17.166 6.6042 17.166H4.3962Z" fill="#0F79FC"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.26764 11.9827C8.24369 12.9588 8.24311 14.5414 7.26797 15.5179C6.29186 16.4941 4.7089 16.4939 3.73231 15.5187C2.7562 14.5426 2.75637 12.9596 3.73153 11.9831C4.70808 11.0065 6.29141 11.0055 7.26764 11.9827ZM6.20653 13.0429C5.8168 12.6526 5.18413 12.652 4.79279 13.0431C4.40217 13.4345 4.40275 14.0677 4.79246 14.4576C5.18385 14.8481 5.81699 14.8475 6.2068 14.4578C6.59737 14.0664 6.59634 13.4327 6.20653 13.0429Z" fill="#0F79FC"/>
                  <path d="M11.75 9C11.75 8.58579 11.4142 8.25 11 8.25C10.5858 8.25 10.25 8.58579 10.25 9V15C10.25 15.4142 10.5858 15.75 11 15.75C11.4142 15.75 11.75 15.4142 11.75 15V9Z" fill="#0F79FC"/>
                  <path d="M14 10.9299C14.4142 10.9299 14.75 11.2657 14.75 11.6799V14.9999C14.75 15.4141 14.4142 15.7499 14 15.7499C13.5858 15.7499 13.25 15.4141 13.25 14.9999V11.6799C13.25 11.2657 13.5858 10.9299 14 10.9299Z" fill="#0F79FC"/>
                  <path d="M17.75 9.55005C17.75 9.13584 17.4142 8.80005 17 8.80005C16.5858 8.80005 16.25 9.13584 16.25 9.55005V15C16.25 15.4143 16.5858 15.75 17 15.75C17.4142 15.75 17.75 15.4143 17.75 15V9.55005Z" fill="#0F79FC"/>
                </svg>
              </div>
              <p className={styles.cardTitle}>ELD Compliance</p>
            </div>
            <p className={styles.cardDesc}>Our FMCSA-certified ELD solution empowers drivers with tools to easily manage and monitor their Hours of Service, ensuring full compliance and reducing the risk of violations.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10.7222 10.0555C11.7959 8.9818 13.5364 8.98151 14.6104 10.0546L14.6113 10.0555C15.6852 11.1294 15.6852 12.8706 14.6113 13.9445C13.5374 15.0185 11.7961 15.0185 10.7222 13.9445C9.64826 12.8706 9.64826 11.1294 10.7222 10.0555ZM11.7829 11.1161C12.271 10.628 13.0625 10.628 13.5506 11.1161C14.0388 11.6043 14.0388 12.3957 13.5506 12.8839C13.0625 13.372 12.271 13.372 11.7829 12.8839C11.2947 12.3957 11.2947 11.6043 11.7829 11.1161Z" fill="#0F79FC"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M13.4167 3C13.4167 2.58579 13.081 2.25 12.6667 2.25C12.2525 2.25 11.9167 2.58579 11.9167 3V4.28615C10.1902 4.45303 8.50897 5.19762 7.18667 6.51992C5.86437 7.84222 5.11978 9.52346 4.9529 11.25H3.66675C3.25253 11.25 2.91675 11.5858 2.91675 12C2.91675 12.4142 3.25253 12.75 3.66675 12.75H4.9529C5.11978 14.4765 5.86437 16.1578 7.18667 17.4801C8.50897 18.8024 10.1902 19.547 11.9167 19.7138V21C11.9167 21.4142 12.2525 21.75 12.6667 21.75C13.081 21.75 13.4167 21.4142 13.4167 21V19.7138C15.1433 19.547 16.8245 18.8024 18.1468 17.4801C19.4691 16.1578 20.2137 14.4765 20.3806 12.75H21.6667C22.081 12.75 22.4167 12.4142 22.4167 12C22.4167 11.5858 22.081 11.25 21.6667 11.25H20.3806C20.2137 9.52346 19.4691 7.84222 18.1468 6.51992C16.8245 5.19763 15.1433 4.45304 13.4167 4.28615V3ZM18.8719 11.25C18.7107 9.90881 18.1154 8.60986 17.0862 7.58058C16.0569 6.55131 14.7579 5.95608 13.4167 5.79489V7C13.4167 7.41421 13.081 7.75 12.6667 7.75C12.2525 7.75 11.9167 7.41421 11.9167 7V5.79489C10.5756 5.95608 9.27661 6.55131 8.24733 7.58058C7.21806 8.60986 6.62283 9.90881 6.46164 11.25H7.66675C8.08096 11.25 8.41675 11.5858 8.41675 12C8.41675 12.4142 8.08096 12.75 7.66675 12.75H6.46164C6.62283 14.0912 7.21806 15.3901 8.24733 16.4194C9.27661 17.4487 10.5756 18.0439 11.9167 18.2051V17C11.9167 16.5858 12.2525 16.25 12.6667 16.25C13.081 16.25 13.4167 16.5858 13.4167 17V18.2051C14.7579 18.0439 16.0569 17.4487 17.0862 16.4194C18.1154 15.3901 18.7107 14.0912 18.8719 12.75H17.6667C17.2525 12.75 16.9167 12.4142 16.9167 12C16.9167 11.5858 17.2525 11.25 17.6667 11.25H18.8719Z" fill="#0F79FC"/>
                </svg>
              </div>
              <p className={styles.cardTitle}>GPS Tracking</p>
            </div>
            <p className={styles.cardDesc}>Track and monitor your fleet’s every movement with precision. ZigZag’s GPS tools provide real-time insights, helping you make quick, informed decisions for maximum operational efficiency.</p>
          </div>
          <div className={styles.card}>
            <div className={styles.cardLegend}>
              Coming soon
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4.68754 4.31295C4.49228 4.11769 4.17569 4.11769 3.98043 4.31295C3.78517 4.50821 3.78517 4.8248 3.98043 5.02006L6.96021 7.99984L3.98043 10.9796C3.78517 11.1749 3.78517 11.4915 3.98043 11.6867C4.17569 11.882 4.49228 11.882 4.68754 11.6867L8.02087 8.35339C8.21613 8.15813 8.21613 7.84155 8.02087 7.64628L4.68754 4.31295Z" fill="#0F79FC"/>
                <path d="M9.3542 4.97962C9.15894 4.78435 8.84236 4.78435 8.6471 4.97962C8.45184 5.17488 8.45184 5.49146 8.6471 5.68672L10.9602 7.99984L8.6471 10.3129C8.45184 10.5082 8.45184 10.8248 8.6471 11.0201C8.84236 11.2153 9.15894 11.2153 9.3542 11.0201L12.0209 8.35339C12.2161 8.15813 12.2161 7.84155 12.0209 7.64628L9.3542 4.97962Z" fill="#0F79FC"/>
              </svg>
            </div>
            <div className={styles.cardHeader}>
              <div className={styles.cardIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <g id="Camera">
                    <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M4.99609 4.37305C3.2702 4.37305 1.87109 5.77216 1.87109 7.49805V12.5022C1.87109 14.2281 3.2702 15.6272 4.99609 15.6272H10.8756C12.5239 15.6272 13.8741 14.3511 13.9922 12.733L15.9034 13.9111C16.3535 14.1885 16.9183 14.2007 17.3799 13.943C17.8415 13.6853 18.1275 13.198 18.1275 12.6694V7.33075C18.1275 6.8021 17.8415 6.31483 17.3799 6.05713C16.9183 5.79942 16.3535 5.81162 15.9034 6.08902L13.9922 7.26712C13.874 5.64906 12.5238 4.37305 10.8756 4.37305H4.99609ZM3.12109 7.49805C3.12109 6.46251 3.96056 5.62305 4.99609 5.62305H10.8756C11.9112 5.62305 12.7506 6.46251 12.7506 7.49805V12.5022C12.7506 13.5377 11.9112 14.3772 10.8756 14.3772H4.99609C3.96056 14.3772 3.12109 13.5377 3.12109 12.5022V7.49805ZM16.5594 7.15311C16.6237 7.11342 16.7045 7.11168 16.7706 7.14855C16.8366 7.18541 16.8775 7.25512 16.8775 7.33075V12.6694C16.8775 12.745 16.8366 12.8147 16.7706 12.8516C16.7045 12.8884 16.6237 12.8867 16.5594 12.847L14.0008 11.2699V8.73022L16.5594 7.15311Z" fill="#0F79FC"/>
                  </g>
                </svg>
              </div>
              <p className={styles.cardTitle}>AI Dash Camera</p>
            </div>
            <p className={styles.cardDesc}>Enhance safety and save on insurance with our advanced AI-powered dash camera. Improve driver performance and safety scores with intelligent monitoring and analysis.</p>
          </div>
        </div>
        {activeTab === 'companies' ? (
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={`${styles.itemImageBg} ${styles.first}`}>
                <Image src="/service-platform.png" alt="products" width={568} height={328} draggable={false} />
              </div>
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemHeader}>
                <button type="button" className={`${styles.itemSpan} ${activeTab === "companies" && styles.active}`} onClick={() => setActiveTab("companies")}>Companies</button>
                <button type="button" className={`${styles.itemSpan} ${activeTab === "drivers" && styles.active}`} onClick={() => setActiveTab("drivers")}>Drivers</button>
              </div>
              <p className={styles.itemTitle}>Full-Service Platform</p>
              <div className={styles.itemRow}>
                <div className={styles.itemChk}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                    <path d="M19.4697 5.96967C19.7626 5.67678 20.2373 5.67678 20.5302 5.96967C20.8231 6.26257 20.8231 6.73734 20.5302 7.03022L9.53022 18.0302C9.23734 18.3231 8.76257 18.3231 8.46967 18.0302L3.46967 13.0302C3.17678 12.7373 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23732 11.6768 4.53022 11.9697L8.99994 16.4394L19.4697 5.96967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                  </svg>
                </div>
                <p>Monitor driver&#39;s locations, speeds, and statuses with live GPS data displayed on an intuitive map.</p>
              </div>
              <div className={styles.itemRow}>
                <div className={styles.itemChk}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                    <path d="M19.4697 5.96967C19.7626 5.67678 20.2373 5.67678 20.5302 5.96967C20.8231 6.26257 20.8231 6.73734 20.5302 7.03022L9.53022 18.0302C9.23734 18.3231 8.76257 18.3231 8.46967 18.0302L3.46967 13.0302C3.17678 12.7373 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23732 11.6768 4.53022 11.9697L8.99994 16.4394L19.4697 5.96967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                  </svg>
                </div>
                <p>Access detailed trip data, including distances, stop durations, and fuel efficiency, to optimize fleet performance.</p>
              </div>
              <div className={styles.itemRow}>
                <div className={styles.itemChk}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                    <path d="M19.4697 5.96967C19.7626 5.67678 20.2373 5.67678 20.5302 5.96967C20.8231 6.26257 20.8231 6.73734 20.5302 7.03022L9.53022 18.0302C9.23734 18.3231 8.76257 18.3231 8.46967 18.0302L3.46967 13.0302C3.17678 12.7373 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23732 11.6768 4.53022 11.9697L8.99994 16.4394L19.4697 5.96967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                  </svg>
                </div>
                <p>Easily manage drivers, vehicles, and inspections all from one centralized interface.</p>
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.item}>
            <div className={styles.itemImage}>
              <div className={`${styles.itemImageBg} ${styles.first2}`}>
                <Image src="/mobile-service.png" alt="products" width={359} height={415} draggable={false} />
              </div>
            </div>
            <div className={styles.itemContent}>
              <div className={styles.itemHeader}>
                <button type="button" className={`${styles.itemSpan} ${activeTab === "companies" && styles.active}`} onClick={() => setActiveTab("companies")}>Companies</button>
                <button type="button" className={`${styles.itemSpan} ${activeTab === "drivers" && styles.active}`} onClick={() => setActiveTab("drivers")}>Drivers</button>
              </div>
              <p className={styles.itemTitle}>Full-Service Mobile App</p>
              <div className={styles.itemRow}>
                <div className={`${styles.itemChk} ${styles.green}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                    <path d="M19.4697 5.96967C19.7626 5.67678 20.2373 5.67678 20.5302 5.96967C20.8231 6.26257 20.8231 6.73734 20.5302 7.03022L9.53022 18.0302C9.23734 18.3231 8.76257 18.3231 8.46967 18.0302L3.46967 13.0302C3.17678 12.7373 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23732 11.6768 4.53022 11.9697L8.99994 16.4394L19.4697 5.96967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                  </svg>
                </div>
                <p>ZIGZAG ELD ensures FMCSA compliance and delivers superior safety and productivity for any fleet</p>
              </div>
              <div className={styles.itemRow}>
                <div className={`${styles.itemChk} ${styles.green}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                    <path d="M19.4697 5.96967C19.7626 5.67678 20.2373 5.67678 20.5302 5.96967C20.8231 6.26257 20.8231 6.73734 20.5302 7.03022L9.53022 18.0302C9.23734 18.3231 8.76257 18.3231 8.46967 18.0302L3.46967 13.0302C3.17678 12.7373 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23732 11.6768 4.53022 11.9697L8.99994 16.4394L19.4697 5.96967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                  </svg>
                </div>
                <p>Drive time recording, changing statuses & inspection preview</p>
              </div>
              <div className={styles.itemRow}>
                <div className={`${styles.itemChk} ${styles.green}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" _ngcontent-ng-c4262270575="" aria-hidden="true">
                    <path d="M19.4697 5.96967C19.7626 5.67678 20.2373 5.67678 20.5302 5.96967C20.8231 6.26257 20.8231 6.73734 20.5302 7.03022L9.53022 18.0302C9.23734 18.3231 8.76257 18.3231 8.46967 18.0302L3.46967 13.0302C3.17678 12.7373 3.17678 12.2626 3.46967 11.9697C3.76256 11.6768 4.23732 11.6768 4.53022 11.9697L8.99994 16.4394L19.4697 5.96967Z" fill="#A3A7AA" _ngcontent-ng-c4262270575=""></path>
                  </svg>
                </div>
                <p>Transfer Logs by Email or via Web</p>
              </div>
            </div>
          </div>
        )}

        <div className={styles.item}>
          <div className={styles.itemContent}>
            <div className={styles.itemHeader}>
              <span className={styles.itemSpan}>Mobile App</span>
            </div>
            <p className={styles.itemTitle}>Mobile ZIGZAG ELD</p>
            <p className={styles.itemDesc}>ZIGZAG ELD ensures FMCSA compliance and delivers superior safety and productivity for any fleet.</p>
            <button className={styles.itemBtn}>Get Started</button>
          </div>
          <div className={styles.itemImage}>
            <div className={`${styles.itemImageBg} ${styles.sec}`}>
              <Image src="/mobile-app-image.png" alt="products" width={508} height={395} draggable={false} />
            </div>
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.itemImage}>
            <div className={`${styles.itemImageBg} ${styles.th}`}>
              <div>
                <Image src="/compliance-overview-img.png" alt="products" width={576} height={338} draggable={false} />
              </div>
            </div>
          </div>
          <div className={styles.itemContent}>
            <div className={styles.itemHeader}>
              <span className={styles.itemSpan}>Insights</span>
            </div>
            <p className={styles.itemTitle}>Real-Time Compliance Overview</p>
            <p className={styles.itemDesc}>Monitor compliance effortlessly with real-time driver information. ZigZag ELD’s Compliance Dashboard centralizes essential data to help fleet managers ensure safety and efficiency on every trip.</p>
            <button className={styles.itemBtn}>Get Started</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products