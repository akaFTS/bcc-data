import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './gridPickerBottom.module.css';

type Props = {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  activeGridIndex: number;
  gridSize: number;
};

export default function GridPickerBottom({
  onMoveLeft,
  onMoveRight,
  activeGridIndex,
  gridSize,
}: Props) {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onMoveLeft} type="button">
        <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
      </button>
      <div className={styles.containerInner}>
        {[...Array(gridSize).keys()].map((index) => {
          if (index === activeGridIndex) {
            return <div key={index} className={styles.activeDot} />;
          }

          return <div key={index} className={styles.dot} />;
        })}
      </div>
      <button className={styles.button} onClick={onMoveRight} type="button">
        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
      </button>
    </div>
  );
}
