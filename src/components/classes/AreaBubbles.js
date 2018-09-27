import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ContentBox from '../shared/ContentBox'
import AreaBubble from './AreaBubble'
import YearPicker from '../shared/YearPicker'

class AreaBubbles extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {} = this.props
    return (
      <ContentBox title="Áreas" color="green">
        <YearPicker onYearChanged={year => console.log(year)} />
        <div className="relative h5 mb5">
          <AreaBubble
            name="Teoria"
            color="blue"
            top="10%"
            left="10%"
            size={30}
          />
          <AreaBubble
            name="Sistemas"
            color="green"
            top="50%"
            left="20%"
            size={42}
          />
          <AreaBubble name="IA" color="pink" top="70%" left="70%" size={21} />
          <AreaBubble
            name="E-science"
            color="orange"
            top="20%"
            left="50%"
            size={12}
          />
          <AreaBubble
            name="Outras"
            color="light-silver"
            top="100%"
            left="60%"
            size={5}
          />
        </div>
      </ContentBox>
    )
  }
}
AreaBubbles.propTypes = {}

export default AreaBubbles
