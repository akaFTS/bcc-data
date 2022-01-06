import React from 'react';
import { Classe } from 'types/classes';
import ClassTimespan from './classTimespan';
import Modal from 'react-responsive-modal';

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
  return (
    <Modal
      center
      open={isOpen}
      onClose={onCloseModal}
      classNames={{ modal: 'br4 w-100 w-70-l ph0' }}
    >
      <div className="opensans ph3">
        <div className={`w4 tc white ph2 pv1 br-pill f4 mb4 fw6 ${areaColor}`}>
          {classe.code}
        </div>
        <div role="list">
          {classe.names.map((entry, index) => (
            <div
              className={`flex pa3 items-center justify-between ${
                index % 2 === 0 ? 'bg-light-gray' : ''
              }`}
              key={entry.start}
              role="listitem"
            >
              <div className="fw3 pr2 lh-title gray">{entry.name}</div>
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
