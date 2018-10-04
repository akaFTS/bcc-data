import React, { Component } from 'react'
import PropTypes from 'prop-types'
import grids from '../../data/grids.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons'

class GridPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0,
    }
  }

  moveLeft = () => {
    this.setState(prevState => ({
      selectedIndex: (prevState.selectedIndex - 1) % grids.length,
    }))
  }

  moveRight = () => {
    this.setState(prevState => ({
      selectedIndex: (prevState.selectedIndex + 1) % grids.length,
    }))
  }
  render() {
    const { children } = this.props
    const { selectedIndex } = this.state

    const activeGrid = grids[selectedIndex]

    return (
      <div>
        <div className="f4 fw6 tc dark-gray mb4">
          Grade de {activeGrid.year}
        </div>
        <div className="flex justify-between items-center">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="silver hover-mid-gray pointer pa2 f2 mr3"
            onClick={this.moveLeft}
          />
          <div className="flex-auto">{children(activeGrid.grid)}</div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="silver hover-mid-gray pointer pa2 f2 ml3"
            onClick={this.moveRight}
          />
        </div>
        <div className="flex justify-center items-center mt4">
          {grids.map(
            (_, index) =>
              index === selectedIndex ? (
                <div key={index} className="pa1 pl2 pt2 bg-red br-100 mh1" />
              ) : (
                <div key={index} className="pa1 br-100 bg-light-silver mh1" />
              )
          )}
        </div>
      </div>
    )
  }
}

GridPicker.propTypes = {
  children: PropTypes.func.isRequired,
}

export default GridPicker
