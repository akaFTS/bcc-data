import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-responsive-modal'

const ClassNamesModal = ({ isOpen, onCloseModal, classe, color }) => {
  return (
    <Modal
      center
      open={isOpen}
      onClose={onCloseModal}
      classNames={{ modal: 'br4 w-100 w-70-l ph0' }}
    >
      <div className="opensans ph3">
        <div className={`w4 tc white ph2 pv1 br-pill f4 mb4 fw6 ${color}`}>
          {classe.code}
        </div>
        {classe.names.map((entry, index) => (
          <div
            className={`flex pa3 items-center justify-between ${
              index % 2 === 0 ? 'bg-light-gray' : ''
            }`}
            key={entry.start}
          >
            <div className="fw3 pr2 lh-title gray">{entry.name}</div>
            <div className="flex">
              <div className={`white br--left br2 pl2 pv1 f5 b bg-gray`}>
                {entry.start}
              </div>
              <div
                className={`white br--right br2 pl2 pr2 pv1 f5 b relative bg-red`}
              >
                <div
                  className={`bl triangle absolute left-0 top-0 h-100 b--gray`}
                />
                {classe.names[index + 1]
                  ? classe.names[index + 1].start - 1
                  : classe.endYear}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Modal>
  )
}

ClassNamesModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  classe: PropTypes.object.isRequired,
  color: PropTypes.string.isRequired,
}

export default ClassNamesModal
