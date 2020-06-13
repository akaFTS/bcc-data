import React, { Component } from 'react';
import ContentBox from '../shared/ContentBox';
import ListFilters from './ListFilters';
import allClasses from '../../data/classes.json';
import ClassEntry from './ClassEntry';

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeArea: -1,
      activeYear: -1,
    };
  }

  handleAreaSet = (area) => {
    this.setState({ activeArea: area });
  };

  handleYearSet = (year) => {
    this.setState({ activeYear: year });
  };

  render() {
    const { activeArea, activeYear } = this.state;

    const filteredClasses = allClasses
      .filter((classe) => activeArea === -1 || activeArea === classe.area)
      .filter(
        (classe) =>
          activeYear === -1 ||
          (classe.beginYear <= activeYear && classe.endYear >= activeYear)
      );

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
    );
  }
}

export default ClassList;
