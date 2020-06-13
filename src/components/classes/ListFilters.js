import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FilterPill from './FilterPill';

class ListFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yearInput: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ yearInput: e.target.value });
  };

  applyYearFilter = () => {
    const { yearInput } = this.state;
    const { onYearSet } = this.props;
    const year = parseInt(yearInput);

    if (isNaN(year) || year < 1972 || year > 2018) {
      this.setState({ yearInput: '' });
      onYearSet(-1);
    } else {
      onYearSet(year);
    }
  };

  render() {
    const { activeArea, onAreaSet, activeYear } = this.props;
    const { yearInput } = this.state;

    return (
      <div className="mt3 mb3 flex justify-between align-stretch">
        <div className="flex flex-column justify-between">
          <div className="b mb1 f5 near-black">Áreas</div>
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
          <div className="b mb1 f5 near-black">Ano</div>
          <input
            className={`ba bw1 br2 w3 b tc f4 mid-gray ${
              activeYear > -1 ? 'b--silver' : 'b--light-gray'
            }`}
            value={yearInput}
            onChange={this.handleInputChange}
            onBlur={this.applyYearFilter}
          />
        </div>
      </div>
    );
  }
}

ListFilters.propTypes = {
  activeArea: PropTypes.number.isRequired,
  onAreaSet: PropTypes.func.isRequired,
  activeYear: PropTypes.number.isRequired,
  onYearSet: PropTypes.func.isRequired,
};

export default ListFilters;
