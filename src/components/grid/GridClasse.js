import React from 'react';
import PropTypes from 'prop-types';

export default function GridClasse({ classe }) {
  const classColor = /^MAC/.test(classe.code)
    ? 'mt-red'
    : /^MAT/.test(classe.code)
    ? 'mt-blue'
    : /^MAE/.test(classe.code)
    ? 'mt-green'
    : /^MAP/.test(classe.code)
    ? 'mt-orange'
    : /^(FEP|FAP)/.test(classe.code)
    ? 'mt-purple'
    : 'gray';

  const classType = /^MAC/.test(classe.code)
    ? 'Computação'
    : /^MAT/.test(classe.code)
    ? 'Matemática Pura'
    : /^MAE/.test(classe.code)
    ? 'Estatística'
    : /^MAP/.test(classe.code)
    ? 'Matemática Aplicada'
    : 'Física';

  return classe.code ? (
    <div
      className={`ba bw1 b--${classColor} bg-${classColor} pv2 ph3 br-pill white flex items-center ma2 h2-3`}
      role="listitem"
      aria-label={`Matéria de ${classType}`}
    >
      <span className="fw6 f5 mr3">{classe.code}</span>
      <span className="fw3 f6 lh-title">{classe.name}</span>
    </div>
  ) : (
    <div
      className="pv2 ph3 br-pill gray h2-3 ma2 flex items-center justify-center ba bw1 b--dashed f6"
      role="listitem"
    >
      <span>{classe.slot}</span>
    </div>
  );
}

GridClasse.propTypes = {
  classe: PropTypes.object.isRequired,
};
