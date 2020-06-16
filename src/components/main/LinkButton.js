import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LinkButton({ path, color, icon, text }) {
  return (
    <Link
      to={path}
      className={`bg-mt-${color} hover-bg-mt-dark-${color} white f5 b--none pv3 ph3 br-pill shadow fw6 pointer ma1 ma0-l mr3-l no-underline`}
    >
      <FontAwesomeIcon icon={icon} className="mr2" />
      <span>{text}</span>
    </Link>
  );
}

LinkButton.propTypes = {
  path: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
