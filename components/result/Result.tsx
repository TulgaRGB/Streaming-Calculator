import * as React from 'react';
import styles from './Result.module.css';
import Link from 'next/link';

interface Props {
	totalResult: string;
	href: string;
}

export function Result(props: Props): React.ReactElement {
	return (
		<div className={styles.container}>
			<Link href="/results">
				<a href={props.href} className={styles.anchor}>You Earn: {props.totalResult}$</a>
			</Link>
		</div>
	);
}
