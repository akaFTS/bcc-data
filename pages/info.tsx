import React from 'react';
import Head from 'next/head';
import Summary from 'components/information/summary';
import Data from 'components/information/data';
import styles from './info.module.css';

export default function Information() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Informações • bcc-data</title>
      </Head>
      <div className={styles.leftPanel}>
        <Summary />
      </div>
      <div className={styles.rightPanel}>
        <Data />
      </div>
    </main>
  );
}
