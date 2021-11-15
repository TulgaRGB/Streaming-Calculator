import React from "react";
import styles from "./Support.module.css";
import { FiInstagram } from "react-icons/fi";
import { CgMusicNote } from "react-icons/cg";

export function Support(): React.ReactElement {
  return (
    <div className={styles.supportLink}>
      <div className={styles.flex}>
        <FiInstagram size={"16px"} /> Follow this page on &#160;
        <div className={styles.button}>
          <a href={"https://www.instagram.com/streamingcalculator/"}>
            Instagram
          </a>
        </div>
        &#160; for the latest updates, tips and roadmap.
      </div>
      <div className={styles.flex}>
        <CgMusicNote size={"16px"} />
        Support this website by listening to &#160;
        <div className={styles.button}>
          <a href={"https://bio.to/moyo"}>my music</a>
        </div>
      </div>
    </div>
  );
}
