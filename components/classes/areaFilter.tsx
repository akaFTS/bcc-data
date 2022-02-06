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
          color="grey-500"
          isActive={activeArea === null}
          onClick={() => onAreaSet(null)}
        />
        <FilterPill
          name="Teoria"
          color="indigo-800"
          isActive={activeArea === 'THEORY'}
          onClick={() => onAreaSet('THEORY')}
        />
        <FilterPill
          name="Sistemas"
          color="green-700"
          isActive={activeArea === 'SOFTWARE'}
          onClick={() => onAreaSet('SOFTWARE')}
        />
        <FilterPill
          name="IA"
          color="pink-300"
          isActive={activeArea === 'AI'}
          onClick={() => onAreaSet('AI')}
        />
        <FilterPill
          name="E-science"
          color="orange-700"
          isActive={activeArea === 'ESCIENCE'}
          onClick={() => onAreaSet('ESCIENCE')}
        />
        <FilterPill
          name="Outras"
          color="grey-500"
          isActive={activeArea === 'OTHERS'}
          onClick={() => onAreaSet('OTHERS')}
        />
      </div>
    </div>
  );
}
