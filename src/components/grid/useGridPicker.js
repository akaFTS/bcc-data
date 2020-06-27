import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import grids from '../../data/grids/grids';

function GridPickerTop({ onMoveLeft, onMoveRight, activeGrid }) {
  return (
    <div className="flex items-center justify-center mb3">
      <button
        className="bg-white b--none mr4"
        onClick={onMoveLeft}
        type="button"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="silver hover-mid-gray pointer pa2 f2"
        />
      </button>
      <span className="f4 fw6 tc dark-gray">Grade de {activeGrid.year}</span>
      <button
        className="bg-white b--none ml4"
        onClick={onMoveRight}
        type="button"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="silver hover-mid-gray pointer pa2 f2"
        />
      </button>
    </div>
  );
}

GridPickerTop.propTypes = {
  onMoveLeft: PropTypes.func.isRequired,
  onMoveRight: PropTypes.func.isRequired,
  activeGrid: PropTypes.object.isRequired,
};

function GridPickerBottom({ onMoveLeft, onMoveRight, activeGridIndex }) {
  return (
    <div className="flex justify-center items-center mt3">
      <button
        className="bg-white b--none mr4"
        onClick={onMoveLeft}
        type="button"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="silver hover-mid-gray pointer pa2 f2"
        />
      </button>
      <div className="flex items-center">
        {grids.map((grid, index) =>
          index === activeGridIndex ? (
            <div key={grid.year} className="pa1 pl2 pt2 bg-red br-100 mh1" />
          ) : (
            <div
              key={grid.year}
              className="pa1 br-100 bg-light-silver mh1 hover-bg-gray pointer"
            />
          )
        )}
      </div>
      <button
        className="bg-white b--none ml4"
        onClick={onMoveRight}
        type="button"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="silver hover-mid-gray pointer pa2 f2"
        />
      </button>
    </div>
  );
}

GridPickerBottom.propTypes = {
  onMoveLeft: PropTypes.func.isRequired,
  onMoveRight: PropTypes.func.isRequired,
  activeGridIndex: PropTypes.number.isRequired,
};

export default function useGridPicker() {
  const [selectedGridIndex, selectGrid] = useState(7);
  const activeGrid = grids[selectedGridIndex];
  const moveLeft = () => selectGrid((selectedGridIndex + 7) % 8);
  const moveRight = () => selectGrid((selectedGridIndex + 9) % 8);

  const GridPickerTopImpl = () => (
    <GridPickerTop
      onMoveLeft={moveLeft}
      onMoveRight={moveRight}
      activeGrid={activeGrid}
    />
  );
  const GridPickerBottomImpl = () => (
    <GridPickerBottom
      onMoveLeft={moveLeft}
      onMoveRight={moveRight}
      activeGridIndex={selectedGridIndex}
    />
  );

  return [activeGrid, GridPickerTopImpl, GridPickerBottomImpl];
}
