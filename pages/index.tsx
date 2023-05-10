import React from 'react';
import Head from 'next/head';
import Timeline from 'components/course/timeline';
import Professors from 'components/course/professors';
import styles from './index.module.css';

export default function Course() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Curso • bcc-data</title>
      </Head>
      <Timeline />
      <Professors />
    </main>
  );
}
