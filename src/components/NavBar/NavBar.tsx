import { ReactElement } from "react";
import { useRouter } from "next/router";
import { RiQuestionLine, RiAtFill } from "react-icons/ri";
import styles from "./NavBar.module.css";
import ListItem from "./ListItem/ListItem";

export function NavBar(): ReactElement {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.header}>
        <div className={styles.image} />
        <div className={styles.linkText}>Streaming Calculator</div>
      </div>
      <ListItem label={"Home"} path={"/"} />
      <ListItem label={"Widgets"} path={"/widgets"} />

      {/*<li className={styles.listItem}>*/}
      {/*  <Link href={"/"}>*/}
      {/*    <a className={style}>*/}
      {/*      <RiQuestionLine size={"24px"} />*/}
      {/*      <span className={styles.linkText}>Home</span>*/}
      {/*    </a>*/}
      {/*  </Link>*/}
      {/*</li>*/}
      {/*<li className={styles.listItem}>*/}
      {/*  <Link href={"/widgets"}>*/}
      {/*    <a className={styles.link}>*/}
      {/*      <RiAtFill size={"24px"} />*/}
      {/*      <span className={styles.linkText}>Widgets</span>*/}
      {/*    </a>*/}
      {/*  </Link>*/}
      {/*</li>*/}
    </nav>
  );
}
