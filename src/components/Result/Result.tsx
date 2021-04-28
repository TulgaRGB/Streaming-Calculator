import * as React from 'react';
import {useRecoilValue} from "recoil/dist";
import {mySelector} from "../../../atoms/atom";
import styles from './Result.module.css';

export function Result(): React.ReactElement {
  const total = useRecoilValue(mySelector);

  return (
      <div className={styles.container}>
        <span className={styles.earning}>You earn:</span> &nbsp; ${Number(total.toFixed(2)).toLocaleString()}
      </div>
  );
}
