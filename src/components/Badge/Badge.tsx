import * as React from "react";
import styles from "./Badge.module.css";

interface Props {
  name: string;
  amount: string;
  logo: string;
}

export function Badge(props: Props): React.ReactElement {
  return (
    <div className={styles.badge}>
      <img
        src={props.logo}
        width="24px"
        height="24px"
        alt={`${props.name} - stream calculator`}
      />
      <div className={styles.streamingService}>
        <div>{props.name}</div>
        <div style={{ color: "#85E4C6" }}>
          {Number(props.amount).toLocaleString()}
        </div>
      </div>
    </div>
  );
}
