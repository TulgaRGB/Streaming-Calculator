import * as React from "react";
import { useRef, useState } from "react";
import { streamingServices } from "../../data";
import { Badge } from "../Badge/Badge";
import { currencySelector } from "../../../atoms/atom";
import { useRecoilValue } from "recoil";
import { currencyMapping } from "../../data";
import styles from "./Widget.module.css";

export function Widget(): React.ReactElement {
  const [value, setValue] = useState("1000");
  const currency = useRecoilValue(currencySelector);
  const hasChangedOnce = useRef<boolean>(false);

  function getAmount(rate: number): string {
    return (Number(value) / rate).toFixed(0);
  }

  function handleFocus(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.placeholder = "";
    if (!hasChangedOnce.current) {
      hasChangedOnce.current = true;
      setValue("0");
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.includes("-")) {
      event.target.value = event.target.value.replace("-", "");
    }
    setValue(event.target.value);
  }

  return (
    <>
      <h3 className={styles.heading}>
        How many streams are needed to earn
        <input
          type="number"
          pattern="[0-9]*"
          min="1"
          title={"Per streaming service"}
          inputMode="numeric"
          onFocus={handleFocus}
          className={styles.input}
          placeholder={"1000"}
          onChange={handleChange}
        />
        {currencyMapping(currency.symbol)}?
      </h3>
      <div className={styles.streamingServices}>
        {streamingServices.map((streamingService) => (
          <Badge
            name={streamingService.name}
            amount={getAmount(streamingService.rate * currency.rate)}
            logo={streamingService.logo}
            key={streamingService.name}
          />
        ))}
      </div>
    </>
  );
}
