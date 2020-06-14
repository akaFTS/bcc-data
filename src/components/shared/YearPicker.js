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
  }, []);

  const setYear = (year) => {
    const cleanYear = year > 2018 ? 2018 : year < 1972 ? 1972 : parseInt(year);

    setCurrentYear(cleanYear);
    setInputYear(cleanYear);
    onYearChanged(cleanYear);
  };

  return (
    <div className="flex justify-center items-center">
      {currentYear > 1972 ? (
        <FontAwesomeIcon
          className="f4 pointer"
          icon={faChevronLeft}
          onClick={() => setYear(currentYear - 1)}
        />
      ) : (
        <FontAwesomeIcon className="f4 white" icon={faChevronLeft} />
      )}
      <input
        className="f3 b mh4 dark-gray ba br2 b--light-gray ph2 pv1 w3 tc"
        value={inputYear}
        onChange={(e) => setInputYear(e.target.value)}
        onBlur={() => setYear(inputYear)}
      />
      {currentYear < 2018 ? (
        <FontAwesomeIcon
          className="f4 pointer"
          icon={faChevronRight}
          onClick={() => setYear(currentYear + 1)}
        />
      ) : (
        <FontAwesomeIcon className="f4 white" icon={faChevronRight} />
      )}
    </div>
  );
}

YearPicker.propTypes = {
  onYearChanged: PropTypes.func.isRequired,
};
