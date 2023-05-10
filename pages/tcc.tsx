import React from 'react';
import Head from 'next/head';
import Propposal from 'components/information/propposal';
import Schedule from 'components/information/schedule';
import Evolution from 'components/information/evolution';
import Sources from 'components/information/sources';
import styles from './tcc.module.css';

export default function TCC() {
  return (
    <main className={styles.main}>
      <Head>
        <title>TCC • bcc-data</title>
      </Head>
      <div>
        <Propposal />
        <Evolution />
      </div>
      <div>
        <Schedule />
        <Sources />
      </div>
    </main>
  );
}
