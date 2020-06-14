import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import WorldMap from './WorldMap';
import StudentDataPicker from './StudentDataPicker';

export default function StudentLocations({
  currentSelection,
  onEpochSelected,
}) {
  return (
    <ContentBox title="Localização Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      >
        {({ location }) => <WorldMap cities={location} />}
      </StudentDataPicker>
    </ContentBox>
  );
}

StudentLocations.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
