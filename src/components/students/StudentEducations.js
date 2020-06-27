import React from 'react';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import group1974 from '../../data/students/group1974';
import group1989 from '../../data/students/group1989';
import group2004 from '../../data/students/group2004';

function getDataFromSelection(selection) {
  if (selection === 0) return [...group1974, ...group1989, ...group2004];
  if (selection === 1) return group1974;
  if (selection === 2) return group1989;
  return group2004;
}

export default function StudentEducations({
  currentSelection,
  onEpochSelected,
}) {
  const studentData = getDataFromSelection(currentSelection);
  const educationCategories = [0, 0, 0, 0, 0];
  studentData.forEach((student) => {
    educationCategories[student.education] += 1;
  });
  const normalizedEducationCategories = educationCategories.map(
    (category) => category / studentData.length
  );

  return (
    <ContentBox title="Nível de Escolaridade" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <div className="mt4">
        <Pie
          data={{
            labels: [
              'Apenas BCC',
              'Outra Graduação',
              'MBA ou especialização',
              'Mestrado',
              'Doutorado',
            ],
            datasets: [
              {
                data: normalizedEducationCategories,
                backgroundColor: [
                  '#E1BEE7',
                  '#BA68C8',
                  '#9C27B0',
                  '#7B1FA2',
                  '#4A148C',
                ],
              },
            ],
          }}
          options={{
            tooltips: {
              callbacks: {
                label(tooltipItem, data) {
                  const dataset = data.datasets[tooltipItem.datasetIndex];
                  const currentValue = dataset.data[tooltipItem.index];
                  const percentage = Math.floor(currentValue * 100);

                  return `${data.labels[tooltipItem.index]}: ${percentage}%`;
                },
              },
            },
          }}
        />
      </div>
    </ContentBox>
  );
}

StudentEducations.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
