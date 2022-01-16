import React from 'react';
import { professorData } from 'data/course/professors';
import ProfessorBubble from './professorBubble';

type Props = {
  title: string;
  color: string;
  icon: React.ReactNode;
  professors: string[];
};

export default function ProfessorCanvas({
  title,
  color,
  icon,
  professors,
}: Props) {
  return (
    <article className="br3 bg-light-gray mb4 overflow-hidden">
      <header className={`bg-${color} white ph2 pv1 fw6 f6`}>
        {icon}
        <h3 className="ml2 di">{title}</h3>
      </header>
      <main>
        {professors &&
          professors.map((professor) => (
            <ProfessorBubble
              name={professorData[professor].name}
              color={color}
              image={professorData[professor].image}
              key={professorData[professor].code}
            />
          ))}
      </main>
    </article>
  );
}
