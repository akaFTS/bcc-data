import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSpotify } from '@fortawesome/free-brands-svg-icons'
import {
  faGraduationCap,
  faUniversity,
  faCircle,
  faWrench,
  faHome,
  faChartBar,
  faBook,
} from '@fortawesome/free-solid-svg-icons'

const Job = ({ type, onHover, isHovering }) => {
  const jobIcons = [
    faGraduationCap,
    null,
    faChartBar,
    null,
    faFacebookSquare,
    faSpotify,
    null,
    faWrench,
    faUniversity,
    faHome,
    faBook,
    faCircle,
  ]
  const jobColors = [
    'mt-purple',
    null,
    'mt-green',
    null,
    'mt-blue',
    'mt-green',
    null,
    'mt-orange',
    'dark-gray',
    'mt-dark-red',
    'mt-purple',
    'silver',
  ]
  const jobFiles = [
    null,
    'santander',
    null,
    'totvs',
    null,
    null,
    '99',
    null,
    null,
    null,
    null,
  ]

  return (
    <div
      onMouseEnter={() => onHover(type)}
      className={`h2 w2 flex justify-center items-center ${
        isHovering ? 'bg-light-gray' : null
      }`}
    >
      {jobIcons[type] !== null ? (
        <FontAwesomeIcon
          icon={jobIcons[type]}
          fixedWidth
          className={`f3 ${jobColors[type]}`}
        />
      ) : (
        <img
          src={`./brands/${jobFiles[type]}.png`}
          style={{ height: '1.4rem' }}
        />
      )}
    </div>
  )
}

Job.propTypes = {
  type: PropTypes.number.isRequired,
  onHover: PropTypes.func.isRequired,
  isHovering: PropTypes.bool.isRequired,
}

export default Job
