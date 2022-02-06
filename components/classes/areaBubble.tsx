import React from 'react';
import styles from './areaBubble.module.css';

type Props = {
  top: string;
  left: string;
  name: string;
  color: string;
  size: number;
};

export default function AreaBubble({ top, left, name, color, size }: Props) {
  const colorVar = { '--ball-color': `var(--${color})` } as React.CSSProperties;

  return (
    <div
      className={styles.bubble}
      style={{
        ...colorVar,
        top,
        left,
        width: `${size * 3 + 50}px`,
        height: `${size * 3 + 50}px`,
        transition: 'all 0.3s',
      }}
      aria-label={`Número de matérias de ${name}`}
    >
      <span aria-hidden="true" className={styles.name}>
        {name}
      </span>
      <span className={styles.size}>{size}</span>
    </div>
  );
}
