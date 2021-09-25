import React from "react";
import { Epoch } from "~/types/students.ts";

type Props = {
  currentSelection: Epoch;
  onEpochSelected: (epoch: Epoch) => void;
};

export default function StudentDataPicker({
  currentSelection,
  onEpochSelected,
}: Props) {
  return (
    <div
      className="flex ba bw1 b--mt-blue br3 overflow-hidden mh3-l"
      aria-label="Seleção de intervalo de tempo para análise"
    >
      <button
        className={`w-25 pv1 tc b b--none ${
          currentSelection === "ALL"
            ? "bg-mt-blue white"
            : "mt-blue pointer hover-bg-light-gray bg-white"
        }`}
        onClick={() => onEpochSelected("ALL")}
        type="button"
      >
        Todos
      </button>
      <button
        className={`w-25 pv1 tc b b--none ${
          currentSelection === "1974"
            ? "bg-mt-blue white"
            : "mt-blue pointer hover-bg-light-gray bg-white"
        }`}
        onClick={() => onEpochSelected("1974")}
        type="button"
      >
        1974-1988
      </button>
      <button
        className={`w-25 pv1 tc b b--none ${
          currentSelection === "1989"
            ? "bg-mt-blue white"
            : "mt-blue pointer hover-bg-light-gray bg-white"
        }`}
        onClick={() => onEpochSelected("1989")}
        type="button"
      >
        1989-2003
      </button>
      <button
        className={`w-25 pv1 tc b b--none ${
          currentSelection === "2004"
            ? "bg-mt-blue white"
            : "mt-blue pointer hover-bg-light-gray bg-white"
        }`}
        onClick={() => onEpochSelected("2004")}
        type="button"
      >
        2004-2017
      </button>
    </div>
  );
}
