import React from "react";
import Image from "next/image";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  additionalStreamingServicesExpanded,
  itemWithId,
} from "../../../atoms/atom";
import { useRef, useState } from "react";
import classnames from "classnames";
import styles from "./StreamingService.module.css";

interface Props {
  name: string;
  rate: number;
  logo: string;
  reset?: boolean;
}

export function StreamingService(props: Props): React.ReactElement {
  const [counter, setCount] = useRecoilState(itemWithId(props.name));
  const isExpanded = useRecoilValue(additionalStreamingServicesExpanded);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const amountInput = useRef<HTMLInputElement>(null);
  const placeHolder = "enter streams";

  React.useEffect(() => {
    if (props.reset && amountInput.current) {
      amountInput.current.value = "";
    }
  }, [isExpanded.isExpanded, props.reset]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.value = event.target.value.replace(/\D+/g, "");

    setCount({
      name: props.name,
      rate: props.rate,
      count: Number(event.target.value),
    });

    event.target.value = event.target.value.replace(/(.)(?=(\d{3})+$)/g, "$1,");
  }

  const handleFocus = () => {
    amountInput.current?.focus();
    if (isFocused === false) {
      setIsFocused(true);
    }
  };

  const style = classnames(
    counter.count === undefined || counter.count === 0
      ? styles.container
      : styles.altContainer,
    isFocused === true ? styles.focused : styles.unfocused
  );

  return (
    <div
      className={style}
      onClick={handleFocus}
      onBlur={() => setIsFocused(false)}
    >
      <div className={styles.streamingService}>
        <div className={styles.image}>
          <Image
            src={props.logo}
            width="24px"
            height="24px"
            alt={`${props.name} - logo`}
          />
        </div>
        {props.name}
      </div>
      <div className={styles.underline}>
        <label style={{ display: "none" }}> Streams </label>
        <input
          type="text"
          pattern="[0-9]*"
          inputMode="decimal"
          placeholder={placeHolder}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = placeHolder)}
          className={styles.input}
          ref={amountInput}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
