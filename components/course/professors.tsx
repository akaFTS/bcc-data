import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faMoon,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { ProfessorYearEntry } from 'types/course';
import * as professorYears from 'data/course/professors/importYears';
import ContentBox from '../layout/contentBox';
import ProfessorCanvas from './professorCanvas';
import YearPicker from '../layout/yearPicker';

export default function Professors() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const currentYearData: ProfessorYearEntry =
    professorYears[`p${currentYear}`] || {};

  return (
    <ContentBox title="Professores" color="purple">
      <YearPicker onYearChanged={setCurrentYear} />
      <div className="relative mt4">
        <ProfessorCanvas
          title="Titular"
          color="red-700"
          icon={
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
          }
          professors={currentYearData.MS6 || []}
        />
        <ProfessorCanvas
          title="Associado"
          color="orange-600"
          icon={
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
          }
          professors={currentYearData.MS5 || []}
        />
        <ProfessorCanvas
          title="Doutor"
          color="amber-600"
          icon={<FontAwesomeIcon icon={faStar} transform="shrink-3" />}
          professors={currentYearData.MS3 || []}
        />
        <ProfessorCanvas
          title="Assistente"
          color="green-200"
          icon={
            <FontAwesomeIcon icon={faStarHalf} transform="right-3 shrink-3" />
          }
          professors={currentYearData.MS2 || []}
        />
        <ProfessorCanvas
          title="Auxiliar"
          color="blue-200"
          icon={<FontAwesomeIcon icon={faCircle} transform="shrink-7" />}
          professors={currentYearData.MS1 || []}
        />
        <ProfessorCanvas
          title="Sênior"
          color="grey"
          icon={<FontAwesomeIcon icon={faMoon} transform="shrink-3" />}
          professors={currentYearData.MS0 || []}
        />
      </div>
    </ContentBox>
  );
}
