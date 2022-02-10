import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Link from 'next/link';
import styles from './linkButton.module.css';

type Props = {
  path: string;
  color: string;
  icon: IconProp;
  text: string;
};

export default function LinkButton({ path, color, icon, text }: Props) {
  const colorVar = { '--btn-color': `var(--${color})` } as React.CSSProperties;

  return (
    <Link passHref href={path} prefetch={false}>
      <div className={styles.button} style={colorVar}>
        <FontAwesomeIcon icon={icon} className={styles.icon} />
        <span>{text}</span>
      </div>
    </Link>
  );
}
