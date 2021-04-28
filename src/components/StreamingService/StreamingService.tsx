import * as React from 'react';
import {useRecoilState} from "recoil/dist";
import {itemWithId} from '../../../atoms/atom';
import {useRef, useState} from "react";
import classnames from 'classnames'
import styles from './StreamingService.module.css';

interface Props {
    name: string;
    rate: number;
    logo: string
}


export function StreamingService(props: Props): React.ReactElement {
  const [counter, setCount] = useRecoilState(itemWithId(props.name));
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const amountInput = useRef<HTMLInputElement>(null)
  const placeHolder: string = 'enter streams';

  function handleChange(value: string): void {
    setCount(({
      name: props.name,
      rate: props.rate,
      count: Number(value)
    }));
  }

  const handleFocus = () => {
    amountInput.current?.focus();
    if(isFocused === false) {
      setIsFocused(true)
    }
  }

  const style = classnames(counter.count === undefined || counter.count === 0 ? styles.container : styles.altContainer, isFocused === true  ? styles.focused : styles.unfocused)

  return (
      <div onClick={handleFocus} className={style} onBlur={() => setIsFocused(false)}>
        <div className={styles.streamingService}>
          <img src={props.logo} width="24px" height="24px" alt={`${props.name} - logo`}/>
          {props.name}
        </div>
        <div className={styles.underline}>
          <label style={{display: 'none'}}> Streams </label>
          <input type="number" pattern="[0-9]*"  placeholder={placeHolder} onFocus={e => e.target.placeholder=''} onBlur={e => e.target.placeholder=placeHolder}
                 className={styles.input} ref={amountInput}
                 onChange={(event) => handleChange(event.target.value)}/>
        </div>
      </div>
  );
}
