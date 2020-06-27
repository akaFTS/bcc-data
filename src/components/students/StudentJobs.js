import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import JobBoard from './JobBoard';
import group1974 from '../../data/students/group1974';
import group1989 from '../../data/students/group1989';
import group2004 from '../../data/students/group2004';

function getDataFromSelection(selection) {
  if (selection === 0) return [...group1974, ...group1989, ...group2004];
  if (selection === 1) return group1974;
  if (selection === 2) return group1989;
  return group2004;
}

export default function StudentJobs({ currentSelection, onEpochSelected }) {
  const studentData = getDataFromSelection(currentSelection);
  const jobCategories = Array(12).fill(0);
  studentData.forEach((student) => {
    jobCategories[student.job] += 1;
  });
  const normalizedJobCategories = jobCategories.map(
    (category) => category / studentData.length
  );

  return (
    <ContentBox title="Ocupação Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <JobBoard jobCategories={normalizedJobCategories} />
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
