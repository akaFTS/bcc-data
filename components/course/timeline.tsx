import React from 'react';
import ContentBox from 'components/layout/contentBox';
import useTimeline from 'hooks/useTimeline';
import TimelineYear from './timelineYear';

export default function Timeline() {
  const timelineYears = useTimeline();

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
