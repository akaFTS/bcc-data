import React from 'react'
import StudentGenders from '../students/StudentGenders'
import StudentLocations from '../students/StudentLocations'
import StudentJobs from '../students/StudentJobs'
import StudentEducations from '../students/StudentEducations'

const Students = () => {
  return (
    <main>
      <div className="flex">
        <div className="w-100 w-50-l ph2">
          <StudentJobs />
          <StudentEducations />
        </div>
        <div className="w-100 w-50-l ph2">
          <StudentGenders />
          <StudentLocations />
        </div>
      </div>
    </main>
  )
}

export default Students
