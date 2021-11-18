import { NavBar } from "../NavBar/NavBar";
import { ReactElement } from "react";
import styles from "./Layout.module.css";
import { Support } from "../Support/Support";

interface Props {
  children: ReactElement;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.overlayWrapper}>
            <div className={styles.navbar}>
              <NavBar />
            </div>
            <div className={styles.innerContainer}>
              <div className={styles.main}>{children}</div>
            </div>
          </div>
        </div>
      </div>
      <footer>
        <Support />
      </footer>
    </>
  );
}
