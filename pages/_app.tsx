import React from 'react';
import Header from 'components/layout/header';
import Footer from 'components/layout/footer';
import Navbar from 'components/layout/navbar';
import Head from 'next/head';
import { AppProps } from 'next/app';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import 'react-responsive-modal/styles.css';
import 'style/reset.css';
import 'style/vars.css';
import 'style/colors.css';
import 'style/index.css';
import 'style/tachyons.css';
import 'style/custom_tachyons.css';
import styles from './_app.module.css';

// Tell Font Awesome to skip adding the CSS automatically since it's being imported above
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Head>
      <Header />
      <main className={styles.main}>
        <Navbar />
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
