import React from 'react';
import styles from './contentBox.module.css';

type Props = {
  title: string;
  color: string;
  children: React.ReactNode;
};

export default function ContentBox({ title, color, children }: Props) {
  const colorVar = {
    '--title-color': `var(--${color})`,
  } as React.CSSProperties;

  return (
    <article style={colorVar}>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>
        {children}
      </div>
      <div className={styles.border} />
    </article>
  );
}
