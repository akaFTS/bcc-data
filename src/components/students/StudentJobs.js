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
      <p className="silver f7 fw3 tc ph3 lh-title">
        Todos os logotipos são propriedade de suas respectivas empresas e são
        usados para fins meramente ilustrativos neste trabalho. Todos os
        direitos reservados.
      </p>
    </ContentBox>
  )
}

StudentJobs.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
}

export default StudentJobs
