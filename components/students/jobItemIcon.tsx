import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookSquare,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';
import {
  faBook,
  faChartBar,
  faCircle,
  faGraduationCap,
  faHome,
  faUniversity,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { Job } from 'types/students';
import styles from './jobItemIcon.module.css';

type Props = {
  type: Job;
};

function getIconAndColor(job: Job): [IconDefinition, string] {
  if (job === 'PROFESSOR') {
    return [faGraduationCap, 'brand-purple'];
  }
  if (job === 'CONSULTANT') {
    return [faChartBar, 'brand-green'];
  }
  if (job === 'BIG_TECH') {
    return [faFacebookSquare, 'brand-blue'];
  }
  if (job === 'STARTUP') {
    return [faSpotify, 'brand-green'];
  }
  if (job === 'OWN') {
    return [faWrench, 'brand-orange'];
  }
  if (job === 'GOVERNMENT') {
    return [faUniversity, 'brand-grey'];
  }
  if (job === 'RETIRED') {
    return [faHome, 'brand-red'];
  }
  if (job === 'STUDYING') {
    return [faBook, 'brand-purple'];
  }
  return [faCircle, 'brand-grey'];
}

export default function JobItemIcon({ type }: Props) {
  const [icon, color] = getIconAndColor(type);
  const colorVar = { '--icon-color': `var(--${color})` } as React.CSSProperties;

  return (
    <FontAwesomeIcon
      style={colorVar}
      icon={icon}
      fixedWidth
      className={styles.icon}
    />
  );
}
