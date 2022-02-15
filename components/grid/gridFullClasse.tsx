import React from 'react';
import { FullClasse } from 'types/grid';
import styles from './gridFullClasse.module.css';

function getClassColorAndName(code: string): [string, string] {
  if (/^MAC/.test(code)) return ['brand-red', 'Computação'];
  if (/^MAT/.test(code)) return ['brand-blue', 'Matemática Pura'];
  if (/^MAE/.test(code)) return ['brand-green', 'Estatística'];
  if (/^MAP/.test(code)) return ['brand-orange', 'Matemática Aplicada'];
  if (/^(FEP|FAP)/.test(code)) return ['brand-purple', 'Física'];
  return ['brand-grey', 'Outras'];
}

type Props = {
  classe: FullClasse;
};

export default function GridClasse({ classe }: Props) {
  const [classColor, classType] = getClassColorAndName(classe.code);
  const colorVar = {
    '--box-color': `var(--${classColor})`,
  } as React.CSSProperties;

  return (
    <div
      style={colorVar}
      className={styles.box}
      role="listitem"
      aria-label={`Matéria de ${classType}`}
    >
      <span className={styles.code}>{classe.code}</span>
      <span className={styles.name}>{classe.name}</span>
    </div>
  );
}
