import React, { useState } from 'react';
import ContentBox from '../shared/ContentBox';
import AreaBubble from './AreaBubble';
import YearPicker from '../shared/YearPicker';
import allClasses from '../../data/classes.json';

export default function AreaBubbles() {
  const [currentYear, setYear] = useState(null);

  const yearClasses = allClasses.filter(
    (classe) => classe.beginYear <= currentYear && classe.endYear >= currentYear
  );

  const teoriaCount = yearClasses.filter((classe) => classe.area === 0).length;
  const sistemasCount = yearClasses.filter((classe) => classe.area === 1)
    .length;
  const iaCount = yearClasses.filter((classe) => classe.area === 2).length;
  const escienceCount = yearClasses.filter((classe) => classe.area === 3)
    .length;
  const othersCount = yearClasses.filter((classe) => classe.area === 4).length;

  return (
    <ContentBox title="Áreas" color="green">
      <YearPicker onYearChanged={setYear} />
      <div className="relative h5 mb5">
        <AreaBubble
          name="Teoria"
          color="blue"
          top="10%"
          left="0%"
          size={teoriaCount}
        />
        <AreaBubble
          name="Sistemas"
          color="green"
          top="50%"
          left="10%"
          size={sistemasCount}
        />
        <AreaBubble
          name="IA"
          color="pink"
          top="70%"
          left="70%"
          size={iaCount}
        />
        <AreaBubble
          name="E-science"
          color="orange"
          top="20%"
          left="50%"
          size={escienceCount}
        />
        <AreaBubble
          name="Outras"
          color="light-silver"
          top="100%"
          left="60%"
          size={othersCount}
        />
      </div>
    </ContentBox>
  );
}
