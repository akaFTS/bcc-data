import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import StudentDataPicker from './StudentDataPicker';
import { Pie } from 'react-chartjs-2';
import group1974 from '../../data/students/group1974';
import group1989 from '../../data/students/group1989';
import group2004 from '../../data/students/group2004';

export default function StudentEducations({
  currentSelection,
  onEpochSelected,
}) {
  const studentData =
    currentSelection === 0
      ? [...group1974, ...group1989, ...group2004]
      : currentSelection === 1
      ? group1974
      : currentSelection === 2
      ? group1989
      : group2004;

  const educationCategories = studentData
    .reduce(
      (eduCategories, student) => {
        eduCategories[student.education]++;
        return eduCategories;
      },
      [0, 0, 0, 0, 0]
    )
    .map((category) => category / studentData.length);

  return (
    <ContentBox title="Nível de Escolaridade" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      ></StudentDataPicker>
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
                data: educationCategories,
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
                label: function (tooltipItem, data) {
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var currentValue = dataset.data[tooltipItem.index];
                  var percentage = Math.floor(currentValue * 100);

                  console.log(tooltipItem);
                  console.log(data);

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
