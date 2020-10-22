import React from 'react';
import {Result} from '../components/result/Result';
import {StreamingerService} from '../components/streamingService/StreamingService';
import {HeaderMemoed} from '../components/header/Header';
import {Paragraph} from '../components/paragraph/Paragraph';
import styles from './index.module.css';

interface State {
  total: number;
  streamingServices: { name: string; rate: number; count: number }[];
}


export default function Home(state: State): React.ReactNode {

  const streamingServices =
      [
        {
          name: 'Spotify',
          rate: 0.00437,
        },
        {
          name: 'Apple Music',
          rate: 0.00783,
        },
        {
          name: 'Tidal',
          rate: 0.01284,
        },
        {
          name: 'Deezer',
          rate: 0.0064,
        },
        {
          name: 'Pandora',
          rate: 0.00133,
        },
        {
          name: 'Amazon Music',
          rate: 0.00402,
        }
      ]
  ;

  interface Paragraph {
    heading: string,
    body: string
  }

  const paragraphs: Paragraph[] = [
    {
      heading: "What Are Streaming Royalties?",
      body: "Streaming royalties are the fees paid to songwriters every time a song is played on sites such as Spotify, YouTube and Apple Music. These fees are a vital source of income for songwriters and artists. However, it’s not as simple as it sounds…"
    },
    {
      heading: "Types Of Streaming Service",
      body: "There are two types of steaming service: On-demand and Non-interactive. \n On-demand services include platforms such as Spotify, Apple Music and Youtube. They are placed in this category for their music being ‘on-demand’. Listeners can hear any song whenever they see fit. Non-interactive streaming platforms include sites such as Pandora and internet radio websites. These platforms function much like a radio, playing songs to listeners at random, without the ability to select specific tracks. "
    },
  ]

  return (
      <div className={styles.page}>
                  <main>
        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderMemoed/>
          </div>
            <div className={styles.streamingsContainer}>
              {streamingServices.map((streaming) => (
                  <StreamingerService streaming={streaming} key={streaming.name}/>
              ))}
            </div>
            <div className={styles.link}>
              <Result/>
            </div>
           
        </div>
        <div className={styles.paragraphs}>
              {paragraphs.map((paragraph) => (
                  <Paragraph {...paragraph} key={paragraph.heading}/>
              ))}
            </div>
        </main>

      </div>
  );
}

