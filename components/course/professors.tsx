import React, { useState } from 'react';
import { Flipper } from 'react-flip-toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircle,
  faMoon,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { LevelList } from 'types/course';
import professorLevels from 'data/course/professorLevels.yml';
import ContentBox from '../layout/contentBox';
import ProfessorCanvas from './professorCanvas';
import YearPicker from '../layout/yearPicker';
import styles from './professors.module.css';

function getProfessorListForAnimation(yearData: LevelList) {
  function listFromLevel(level: string) {
    return `${level}:${yearData[level] ? yearData[level].join('.') : ''}:`;
  }

  let levelList = '';
  ['MS0', 'MS1', 'MS2', 'MS3', 'MS5', 'MS6'].forEach((level) => {
    levelList += listFromLevel(level);
  });

  return levelList;
}

export default function Professors() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);
  const currentYearLevels: LevelList =
    professorLevels.find((entry) => entry.year === currentYear)?.levels || {};

  return (
    <ContentBox title="Professores" color="brand-purple">
      <YearPicker onYearChanged={setCurrentYear} />
      <div className={styles.container}>
        <Flipper flipKey={getProfessorListForAnimation(currentYearLevels)}>
          <ProfessorCanvas
            title="Titular"
            color="brand-red"
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
            professors={currentYearLevels.MS6 || []}
          />
          <ProfessorCanvas
            title="Associado"
            color="brand-orange"
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
            professors={currentYearLevels.MS5 || []}
          />
          <ProfessorCanvas
            title="Doutor"
            color="brand-yellow"
            icon={<FontAwesomeIcon icon={faStar} transform="shrink-3" />}
            professors={currentYearLevels.MS3 || []}
          />
          <ProfessorCanvas
            title="Assistente"
            color="brand-lime"
            icon={
              <FontAwesomeIcon icon={faStarHalf} transform="right-3 shrink-3" />
            }
            professors={currentYearLevels.MS2 || []}
          />
          <ProfessorCanvas
            title="Auxiliar"
            color="brand-light-blue"
            icon={<FontAwesomeIcon icon={faCircle} transform="shrink-7" />}
            professors={currentYearLevels.MS1 || []}
          />
          <ProfessorCanvas
            title="Sênior"
            color="brand-grey"
            icon={<FontAwesomeIcon icon={faMoon} transform="shrink-3" />}
            professors={currentYearLevels.MS0 || []}
          />
        </Flipper>
      </div>
    </ContentBox>
  );
}
