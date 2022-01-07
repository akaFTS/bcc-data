import React from 'react';
import Head from 'next/head';
import ClassList from 'components/classes/classList';
import AreaBubbles from 'components/classes/areaBubbles';

export default function Classes() {
  return (
    <>
      <Head>
        <title>Matérias • bcc-data</title>
      </Head>
      <main className="flex flex-wrap-reverse">
        <div className="w-100 w-two-thirds-l ph2">
          <ClassList />
        </div>
        <div className="w-100 w-third-l ph2">
          <AreaBubbles />
        </div>
      </main>
    </>
  );
}
