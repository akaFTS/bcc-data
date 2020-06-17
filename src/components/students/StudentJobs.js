import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import JobBoard from './JobBoard';
import group1974 from '../../data/students/group1974';
import group1989 from '../../data/students/group1989';
import group2004 from '../../data/students/group2004';

export default function StudentJobs({ currentSelection, onEpochSelected }) {
  const studentData =
    currentSelection === 0
      ? [...group1974, ...group1989, ...group2004]
      : currentSelection === 1
      ? group1974
      : currentSelection === 2
      ? group1989
      : group2004;

  const job = studentData
    .reduce((jobCategories, student) => {
      jobCategories[student.job]++;
      return jobCategories;
    }, Array(12).fill(0))
    .map((category) => category / studentData.length);

  return (
    <ContentBox title="Ocupação Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      ></StudentDataPicker>
      <JobBoard jobs={job} />
      <p className="silver f7 fw3 tc ph3 lh-title">
        Todos os logotipos são propriedade de suas respectivas empresas e são
        usados para fins meramente ilustrativos neste trabalho. Todos os
        direitos reservados.
      </p>
    </ContentBox>
  );
}

StudentJobs.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
