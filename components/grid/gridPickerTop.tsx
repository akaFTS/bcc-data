import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import styles from './gridPickerTop.module.css';

type Props = {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  activeGridYear: number;
};

export default function GridPickerTop({
  onMoveLeft,
  onMoveRight,
  activeGridYear,
}: Props) {
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        onClick={onMoveLeft}
        type="button"
        aria-label="Grade Anterior"
      >
        <FontAwesomeIcon icon={faChevronLeft} className={styles.chevron} />
      </button>
      <h4 className={styles.title}>Grade de {activeGridYear}</h4>
      <button
        className={styles.button}
        onClick={onMoveRight}
        type="button"
        aria-label="Próxima Grade"
      >
        <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
      </button>
    </div>
  );
}
