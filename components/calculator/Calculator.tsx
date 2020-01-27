import * as React from 'react';
import { useState, useEffect } from 'react';
import styles from './Calculator.module.css';
import classNames from 'classnames';

interface Props {
    streaming: {
        name: string;
        rate: number;
        count: number;
    };
    calculateTotal: () => void
}


export function Calculator(props: Props): React.ReactElement{

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

    const classname = classNames({"container": count=== undefined, "altContainer": count!==undefined });

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