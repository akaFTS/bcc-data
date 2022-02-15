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
        color="brand-orange"
      />
      <LinkButton
        text="Curso"
        icon={faGraduationCap}
        path="/"
        color="brand-purple"
      />
      <LinkButton
        text="Matérias"
        icon={faBook}
        path="/classes"
        color="brand-green"
      />
      <LinkButton
        text="Grade"
        icon={faCalendarAlt}
        path="/grid"
        color="brand-red"
      />
      <LinkButton
        text="Alunos"
        icon={faUser}
        path="/students"
        color="brand-blue"
      />
    </nav>
  );
}
