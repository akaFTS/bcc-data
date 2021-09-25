import React from "react";
import { Classe, isFullClasse } from "~/types/grid.ts";

function getClassColorAndName(code: string): [string, string] {
  if (/^MAC/.test(code)) return ["mt-red", "Computação"];
  if (/^MAT/.test(code)) return ["mt-blue", "Matemática Pura"];
  if (/^MAE/.test(code)) return ["mt-green", "Estatística"];
  if (/^MAP/.test(code)) return ["mt-orange", "Matemática Aplicada"];
  if (/^(FEP|FAP)/.test(code)) return ["mt-purple", "Física"];
  return ["gray", "Outras"];
}

type Props = {
  classe: Classe;
};

export default function GridClasse({ classe }: Props) {
  if (isFullClasse(classe)) {
    const [classColor, classType] = getClassColorAndName(classe.code);
    return (
      <div
        className={`ba bw1 b--${classColor} bg-${classColor} pv2 ph3 br-pill white flex items-center ma2 h2-3`}
        role="listitem"
        aria-label={`Matéria de ${classType}`}
      >
        <span className="fw6 f5 mr3">{classe.code}</span>
        <span className="fw3 f6 lh-title">{classe.name}</span>
      </div>
    );
  }

  return (
    <div
      className="pv2 ph3 br-pill gray h2-3 ma2 flex items-center justify-center ba bw1 b--dashed f6"
      role="listitem"
    >
      <span>{classe.slot}</span>
    </div>
  );
}
