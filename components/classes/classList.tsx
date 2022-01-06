import React, { useState } from 'react';
import ContentBox from '../layout/contentBox';
import AreaFilter from './areaFilter';
import YearFilter from './yearFilter';
import ClassEntry from './classEntry';
import { Area } from 'types/classes';
import useClasses from 'hooks/useClasses';

export default function ClassList() {
  const [activeArea, setActiveArea] = useState<Area | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const filteredClasses = useClasses(activeArea, activeYear);

  return (
    <ContentBox title="Matérias" color="green">
      <div className="mt3 mb3 flex justify-between align-stretch">
        <AreaFilter activeArea={activeArea} onAreaSet={setActiveArea} />
        <YearFilter activeYear={activeYear} onYearSet={setActiveYear} />
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
