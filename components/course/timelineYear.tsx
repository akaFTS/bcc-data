import React from 'react';
import { YearEntry } from 'types/course';
import TimelineRecord from './timelineRecord';
import styles from './timelineYear.module.css';

type Props = {
  entry: YearEntry;
};

export default function TimelineYear({ entry }: Props) {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.separator} />
        <div className={styles.pill} role="listitem">
          {entry.year}
        </div>
        <div className={styles.separator} />
      </div>
      {entry.records.map((record) => (
        <TimelineRecord key={record.text} record={record} />
      ))}
    </div>
  );
}
