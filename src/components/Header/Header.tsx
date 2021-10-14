import * as React from 'react';
import { TypeWriter } from "../TypeWriter/TypeWriter";
import styles from './Header.module.css'

export function Header(): React.ReactElement {
  return (
      <div className={styles.container}>
        <div className={styles.image}/>
        <div className={styles.headings}>
          <h1 className={styles.header}>
            Music Royalty Calculator
          </h1>
          <TypeWriter as={'h2'} style={styles.header}>
            Estimate your earnings
          </TypeWriter>
        </div>
      </div>
  )
}

export const HeaderMemoed = React.memo(Header);
