import React, { useState } from 'react';
import Head from 'next/head';
import StudentGenders from 'components/students/studentGenders';
import StudentLocations from 'components/students/studentLocations';
import StudentJobs from 'components/students/studentJobs';
import StudentEducations from 'components/students/studentEducations';
import { Epoch } from 'types/students';
import styles from './students.module.css';

export default function Students() {
  const [epoch, setEpoch] = useState<Epoch>('ALL');

  return (
    <main className={styles.main}>
      <Head>
        <title>Alunos • bcc-data</title>
      </Head>
      <div className={styles.leftPanel}>
        <StudentJobs currentSelection={epoch} onEpochSelected={setEpoch} />
        <StudentEducations
          currentSelection={epoch}
          onEpochSelected={setEpoch}
        />
      </div>
      <div className={styles.rightPanel}>
        <StudentGenders currentSelection={epoch} onEpochSelected={setEpoch} />
        <StudentLocations currentSelection={epoch} onEpochSelected={setEpoch} />
      </div>
    </main>
  );
}
