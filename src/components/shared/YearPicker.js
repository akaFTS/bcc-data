import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

export default function YearPicker({ onYearChanged }) {
  const [currentYear, setCurrentYear] = useState(2018);
  const [inputYear, setInputYear] = useState(2018);

  useEffect(() => {
    onYearChanged(currentYear);
  }, [currentYear, onYearChanged]);

  const setYear = (year) => {
    const cleanYear = parseInt(year, 10);

    if (cleanYear > 2018) {
      setCurrentYear(2018);
      setInputYear(2018);
    } else if (cleanYear < 1972) {
      setCurrentYear(2018);
      setInputYear(2018);
    } else {
      setCurrentYear(cleanYear);
      setInputYear(cleanYear);
    }
  };

  return (
    <div className="flex justify-center items-center">
      {currentYear > 1972 ? (
        <button
          className="bg-white b--none"
          onClick={() => setYear(currentYear - 1)}
          aria-label="Voltar um ano"
          type="button"
        >
          <FontAwesomeIcon className="f4 pointer" icon={faChevronLeft} />
        </button>
      ) : (
        <FontAwesomeIcon className="f4 white" icon={faChevronLeft} />
      )}
      <input
        className="f3 b mh4 dark-gray ba br2 b--light-gray ph2 pv1 w3 tc"
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
        onBlur={() => setYear(inputYear)}
        aria-label="Ano"
      />
      {currentYear < 2018 ? (
        <button
          className="bg-white b--none"
          onClick={() => setYear(currentYear + 1)}
          aria-label="Avançar um ano"
          type="button"
        >
          <FontAwesomeIcon className="f4 pointer" icon={faChevronRight} />
        </button>
      ) : (
        <FontAwesomeIcon className="f4 white" icon={faChevronRight} />
      )}
    </div>
  );
}

YearPicker.propTypes = {
  onYearChanged: PropTypes.func.isRequired,
};
