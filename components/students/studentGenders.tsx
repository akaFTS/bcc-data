import React from 'react';
import { Epoch } from 'types/students';
import useGraduates from 'hooks/useGraduates';
import ContentBox from '../layout/contentBox';
import StudentDataPicker from './studentDataPicker';
import GenderChart from './genderChart';
import styles from './studentGenders.module.css';

type Props = {
  currentSelection: Epoch;
  onEpochSelected: (epoch: Epoch) => void;
};

export default function StudentGenders({
  currentSelection,
  onEpochSelected,
}: Props) {
  const graduatesByYear = useGraduates(currentSelection);

  return (
    <ContentBox title="Graduandos por Gênero (Acumulado)" color="brand-blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <div className={styles.container}>
        <div className={styles.inner}>
          <GenderChart graduatesByYear={graduatesByYear} />
        </div>
      </div>
    </ContentBox>
  );
}
