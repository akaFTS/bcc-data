import React from 'react';
import cx from 'classnames';
import { Job } from 'types/students';
import JobItemImage from './jobItemImage';
import JobItemIcon from './jobItemIcon';
import styles from './jobItem.module.css';

type Props = {
  type: Job;
  onHover: (job: Job) => void;
  isHovering: boolean;
};

export default function JobItem({ type, onHover, isHovering }: Props) {
  return (
    <div
      onMouseEnter={() => onHover(type)}
      className={cx(styles.item, { [styles.hover]: isHovering })}
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
