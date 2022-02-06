import React from 'react';
import styles from './classTimespan.module.css';

function getBeginYearColor(beginYear: number): string {
  if (beginYear < 1982) return 'grey-400';
  if (beginYear < 1998) return 'grey-500';
  if (beginYear < 2010) return 'grey-600';
  return 'grey-700';
}

function getEndYearColor(endYear: number): string {
  if (endYear < 1982) return 'red-400';
  if (endYear < 1998) return 'red-500';
  if (endYear < 2010) return 'red-700';
  return 'red-900';
}

type Props = {
  beginYear: number;
  endYear: number;
};

export default function ClassTimespan({ beginYear, endYear }: Props) {
  const colorVars = {
    '--begin-color': `var(--${getBeginYearColor(beginYear)})`,
    '--end-color': `var(--${getEndYearColor(endYear)})`,
  } as React.CSSProperties;

  return (
    <>
      <div className={styles.description}>
        De {beginYear} até {endYear}.
      </div>
      <div className={styles.container} style={colorVars} aria-hidden="true">
        <div className={styles.begin}>{beginYear}</div>
        <div className={styles.end}>
          <div className={styles.triangle} />
          {endYear}
        </div>
      </div>
    </>
  );
}
