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
      color="green-700"
      aria-label="Número de matérias por ano, por área"
    >
      <YearPicker onYearChanged={setYear} />
      <div className={styles.container}>
        <AreaBubble
          name="Teoria"
          color="indigo-800"
          top="10%"
          left="0%"
          size={classesCount.THEORY ?? 0}
        />
        <AreaBubble
          name="Sistemas"
          color="green-700"
          top="50%"
          left="10%"
          size={classesCount.SOFTWARE ?? 0}
        />
        <AreaBubble
          name="IA"
          color="pink-400"
          top="70%"
          left="70%"
          size={classesCount.AI ?? 0}
        />
        <AreaBubble
          name="E-science"
          color="orange-700"
          top="20%"
          left="50%"
          size={classesCount.ESCIENCE ?? 0}
        />
        <AreaBubble
          name="Outras"
          color="grey-500"
          top="100%"
          left="60%"
          size={classesCount.OTHERS ?? 0}
        />
      </div>
    </ContentBox>
  );
}
