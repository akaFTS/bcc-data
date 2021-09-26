import React, { useState } from "react";

type Props = {
  activeYear: number | null;
  onYearSet: (year: number | null) => void;
};

export default function YearFilter({
  activeYear,
  onYearSet,
}: Props) {
  const [yearInput, setYearInput] = useState("");

  const applyYearFilter = () => {
    const year = parseInt(yearInput, 10);

    if (Number.isNaN(year) || year < 1972 || year > 2018) {
      setYearInput("");
      onYearSet(null);
    } else {
      onYearSet(year);
    }
  };

  return (
    <div>
      <label htmlFor="yearInput">
        <div className="b mb1 f5 near-black">Ano</div>
        <input
          className={`ba bw1 br2 w3 b tc f4 mid-gray ${
            activeYear !== null ? "b--silver" : "b--light-gray"
          }`}
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          onBlur={applyYearFilter}
          id="yearInput"
        />
      </label>
    </div>
  );
}
