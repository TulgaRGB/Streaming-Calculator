import React from "react";
import styles from "./Support.module.css";

export function Support(): React.ReactElement {
  return (
    <div className={styles.supportLink}>
      Support this website by listening to my music here
      <div className={styles.button}>
        <a href={"https://bio.to/moyo"} aria-label={"My music"}>
          Moyo
        </a>
      </div>
    </div>
  );
}
