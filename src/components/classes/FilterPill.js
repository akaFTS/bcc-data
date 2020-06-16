import React from 'react';
import PropTypes from 'prop-types';

export default function FilterPill({ isActive, name, color, onClick }) {
  return isActive ? (
    <button
      className={`ba bw1 b--${color} bg-${color} mb2 mb0-l white br-pill ph2 pv1 f6 b mr1`}
      disabled
    >
      {name}
    </button>
  ) : (
    <button
      className={`ba bw1 b--${color} ${color} mb2 mb0-l br-pill ph2 pv1 f6 b mr1 pointer bg-white hover-bg-light-gray`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

FilterPill.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
