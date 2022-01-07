import React, { useState } from 'react';
import Head from 'next/head';
import StudentGenders from 'components/students/studentGenders';
import StudentLocations from 'components/students/studentLocations';
import StudentJobs from 'components/students/studentJobs';
import StudentEducations from 'components/students/studentEducations';
import { Epoch } from 'types/students';

export default function Students() {
  const [epoch, setEpoch] = useState<Epoch>('ALL');

  return (
    <>
      <Head>
        <title>Alunos • bcc-data</title>
      </Head>
      <main>
        <div className="flex flex-wrap">
          <div className="w-100 w-50-l ph2">
            <StudentJobs currentSelection={epoch} onEpochSelected={setEpoch} />
            <StudentEducations
              currentSelection={epoch}
              onEpochSelected={setEpoch}
            />
          </div>
          <div className="w-100 w-50-l ph2">
            <StudentGenders
              currentSelection={epoch}
              onEpochSelected={setEpoch}
            />
            <StudentLocations
              currentSelection={epoch}
              onEpochSelected={setEpoch}
            />
          </div>
        </div>
      </main>
    </>
  );
}
