import React from 'react';
import ContentBox from '../shared/ContentBox';
import TimelineYear from './TimelineYear';
import timeline from '../../data/course/timeline.json';

export default function Timeline() {
  const timelineYears = timeline.reduce((acc, cur) => {
    if (acc.some((yearEntry) => yearEntry.year === cur.year)) {
      acc.find((yearEntry) => yearEntry.year === cur.year).records.push(cur);
      return acc;
    }
    return [...acc, { year: cur.year, records: [cur] }];
  }, []);

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
