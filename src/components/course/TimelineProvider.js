import React from 'react';
import PropTypes from 'prop-types';
import timeline from '../../data/course/timeline.json';

export const TimelineContext = React.createContext();

export default function TimelineProvider({ children }) {
  const timelineYears = timeline.reduce((acc, cur) => {
    if (acc.some((yearEntry) => yearEntry.year === cur.year)) {
      acc.find((yearEntry) => yearEntry.year === cur.year).records.push(cur);
      return acc;
    }
    return [...acc, { year: cur.year, records: [cur] }];
  }, []);

  return (
    <TimelineContext.Provider value={{ timelineYears }}>
      {children}
    </TimelineContext.Provider>
  );
}

TimelineProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function withTimeline(Component) {
  return function TimelineInjectedComponent(props) {
    return (
      <TimelineContext.Consumer>
        {({ timelineYears }) => (
          <Component {...props} timelineYears={timelineYears} />
        )}
      </TimelineContext.Consumer>
    );
  };
}
