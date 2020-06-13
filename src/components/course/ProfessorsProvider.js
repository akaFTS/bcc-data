import React, { Component } from 'react';
import PropTypes from 'prop-types';
import professors from '../../data/course/professors.json';
import slots from '../../data/course/slots.json';
import * as years from '../../data/professors/importYears.js';

export const ProfessorsContext = React.createContext();

class ProfessorsProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      professors,
      slots,
      professorYears: [],
    };
  }

  async componentDidMount() {
    const professorYears = [];

    Object.keys(years).forEach((key) => {
      professorYears.push({
        year: parseInt(key.replace('p', '')),
        professors: years[key],
      });
    });

    this.setState({ professorYears });
  }

  render() {
    const { children } = this.props;
    return (
      <ProfessorsContext.Provider value={this.state}>
        {children}
      </ProfessorsContext.Provider>
    );
  }
}

ProfessorsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfessorsProvider;

export function withProfessors(Component) {
  return function ProfessorsInjectedComponent(props) {
    return (
      <ProfessorsContext.Consumer>
        {({ professors, slots, professorYears }) => (
          <Component
            {...props}
            professors={professors}
            slots={slots}
            professorYears={professorYears}
          />
        )}
      </ProfessorsContext.Consumer>
    );
  };
}
