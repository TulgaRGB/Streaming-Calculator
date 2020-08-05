import * as React from 'react';
import styles from './Result.module.css';
import {useRecoilValue} from "recoil/dist";
import {mySelector} from "../../atoms/atom";

export function Result(): React.ReactElement {
  const total = useRecoilValue(mySelector);

  return (
      <div className={styles.container}>
        <span className={styles.earning}>You Earn:</span> &nbsp; ${Number(total.toFixed(2)).toLocaleString()}
      </div>
  );
}
