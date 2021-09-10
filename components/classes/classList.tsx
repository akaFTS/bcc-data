import React, { useState } from "react";
import ContentBox from "../layout/contentBox.tsx";
import AreaFilter from "./areaFilter.tsx";
import YearFilter from "./yearFilter.tsx";
import ClassEntry from "./classEntry.tsx";
import { Area } from "~/types/classes.tsx";
import useClasses from "~/hooks/useClasses.tsx";

export default function ClassList() {
  const [activeArea, setActiveArea] = useState<Area | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const filteredClasses = useClasses(activeArea, activeYear);

  return (
    <ContentBox title="Matérias" color="green">
      <div className="mt3 mb3 flex justify-between align-stretch">
        <AreaFilter
          activeArea={activeArea}
          onAreaSet={setActiveArea}
        />
        <YearFilter
          activeYear={activeYear}
          onYearSet={setActiveYear}
        />
      </div>
      <main role="list">
        {filteredClasses.map((classe, index) => (
          <ClassEntry
            key={classe.code}
            classe={classe}
            whiteStripe={index % 2 === 1}
            currentYear={activeYear}
          />
        ))}
      </main>
    </ContentBox>
  );
}
