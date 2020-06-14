import React from 'react';
import PropTypes from 'prop-types';
import professors from '../../data/course/professors.json';
import slots from '../../data/course/slots.json';
import * as years from '../../data/professors/importYears.js';

export const ProfessorsContext = React.createContext();

export default function ProfessorsProvider({ children }) {
  const professorYears = [];
  Object.keys(years).forEach((key) => {
    professorYears.push({
      year: parseInt(key.replace('p', '')),
      professors: years[key],
    });
  });

  return (
    <ProfessorsContext.Provider value={{ professors, slots, professorYears }}>
      {children}
    </ProfessorsContext.Provider>
  );
}

ProfessorsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

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
