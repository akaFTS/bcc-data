import React from 'react'
import PropTypes from 'prop-types'
import GridClasse from './GridClasse'

const orderClasses = (a, b) => {
  if (a.code && b.code) {
    const preffixA = a.code.substring(0, 3)
    const preffixB = b.code.substring(0, 3)
    return preffixA.localeCompare(preffixB) === 0
      ? -preffixA.localeCompare(preffixB)
      : a.code.localeCompare(b.code)
  } else if (a.code) return -1
  else if (b.code) return 1
  else return a.slot.localeCompare(b.slot)
}

const GridBox = ({ semester, classes }) => {
  return (
    <div className="ba bw1 b--light-gray br4 overflow-hidden h-100">
      <div className="bb bw1 bg-light-gray b--light-gray pa1 tc fw6 near-black">
        {semester}º Semestre
      </div>
      <div>
        {classes.sort(orderClasses).map(classe => (
          <GridClasse key={classe.code || classe.slot} classe={classe} />
        ))}
      </div>
    </div>
  )
}

GridBox.propTypes = {
  semester: PropTypes.number.isRequired,
  classes: PropTypes.array.isRequired,
}

export default GridBox
