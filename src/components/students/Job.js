import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faSpotify } from '@fortawesome/free-brands-svg-icons'
import {
  faGraduationCap,
  faUniversity,
  faCircle,
  faWrench,
  faHouseDamage,
} from '@fortawesome/free-solid-svg-icons'

const Job = ({ type, onHover, isHovering }) => {
  const jobIcons = [
    faGraduationCap,
    null,
    null,
    faFacebookSquare,
    faSpotify,
    null,
    null,
    faWrench,
    faUniversity,
    faHouseDamage,
    faCircle,
  ]
  const jobColors = [
    'mt-purple',
    null,
    null,
    'mt-blue',
    'mt-green',
    null,
    null,
    'mt-orange',
    'dark-gray',
    'mt-dark-red',
    'silver',
  ]
  const jobFiles = [
    null,
    'itau',
    'totvs',
    null,
    null,
    '99',
    'caelum',
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
