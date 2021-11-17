import styles from "./Widgets.module.css";
import { Widget } from "../../components/Widget/Widget";

export default function Widgets() {
  return (
    <div className={styles.widget}>
      <Widget />
    </div>
  );
}
