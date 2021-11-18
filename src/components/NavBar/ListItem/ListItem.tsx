import Link from "next/link";
import styles from "./ListItem.module.css";
import React, { ReactElement } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";

interface Props {
  children: ReactElement;
  path: string;
  label: string;
}

export default function ListItem({
  path,
  label,
  children,
}: Props): ReactElement {
  const router = useRouter();
  const isActive = router.asPath === path;

  const style = classnames(styles.link, {
    [styles.active]: isActive,
  });

  return (
    <li className={styles.listItem}>
      <Link href={path}>
        <a className={style}>
          <div className={styles.icon}>{children} </div>
          <span className={styles.linkText}>{label}</span>
        </a>
      </Link>
    </li>
  );
}
