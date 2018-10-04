import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import {
  faFileAlt,
  faGraduationCap,
  faBook,
  faCalendarAlt,
} from '@fortawesome/free-solid-svg-icons'
import Course from './pages/Course'
import Information from './pages/Information'
import Classes from './pages/Classes'
import LinkButton from './LinkButton'
import Grid from './pages/Grid'

const AppRouter = () => {
  return (
    <HashRouter>
      <main className="w-100 w-80-l center ph2 ph0-l">
        <div className="flex mb4">
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
        </div>
        <Switch>
          <Route exact path="/" component={Course} />
          <Route exact path="/info" component={Information} />
          <Route exact path="/classes" component={Classes} />
          <Route exact path="/grid" component={Grid} />
        </Switch>
      </main>
    </HashRouter>
  )
}

export default AppRouter
