import React, { useState } from 'react';
import useClasses from 'hooks/useClasses';
import { Area } from 'types/classes';
import ContentBox from '../layout/contentBox';
import AreaBubble from './areaBubble';
import YearPicker from '../layout/yearPicker';
import styles from './areaBubbles.module.css';

export default function AreaBubbles() {
  const [currentYear, setYear] = useState<number | null>(null);
  const yearClasses = useClasses(null, currentYear);

  const classesCount: { [key in Area]?: number } = {};
  yearClasses.forEach((classe) => {
    const areaCount = classesCount[classe.area] ?? 0;
    classesCount[classe.area] = areaCount + 1;
  });

  return (
    <ContentBox
      title="Áreas"
      color="brand-green"
      aria-label="Número de matérias por ano, por área"
    >
      <YearPicker onYearChanged={setYear} />
      <div className={styles.container}>
        <AreaBubble
          name="Teoria"
          color="brand-blue"
          top="10%"
          left="0%"
          size={classesCount.THEORY ?? 0}
        />
        <AreaBubble
          name="Sistemas"
          color="brand-green"
          top="50%"
          left="10%"
          size={classesCount.SOFTWARE ?? 0}
        />
        <AreaBubble
          name="IA"
          color="brand-purple"
          top="70%"
          left="70%"
          size={classesCount.AI ?? 0}
        />
        <AreaBubble
          name="E-science"
          color="brand-orange"
          top="20%"
          left="50%"
          size={classesCount.ESCIENCE ?? 0}
        />
        <AreaBubble
          name="Outras"
          color="brand-grey"
          top="100%"
          left="60%"
          size={classesCount.OTHERS ?? 0}
        />
      </div>
    </ContentBox>
  );
}
