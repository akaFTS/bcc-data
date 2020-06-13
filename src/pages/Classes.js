import React from 'react';
import ClassList from '../components/classes/ClassList';
import AreaBubbles from '../components/classes/AreaBubbles';

export default function Classes() {
  return (
    <main className="flex flex-wrap-reverse">
      <div className="w-100 w-two-thirds-l ph2">
        <ClassList />
      </div>
      <div className="w-100 w-third-l ph2">
        <AreaBubbles />
      </div>
    </main>
  );
}
