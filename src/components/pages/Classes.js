import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ClassList from '../classes/ClassList'
import AreaBubbles from '../classes/AreaBubbles'
import ClassesProvider from '../../providers/ClassesProvider'

class Classes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {} = this.props
    return (
      <ClassesProvider>
        <main className="flex">
          <div className="w-two-thirds ph2">
            <ClassList />
          </div>
          <div className="w-third ph2">
            <AreaBubbles />
          </div>
        </main>
      </ClassesProvider>
    )
  }
}
Classes.propTypes = {}

export default Classes
