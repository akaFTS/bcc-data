import React, { Component } from 'react'
import PropTypes from 'prop-types'
import group1974 from '../../data/students/group1974'
import group1989 from '../../data/students/group1989'
import group2004 from '../../data/students/group2004'

class StudentDataPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedEpoch: 0,
    }
  }

  selectEpoch = index => {
    this.setState({ selectedEpoch: index })
  }

  mock30 = () => {
    const someCities = [
      'sao_paulo',
      'seattle',
      'san_francisco',
      'london',
      'new_york',
      'tokyo',
      'recife',
      'rio_de_janeiro',
    ]

    return Array(30)
      .fill(0)
      .map(() => ({
        education: Math.floor(Math.random() * 5),
        job: Math.floor(Math.random() * 11),
        location: someCities[Math.floor(Math.random() * 8)],
      }))
  }

  normalizeCities = data => {
    const cities = data.reduce(
      (acc, cur) =>
        acc[cur.location]
          ? { ...acc, [cur.location]: acc[cur.location] + 1 }
          : { ...acc, [cur.location]: 1 },
      {}
    )
    return Object.keys(cities).reduce(
      (acc, city) => ({
        ...acc,
        [city]: cities[city] / data.length,
      }),
      {}
    )
  }

  render() {
    const { children } = this.props
    const { selectedEpoch } = this.state

    const data = this.mock30()

    const processedValues = {
      education: data
        .reduce((acc, cur) => {
          acc[cur.education]++
          return acc
        }, Array(5).fill(0))
        .map(entry => entry / data.length),
      job: data
        .reduce((acc, cur) => {
          acc[cur.job]++
          return acc
        }, Array(11).fill(0))
        .map(entry => entry / data.length),
      location: this.normalizeCities(data),
    }

    return (
      <React.Fragment>
        <div className="flex ba bw1 b--mt-blue br3 overflow-hidden mh3">
          <div
            className={`w-25 pv1 tc b ${
              selectedEpoch === 0
                ? 'bg-mt-blue white'
                : 'mt-blue pointer hover-bg-light-gray'
            }`}
            onClick={() => this.selectEpoch(0)}
          >
            Todos
          </div>
          <div
            className={`w-25 pv1 tc b ${
              selectedEpoch === 1
                ? 'bg-mt-blue white'
                : 'mt-blue pointer hover-bg-light-gray'
            }`}
            onClick={() => this.selectEpoch(1)}
          >
            1974-1988
          </div>
          <div
            className={`w-25 pv1 tc b ${
              selectedEpoch === 2
                ? 'bg-mt-blue white'
                : 'mt-blue pointer hover-bg-light-gray'
            }`}
            onClick={() => this.selectEpoch(2)}
          >
            1989-2003
          </div>
          <div
            className={`w-25 pv1 tc b ${
              selectedEpoch === 3
                ? 'bg-mt-blue white'
                : 'mt-blue pointer hover-bg-light-gray'
            }`}
            onClick={() => this.selectEpoch(3)}
          >
            2004-2017
          </div>
        </div>
        {children(processedValues)}
      </React.Fragment>
    )
  }
}
StudentDataPicker.propTypes = {
  children: PropTypes.func.isRequired,
}

export default StudentDataPicker
