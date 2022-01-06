import React from 'react';
import { Classe, isFullClasse } from 'types/grid';
import GridClasse from './gridClasse';

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
    <article className="ba bw1 b--light-gray br4 overflow-hidden h-100">
      <h3 className="bb bw1 bg-light-gray b--light-gray pa1 tc fw6 near-black f5 mt0">
        {semester}º Semestre
      </h3>
      <div role="list">
        {classes.sort(orderClasses).map(classe => (
          <GridClasse
            key={isFullClasse(classe) ? classe.code : classe.slot}
            classe={classe}
          />
        ))}
      </div>
    </article>
  );
}
