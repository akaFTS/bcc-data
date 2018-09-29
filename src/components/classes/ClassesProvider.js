import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classes from '../../data/classes.json'

export const ClassesContext = React.createContext()

class ClassesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allClasses: [],
    }
  }

  async componentDidMount() {
    const yearData = []
    const allClasses = [...classes]
    for (let i = 1972; i <= 2018; i++) {
      yearData.push((await import(`../../data/classes/${i}.json`)).default)
    }

    yearData.map((year, index) => {
      year.map(code => {
        const classe = allClasses.find(classe => classe.code === `MAC0${code}`)
        classe.endYear = index + 1972
        classe.beginYear = classe.beginYear || index + 1972
      })
    })

    this.setState({ allClasses })
  }

  render() {
    const { children } = this.props
    return (
      <ClassesContext.Provider value={this.state}>
        {children}
      </ClassesContext.Provider>
    )
  }
}

ClassesProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ClassesProvider

export function withClasses(Component) {
  return function ClassesInjectedComponent(props) {
    return (
      <ClassesContext.Consumer>
        {({ allClasses }) => <Component {...props} allClasses={allClasses} />}
      </ClassesContext.Consumer>
    )
  }
}
