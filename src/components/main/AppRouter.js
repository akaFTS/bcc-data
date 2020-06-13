import React, { lazy } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  faFileAlt,
  faGraduationCap,
  faBook,
  faCalendarAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import LinkButton from './LinkButton';
import SuspendedComponent from './SuspendedComponent';
import Course from '../../pages/Course';

export default function AppRouter() {
  const Information = lazy(() => import('../../pages/Information'));
  const Classes = lazy(() => import('../../pages/Classes'));
  const Grid = lazy(() => import('../../pages/Grid'));
  const Students = lazy(() => import('../../pages/Students'));
  const TCC = lazy(() => import('../../pages/TCC'));

  return (
    <HashRouter>
      <main className="w-100 w-80-l center ph2 ph0-l">
        <div className="flex flex-wrap justify-center justify-start-l mb4">
          <LinkButton
            text="Informações"
            icon={faFileAlt}
            path="/info"
            color="orange"
          />
          <LinkButton
            text="Curso"
            icon={faGraduationCap}
            path="/"
            color="purple"
          />
          <LinkButton
            text="Matérias"
            icon={faBook}
            path="/classes"
            color="green"
          />
          <LinkButton
            text="Grade"
            icon={faCalendarAlt}
            path="/grid"
            color="red"
          />
          <LinkButton
            text="Alunos"
            icon={faUser}
            path="/students"
            color="blue"
          />
        </div>
        <Routes>
          <Route path="/" element={<Course />} />
          <Route path="/info" element={SuspendedComponent(<Information />)} />
          <Route path="/classes" element={SuspendedComponent(<Classes />)} />
          <Route path="/grid" element={SuspendedComponent(<Grid />)} />
          <Route path="/students" element={SuspendedComponent(<Students />)} />
          <Route path="/tcc" element={SuspendedComponent(<TCC />)} />
        </Routes>
      </main>
    </HashRouter>
  );
}
