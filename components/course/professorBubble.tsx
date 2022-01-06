import React from 'react';
import { slots } from 'data/course/slots';

function getLevelColor(level: number) {
  if (level === 0) return 'light-silver';
  if (level === 1) return 'light-blue';
  if (level === 2) return 'mt-light-green';
  if (level === 3) return 'gold';
  if (level === 5) return 'orange';
  return 'dark-red';
}

type Props = {
  level: any;
  name: any;
  code: any;
  professorSchema: any;
  canvasSizes: any;
};

export default function ProfessorBubble({
  level,
  name,
  code,
  professorSchema,
  canvasSizes,
}: Props) {
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
        src={`/professors/${code}.jpg`}
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
