import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import ClassNamesModal from './ClassNamesModal';

export default function ClassEntry({ classe, whiteStripe, currentYear }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const areaColor =
    classe.area === 0
      ? 'bg-blue'
      : classe.area === 1
      ? 'bg-green'
      : classe.area === 2
      ? 'bg-pink'
      : classe.area === 3
      ? 'bg-orange'
      : 'bg-light-silver';

  const areaName =
    classe.area === 0
      ? 'Teoria'
      : classe.area === 1
      ? 'Sistemas'
      : classe.area === 2
      ? 'IA'
      : classe.area === 3
      ? 'E-science'
      : 'Outras';

  const beginYearColor =
    classe.beginYear < 1982
      ? 'moon-gray'
      : classe.beginYear < 1998
      ? 'light-silver'
      : classe.beginYear < 2010
      ? 'gray'
      : 'dark-gray';

  const endYearColor =
    classe.endYear < 1982
      ? 'washed-red'
      : classe.endYear < 1998
      ? 'light-red'
      : classe.endYear < 2010
      ? 'red'
      : 'dark-red';

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
          <React.Fragment>
            <button
              className="mh3 light-silver pointer hover-gray bg-transparent b--none"
              onClick={() => setModalOpen(true)}
              aria-label={`Matéria já teve ${classe.names.length} nomes. Abrir lista`}
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
          </React.Fragment>
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
  whiteStripe: PropTypes.bool,
  currentYear: PropTypes.number.isRequired,
};
