import React, { useState } from 'react';
import ContentBox from '../shared/ContentBox';
import ListFilters from './ListFilters';
import allClasses from '../../data/classes.json';
import ClassEntry from './ClassEntry';

export default function ClassList() {
  const [activeArea, setActiveArea] = useState(-1);
  const [activeYear, setActiveYear] = useState(-1);

  const filteredClasses = allClasses
    .filter((classe) => activeArea === -1 || activeArea === classe.area)
    .filter(
      (classe) =>
        activeYear === -1 ||
        (classe.beginYear <= activeYear && classe.endYear >= activeYear)
    );

  return (
    <ContentBox title="Matérias" color="green">
      <ListFilters
        activeArea={activeArea}
        activeYear={activeYear}
        onAreaSet={setActiveArea}
        onYearSet={setActiveYear}
      />
      <main role="list">
        {filteredClasses.map((classe, index) => (
          <ClassEntry
            key={classe.code}
            classe={classe}
            whiteStripe={index % 2 == 1}
            currentYear={activeYear}
          />
        ))}
      </main>
    </ContentBox>
  );
}
