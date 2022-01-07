import React from 'react';
import { Epoch } from 'types/students';
import useGraduates from 'hooks/useGraduates';
import ContentBox from '../layout/contentBox';
import StudentDataPicker from './studentDataPicker';
import GenderChart from './genderChart';

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
    <ContentBox title="Graduandos por Gênero (Acumulado)" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <div className="mv3 mh3">
        <GenderChart graduatesByYear={graduatesByYear} />
      </div>
    </ContentBox>
  );
}
