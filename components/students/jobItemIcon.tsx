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
    return [faGraduationCap, 'purple-700'];
  }
  if (job === 'CONSULTANT') {
    return [faChartBar, 'green-700'];
  }
  if (job === 'BIG_TECH') {
    return [faFacebookSquare, 'indigo-800'];
  }
  if (job === 'STARTUP') {
    return [faSpotify, 'green-700'];
  }
  if (job === 'OWN') {
    return [faWrench, 'orange-700'];
  }
  if (job === 'GOVERNMENT') {
    return [faUniversity, 'grey-800'];
  }
  if (job === 'RETIRED') {
    return [faHome, 'red-900'];
  }
  if (job === 'STUDYING') {
    return [faBook, 'purple-700'];
  }
  return [faCircle, 'grey-500'];
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
