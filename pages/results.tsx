import React from 'react';
import Head from 'next/head';

import { Email } from '../components/email/Email';
import { Header } from '../components/header/Header';

import styles from './index.module.css';

export default function Results(){
		
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
					<div>
						<Email />
					</div>
				</div>
			</div>
		);
}