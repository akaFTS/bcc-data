import React, { useState } from 'react';
import useClasses from 'hooks/useClasses';
import { Area } from 'types/classes';
import ContentBox from '../layout/contentBox';
import AreaFilter from './areaFilter';
import YearFilter from './yearFilter';
import ClassEntry from './classEntry';
import styles from './classList.module.css';

export default function ClassList() {
  const [activeArea, setActiveArea] = useState<Area | null>(null);
  const [activeYear, setActiveYear] = useState<number | null>(null);
  const filteredClasses = useClasses(activeArea, activeYear);

  return (
    <ContentBox title="Matérias" color="brand-green">
      <div className={styles.filter}>
        <AreaFilter activeArea={activeArea} onAreaSet={setActiveArea} />
        <YearFilter activeYear={activeYear} onYearSet={setActiveYear} />
      </div>
      <main role="list">
        {filteredClasses.map((classe, index) => (
          <ClassEntry
            key={classe.code}
            classe={classe}
            whiteStripe={index % 2 === 0}
            currentYear={activeYear}
          />
        ))}
      </main>
    </ContentBox>
  );
}
