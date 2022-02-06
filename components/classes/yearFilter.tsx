import React, { useState } from 'react';
import cx from 'classnames';
import styles from './yearFilter.module.css';

type Props = {
  activeYear: number | null;
  onYearSet: (year: number | null) => void;
};

export default function YearFilter({ activeYear, onYearSet }: Props) {
  const [yearInput, setYearInput] = useState('');

  const applyYearFilter = () => {
    const year = parseInt(yearInput, 10);

    if (Number.isNaN(year) || year < 1972 || year > 2018) {
      setYearInput('');
      onYearSet(null);
    } else {
      onYearSet(year);
    }
  };

  return (
    <div>
      <label htmlFor="yearInput">
        <div className={styles.label}>Ano</div>
        <input
          className={cx(styles.input, { [styles.active]: activeYear !== null })}
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          onBlur={applyYearFilter}
          id="yearInput"
        />
      </label>
    </div>
  );
}
