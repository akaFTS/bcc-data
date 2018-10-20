import React from 'react'
import ContentBox from '../shared/ContentBox'
import StudentDataPicker from './StudentDataPicker'
import JobBoard from './JobBoard'

const StudentJobs = () => {
  return (
    <ContentBox title="Ocupação Atual" color="blue">
      <StudentDataPicker>
        {({ job }) => <JobBoard jobs={job} />}
      </StudentDataPicker>
    </ContentBox>
  )
}

export default StudentJobs
