import * as React from "react";
import { useRecoilValue } from "recoil";
import {
  mySelector,
  currencySelector,
  royaltiesPercentageSelector,
} from "../../../atoms/atom";
import { CurrencyConverter } from "../CurrencyConverter/CurrencyConverter";
import styles from "./Result.module.css";

export function Result(): React.ReactElement {
  const total = useRecoilValue(mySelector);
  const currency = useRecoilValue(currencySelector);
  const percentage = useRecoilValue(royaltiesPercentageSelector);

  return (
    <div className={styles.container}>
      <CurrencyConverter />
      <div className={styles.result}>
        <span
          className={styles.earning}
          aria-label={`${currency.name} earning estimate`}
        >
          You earn
        </span>{" "}
        &nbsp;{currency.symbol}
        {Number(
          ((total * currency.rate * percentage) / 100).toFixed(2)
        ).toLocaleString()}
      </div>
    </div>
  );
}
