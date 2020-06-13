import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import GenderChart from './GenderChart';

const StudentGenders = ({ currentSelection, onEpochSelected }) => {
  return (
    <ContentBox title="Graduandos por Gênero (Acumulado)" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      >
        {({ genders }) => <GenderChart genders={genders} />}
      </StudentDataPicker>
    </ContentBox>
  );
};

StudentGenders.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};

export default StudentGenders;
