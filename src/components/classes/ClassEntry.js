import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ClassEntry extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { classe, whiteStripe } = this.props

    const areaColor =
      classe.area === 0
        ? 'bg-blue'
        : classe.area === 1
          ? 'bg-green'
          : classe.area === 2
            ? 'bg-pink'
            : classe.area === 3
              ? 'bg-orange'
              : 'bg-light-silver'

    const beginYearColor =
      classe.beginYear < 1982
        ? 'moon-gray'
        : classe.beginYear < 1998
          ? 'light-silver'
          : classe.beginYear < 2010
            ? 'gray'
            : 'dark-gray'

    const endYearColor =
      classe.endYear < 1982
        ? 'washed-red'
        : classe.endYear < 1998
          ? 'light-red'
          : classe.endYear < 2010
            ? 'red'
            : 'dark-red'

    return (
      <div
        className={`flex items-center ph3 pv3 gray ${
          whiteStripe ? '' : 'bg-light-gray'
        }`}
      >
        <div className={`white ph2 pv1 br-pill b f5 mr3 ${areaColor}`}>
          {classe.code}
        </div>
        <div className="flex-auto fw3 pr2 lh-title">{classe.name}</div>
        <div className="flex">
          <div
            className={`white br--left br2 pl2 pv1 f5 b bg-${beginYearColor}`}
          >
            {classe.beginYear}
          </div>
          <div
            className={`white br--right br2 pl2 pr2 pv1 f5 b relative bg-${endYearColor}`}
          >
            <div
              className={`bl triangle absolute left-0 top-0 h-100 b--${beginYearColor}`}
            />
            {classe.endYear}
          </div>
        </div>
      </div>
    )
  }
}
ClassEntry.propTypes = {
  classe: PropTypes.object.isRequired,
  whiteStripe: PropTypes.bool,
}

export default ClassEntry
