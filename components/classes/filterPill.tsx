import React from 'react';
import cx from 'classnames';
import styles from './filterPill.module.css';

type Props = {
  isActive: boolean;
  name: string;
  color: string;
  onClick: () => void;
};

export default function FilterPill({ isActive, name, color, onClick }: Props) {
  const colorVar = { '--pill-color': `var(--${color})` } as React.CSSProperties;

  return (
    <button
      style={colorVar}
      className={cx(styles.pill, { [styles.inactive]: !isActive })}
      disabled={isActive}
      type="button"
      onClick={() => isActive || onClick()}
    >
      {name}
    </button>
  );
}
