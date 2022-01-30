import React from 'react';
import {
  faBook,
  faCalendarAlt,
  faFileAlt,
  faGraduationCap,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import LinkButton from './linkButton';
import styles from './navbar.module.css';

export default function Navbar() {
  return (
    <nav aria-label="Navegação Principal" className={styles.nav}>
      <LinkButton
        text="Informações"
        icon={faFileAlt}
        path="/info"
        color="orange-700"
      />
      <LinkButton
        text="Curso"
        icon={faGraduationCap}
        path="/"
        color="purple-700"
      />
      <LinkButton
        text="Matérias"
        icon={faBook}
        path="/classes"
        color="green-700"
      />
      <LinkButton
        text="Grade"
        icon={faCalendarAlt}
        path="/grid"
        color="red-600"
      />
      <LinkButton
        text="Alunos"
        icon={faUser}
        path="/students"
        color="indigo-800"
      />
    </nav>
  );
}
