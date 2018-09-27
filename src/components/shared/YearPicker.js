import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons'

class YearPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentYear: 2018,
      inputYear: 2018,
    }
  }

  componentDidMount() {
    const { onYearChanged } = this.props
    onYearChanged(this.state.currentYear)
  }

  setYear = () => {
    const { inputYear } = this.state
    const { onYearChanged } = this.props
    const cleanInputYear =
      inputYear > 2018 ? 2018 : inputYear < 1972 ? 1972 : inputYear

    this.setState({ currentYear: cleanInputYear })
    onYearChanged(cleanInputYear)
  }

  handleLeftClick = () => {
    const { currentYear } = this.state
    const { onYearChanged } = this.props
    if (currentYear > 1972) {
      this.setState(prevState => ({
        currentYear: prevState.currentYear - 1,
        inputYear: prevState.inputYear - 1,
      }))
      onYearChanged(currentYear - 1)
    }
  }

  handleRightClick = () => {
    const { currentYear } = this.state
    const { onYearChanged } = this.props
    if (currentYear < 2018) {
      this.setState(prevState => ({
        currentYear: prevState.currentYear + 1,
        inputYear: prevState.inputYear + 1,
      }))
      onYearChanged(currentYear + 1)
    }
  }

  handleInputChange = e => {
    this.setState({ inputYear: e.target.value })
  }

  render() {
    const { currentYear, inputYear } = this.state
    return (
      <div className="flex justify-center items-center">
        {currentYear > 1972 ? (
          <FontAwesomeIcon
            className="f4 pointer"
            icon={faChevronLeft}
            onClick={this.handleLeftClick}
          />
        ) : (
          <FontAwesomeIcon className="f4 white" icon={faChevronLeft} />
        )}
        <input
          className="f3 b mh4 dark-gray ba br2 b--light-gray ph2 pv1 w3 tc"
          value={inputYear}
          onChange={this.handleInputChange}
          onBlur={this.setYear}
        />
        {currentYear < 2018 ? (
          <FontAwesomeIcon
            className="f4 pointer"
            icon={faChevronRight}
            onClick={this.handleRightClick}
          />
        ) : (
          <FontAwesomeIcon className="f4 white" icon={faChevronRight} />
        )}
      </div>
    )
  }
}
YearPicker.propTypes = {
  onYearChanged: PropTypes.func.isRequired,
}

export default YearPicker
