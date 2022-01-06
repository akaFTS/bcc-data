import React from 'react';

type Props = {
  isActive: boolean;
  name: string;
  color: string;
  onClick: () => void;
};

export default function FilterPill({ isActive, name, color, onClick }: Props) {
  if (isActive) {
    return (
      <button
        className={`ba bw1 b--${color} bg-${color} mb2 mb0-l white br-pill ph2 pv1 f6 b mr1`}
        disabled
        type="button"
      >
        {name}
      </button>
    );
  }

  return (
    <button
      className={`ba bw1 b--${color} ${color} mb2 mb0-l br-pill ph2 pv1 f6 b mr1 pointer bg-white hover-bg-light-gray`}
      onClick={onClick}
      type="button"
    >
      {name}
    </button>
  );
}
