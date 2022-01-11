import React from "react";
import Script from "next/script";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import "./styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#83e4c6" />
        <meta
          name="description"
          content="Use our latest music streaming calculator tool to estimate your earnings and compare different music streaming services."
        />
        <meta
          name="keywords"
          content="Streaming, Music, Stream, Royalty, Earnings, Revenue, Tool, Calculator, 2022"
        />
        <link
          rel="preload"
          href="../fonts/varela/varela-v11-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <title>
          Estimate your earnings (2022 update) | Music Streaming Calculator
        </title>
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=UA-174161419-1"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                
                  gtag('config', 'UA-174161419-1');
              `}
      </Script>

      <Script
        strategy="afterInteractive"
        id="hotjar"
        dangerouslySetInnerHTML={{
          __html: `
              (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:2157870,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
        }}
      />

      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
