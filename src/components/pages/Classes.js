import React, { Component } from 'react'
import ClassList from '../classes/ClassList'
import AreaBubbles from '../classes/AreaBubbles'

class Classes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    if (FB) {
      FB.AppEvents.logEvent('classesViewed')
    }
  }

  render() {
    return (
      <main className="flex">
        <div className="w-100 w-two-thirds-l ph2">
          <ClassList />
        </div>
        <div className="w-100 w-third-l ph2">
          <AreaBubbles />
        </div>
      </main>
    )
  }
}

export default Classes
