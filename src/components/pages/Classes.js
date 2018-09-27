import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassList from '../classes/ClassList'
import AreaBubbles from '../classes/AreaBubbles'

class Classes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {} = this.props
    return (
      <main className="flex">
        <div className="w-50 ph2">
          <ClassList />
        </div>
        <div className="w-50 ph2">
          <AreaBubbles />
        </div>
      </main>
    )
  }
}
Classes.propTypes = {}

export default Classes
