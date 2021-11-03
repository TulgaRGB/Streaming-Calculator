import * as React from "react";
import { useRecoilState } from "recoil";
import { royaltiesPercentage } from "../../../atoms/atom";
import { FiPercent } from "react-icons/fi";
import styles from "./RoyaltiesPercentage.module.css";

export function RoyaltiesPercentage() {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [percentage, setPercentage] = useRecoilState(royaltiesPercentage);
  const hasChangedOnce = React.useRef<boolean>(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.value = event.target.value.replace("-", "");
    event.target.value = event.target.value.replace(/^(0+)/g, "");

    if (+event.target.value > 100) {
      event.target.value = String(100);
    }

    event.target.value = event.target.value.substring(0, 3);
    setPercentage(Number(event.target.value));
  }

  function handleFocus(): void {
    if (inputRef.current === null) {
      return;
    }

    inputRef.current.focus();
    if (!hasChangedOnce.current) {
      hasChangedOnce.current = true;
      setPercentage(100);
    }
  }

  return (
    <h4 className={styles.container}>
      <FiPercent size={"30px"} className={styles.icon} onClick={handleFocus} />
      You get
      <input
        ref={inputRef}
        className={styles.input}
        type="number"
        value={percentage}
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
