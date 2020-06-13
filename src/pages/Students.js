import React, { useState } from 'react';
import StudentGenders from '../components/students/StudentGenders';
import StudentLocations from '../components/students/StudentLocations';
import StudentJobs from '../components/students/StudentJobs';
import StudentEducations from '../components/students/StudentEducations';

export default function Students() {
  const [epoch, setEpoch] = useState(0);

  return (
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
          <StudentGenders currentSelection={epoch} onEpochSelected={setEpoch} />
          <StudentLocations
            currentSelection={epoch}
            onEpochSelected={setEpoch}
          />
        </div>
      </div>
    </main>
  );
}
