import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const openGithub = () => {
  window.open('https://github.com/akaFTS/mac0499', '_blank')
}

const Header = () => {
  return (
    <header className="pv3">
      <h2 className="ma0 tc dark-red">
        BCC IME-USP: evolução e perfil do ex-aluno
      </h2>
      <p className="tc mid-gray fw3 f5">
        por <span className="fw6">Gustavo H F Silva</span> - orientador:
        <span className="fw6"> prof. Carlos Eduardo Ferreira</span>
      </p>
      <div className="flex flex-row justify-center mv3">
        <div
          className="bg-gray hover-bg-mid-gray pointer white pv2 ph3 br-pill flex flex-row items-center"
          onClick={openGithub}
        >
          <FontAwesomeIcon icon={faGithub} className="mr2 f4" />
          <span className="fw3 f6">
            Contribua no <span className="b">GitHub</span>
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
