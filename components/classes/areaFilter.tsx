import React from 'react';
import { Area } from 'types/classes';
import FilterPill from './filterPill';
import styles from './areaFilter.module.css';

type Props = {
  activeArea: Area | null;
  onAreaSet: (area: Area | null) => void;
};

export default function ListFilters({ activeArea, onAreaSet }: Props) {
  return (
    <div
      className={styles.container}
      aria-label="Filtros por área para a lista de matérias"
    >
      <h4 aria-hidden="true" className={styles.title}>
        Áreas
      </h4>
      <div className={styles.list}>
        <FilterPill
          name="Todas"
          color="brand-grey"
          isActive={activeArea === null}
          onClick={() => onAreaSet(null)}
        />
        <FilterPill
          name="Teoria"
          color="brand-blue"
          isActive={activeArea === 'THEORY'}
          onClick={() => onAreaSet('THEORY')}
        />
        <FilterPill
          name="Sistemas"
          color="brand-green"
          isActive={activeArea === 'SOFTWARE'}
          onClick={() => onAreaSet('SOFTWARE')}
        />
        <FilterPill
          name="IA"
          color="brand-purple"
          isActive={activeArea === 'AI'}
          onClick={() => onAreaSet('AI')}
        />
        <FilterPill
          name="E-science"
          color="brand-orange"
          isActive={activeArea === 'ESCIENCE'}
          onClick={() => onAreaSet('ESCIENCE')}
        />
        <FilterPill
          name="Outras"
          color="brand-grey"
          isActive={activeArea === 'OTHERS'}
          onClick={() => onAreaSet('OTHERS')}
        />
      </div>
    </div>
  );
}
