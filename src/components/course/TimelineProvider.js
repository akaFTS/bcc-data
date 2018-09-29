import React, { Component } from 'react'
import PropTypes from 'prop-types'
import timeline from '../../data/course/timeline.json'

export const TimelineContext = React.createContext()

class TimelineProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timelineYears: [],
    }
  }

  async componentDidMount() {
    const timelineYears = timeline.reduce((acc, cur) => {
      if (acc.some(yearEntry => yearEntry.year === cur.year)) {
        acc.find(yearEntry => yearEntry.year === cur.year).records.push(cur)
        return acc
      }
      return [...acc, { year: cur.year, records: [cur] }]
    }, [])

    this.setState({ timelineYears })
  }

  render() {
    const { children } = this.props
    return (
      <TimelineContext.Provider value={this.state}>
        {children}
      </TimelineContext.Provider>
    )
  }
}

TimelineProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TimelineProvider

export function withTimeline(Component) {
  return function TimelineInjectedComponent(props) {
    return (
      <TimelineContext.Consumer>
        {({ timelineYears }) => (
          <Component {...props} timelineYears={timelineYears} />
        )}
      </TimelineContext.Consumer>
    )
  }
}
