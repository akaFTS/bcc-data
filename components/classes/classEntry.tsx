import React, { useState } from 'react';
import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { Area, Classe } from 'types/classes';
import ClassNamesModal from './classNamesModal';
import ClassTimespan from './classTimespan';
import styles from './classEntry.module.css';

function getAreaColorAndName(area: Area): [string, string] {
  if (area === 'THEORY') return ['indigo-800', 'Teoria'];
  if (area === 'SOFTWARE') return ['green-700', 'Sistemas'];
  if (area === 'AI') return ['pink-400', 'IA'];
  if (area === 'ESCIENCE') return ['orange-700', 'E-science'];
  return ['grey-500', 'Outras'];
}

type Props = {
  classe: Classe;
  whiteStripe: boolean;
  currentYear: number | null;
};

export default function ClassEntry({
  classe,
  whiteStripe,
  currentYear,
}: Props) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [color, areaName] = getAreaColorAndName(classe.area);
  const colorVar = { '--pill-color': `var(--${color})` } as React.CSSProperties;

  let classeName = classe.names[classe.names.length - 1].name;
  if (currentYear !== null) {
    const possibleName = classe.names.find((name) => name.start <= currentYear);
    if (typeof possibleName !== 'undefined') {
      classeName = possibleName.name;
    }
  }

  return (
    <div
      style={colorVar}
      className={cx(styles.entry, { [styles.striped]: whiteStripe })}
      role="listitem"
      aria-label={`Matéria da área: ${areaName}`}
    >
      <div className={styles.codePill}>{classe.code}</div>
      <div className={styles.container}>
        <div className={styles.name}>{classeName}</div>
        {classe.names.length > 1 && (
          <>
            <button
              className={styles.modalButton}
              onClick={() => setModalOpen(true)}
              aria-label={`Matéria já teve ${classe.names.length} nomes. Abrir lista`}
              type="button"
            >
              <span className="fa-layers fa-fw" aria-hidden="true">
                <FontAwesomeIcon icon={faComment} transform="grow-15" />
                <span
                  className={cx('fa-layers-text fa-inverse', styles.iconText)}
                  style={{ fontWeight: 900 }}
                >
                  {classe.names.length}
                </span>
              </span>
            </button>
            <ClassNamesModal
              isOpen={isModalOpen}
              onCloseModal={() => setModalOpen(false)}
              classe={classe}
              areaColor={color}
            />
          </>
        )}
      </div>
      <ClassTimespan beginYear={classe.beginYear} endYear={classe.endYear} />
    </div>
  );
}
