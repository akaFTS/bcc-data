import React from 'react';
import PropTypes from 'prop-types';

export default function StudentDataPicker({
  currentSelection,
  onEpochSelected,
}) {
  return (
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
  );
}

StudentDataPicker.propTypes = {
  currentSelection: PropTypes.number.isRequired,
  onEpochSelected: PropTypes.func.isRequired,
};
