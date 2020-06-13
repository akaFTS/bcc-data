import React from 'react';
import Propposal from '../components/information/Propposal';
import Schedule from '../components/information/Schedule';
import Evolution from '../components/information/Evolution';
import Sources from '../components/information/Sources';

export default function TCC() {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-100 w-50-l ph2">
          <Propposal />
          <Evolution />
        </div>
        <div className="w-100 w-50-l ph2">
          <Schedule />
          <Sources />
        </div>
      </div>
    </main>
  );
}
