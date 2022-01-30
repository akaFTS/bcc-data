import React from 'react';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>bcc-data</h1>
      <p className={styles.subtitle}>A evolução do BCC em gráficos</p>
    </header>
  );
}
