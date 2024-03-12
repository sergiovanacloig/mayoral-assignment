import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mayoral assignment</title>
        <link rel="icon" ref="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}