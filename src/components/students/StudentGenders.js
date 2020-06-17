import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import GenderChart from './GenderChart';
import maleGraduates from '../../data/students/maleGraduates.json';
import femaleGraduates from '../../data/students/femaleGraduates.json';

export default function StudentGenders({ currentSelection, onEpochSelected }) {
  const range =
    currentSelection === 0
      ? [0, 44]
      : currentSelection === 1
      ? [0, 15]
      : currentSelection === 2
      ? [15, 30]
      : [30, 44];

  const accumulatedMales = [];
  maleGraduates
    .slice(range[0], range[1])
    .reduce((prev, curr, i) => (accumulatedMales[i] = prev + curr), 0);

  const accumulatedFemales = [];
  femaleGraduates
    .slice(range[0], range[1])
    .reduce((prev, curr, i) => (accumulatedFemales[i] = prev + curr), 0);

  const genders = {
    accumulatedFemales,
    accumulatedMales,
    baseYear: 1974 + range[0],
  };

  return (
    <ContentBox title="Graduandos por Gênero (Acumulado)" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      ></StudentDataPicker>
      <GenderChart genders={genders} />
    </ContentBox>
  );
}

StudentGenders.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
