import * as React from "react";
import { useRecoilState } from "recoil";
import { royaltiesPercentage } from "../../../atoms/atom";
import { FiPercent } from "react-icons/fi";
import styles from "./RoyaltiesPercentage.module.css";

export function RoyaltiesPercentage() {
  const [, setPercentage] = useRecoilState(royaltiesPercentage);
  const hasChangedOnce = React.useRef<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.value.includes("-")) {
      event.target.value = event.target.value.replace("-", "");
    }

    if (+event.target.value > 100) {
      event.target.value = String(100);
    }

    event.target.value = event.target.value.substring(0, 3);

    setPercentage(Number(event.target.value));
  }

  function handleFocus(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.placeholder = "0";
    if (!hasChangedOnce.current) {
      hasChangedOnce.current = true;
      setPercentage(0);
    }
  }

  return (
    <h4 className={styles.container}>
      <FiPercent size={"24px"} className={styles.icon} />
      You get
      <input
        className={styles.input}
        type="number"
        pattern="^[0-9]{3}"
        min="0"
        max="100"
        placeholder="100"
        onFocus={handleFocus}
        onChange={handleChange}
      />
      % of royalties
    </h4>
  );
}
