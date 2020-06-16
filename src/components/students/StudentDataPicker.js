import React from 'react';
import PropTypes from 'prop-types';
import group1974 from '../../data/students/group1974';
import group1989 from '../../data/students/group1989';
import group2004 from '../../data/students/group2004';
import maleGraduates from '../../data/students/maleGraduates.json';
import femaleGraduates from '../../data/students/femaleGraduates.json';

function normalizeCities(data) {
  const cities = data.reduce(
    (acc, cur) =>
      acc[cur.location]
        ? { ...acc, [cur.location]: acc[cur.location] + 1 }
        : { ...acc, [cur.location]: 1 },
    {}
  );
  return Object.keys(cities).reduce(
    (acc, city) => ({
      ...acc,
      [city]: cities[city] / data.length,
    }),
    {}
  );
}

export default function StudentDataPicker({
  children,
  currentSelection,
  onEpochSelected,
}) {
  const data =
    currentSelection === 0
      ? [...group1974, ...group1989, ...group2004]
      : currentSelection === 1
      ? group1974
      : currentSelection === 2
      ? group1989
      : group2004;

  const processedValues = {
    currentSelection,
    education: data
      .reduce((acc, cur) => {
        acc[cur.education]++;
        return acc;
      }, Array(5).fill(0))
      .map((entry) => entry / data.length),
    job: data
      .reduce((acc, cur) => {
        acc[cur.job]++;
        return acc;
      }, Array(12).fill(0))
      .map((entry) => entry / data.length),
    location: normalizeCities(data),
  };

  const range =
    currentSelection === 0
      ? [0, 44]
      : currentSelection === 1
      ? [0, 15]
      : currentSelection === 2
      ? [15, 30]
      : [30, 44];

  const accumulatedMales = [];
  maleGraduates
    .slice(range[0], range[1])
    .reduce((prev, curr, i) => (accumulatedMales[i] = prev + curr), 0);

  const accumulatedFemales = [];
  femaleGraduates
    .slice(range[0], range[1])
    .reduce((prev, curr, i) => (accumulatedFemales[i] = prev + curr), 0);

  const genders = {
    accumulatedFemales,
    accumulatedMales,
    baseYear: 1974 + range[0],
  };

  return (
    <React.Fragment>
      <div
        className="flex ba bw1 b--mt-blue br3 overflow-hidden mh3-l"
        aria-label="Seleção de intervalo de tempo para análise"
      >
        <button
          className={`w-25 pv1 tc b b--none ${
            currentSelection === 0
              ? 'bg-mt-blue white'
              : 'mt-blue pointer hover-bg-light-gray bg-white'
          }`}
          onClick={() => onEpochSelected(0)}
        >
          Todos
        </button>
        <button
          className={`w-25 pv1 tc b b--none ${
            currentSelection === 1
              ? 'bg-mt-blue white'
              : 'mt-blue pointer hover-bg-light-gray bg-white'
          }`}
          onClick={() => onEpochSelected(1)}
        >
          1974-1988
        </button>
        <button
          className={`w-25 pv1 tc b b--none ${
            currentSelection === 2
              ? 'bg-mt-blue white'
              : 'mt-blue pointer hover-bg-light-gray bg-white'
          }`}
          onClick={() => onEpochSelected(2)}
        >
          1989-2003
        </button>
        <button
          className={`w-25 pv1 tc b b--none ${
            currentSelection === 3
              ? 'bg-mt-blue white'
              : 'mt-blue pointer hover-bg-light-gray bg-white'
          }`}
          onClick={() => onEpochSelected(3)}
        >
          2004-2017
        </button>
      </div>
      {children({ ...processedValues, genders })}
    </React.Fragment>
  );
}

StudentDataPicker.propTypes = {
  children: PropTypes.func.isRequired,
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
