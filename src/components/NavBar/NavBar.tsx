import { ReactElement } from "react";
import {
  TiCalculator,
  TiLightbulb,
  TiInfoLargeOutline,
  TiThListOutline,
} from "react-icons/ti";
import styles from "./NavBar.module.css";
import ListItem from "./ListItem/ListItem";

export function NavBar(): ReactElement {
  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.image} />
        <div className={styles.linkText}>Streaming Calculator</div>
      </div>

      <ListItem label={"Calculator"} path={"/"}>
        <TiCalculator size={"24px"} />
      </ListItem>

      <ListItem label={"Widgets"} path={"/widgets"}>
        <TiLightbulb size={"24px"} />
      </ListItem>

      <ListItem label={"Faq"} path={"/faq"}>
        <TiInfoLargeOutline size={"24px"} />
      </ListItem>

      <ListItem label={"Blog"} path={"/blog"}>
        <TiThListOutline size={"24px"} />
      </ListItem>
    </nav>
  );
}
