import React from 'react'
import PropTypes from 'prop-types'
import GridClasse from './GridClasse'

const GridBox = ({ semester, classes }) => {
  return (
    <div className="ba bw1 b--light-gray br4 overflow-hidden">
      <div className="bb bw1 bg-light-gray b--light-gray pa1 tc fw6 near-black">
        {semester}º Semestre
      </div>
      <div>
        {classes.map(classe => (
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
