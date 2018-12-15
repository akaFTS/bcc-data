import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const openGithub = () => {
  window.open('https://github.com/akaFTS/mac0499', '_blank')
}

const GithubButton = () => {
  return (
    <div
      className="bg-gray hover-bg-mid-gray pointer white pv2 ph2 br-pill flex flex-row items-center"
      onClick={openGithub}
    >
      <FontAwesomeIcon icon={faGithub} className="mr2 f4" />
      <span className="fw3 f6">
        Contribua no <span className="b">GitHub</span>
      </span>
    </div>
  )
}

GithubButton.propTypes = {}

export default GithubButton
