import React from 'react';
import { Flipped } from 'react-flip-toolkit';
import { professorData } from 'data/course/professors';
import styles from './professorCanvas.module.css';
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
  const colorVar = {
    '--header-color': `var(--${color})`,
  } as React.CSSProperties;

  return (
    <article className={styles.article}>
      <header className={styles.header} style={colorVar}>
        {icon}
        <h3 className={styles.title}>{title}</h3>
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          {professors &&
            professors.map((professor) => (
              <Flipped
                key={professorData[professor].code}
                flipId={professorData[professor].code}
              >
                {(flippedProps) => (
                  <ProfessorBubble
                    name={professorData[professor].name}
                    color={color}
                    image={professorData[professor].image}
                    flippedProps={flippedProps}
                  />
                )}
              </Flipped>
            ))}
        </div>
      </main>
    </article>
  );
}
