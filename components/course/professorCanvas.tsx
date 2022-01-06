import React from 'react';

type Props = {
  title: string;
  color: string;
  icon: React.ReactNode;
  size: number;
  professorsList: any;
};

export default function ProfessorCanvas({
  title,
  color,
  icon,
  size,
  professorsList,
}: Props) {
  return (
    <article
      className="br3 bg-light-gray mb4 overflow-hidden"
      style={{
        transition: 'height 0.3s ease-out',
        height: `${size * 50 + 50}px`,
      }}
      aria-owns={professorsList}
    >
      <header className={`bg-${color} white ph2 pv1 fw6 f6`}>
        {icon}
        <h3 className="ml2 di">{title}</h3>
      </header>
    </article>
  );
}
