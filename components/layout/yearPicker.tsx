import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onYearChanged: (year: number) => void;
};

export default function YearPicker({ onYearChanged }: Props) {
  const [currentYear, setCurrentYear] = useState(2018);
  const [inputYear, setInputYear] = useState("2018");

  useEffect(() => {
    onYearChanged(currentYear);
  }, [currentYear, onYearChanged]);

  const setYear = (year: number) => {
    if (year > 2018) {
      setCurrentYear(2018);
      setInputYear("2018");
    } else if (year < 1972) {
      setCurrentYear(2018);
      setInputYear("2018");
    } else {
      setCurrentYear(year);
      setInputYear(year + "");
    }
  };

  const setYearByString = (yearString: string) => {
    const cleanYear = parseInt(yearString, 10);
    setYear(cleanYear);
  };

  return (
    <div className="flex justify-center items-center">
      {currentYear > 1972
        ? (
          <button
            className="bg-white b--none"
            onClick={() => setYear(currentYear - 1)}
            aria-label="Voltar um ano"
            type="button"
          >
            <FontAwesomeIcon className="f4 pointer" icon={faChevronLeft} />
          </button>
        )
        : <FontAwesomeIcon className="f4 white" icon={faChevronLeft} />}
      <input
        className="f3 b mh4 dark-gray ba br2 b--light-gray ph2 pv1 w3 tc"
        value={inputYear}
        // @ts-ignore Issues with HTML and TS
        onChange={(e) => setInputYear(e.target.value)}
        onBlur={() => setYearByString(inputYear)}
        aria-label="Ano"
      />
      {currentYear < 2018
        ? (
          <button
            className="bg-white b--none"
            onClick={() => setYear(currentYear + 1)}
            aria-label="Avançar um ano"
            type="button"
          >
            <FontAwesomeIcon className="f4 pointer" icon={faChevronRight} />
          </button>
        )
        : <FontAwesomeIcon className="f4 white" icon={faChevronRight} />}
    </div>
  );
}
