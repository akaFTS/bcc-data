import React, { useState } from "react";
import StudentGenders from "~/components/students/studentGenders.tsx";
import StudentLocations from "~/components/students/studentLocations.tsx";
import StudentJobs from "~/components/students/studentJobs.tsx";
import StudentEducations from "~/components/students/studentEducations.tsx";
import { Epoch } from "~/types/students.ts";

export default function Students() {
  const [epoch, setEpoch] = useState<Epoch>("ALL");

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
