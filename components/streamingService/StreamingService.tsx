import * as React from 'react';
import { useState } from 'react';
import styles from './StreamingService.module.css';
// import classNames from 'classnames';

interface Props {
    streaming: {
        name: string;
        rate: number;
        count: number;
    };
    calculateTotal: () => void
}

export function StreamingService(props: Props): React.ReactElement{
    const [count, setCount] = useState();

    function handleChange(value: string): void {
        if(isNaN(Number(value))) {
            alert("field can only be a number");
            if(count === undefined)
                setCount('');
            else
                setCount(count);
            return;
        }
        setCount(value);
        props.streaming.count = Number(value);
        props.calculateTotal();
    }

    return(
        <div className={count === undefined || count === '' ? styles.container : styles.altContainer }>
            {props.streaming.name}
            <div className={styles.arrowAndStreams}>
                <div className={count === undefined || count === '' ? styles.arrow : styles.invisibleArrow}/>
                <div className={styles.underline}>
                    <input placeholder="N. of streams" className={styles.input} value={count} onChange={(event) => handleChange(event.target.value)}/>
                </div>
            </div>
        </div>
    );
}