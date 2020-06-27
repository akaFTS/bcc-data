import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import GenderChart from './GenderChart';
import maleGraduates from '../../data/students/maleGraduates.json';
import femaleGraduates from '../../data/students/femaleGraduates.json';

function getRangeFromSelection(selection) {
  if (selection === 0) return [0, 44];
  if (selection === 1) return [0, 15];
  if (selection === 2) return [15, 30];
  return [30, 44];
}

export default function StudentGenders({ currentSelection, onEpochSelected }) {
  const range = getRangeFromSelection(currentSelection);

  const accumulatedMales = maleGraduates
    .slice(range[0], range[1])
    .reduce((accArray, yearGraduates) => {
      accArray.push(
        accArray.length > 0
          ? yearGraduates + accArray[accArray.length - 1]
          : yearGraduates
      );
      return accArray;
    }, []);

  const accumulatedFemales = femaleGraduates
    .slice(range[0], range[1])
    .reduce((accArray, yearGraduates) => {
      accArray.push(
        accArray.length > 0
          ? yearGraduates + accArray[accArray.length - 1]
          : yearGraduates
      );
      return accArray;
    }, []);

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
      />
      <GenderChart genders={genders} />
    </ContentBox>
  );
}

StudentGenders.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
