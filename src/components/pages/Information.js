import React, { Component } from 'react';
import Summary from '../information/Summary';
import Data from '../information/Data';

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <main>
        <div className="flex flex-wrap">
          <div className="w-100 w-50-l ph2">
            <Summary />
          </div>
          <div className="w-100 w-50-l ph2">
            <Data />
          </div>
        </div>
      </main>
    );
  }
}

export default Information;
