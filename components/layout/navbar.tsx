import React from 'react';
import {
  faBook,
  faCalendarAlt,
  faFileAlt,
  faGraduationCap,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import LinkButton from './linkButton';

export default function Navbar() {
  return (
    <nav
      aria-label="Navegação Principal"
      className="flex flex-wrap justify-center justify-start-l mb4"
    >
      <LinkButton
        text="Informações"
        icon={faFileAlt}
        path="/info"
        color="orange"
      />
      <LinkButton text="Curso" icon={faGraduationCap} path="/" color="purple" />
      <LinkButton text="Matérias" icon={faBook} path="/classes" color="green" />
      <LinkButton text="Grade" icon={faCalendarAlt} path="/grid" color="red" />
      <LinkButton text="Alunos" icon={faUser} path="/students" color="blue" />
    </nav>
  );
}
