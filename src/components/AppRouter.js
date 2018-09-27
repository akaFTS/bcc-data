import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  faFileAlt,
  faGraduationCap,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import Course from './pages/Course'
import Information from './pages/Information'
import Classes from './pages/Classes'
import LinkButton from './LinkButton'

const AppRouter = () => {
  return (
    <BrowserRouter>
      <main className="w-100 w-75-l center ph2 ph0-l">
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
        </div>
        <Switch>
          <Route exact path="/" component={Course} />
          <Route exact path="/info" component={Information} />
          <Route exact path="/classes" component={Classes} />
        </Switch>
      </main>
    </BrowserRouter>
  )
}

export default AppRouter
