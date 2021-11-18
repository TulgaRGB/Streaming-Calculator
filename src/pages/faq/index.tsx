import { ReactElement } from "react";
import styles from "./Faq.module.css";
import { paragraphs } from "../../data";
import { Paragraph } from "../../components/Paragraph/Paragraph";

export default function Faq(): ReactElement {
  return (
    <div className={styles.paragraphs}>
      {paragraphs.map((paragraph) => (
        <Paragraph {...paragraph} key={paragraph.heading} />
      ))}
    </div>
  );
}
