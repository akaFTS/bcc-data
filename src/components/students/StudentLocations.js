import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import WorldMap from './WorldMap';
import StudentDataPicker from './StudentDataPicker';
import group1974 from '../../data/students/group1974';
import group1989 from '../../data/students/group1989';
import group2004 from '../../data/students/group2004';

function normalizeCities(data) {
  const cities = data.reduce(
    (acc, cur) =>
      acc[cur.location]
        ? { ...acc, [cur.location]: acc[cur.location] + 1 }
        : { ...acc, [cur.location]: 1 },
    {}
  );
  return Object.keys(cities).reduce(
    (acc, city) => ({
      ...acc,
      [city]: cities[city] / data.length,
    }),
    {}
  );
}

export default function StudentLocations({
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

  const location = normalizeCities(studentData);

  return (
    <ContentBox title="Localização Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      ></StudentDataPicker>
      <WorldMap cities={location} />
    </ContentBox>
  );
}

StudentLocations.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
