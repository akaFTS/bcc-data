import React from 'react';
import { Area } from 'types/classes';
import FilterPill from './filterPill';

type Props = {
  activeArea: Area | null;
  onAreaSet: (area: Area | null) => void;
};

export default function ListFilters({ activeArea, onAreaSet }: Props) {
  return (
    <div
      className="flex flex-column justify-between"
      aria-label="Filtros por área para a lista de matérias"
    >
      <div aria-hidden="true" className="b mb1 f5 near-black">
        Áreas
      </div>
      <div className="flex flex-wrap">
        <FilterPill
          name="Todas"
          color="light-silver"
          isActive={activeArea === null}
          onClick={() => onAreaSet(null)}
        />
        <FilterPill
          name="Teoria"
          color="blue"
          isActive={activeArea === 'THEORY'}
          onClick={() => onAreaSet('THEORY')}
        />
        <FilterPill
          name="Sistemas"
          color="green"
          isActive={activeArea === 'SOFTWARE'}
          onClick={() => onAreaSet('SOFTWARE')}
        />
        <FilterPill
          name="IA"
          color="pink"
          isActive={activeArea === 'AI'}
          onClick={() => onAreaSet('AI')}
        />
        <FilterPill
          name="E-science"
          color="orange"
          isActive={activeArea === 'ESCIENCE'}
          onClick={() => onAreaSet('ESCIENCE')}
        />
        <FilterPill
          name="Outras"
          color="light-silver"
          isActive={activeArea === 'OTHERS'}
          onClick={() => onAreaSet('OTHERS')}
        />
      </div>
    </div>
  );
}
