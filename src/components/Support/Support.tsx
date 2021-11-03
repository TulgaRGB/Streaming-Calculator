import React from "react";
import styles from "./Support.module.css";

export function Support(): React.ReactElement {
  return (
    <div className={styles.supportLink}>
      Support this website by listening to{" "}
      <div className={styles.button}>
        <a href={"https://bio.to/moyo"}>my music</a>
      </div>
    </div>
  );
}
