import React from 'react'
import PropTypes from 'prop-types'

const FilterPill = ({ isActive, name, color, onClick }) => {
  return isActive ? (
    <div
      className={`ba bw1 b--${color} bg-${color} white br-pill ph2 pv1 f6 b mr1`}
    >
      {name}
    </div>
  ) : (
    <div
      className={`ba bw1 b--${color} ${color} br-pill ph2 pv1 f6 b mr1 pointer hover-bg-light-gray`}
      onClick={onClick}
    >
      {name}
    </div>
  )
}

FilterPill.propTypes = {
  isActive: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default FilterPill
