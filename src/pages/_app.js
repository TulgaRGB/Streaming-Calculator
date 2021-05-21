import './styles.css'
import React from "react";
import {
  RecoilRoot,
} from 'recoil';
import Head from "next/head";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({Component, pageProps}) {
  return (
    <RecoilRoot>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title>Estimate your earnings (2021 update) | Music Streaming Calculator</title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  )
}
