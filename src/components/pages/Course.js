import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Course extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {} = this.props
    return <span>Course works!</span>
  }
}
Course.propTypes = {}

export default Course
