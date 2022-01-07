import React from 'react';
import { Job } from 'types/students';
import JobItem from './jobItem';

type Props = {
  type: Job;
  count: number;
  onHover: (job: Job) => void;
  isHovering: boolean;
};

export default function JobGroup({ type, count, onHover, isHovering }: Props) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <JobItem
            type={type}
            onHover={onHover}
            isHovering={isHovering}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
    </>
  );
}
