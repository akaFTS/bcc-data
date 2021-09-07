import React from "react";
import { FontAwesomeIcon } from "https://esm.sh/@fortawesome/react-fontawesome";
import { IconDefinition } from "https://esm.sh/@fortawesome/fontawesome-svg-core";

type Props = {
  path: string;
  color: string;
  icon: IconDefinition;
  text: string;
};

export default function LinkButton({ path, color, icon, text }: Props) {
  return (
    <a
      href={path}
      className={`bg-mt-${color} hover-bg-mt-dark-${color} white f5 b--none pv3 ph3 br-pill shadow fw6 pointer ma1 ma0-l mr3-l no-underline`}
    >
      <FontAwesomeIcon icon={icon} className="mr2" />
      <span>{text}</span>
    </a>
  );
}
