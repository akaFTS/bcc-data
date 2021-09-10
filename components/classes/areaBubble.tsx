import React from "react";

type Props = {
  top: string;
  left: string;
  name: string;
  color: string;
  size: number;
};

export default function AreaBubble({ top, left, name, color, size }: Props) {
  return (
    <div
      className={`bg-${color} br-100 absolute white o-80 flex flex-column align-center justify-center ball`}
      style={{
        top,
        left,
        width: `${size * 3 + 50}px`,
        height: `${size * 3 + 50}px`,
        transition: "all 0.3s",
      }}
      aria-label={`Número de matérias de ${name}`}
    >
      <span aria-hidden="true" className="f7 mt2 center nowrap">
        {name}
      </span>
      <span className="f3 b center">{size}</span>
    </div>
  );
}
