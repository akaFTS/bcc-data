import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  activeGridYear: number;
};

export default function GridPickerTop(
  { onMoveLeft, onMoveRight, activeGridYear }: Props,
) {
  return (
    <div className="flex items-center justify-center mb3">
      <button
        className="bg-white b--none mr4"
        onClick={onMoveLeft}
        type="button"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="silver hover-mid-gray pointer pa2 f2"
        />
      </button>
      <span className="f4 fw6 tc dark-gray">Grade de {activeGridYear}</span>
      <button
        className="bg-white b--none ml4"
        onClick={onMoveRight}
        type="button"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className="silver hover-mid-gray pointer pa2 f2"
        />
      </button>
    </div>
  );
}
