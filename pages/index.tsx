import React, { useState } from 'react';
import Head from 'next/head';
import { Result } from '../components/result/Result';
import { StreamingService } from '../components/streamingService/StreamingService';
import { Header } from '../components/header/Header';
import styles from './index.module.css';

interface State {
	total: number;
	streamingServices: { name: string; rate: number; count: number }[];
}

const streamingServicesSample: { name: string; rate: number; count: number }[] = [
	{
		name: 'Spotify',
		rate: 0.00437,
		count: 0
	},
	{
		name: 'Apple Music',
		rate: 0.00735,
		count: 0
	},
	{
		name: 'Tidal',
		rate: 0.0125,
		count: 0
	},
	{
		name: 'Deezer',
		rate: 0.0064,
		count: 0
	},
	{
		name: 'Napster',
		rate: 0.019,
		count: 0
	},
	{
		name: 'Pandora',
		rate: 0.00133,
		count: 0
	},
	{
		name: 'Amazon Music',
		rate: 0.00437,
		count: 0
	}
];


export default function Home(state:State): React.ReactNode {


	const [ total, setTotal ] = useState(0);
	const [ streamingServices, setStreamingService ] = useState(streamingServicesSample);


	const calculateTotal = () => {
		let currentTotal = 0;
		streamingServices.forEach((streaming) => {
			currentTotal += streaming.count * streaming.rate;
		});
		setTotal(currentTotal);
	};

	return (
		<div className={styles.page}>
			<Head>
				<title>The streaming salary calculator</title>
				<meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0"/>
				<meta name="description" content="Modern tool to give you information about your streaming earning. Choose all your platforms and
					get your informations."/>
			</Head>
			<div className={styles.container}>
				<div className={styles.header}>
					<Header />
				</div>
				<div className={styles.streamingsContainer}>
					{streamingServices.map((streaming) => (
						<StreamingService streaming={streaming} calculateTotal={calculateTotal} key={streaming.name} />
					))}
				</div>
				<div className={styles.link}>
					<Result totalResult={total.toFixed(2)}  href={"/results"}/>
				</div>
			</div>
		</div>
	);
}

