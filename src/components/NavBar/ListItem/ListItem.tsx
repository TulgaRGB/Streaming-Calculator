import Link from "next/link";
import { RiQuestionLine, RiAtFill } from "react-icons/ri";
import styles from "../NavBar.module.css";
import { ReactElement } from "react";
import { useRouter } from "next/router";
import classnames from "classnames";

interface Props {
  path: string;
  label: string;
}

export default function ListItem({ path, label }: Props): ReactElement {
  const router = useRouter();
  const isActive = router.asPath === path;

  const style = classnames(styles.link, {
    [styles.active]: isActive,
  });

  return (
    <li className={styles.listItem}>
      <Link href={path}>
        <a className={style}>
          <RiQuestionLine size={"24px"} />
          <span className={styles.linkText}>{label}</span>
        </a>
      </Link>
    </li>
  );
}
