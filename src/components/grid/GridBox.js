import React from 'react';
import PropTypes from 'prop-types';
import GridClasse from './GridClasse';

function orderClasses(a, b) {
  if (a.code && b.code) {
    const preffixA = a.code.substring(0, 3);
    const preffixB = b.code.substring(0, 3);
    return preffixA.localeCompare(preffixB) === 0
      ? -preffixA.localeCompare(preffixB)
      : a.code.localeCompare(b.code);
  }
  if (a.code) return -1;
  if (b.code) return 1;
  return a.slot.localeCompare(b.slot);
}

export default function GridBox({ semester, classes }) {
  return (
    <article className="ba bw1 b--light-gray br4 overflow-hidden h-100">
      <h3 className="bb bw1 bg-light-gray b--light-gray pa1 tc fw6 near-black f5 mt0">
        {semester}º Semestre
      </h3>
      <div role="list">
        {classes.sort(orderClasses).map((classe) => (
          <GridClasse key={classe.code || classe.slot} classe={classe} />
        ))}
      </div>
    </article>
  );
}

GridBox.propTypes = {
  semester: PropTypes.number.isRequired,
  classes: PropTypes.array.isRequired,
};
