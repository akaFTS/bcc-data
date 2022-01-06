import React from 'react';
import Timeline from 'components/course/timeline';
import Professors from 'components/course/professors';

export default function Course() {
  return (
    <main className="flex flex-wrap-reverse">
      <div className="w-100 w-50-l ph2">
        <Timeline />
      </div>
      <div className="w-100 w-50-l ph2">
        <Professors />
      </div>
    </main>
  );
}
