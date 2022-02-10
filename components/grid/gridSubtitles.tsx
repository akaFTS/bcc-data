import React from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './gridSubtitles.module.css';

export default function GridSubtitles() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.containerInner}>
        <div className={styles.box}>
          <div className={styles.title}>Legenda</div>
          <div className={styles.list}>
            <div className={styles.subtitle}>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx(styles.subtitleIcon, styles.red)}
              />
              <span className={styles.subtitleText}>Computação</span>
            </div>
            <div className={styles.subtitle}>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx(styles.subtitleIcon, styles.blue)}
              />
              <span className={styles.subtitleText}>Matemática Pura</span>
            </div>
            <div className={styles.subtitle}>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx(styles.subtitleIcon, styles.orange)}
              />
              <span className={styles.subtitleText}>Matemática Aplicada</span>
            </div>
            <div className={styles.subtitle}>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx(styles.subtitleIcon, styles.green)}
              />
              <span className={styles.subtitleText}>Estatística</span>
            </div>
            <div className={styles.subtitle}>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx(styles.subtitleIcon, styles.purple)}
              />
              <span className={styles.subtitleText}>Física</span>
            </div>
            <div className={styles.subtitle}>
              <FontAwesomeIcon
                icon={faCircle}
                className={cx(styles.subtitleIcon, styles.grey)}
              />
              <span className={styles.subtitleText}>Outras</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
