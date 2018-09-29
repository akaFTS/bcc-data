import React from 'react'
import PropTypes from 'prop-types'
import ContentBox from '../shared/ContentBox'
import { withTimeline } from './TimelineProvider'
import TimelineYear from './TimelineYear'

const Timeline = ({ timelineYears }) => {
  return (
    <ContentBox title="Timeline" color="purple">
      {timelineYears.map(yearEntry => (
        <TimelineYear entry={yearEntry} key={yearEntry.year} />
      ))}
    </ContentBox>
  )
}

Timeline.propTypes = {
  timelineYears: PropTypes.array.isRequired,
}

export default withTimeline(Timeline)
