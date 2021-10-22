import React from "react";
import { Result } from "../components/Result/Result";
import { StreamingService } from "../components/StreamingService/StreamingService";
import { HeaderMemoed } from "../components/Header/Header";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { paragraphs, streamingServices } from "../data";
import { Widget } from "../components/Widget/Widget";
import { Support } from "../components/Support/Support";
import styles from "./index.module.css";

export default function Home(): React.ReactNode {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderMemoed />
          </div>
          <div className={styles.streamingsContainer}>
            {streamingServices.map((streaming) => (
              <StreamingService {...streaming} key={streaming.name} />
            ))}
          </div>
          <Result />
        </div>

        <div className={styles.widget}>
          <Widget />
        </div>

        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph) => (
            <Paragraph {...paragraph} key={paragraph.heading} />
          ))}
        </div>
        <Support />
      </main>
    </div>
  );
}
