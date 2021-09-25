import React from 'react';
import Summary from '~/components/information/summary.tsx';
import Data from '~/components/information/data.tsx';

export default function Information() {
  return (
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
  );
}
