import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preload" href="/fonts/BRICE-BLACK.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/BRICE-BLACKSEMIEXPANDED.otf" as="font" type="font/otf" crossOrigin="" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

