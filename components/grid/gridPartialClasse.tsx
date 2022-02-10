import React from 'react';
import { PartialClasse } from 'types/grid';
import styles from './gridPartialClasse.module.css';

type Props = {
  classe: PartialClasse;
};

export default function gridPartialClasse({ classe }: Props) {
  return (
    <div className={styles.box} role="listitem">
      <span>{classe.slot}</span>
    </div>
  );
}
