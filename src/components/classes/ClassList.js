import React, { Component } from 'react'
import ContentBox from '../shared/ContentBox'
import ListFilters from './ListFilters'
import allClasses from '../../data/classes.json'
import ClassEntry from './ClassEntry'

class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeArea: -1,
      activeYear: -1,
    }
  }

  handleAreaSet = area => {
    this.setState({ activeArea: area })
  }

  handleYearSet = year => {
    this.setState({ activeYear: year })
  }

  render() {
    const { activeArea, activeYear } = this.state

    const filteredClasses = allClasses
      .filter(classe => activeArea === -1 || activeArea === classe.area)
      .filter(
        classe =>
          activeYear === -1 ||
          (classe.beginYear <= activeYear && classe.endYear >= activeYear)
      )

    if (activeYear > 0) {
      ;(async function() {
        const lastOne = (await import(`../../data/classeNames/${activeYear -
          1}.json`)).default
        const filterForName = filteredClasses.map(classe => {
          const classeName = classe.names.reduce(
            (acc, cur) => (cur.start <= activeYear ? cur.name : acc),
            undefined
          )
          return { code: classe.code, name: classeName }
        })

        const lastOneWithoutEnd = lastOne.filter(
          classe =>
            allClasses.find(allclasse => allclasse.code === classe.code)
              .endYear >= activeYear
        )

        const notInLast = filterForName.filter(
          classe => !lastOne.some(lastClasse => classe.code === lastClasse.code)
        )

        const newList = [...notInLast, ...lastOneWithoutEnd].sort((a, b) =>
          a.code.localeCompare(b.code)
        )

        console.log(JSON.stringify(newList))
      })()
    }

    return (
      <ContentBox title="Matérias" color="green">
        <ListFilters
          activeArea={activeArea}
          activeYear={activeYear}
          onAreaSet={this.handleAreaSet}
          onYearSet={this.handleYearSet}
        />
        <main>
          {filteredClasses.map((classe, index) => (
            <ClassEntry
              key={classe.code}
              classe={classe}
              whiteStripe={index % 2 == 1}
              currentYear={activeYear}
            />
          ))}
        </main>
      </ContentBox>
    )
  }
}

export default ClassList
