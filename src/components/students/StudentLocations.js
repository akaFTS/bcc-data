import React from 'react'
import ContentBox from '../shared/ContentBox'
import WorldMap from './WorldMap'
import StudentDataPicker from './StudentDataPicker'

const StudentLocations = () => {
  return (
    <ContentBox title="Localização Atual" color="blue">
      <StudentDataPicker>
        {({ location }) => <WorldMap cities={location} />}
      </StudentDataPicker>
    </ContentBox>
  )
}

export default StudentLocations
