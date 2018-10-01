import React from 'react'
import PropTypes from 'prop-types'
import { withProfessors } from './ProfessorsProvider'

const ProfessorBubble = ({
  level,
  name,
  code,
  professorSchema,
  canvasSizes,
  slots,
}) => {
  const disabled = level === undefined
  const levelColor =
    level === 0
      ? 'light-silver'
      : level === 1
        ? 'light-blue'
        : level === 2
          ? 'mt-light-green'
          : level === 3
            ? 'gold'
            : level === 5
              ? 'orange'
              : 'dark-red'

  const slot = disabled
    ? slots[slots.length - 1]
    : slots[professorSchema[level].indexOf(code)]

  let pad = 0
  for (let i = 6; i > level; i--) {
    if (i === 4) continue
    pad += (canvasSizes[i] + 1) * 50 + 33
  }

  const top = pad + slot[1]

  return (
    <div
      className="flex flex-column items-center hide-child absolute"
      style={{
        top: `${top}px`,
        left: `${slot[0]}%`,
        opacity: disabled ? 0 : 1,
        transition: 'all 0.5s ease-out, opacity 0.2s ease-in',
      }}
    >
      <img
        className={`br-100 h2-3 w2-3 ba bw1 b--${levelColor}`}
        src={`./professors/${code}.jpg`}
        onError={e => {
          e.target.src = './professors/default.png'
        }}
      />
      <div
        className="absolute white bg-gray z-3 child ph2 f7 mt1 br-pill"
        style={{ top: '3.1rem' }}
      >
        {name}
      </div>
    </div>
  )
}

ProfessorBubble.propTypes = {
  level: PropTypes.number,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  professorSchema: PropTypes.object.isRequired,
  canvasSizes: PropTypes.array.isRequired,
  slots: PropTypes.array.isRequired,
}

export default withProfessors(ProfessorBubble)
