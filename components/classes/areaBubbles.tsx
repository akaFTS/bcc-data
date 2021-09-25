import React, { useState } from "react";
import ContentBox from "../layout/contentBox.tsx";
import AreaBubble from "./areaBubble.tsx";
import YearPicker from "../layout/yearPicker.tsx";
import { Area } from "~/types/classes.ts";
import useClasses from "~/hooks/useClasses.ts";

export default function AreaBubbles() {
  const [currentYear, setYear] = useState<number | null>(null);
  const yearClasses = useClasses(null, currentYear);

  const classesCount: { [key in Area]?: number } = {};
  yearClasses.map((classe) => {
    const areaCount = classesCount[classe.area] ?? 0;
    classesCount[classe.area] = areaCount + 1;
  });

  return (
    <ContentBox
      title="Áreas"
      color="green"
      aria-label="Número de matérias por ano, por área"
    >
      <YearPicker onYearChanged={setYear} />
      <div className="relative h5 mb5">
        <AreaBubble
          name="Teoria"
          color="blue"
          top="10%"
          left="0%"
          size={classesCount["THEORY"] ?? 0}
        />
        <AreaBubble
          name="Sistemas"
          color="green"
          top="50%"
          left="10%"
          size={classesCount["SOFTWARE"] ?? 0}
        />
        <AreaBubble
          name="IA"
          color="pink"
          top="70%"
          left="70%"
          size={classesCount["AI"] ?? 0}
        />
        <AreaBubble
          name="E-science"
          color="orange"
          top="20%"
          left="50%"
          size={classesCount["ESCIENCE"] ?? 0}
        />
        <AreaBubble
          name="Outras"
          color="light-silver"
          top="100%"
          left="60%"
          size={classesCount["OTHERS"] ?? 0}
        />
      </div>
    </ContentBox>
  );
}
