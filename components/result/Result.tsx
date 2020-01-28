import * as React from 'react';
import styles from './Result.module.css'

interface Props {
    totalResult: number;
}

export function Result(props:Props): React.ReactElement {
    return (
        <div className={styles.container}>
            You Earn: {props.totalResult.toFixed(2)}$
        </div>
    )
}