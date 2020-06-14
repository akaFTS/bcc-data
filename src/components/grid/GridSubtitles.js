import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export default function GridSubtitles() {
  return (
    <div className="flex flex-column w-100 items-end">
      <div className="w-100 w-50-l pa2">
        <div className="ba bw1 b--light-gray br4 overflow-hidden">
          <div className="tc fw6 pa1 f6 near-black">Legenda</div>
          <div className="pv2 ph3 flex flex-row flex-wrap">
            <div className="w-50 mb2">
              <FontAwesomeIcon icon={faCircle} className="mt-red mr2 f6" />
              <span className="gray f6">Computação</span>
            </div>
            <div className="w-50 mb2">
              <FontAwesomeIcon icon={faCircle} className="mt-blue mr2 f6" />
              <span className="gray f6">Matemática Pura</span>
            </div>
            <div className="w-50 mb2">
              <FontAwesomeIcon icon={faCircle} className="mt-orange mr2 f6" />
              <span className="gray f6">Matemática Aplicada</span>
            </div>
            <div className="w-50 mb2">
              <FontAwesomeIcon icon={faCircle} className="mt-green mr2 f6" />
              <span className="gray f6">Estatística</span>
            </div>
            <div className="w-50 mb2">
              <FontAwesomeIcon icon={faCircle} className="mt-purple mr2 f6" />
              <span className="gray f6">Física</span>
            </div>
            <div className="w-50 mb2">
              <FontAwesomeIcon icon={faCircle} className="gray mr2 f6" />
              <span className="gray f6">Outras</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
