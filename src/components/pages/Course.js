import React from 'react'
import Timeline from '../course/Timeline'
import StudentGenders from '../course/StudentGenders'
import Professors from '../course/Professors'
import TimelineProvider from '../course/TimelineProvider'
import ProfessorsProvider from '../course/ProfessorsProvider'

const Course = () => {
  return (
    <TimelineProvider>
      <ProfessorsProvider>
        <main className="flex">
          <div className="w-100 w-50-l ph2">
            <Timeline />
          </div>
          <div className="w-100 w-50-l ph2">
            <StudentGenders />
            <Professors />
          </div>
        </main>
      </ProfessorsProvider>
    </TimelineProvider>
  )
}

Course.propTypes = {}

export default Course
