import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ClassNamesModal from './ClassNamesModal';

function getAreaColorAndName(area) {
  if (area === 0) return ['bg-blue', 'Teoria'];
  if (area === 1) return ['bg-green', 'Sistemas'];
  if (area === 2) return ['bg-pink', 'IA'];
  if (area === 3) return ['bg-orange', 'E-science'];
  return ['bg-light-silver', 'Outras'];
}

function getBeginYearColor(beginYear) {
  if (beginYear < 1982) return 'moon-gray';
  if (beginYear < 1998) return 'light-silver';
  if (beginYear < 2010) return 'gray';
  return 'dark-gray';
}

function getEndYearColor(beginYear) {
  if (beginYear < 1982) return 'washed-red';
  if (beginYear < 1998) return 'light-red';
  if (beginYear < 2010) return 'red';
  return 'dark-red';
}

export default function ClassEntry({ classe, whiteStripe, currentYear }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const [areaColor, areaName] = getAreaColorAndName(classe.area);
  const beginYearColor = getBeginYearColor(classe.beginYear);
  const endYearColor = getEndYearColor(classe.endYear);
  const classeName =
    classe.names.reduce(
      (acc, cur) =>
        currentYear > 0 && cur.start <= currentYear ? cur.name : acc,
      undefined
    ) || classe.names[classe.names.length - 1].name;

  return (
    <div
      className={`flex flex-column flex-row-l items-start items-center-l ph3 pv3 gray ${
        whiteStripe ? '' : 'bg-light-gray'
      }`}
      role="listitem"
      aria-label={`Matéria da área: ${areaName}`}
    >
      <div
        className={`white ph2 pv1 br-pill b f5 mb3 mr3-l mb0-l ${areaColor}`}
      >
        {classe.code}
      </div>
      <div className="w-100 flex flex-row justify-between items-center">
        <div className="flex-auto fw3 pr2 lh-title">{classeName}</div>
        {classe.names.length > 1 && (
          <>
            <button
              className="mh3 light-silver pointer hover-gray bg-transparent b--none"
              onClick={() => setModalOpen(true)}
              aria-label={`Matéria já teve ${classe.names.length} nomes. Abrir lista`}
              type="button"
            >
              <span className="fa-layers fa-fw" aria-hidden="true">
                <FontAwesomeIcon icon={faComment} transform="grow-15" />
                <span
                  className="fa-layers-text fa-inverse pb1"
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
              color={areaColor}
            />
          </>
        )}
      </div>
      <div className="visually-hidden">
        De {classe.beginYear} até {classe.endYear}.
      </div>
      <div className="flex mt3 mt0-l" aria-hidden="true">
        <div className={`white br--left br2 pl2 pv1 f5 b bg-${beginYearColor}`}>
          {classe.beginYear}
        </div>
        <div
          className={`white br--right br2 pl2 pr2 pv1 f5 b relative bg-${endYearColor}`}
        >
          <div
            className={`bl triangle absolute left-0 top-0 h-100 b--${beginYearColor}`}
          />
          {classe.endYear}
        </div>
      </div>
    </div>
  );
}

ClassEntry.propTypes = {
  classe: PropTypes.object.isRequired,
  whiteStripe: PropTypes.bool.isRequired,
  currentYear: PropTypes.number.isRequired,
};
