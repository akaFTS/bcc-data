import React from 'react';
import ContentBox from '../components/shared/ContentBox';
import GridPicker from '../components/grid/GridPicker';
import GridBox from '../components/grid/GridBox';
import GridSubtitles from '../components/grid/GridSubtitles';

export default function Grid() {
  return (
    <main className="flex flex-wrap">
      <div className="w-100 w-80-l center">
        <ContentBox title="Grade Curricular" color="red">
          <GridPicker>
            {(grid) => (
              <React.Fragment>
                <div className="flex flex-wrap items-stretch">
                  {grid.map((classes, index) => (
                    <div className="w-100 w-50-l pa2" key={index}>
                      <GridBox classes={classes} semester={index + 1} />
                    </div>
                  ))}
                </div>
                <GridSubtitles />
              </React.Fragment>
            )}
          </GridPicker>
        </ContentBox>
      </div>
    </main>
  );
}
