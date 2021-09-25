import React, { useState } from "react";
import { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome";
import { faComment } from "https://esm.sh/@fortawesome/free-solid-svg-icons";
import { Area, Classe } from "~/types/classes.ts";
import ClassNamesModal from "./classNamesModal.tsx";
import ClassTimespan from "./classTimespan.tsx";

function getAreaColorAndName(area: Area): [string, string] {
  if (area === "THEORY") return ["bg-blue", "Teoria"];
  if (area === "SOFTWARE") return ["bg-green", "Sistemas"];
  if (area === "AI") return ["bg-pink", "IA"];
  if (area === "ESCIENCE") return ["bg-orange", "E-science"];
  return ["bg-light-silver", "Outras"];
}

type Props = {
  classe: Classe;
  whiteStripe: boolean;
  currentYear: number | null;
};

export default function ClassEntry(
  { classe, whiteStripe, currentYear }: Props,
) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [areaColor, areaName] = getAreaColorAndName(classe.area);

  let classeName = classe.names[classe.names.length - 1].name;
  if (currentYear !== null) {
    const possibleName = classe.names.find((name) => name.start <= currentYear);
    if (typeof possibleName !== "undefined") {
      classeName = possibleName.name;
    }
  }

  return (
    <div
      className={`flex flex-column flex-row-l items-start items-center-l ph3 pv3 gray ${
        whiteStripe ? "" : "bg-light-gray"
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
              areaColor={areaColor}
            />
          </>
        )}
      </div>
      <ClassTimespan beginYear={classe.beginYear} endYear={classe.endYear} />
    </div>
  );
}
