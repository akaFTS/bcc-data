import React from 'react';
import PropTypes from 'prop-types';

export default function ContentBox({ title, color, children }) {
  return (
    <article>
      <div className="w-100 bg-white br4 pa3">
        <h2 className={`f4 fw6 mt-${color} mb3 mt0`}>{title}</h2>
        {children}
      </div>
      <div
        className={`pv2 bg-mt-light-${color} br--bottom br4 w-90 center mb4`}
      />
    </article>
  );
}

ContentBox.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
