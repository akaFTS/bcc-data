import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FilterPill from './FilterPill';

export default function ListFilters({
  activeArea,
  onAreaSet,
  activeYear,
  onYearSet,
}) {
  const [yearInput, setYearInput] = useState('');

  const applyYearFilter = () => {
    const year = parseInt(yearInput, 10);

    if (Number.isNaN(year) || year < 1972 || year > 2018) {
      setYearInput('');
      onYearSet(-1);
    } else {
      onYearSet(year);
    }
  };

  return (
    <div className="mt3 mb3 flex justify-between align-stretch">
      <div
        className="flex flex-column justify-between"
        aria-label="Filtros por área para a lista de matérias"
      >
        <div aria-hidden="true" className="b mb1 f5 near-black">
          Áreas
        </div>
        <div className="flex flex-wrap">
          <FilterPill
            name="Todas"
            color="light-silver"
            isActive={activeArea === -1}
            onClick={() => onAreaSet(-1)}
          />
          <FilterPill
            name="Teoria"
            color="blue"
            isActive={activeArea === 0}
            onClick={() => onAreaSet(0)}
          />
          <FilterPill
            name="Sistemas"
            color="green"
            isActive={activeArea === 1}
            onClick={() => onAreaSet(1)}
          />
          <FilterPill
            name="IA"
            color="pink"
            isActive={activeArea === 2}
            onClick={() => onAreaSet(2)}
          />
          <FilterPill
            name="E-science"
            color="orange"
            isActive={activeArea === 3}
            onClick={() => onAreaSet(3)}
          />
          <FilterPill
            name="Outras"
            color="light-silver"
            isActive={activeArea === 4}
            onClick={() => onAreaSet(4)}
          />
        </div>
      </div>
      <div>
        <label htmlFor="yearInput">
          <div className="b mb1 f5 near-black">Ano</div>
          <input
            className={`ba bw1 br2 w3 b tc f4 mid-gray ${
              activeYear > -1 ? 'b--silver' : 'b--light-gray'
            }`}
            value={yearInput}
            onChange={(e) => setYearInput(e.target.value)}
            onBlur={applyYearFilter}
            id="yearInput"
          />
        </label>
      </div>
    </div>
  );
}

ListFilters.propTypes = {
  activeArea: PropTypes.number.isRequired,
  onAreaSet: PropTypes.func.isRequired,
  activeYear: PropTypes.number.isRequired,
  onYearSet: PropTypes.func.isRequired,
};
