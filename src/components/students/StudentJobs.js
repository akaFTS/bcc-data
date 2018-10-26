import React from 'react'
import PropTypes from 'prop-types'
import ContentBox from '../shared/ContentBox'
import StudentDataPicker from './StudentDataPicker'
import JobBoard from './JobBoard'

const StudentJobs = ({ currentSelection, onEpochSelected }) => {
  return (
    <ContentBox title="Ocupação Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      >
        {({ job }) => <JobBoard jobs={job} />}
      </StudentDataPicker>
    </ContentBox>
  )
}

StudentJobs.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
}

export default StudentJobs
