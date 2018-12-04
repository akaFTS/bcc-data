import React, { Component } from 'react'
import ContentBox from '../shared/ContentBox'
import GridPicker from '../grid/GridPicker'
import GridBox from '../grid/GridBox'

class Grid extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <main className="flex flex-wrap">
        <div className="w-100 w-80-l center">
          <ContentBox title="Grade Curricular" color="red">
            <GridPicker>
              {grid => (
                <div className="flex flex-wrap items-stretch">
                  {grid.map((classes, index) => (
                    <div className="w-100 w-50-l pa2">
                      <GridBox
                        classes={classes}
                        semester={index + 1}
                        key={index}
                      />
                    </div>
                  ))}
                </div>
              )}
            </GridPicker>
          </ContentBox>
        </div>
      </main>
    )
  }
}

export default Grid
