import React from 'react';
import Head from 'next/head';
import ClassList from 'components/classes/classList';
import AreaBubbles from 'components/classes/areaBubbles';
import styles from './classes.module.css';

export default function Classes() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Matérias • bcc-data</title>
      </Head>
      <div className={styles.leftPanel}>
        <ClassList />
      </div>
      <div className={styles.rightPanel}>
        <AreaBubbles />
      </div>
    </main>
  );
}
