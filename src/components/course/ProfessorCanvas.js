import React from 'react';
import PropTypes from 'prop-types';

export default function ProfessorCanvas({ title, color, icon, size }) {
  return (
    <article
      className="br3 bg-light-gray mb4 overflow-hidden"
      style={{
        transition: 'height 0.3s ease-out',
        height: `${size * 50 + 50}px`,
      }}
    >
      <header className={`bg-${color} white ph2 pv1 fw6 f6`}>
        {icon}
        <span className="ml2">{title}</span>
      </header>
    </article>
  );
}

ProfessorCanvas.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  size: PropTypes.number.isRequired,
};
