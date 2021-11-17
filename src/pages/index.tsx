import React from "react";
import { Result } from "../components/Result/Result";
import { StreamingService } from "../components/StreamingService/StreamingService";
import { HeaderMemoed } from "../components/Header/Header";
import { Paragraph } from "../components/Paragraph/Paragraph";
import { paragraphs, streamingServices } from "../data";
import { Support } from "../components/Support/Support";
import { StreamingServiceReset } from "../higherOrderComponents/StreamingServiceReset";
import { AdditionalStreamingServices } from "../components/AdditionalStreamingServices/AdditionalStreamingServices";
import { RoyaltiesPercentage } from "../components/RoyaltiesPercentage/RoyaltiesPercentage";
import styles from "./index.module.css";

export default function Home(): React.ReactNode {
  return (
    <>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderMemoed />
          </div>
          <div className={styles.streamingsContainer}>
            {streamingServices.map((streaming, index) => {
              if (index > 3) {
                return null;
              }
              return <StreamingService {...streaming} key={streaming.name} />;
            })}
          </div>

          <AdditionalStreamingServices>
            <div className={styles.streamingsContainer}>
              {streamingServices.map((streaming, index) => {
                if (index < 4) {
                  return null;
                }
                return (
                  <StreamingServiceReset
                    name={streaming.name}
                    key={streaming.name}
                  >
                    <StreamingService
                      {...streaming}
                      key={streaming.name}
                      reset={true}
                    />
                  </StreamingServiceReset>
                );
              })}
            </div>
          </AdditionalStreamingServices>

          <RoyaltiesPercentage />
          <Result />
        </div>

        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph) => (
            <Paragraph {...paragraph} key={paragraph.heading} />
          ))}
        </div>
      </main>
      <footer>
        <Support />
      </footer>
    </>
  );
}
