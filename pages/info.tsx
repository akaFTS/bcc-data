import React from 'react';
import Summary from 'components/information/summary';
import Data from 'components/information/data';

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
