import React from 'react';
import ContentBox from '../components/shared/ContentBox';
import GridBox from '../components/grid/GridBox';
import GridSubtitles from '../components/grid/GridSubtitles';
import useGridPicker from '../components/grid/useGridPicker';

export default function Grid() {
  const [activeGrid, GridPickerTop, GridPickerBottom] = useGridPicker();

  return (
    <main className="flex flex-wrap">
      <div className="w-100 w-80-l center">
        <ContentBox title="Grade Curricular" color="red">
          <GridPickerTop />
          <div className="flex flex-wrap items-stretch">
            {activeGrid.grid.map((classes, index) => (
              <div className="w-100 w-50-l pa2" key={classes[0].code}>
                <GridBox classes={classes} semester={index + 1} />
              </div>
            ))}
          </div>
          <GridSubtitles />
          <GridPickerBottom />
        </ContentBox>
      </div>
    </main>
  );
}
