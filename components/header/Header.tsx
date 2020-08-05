import * as React from 'react';
import styles from './Header.module.css'

export function Header(): React.ReactElement {
  return (
      <div className={styles.outerContainer}>
        <div className={styles.image}/>
        <div className={styles.header}>Estimate your earnings</div>
      </div>
  )
}

export const HeaderMemoed = React.memo(Header);
