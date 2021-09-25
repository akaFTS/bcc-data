import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

type Props = {
  onMoveLeft: () => void;
  onMoveRight: () => void;
  activeGridIndex: number;
  gridSize: number;
};

export default function GridPickerBottom(
  { onMoveLeft, onMoveRight, activeGridIndex, gridSize }: Props,
) {
  return (
    <div className="flex justify-center items-center mt3">
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
      <div className="flex items-center">
        {[...Array(gridSize).keys()].map((index) =>
          index === activeGridIndex
            ? <div key={index} className="pa1 pl2 pt2 bg-red br-100 mh1" />
            : (
              <div
                key={index}
                className="pa1 br-100 bg-light-silver mh1 hover-bg-gray pointer"
              />
            )
        )}
      </div>
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
