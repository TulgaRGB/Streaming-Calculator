import React from 'react';
import {Result} from '../components/result/Result';
import {StreamingerService} from '../components/streamingService/StreamingService';
import {HeaderMemoed} from '../components/header/Header';
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

  return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <HeaderMemoed/>
          </div>
          <main>
            <div className={styles.streamingsContainer}>
              {streamingServices.map((streaming) => (
                  <StreamingerService streaming={streaming} key={streaming.name}/>
              ))}
            </div>
            <div className={styles.link}>
              <Result/>
            </div>
          </main>
        </div>
      </div>
  );
}

