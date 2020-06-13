import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import * as rawGrids from '../../data/grids/importGrids';

class GridPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 7,
      grids: [],
    };
  }

  async componentDidMount() {
    const grids = [];
    Object.keys(rawGrids)
      .sort()
      .forEach((key) => grids.push(rawGrids[key]));
    this.setState({ grids });
  }

  moveLeft = () => {
    this.setState((prevState) => ({
      selectedIndex: (prevState.selectedIndex + 7) % 8,
    }));
  };

  moveRight = () => {
    this.setState((prevState) => ({
      selectedIndex: (prevState.selectedIndex + 9) % 8,
    }));
  };

  selectIndex = (index) => this.setState({ selectedIndex: index });

  render() {
    const { children } = this.props;
    const { selectedIndex, grids } = this.state;
    const activeGrid = grids[selectedIndex];

    if (!activeGrid) return null;

    return (
      <div>
        <div className="flex items-center justify-center mb3">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="silver hover-mid-gray pointer pa2 f2 mr4"
            onClick={this.moveLeft}
          />
          <span className="f4 fw6 tc dark-gray">
            Grade de {activeGrid.year}
          </span>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="silver hover-mid-gray pointer pa2 f2 ml4"
            onClick={this.moveRight}
          />
        </div>
        <div>{children(activeGrid.grid)}</div>
        <div className="flex justify-center items-center mt3">
          <FontAwesomeIcon
            icon={faChevronLeft}
            className="silver hover-mid-gray pointer pa2 f2 mr4"
            onClick={this.moveLeft}
          />
          <div className="flex items-center">
            {grids.map((_, index) =>
              index === selectedIndex ? (
                <div key={index} className="pa1 pl2 pt2 bg-red br-100 mh1" />
              ) : (
                <div
                  onClick={() => this.selectIndex(index)}
                  key={index}
                  className="pa1 br-100 bg-light-silver mh1 hover-bg-gray pointer"
                />
              )
            )}
          </div>
          <FontAwesomeIcon
            icon={faChevronRight}
            className="silver hover-mid-gray pointer pa2 f2 ml4"
            onClick={this.moveRight}
          />
        </div>
      </div>
    );
  }
}

GridPicker.propTypes = {
  children: PropTypes.func.isRequired,
};

export default GridPicker;
