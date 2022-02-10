import React from 'react';
import { Record } from 'types/course';
import styles from './timelineRecord.module.css';

type Props = {
  record: Record;
};

export default function TimelineRecord({ record }: Props) {
  let formattedDate: string | null = null;
  if (typeof record.date !== 'undefined') {
    const matches = record.date.matchAll(/^(\d{2})\/(\d{2})$/g).next().value;
    const day = parseInt(matches[0], 10);
    const month = parseInt(matches[1], 10);

    const date = new Date(2018, month, day); // year is irrelevant
    const monthName = date.toLocaleString('pt-BR', { month: 'long' });
    formattedDate = `${date.getDate()} de ${monthName}`;
  }

  return (
    <div className={styles.container} role="listitem">
      <div className={styles.circleContainer}>
        <div className={styles.separator} />
        <div className={styles.circle} />
        <div className={styles.separator} />
      </div>
      <div className={styles.textContainer}>
        {formattedDate && <div className={styles.date}>{formattedDate}</div>}
        <div className={record.featured ? styles.featured : styles.default}>
          {record.text}
        </div>
      </div>
    </div>
  );
}
