import React from 'react';
import PropTypes from 'prop-types';
import defaultPic from 'url:~/public/professors/default.png';
import slots from '../../data/course/slots.json';
import professorPhotos from '../../data/course/professorPhotos';

function getLevelColor(level) {
  if (level === 0) return 'light-silver';
  if (level === 1) return 'light-blue';
  if (level === 2) return 'mt-light-green';
  if (level === 3) return 'gold';
  if (level === 5) return 'orange';
  return 'dark-red';
}

export default function ProfessorBubble({
  level,
  name,
  code,
  professorSchema,
  canvasSizes,
}) {
  const disabled = level === -1;
  const levelColor = getLevelColor(level);

  const slot = disabled
    ? slots[slots.length - 1]
    : slots[professorSchema[level].indexOf(code)];

  let pad = 0;
  for (let i = 6; i > level; i -= 1) {
    if (i !== 4) pad += (canvasSizes[i] + 1) * 50 + 33;
  }

  const top = pad + slot[1];

  return (
    <div
      className="flex flex-column items-center hide-child absolute"
      style={{
        top: `${top}px`,
        left: `${slot[0]}%`,
        opacity: disabled ? 0 : 1,
        transition: 'all 0.5s ease-out, opacity 0.2s ease-in',
      }}
      aria-hidden={disabled}
    >
      <img
        className={`br-100 h2-3 w2-3 ba bw1 b--${levelColor}`}
        src={professorPhotos[code] || defaultPic}
        alt={`Professor(a) ${name}`}
        id={code}
      />
      <div
        className="absolute white bg-gray z-3 child ph2 pv1 f7 mt1 br-pill tc nowrap"
        style={{ top: '3.1rem' }}
      >
        {name}
      </div>
    </div>
  );
}

ProfessorBubble.propTypes = {
  level: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  professorSchema: PropTypes.object.isRequired,
  canvasSizes: PropTypes.array.isRequired,
};
