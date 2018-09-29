import React, { Component } from 'react'
import PropTypes from 'prop-types'
import professors from '../../data/course/professors.json'
import slots from '../../data/course/slots.json'

export const ProfessorsContext = React.createContext()

class ProfessorsProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      professors,
      slots,
      professorYears: [],
    }
  }

  async componentDidMount() {
    const professorYears = []
    for (let i = 1972; i <= 2018; i++) {
      professorYears.push({
        year: i,
        professors: (await import(`../../data/professors/${i}.json`)).default,
      })
    }

    this.setState({ professorYears })
  }

  render() {
    const { children } = this.props
    return (
      <ProfessorsContext.Provider value={this.state}>
        {children}
      </ProfessorsContext.Provider>
    )
  }
}

ProfessorsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProfessorsProvider

export function withProfessors(Component) {
  return function ProfessorsInjectedComponent(props) {
    return (
      <ProfessorsContext.Consumer>
        {({ professors, slots, professorYears }) => (
          <Component
            {...props}
            professors={professors}
            slots={slots}
            professorYears={professorYears}
          />
        )}
      </ProfessorsContext.Consumer>
    )
  }
}
