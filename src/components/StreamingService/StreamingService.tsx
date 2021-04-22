import * as React from 'react';
import {useRecoilState} from "recoil/dist";
import {itemWithId} from '../../../atoms/atom';
import {useRef} from "react";
import styles from './StreamingService.module.css';

interface Props {
  streaming: {
    name: string;
    rate: number;
  };
}


export function StreamingService(props: Props): React.ReactElement {
  const [counter, setCount] = useRecoilState(itemWithId(props.streaming.name));
  const amountInput = useRef<HTMLInputElement>(null)

  function handleChange(value: string): void {
    setCount(({
      name: props.streaming.name,
      rate: props.streaming.rate,
      count: Number(value)
    }));
  }

  const handleFocus = () => {
    amountInput.current?.focus()
  }

  const placeHolder: string = 'enter streams';

  return (
      <div onClick={handleFocus} className={counter.count === undefined || counter.count === 0 ? styles.container : styles.altContainer}>
        {props.streaming.name}
        <div className={styles.underline}>
          <label style={{display: 'none'}}> Streams </label>
          <input type="number" pattern="[0-9]*" step="1" min="1" inputMode='numeric' placeholder={placeHolder} onFocus={e => e.target.placeholder=''} onBlur={e => e.target.placeholder=placeHolder}
                 className={styles.input} ref={amountInput}
                 onChange={(event) => handleChange(event.target.value)}/>
        </div>
      </div>
  );
}
