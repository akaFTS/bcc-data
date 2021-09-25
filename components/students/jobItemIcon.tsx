import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBook,
  faChartBar,
  faCircle,
  faGraduationCap,
  faHome,
  faUniversity,
  faWrench,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Job } from "~/types/students.ts";

type Props = {
  type: Job;
};

function getIconAndColor(job: Job): [IconDefinition, string] {
  if (job == "PROFESSOR") {
    return [faGraduationCap, "mt-purple"];
  }
  if (job == "CONSULTANT") {
    return [faChartBar, "mt-green"];
  }
  if (job == "BIG_TECH") {
    return [faFacebookSquare, "mt-blue"];
  }
  if (job == "STARTUP") {
    return [faSpotify, "mt-green"];
  }
  if (job == "OWN") {
    return [faWrench, "mt-orange"];
  }
  if (job == "GOVERNMENT") {
    return [faUniversity, "dark-gray"];
  }
  if (job == "RETIRED") {
    return [faHome, "mt-dark-red"];
  }
  if (job == "STUDYING") {
    return [faBook, "mt-purple"];
  }
  return [faCircle, "silver"];
}

export default function JobItemIcon({ type }: Props) {
  const [icon, color] = getIconAndColor(type);
  return (
    <FontAwesomeIcon
      icon={icon}
      fixedWidth
      className={`f3 ${color}`}
    />
  );
}
