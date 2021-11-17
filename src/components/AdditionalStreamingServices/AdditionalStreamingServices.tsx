import classnames from "classnames";
import * as React from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { additionalStreamingServicesExpanded } from "../../../atoms/atom";
import { useRecoilState } from "recoil";
import styles from "./AdditionalStreamingServices.module.css";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export function AdditionalStreamingServices({ children }: Props) {
  const [isExpanded, setIsExpanded] = useRecoilState(
    additionalStreamingServicesExpanded
  );
  const style = classnames(styles.children, {
    [styles.expanded]: isExpanded.isExpanded,
  });

  function handleClick(): void {
    setIsExpanded({ isExpanded: !isExpanded.isExpanded });
  }

  return (
    <section className={styles.container}>
      <div className={styles.heading} onClick={handleClick}>
        {!isExpanded.isExpanded ? (
          <FiPlusCircle
            size={"26px"}
            aria-label={"open additional music services"}
            className={styles.icon}
          />
        ) : (
          <FiMinusCircle
            size={"26px"}
            aria-label={"close additional music services"}
            className={styles.icon}
          />
        )}
        <h4>Other music platforms</h4>
      </div>
      <div className={style}>{children}</div>
    </section>
  );
}
