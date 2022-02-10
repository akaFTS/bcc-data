import React from 'react';
import { Classe, isFullClasse } from 'types/grid';
import GridFullClasse from './gridFullClasse';
import GridPartialClasse from './gridPartialClasse';
import styles from './gridBox.module.css';

function orderClasses(a: Classe, b: Classe) {
  if (isFullClasse(a) && isFullClasse(b)) {
    const preffixA = a.code.substring(0, 3);
    const preffixB = b.code.substring(0, 3);
    return preffixA.localeCompare(preffixB) === 0
      ? -preffixA.localeCompare(preffixB)
      : a.code.localeCompare(b.code);
  }
  if (isFullClasse(a)) return -1;
  if (isFullClasse(b)) return 1;
  return a.slot.localeCompare(b.slot);
}

type Props = {
  semester: number;
  classes: Classe[];
};

export default function GridBox({ semester, classes }: Props) {
  return (
    <article className={styles.container}>
      <h3 className={styles.title}>{semester}º Semestre</h3>
      <div role="list">
        {classes
          .sort(orderClasses)
          .map((classe) =>
            isFullClasse(classe) ? (
              <GridFullClasse classe={classe} key={classe.code} />
            ) : (
              <GridPartialClasse classe={classe} key={classe.slot} />
            ),
          )}
      </div>
    </article>
  );
}
