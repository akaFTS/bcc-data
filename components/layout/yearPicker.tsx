import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './yearPicker.module.css';

type Props = {
  onYearChanged: (year: number) => void;
};

export default function YearPicker({ onYearChanged }: Props) {
  const [currentYear, setCurrentYear] = useState(2018);
  const [inputYear, setInputYear] = useState('2018');

  useEffect(() => {
    onYearChanged(currentYear);
  }, [currentYear, onYearChanged]);

  const setYear = (year: number) => {
    if (year > 2018) {
      setCurrentYear(2018);
      setInputYear('2018');
    } else if (year < 1972) {
      setCurrentYear(2018);
      setInputYear('2018');
    } else {
      setCurrentYear(year);
      setInputYear(`${year}`);
    }
  };

  const setYearByString = (yearString: string) => {
    const cleanYear = parseInt(yearString, 10);
    setYear(cleanYear);
  };

  return (
    <div className={styles.container}>
      {currentYear > 1972 ? (
        <button
          className={styles.button}
          onClick={() => setYear(currentYear - 1)}
          aria-label="Voltar um ano"
          type="button"
        >
          <FontAwesomeIcon className={styles.icon} icon={faChevronLeft} />
        </button>
      ) : (
        <div className={styles.empty} />
      )}
      <input
        className={styles.input}
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
        onBlur={() => setYearByString(inputYear)}
        aria-label="Ano"
      />
      {currentYear < 2018 ? (
        <button
          className={styles.button}
          onClick={() => setYear(currentYear + 1)}
          aria-label="Avançar um ano"
          type="button"
        >
          <FontAwesomeIcon className={styles.icon} icon={faChevronRight} />
        </button>
      ) : (
        <div className={styles.empty} />
      )}
    </div>
  );
}
