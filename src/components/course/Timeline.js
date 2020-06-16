import React from 'react';
import PropTypes from 'prop-types';
import ContentBox from '../shared/ContentBox';
import { withTimeline } from './TimelineProvider';
import TimelineYear from './TimelineYear';

function Timeline({ timelineYears }) {
  return (
    <ContentBox title="Timeline" color="purple">
      <div role="list">
        {timelineYears.map((yearEntry) => (
          <TimelineYear entry={yearEntry} key={yearEntry.year} />
        ))}
      </div>
    </ContentBox>
  );
}

Timeline.propTypes = {
  timelineYears: PropTypes.array.isRequired,
};

export default withTimeline(Timeline);
