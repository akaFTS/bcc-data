import React from 'react';
import Head from 'next/head';
import Summary from 'components/information/summary';
import Data from 'components/information/data';

export default function Information() {
  return (
    <>
      <Head>
        <title>Informações • bcc-data</title>
      </Head>
      <main>
        <div className="flex flex-wrap">
          <div className="w-100 w-50-l ph2">
            <Summary />
          </div>
          <div className="w-100 w-50-l ph2">
            <Data />
          </div>
        </div>
      </main>
    </>
  );
}
