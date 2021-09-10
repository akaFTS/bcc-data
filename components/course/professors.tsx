import React, { useState } from "react";
import { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome";
import {
  faCircle,
  faMoon,
  faStar,
  faStarHalf,
} from "https://esm.sh/@fortawesome/free-solid-svg-icons";
import ContentBox from "../layout/contentBox.tsx";
import ProfessorBubble from "./professorBubble.tsx";
import ProfessorCanvas from "./professorCanvas.tsx";
import YearPicker from "../layout/yearPicker.tsx";
import { professors } from "~/data/course/professors.tsx";
import { Professor } from "~/types/course.tsx";
import * as years from "~/data/course/professors/importYears.tsx";

function getCanvasSize(professors: any[], level: number) {
  const capacity = Object.keys(professors).filter(
    (code: any) => professors[code] === level,
  ).length;

  if (capacity <= 6) return 1;
  if (capacity <= 11) return 2;
  if (capacity <= 17) return 3;
  if (capacity <= 22) return 4;
  return 5;
}

function getProfessorsList(professors: any[], level: number) {
  return Object.keys(professors)
    .filter((code: any) => professors[code] === level)
    .join(" ");
}

function allCanvasSizes(professors: Professor[]) {
  const canvasSizes = [];
  for (let i = 0; i <= 6; i += 1) {
    canvasSizes.push(i === 4 ? 0 : getCanvasSize(professors, i));
  }
  return canvasSizes;
}

export default function Professors() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  const professorYears: any[] = [];
  Object.keys(years).forEach((key) => {
    professorYears.push({
      year: parseInt(key.replace("p", ""), 10),
      // @ts-ignore temporary
      professors: years[key],
    });
  });

  const currentProfessorYear = professorYears.find(
    (profYear) => profYear.year === currentYear,
  );

  const currentProfessors = currentProfessorYear
    ? currentProfessorYear.professors
    : {};

  const groupedProfessors = Object.keys(currentProfessors).reduce(
    (acc: any, cur: any) =>
      acc[currentProfessors[cur]]
        ? {
          ...acc,
          [currentProfessors[cur]]: [...acc[currentProfessors[cur]], cur],
        }
        : { ...acc, [currentProfessors[cur]]: [cur] },
    {},
  );

  Object.keys(groupedProfessors).map((level) =>
    groupedProfessors[level].sort((a: any, b: any) => (a > b ? 1 : -1))
  );

  return (
    <ContentBox title="Professores" color="purple">
      <YearPicker onYearChanged={setCurrentYear} />
      <div className="relative mt4">
        <ProfessorCanvas
          title="Titular"
          color="dark-red"
          icon={(
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon
                icon={faStar}
                transform="shrink-8 left-6 down-5"
              />
              <FontAwesomeIcon icon={faStar} transform="shrink-4 up-4" />
              <FontAwesomeIcon
                icon={faStar}
                transform="shrink-8 right-6 down-5"
              />
            </span>
          )}
          size={getCanvasSize(currentProfessors, 6)}
          professorsList={getProfessorsList(currentProfessors, 6)}
        />
        <ProfessorCanvas
          title="Associado"
          color="orange"
          icon={(
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon
                icon={faStar}
                transform="shrink-6 left-4 down-4"
              />
              <FontAwesomeIcon
                icon={faStar}
                transform="shrink-6 right-4 up-4"
              />
            </span>
          )}
          size={getCanvasSize(currentProfessors, 5)}
          professorsList={getProfessorsList(currentProfessors, 5)}
        />
        <ProfessorCanvas
          title="Doutor"
          color="gold"
          icon={<FontAwesomeIcon icon={faStar} transform="shrink-3" />}
          size={getCanvasSize(currentProfessors, 3)}
          professorsList={getProfessorsList(currentProfessors, 3)}
        />
        <ProfessorCanvas
          title="Assistente"
          color="mt-light-green"
          icon={(
            <FontAwesomeIcon icon={faStarHalf} transform="right-3 shrink-3" />
          )}
          size={getCanvasSize(currentProfessors, 2)}
          professorsList={getProfessorsList(currentProfessors, 2)}
        />
        <ProfessorCanvas
          title="Auxiliar"
          color="light-blue"
          icon={<FontAwesomeIcon icon={faCircle} transform="shrink-7" />}
          size={getCanvasSize(currentProfessors, 1)}
          professorsList={getProfessorsList(currentProfessors, 1)}
        />
        <ProfessorCanvas
          title="Sênior"
          color="light-silver"
          icon={<FontAwesomeIcon icon={faMoon} transform="shrink-3" />}
          size={getCanvasSize(currentProfessors, 0)}
          professorsList={getProfessorsList(currentProfessors, 0)}
        />
        {professors.map((professor: any) => (
          <ProfessorBubble
            name={professor.name}
            code={professor.code}
            key={professor.code}
            level={currentProfessors[professor.code] || -1}
            professorSchema={groupedProfessors}
            canvasSizes={allCanvasSizes(currentProfessors)}
          />
        ))}
      </div>
    </ContentBox>
  );
}
