import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Job from './Job'
import { StudentJobTypes } from './studentDefinitions'

class JobBoard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hoveringType: null,
    }
  }

  setHovering = type => {
    this.setState({ hoveringType: type })
  }

  resetHovering = () => {
    this.setState({ hoveringType: null })
  }

  render() {
    const { jobs } = this.props
    const { hoveringType } = this.state

    const roundedJobs = jobs.map(job => Math.round(job * 100))
    roundedJobs[StudentJobTypes.OTHER] +=
      100 - roundedJobs.reduce((acc, cur) => acc + cur, 0)

    const jobVector = roundedJobs.reduce(
      (acc, cur, index) => [...acc, ...Array(cur).fill(index)],
      []
    )

    const jobMatrix = Array(10)
      .fill(0)
      .map((_, index) => jobVector.slice(index * 10, (index + 1) * 10))

    const hoverLabels = [
      'Professores e Pesquisadores',
      'Bancos e Grandes Empresas',
      'Consultorias',
      'Empresas de Tecnologia Tradicionais',
      'Gigantes da Tecnologia',
      'Startups no Exterior',
      'Startups Brasileiras',
      'Fundaram a própria empresa',
      'Órgãos Públicos',
      'Aposentados',
      'Ainda estudando',
      'Outros',
    ]

    return (
      <React.Fragment>
        <div
          className="mv4 flex flex-column items-center"
          onMouseLeave={this.resetHovering}
        >
          {jobMatrix.map((row, index) => (
            <div className="flex" key={index}>
              {row.map((type, index) => (
                <Job
                  type={type}
                  onHover={this.setHovering}
                  isHovering={hoveringType === type}
                  key={index}
                />
              ))}
            </div>
          ))}
        </div>
        {hoveringType !== null && (
          <div className="flex flex-column items-center mb4">
            <span className="b mt-blue f2">{roundedJobs[hoveringType]}%</span>
            <span className="f4 gray tc">{hoverLabels[hoveringType]}</span>
          </div>
        )}
      </React.Fragment>
    )
  }
}
JobBoard.propTypes = {
  jobs: PropTypes.array.isRequired,
}

export default JobBoard
