import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './githubButton.module.css';

function openGithub() {
  window.open('https://github.com/akaFTS/bcc-data', '_blank');
}

export default function GithubButton() {
  return (
    <button className={styles.button} onClick={openGithub} type="button">
      <FontAwesomeIcon icon={faGithub} className={styles.icon} />
      <span className={styles.text}>
        Contribuir no <span className={styles.bold}>GitHub</span>
      </span>
    </button>
  );
}
