import React from 'react';
import cx from 'classnames';
import { Epoch } from 'types/students';
import styles from './studentDataPicker.module.css';

type Props = {
  currentSelection: Epoch;
  onEpochSelected: (epoch: Epoch) => void;
};

export default function StudentDataPicker({
  currentSelection,
  onEpochSelected,
}: Props) {
  return (
    <div
      className={styles.container}
      aria-label="Seleção de intervalo de tempo para análise"
    >
      <button
        className={cx(
          styles.button,
          currentSelection === 'ALL' ? styles.selected : styles.unselected,
        )}
        onClick={() => onEpochSelected('ALL')}
        type="button"
      >
        Todos
      </button>
      <button
        className={cx(
          styles.button,
          currentSelection === '1974' ? styles.selected : styles.unselected,
        )}
        onClick={() => onEpochSelected('1974')}
        type="button"
      >
        1974-1988
      </button>
      <button
        className={cx(
          styles.button,
          currentSelection === '1989' ? styles.selected : styles.unselected,
        )}
        onClick={() => onEpochSelected('1989')}
        type="button"
      >
        1989-2003
      </button>
      <button
        className={cx(
          styles.button,
          currentSelection === '2004' ? styles.selected : styles.unselected,
        )}
        onClick={() => onEpochSelected('2004')}
        type="button"
      >
        2004-2017
      </button>
    </div>
  );
}
