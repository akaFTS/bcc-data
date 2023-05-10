import React from 'react';
import { Open_Sans } from 'next/font/google';
import cx from 'classnames';
import { Classe } from 'types/classes';
import Modal from 'react-responsive-modal';
import ClassTimespan from './classTimespan';
import styles from './classNamesModal.module.css';

const openSans = Open_Sans({ subsets: ['latin-ext'] });

type Props = {
  isOpen: boolean;
  classe: Classe;
  areaColor: string;
  onCloseModal: () => void;
};

export default function ClassNamesModal({
  isOpen,
  onCloseModal,
  classe,
  areaColor,
}: Props) {
  const colorVar = {
    '--pill-color': `var(--${areaColor})`,
  } as React.CSSProperties;

  return (
    <Modal
      center
      open={isOpen}
      onClose={onCloseModal}
      classNames={{ modal: styles.modal, overlay: styles.overlay }}
    >
      <div
        className={cx(styles.container, openSans.className)}
        style={colorVar}
      >
        <div className={styles.pill}>{classe.code}</div>
        <div role="list">
          {classe.names.map((entry, index) => (
            <div
              className={cx(styles.entry, { [styles.stripe]: index % 2 === 0 })}
              key={entry.start}
              role="listitem"
            >
              <div className={styles.name}>{entry.name}</div>
              <ClassTimespan
                beginYear={classe.beginYear}
                endYear={
                  index < classe.names.length - 1
                    ? classe.names[index + 1].start - 1
                    : classe.endYear
                }
              />
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
}
