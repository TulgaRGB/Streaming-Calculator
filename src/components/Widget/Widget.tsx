import * as React from "react";
import {useRef, useState} from "react";
import {streamingServices} from "../../data";
import {Badge} from "../Badge/Badge";
import styles from './Widget.module.css'

export function Widget(): React.ReactElement {
  const [value, setValue] = useState('1000');
  const hasChangedOnce  = useRef<boolean>(false)

  function getAmount(rate: number): string {
    return (Number(value) / rate).toFixed(0);
  }

  function handleFocus(event: React.ChangeEvent<HTMLInputElement>): void {
    event.target.placeholder = '';
    if(!hasChangedOnce.current) {
      hasChangedOnce.current = true;
      setValue('0');
    }
  }

  return (
      <div>
        <h3>
          How many streams are needed to earn
          <input type="number" pattern="[0-9]*" min="1"
                 inputMode='numeric' onFocus={handleFocus} className={styles.input} placeholder={"1000"}
                 onChange={e => setValue(e.target.value)}/>
          dollars?
        </h3>
        <div className={styles.streamingServices}>
          {streamingServices.map((streamingService => {
                return <Badge name={streamingService.name} amount={getAmount(streamingService.rate)}
                              logo={streamingService.logo}/>
          }
          ))}
        </div>
      </div>
  )
}
