import React, { Component } from 'react'
import PropTypes from 'prop-types'

export const ClassesContext = React.createContext()

class ClassesProvider extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allClasses: [],
    }
  }

  componentDidMount() {}

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
