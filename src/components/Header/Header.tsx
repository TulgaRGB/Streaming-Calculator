import * as React from 'react';
import styles from './Header.module.css'

export function Header(): React.ReactElement {
  return (
      <div className={styles.container}>
        <div className={styles.image}/>
        <div className={styles.headings}>
          <h1 className={styles.header}>
            Music Streaming Calculator
          </h1>
          <h2 className={styles.header}>
            Estimate your earnings
          </h2>
        </div>
      </div>
  )
}

export const HeaderMemoed = React.memo(Header);
