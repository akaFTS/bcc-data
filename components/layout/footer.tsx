import React from 'react';
import GithubButton from './githubButton';
import styles from './footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.span}>
        <span>por </span>
        <a
          href="https://www.linkedin.com/in/gustavohfts/"
          className={styles.link}
          title="Linkedin de Gustavo Silva"
        >
          Gustavo Silva
        </a>
        <span>, com orientação do prof. Carlinhos.</span>
      </span>
      <div className={styles.buttonContainer}>
        <GithubButton />
      </div>
    </footer>
  );
}
