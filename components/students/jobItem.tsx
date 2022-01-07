import React from 'react';
import { Job } from 'types/students';
import JobItemImage from './jobItemImage';
import JobItemIcon from './jobItemIcon';

type Props = {
  type: Job;
  onHover: (job: Job) => void;
  isHovering: boolean;
};

export default function JobItem({ type, onHover, isHovering }: Props) {
  return (
    <div
      onMouseEnter={() => onHover(type)}
      className={`h2 flex justify-center items-center ${
        isHovering ? 'bg-light-gray' : null
      }`}
    >
      {type === 'BANK' ||
      type === 'OLD_TECH' ||
      type === 'BRAZILIAN_STARTUP' ? (
        <JobItemImage type={type} />
      ) : (
        <JobItemIcon type={type} />
      )}
    </div>
  );
}
