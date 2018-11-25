import React, { Component } from 'react'
import Timeline from '../course/Timeline'
import Professors from '../course/Professors'
import TimelineProvider from '../course/TimelineProvider'
import ProfessorsProvider from '../course/ProfessorsProvider'

class Course extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <TimelineProvider>
        <ProfessorsProvider>
          <main className="flex">
            <div className="w-100 w-50-l ph2">
              <Timeline />
            </div>
            <div className="w-100 w-50-l ph2">
              <Professors />
            </div>
          </main>
        </ProfessorsProvider>
      </TimelineProvider>
    )
  }
}

export default Course
