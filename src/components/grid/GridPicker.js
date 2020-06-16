import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import * as rawGrids from '../../data/grids/importGrids';

export default function GridPicker({ children }) {
  const [selectedIndex, selectIndex] = useState(7);
  const [grids, setGrids] = useState([]);
  const activeGrid = grids[selectedIndex];
  const moveLeft = () => selectIndex((selectedIndex + 7) % 8);
  const moveRight = () => selectIndex((selectedIndex + 9) % 8);

  useEffect(() => {
    const grids = [];
    Object.keys(rawGrids)
      .sort()
      .forEach((key) => grids.push(rawGrids[key]));
    setGrids(grids);
  }, []);

  if (!activeGrid) return null;

  return (
    <div>
      <div className="flex items-center justify-center mb3">
        <button className="bg-white b--none mr4" onClick={moveLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="silver hover-mid-gray pointer pa2 f2"
          />
        </button>
        <span className="f4 fw6 tc dark-gray">Grade de {activeGrid.year}</span>
        <button className="bg-white b--none ml4" onClick={moveRight}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="silver hover-mid-gray pointer pa2 f2"
          />
        </button>
      </div>
      <div>{children(activeGrid.grid)}</div>
      <div className="flex justify-center items-center mt3">
        <button className="bg-white b--none mr4" onClick={moveLeft}>
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="silver hover-mid-gray pointer pa2 f2"
          />
        </button>
        <div className="flex items-center">
          {grids.map((_, index) =>
            index === selectedIndex ? (
              <div key={index} className="pa1 pl2 pt2 bg-red br-100 mh1" />
            ) : (
              <div
                key={index}
                className="pa1 br-100 bg-light-silver mh1 hover-bg-gray pointer"
              />
            )
          )}
        </div>
        <button className="bg-white b--none ml4" onClick={moveRight}>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="silver hover-mid-gray pointer pa2 f2"
          />
        </button>
      </div>
    </div>
  );
}

GridPicker.propTypes = {
  children: PropTypes.func.isRequired,
};
