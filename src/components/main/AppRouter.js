import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import {
  faFileAlt,
  faGraduationCap,
  faBook,
  faCalendarAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Course from './pages/Course';
import Information from './pages/Information';
import Classes from './pages/Classes';
import LinkButton from './LinkButton';
import Grid from './pages/Grid';
import Students from './pages/Students';
import TCC from './pages/TCC';

const AppRouter = () => {
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
          <Route path="/info" element={<Information />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/grid" element={<Grid />} />
          <Route path="/students" element={<Students />} />
          <Route path="/tcc" element={<TCC />} />
        </Routes>
      </main>
    </HashRouter>
  );
};

export default AppRouter;
