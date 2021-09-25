import React from "react";
import ContentBox from "~/components/layout/contentBox.tsx";
import GridBox from "~/components/grid/gridBox.tsx";
import GridPickerTop from "~/components/grid/gridPickerTop.tsx";
import GridPickerBottom from "~/components/grid/gridPickerBottom.tsx";
import GridSubtitles from "~/components/grid/gridSubtitles.tsx";
import useGridPicker from "~/hooks/useGridPicker.ts";
import { isFullClasse } from "~/types/grid.ts";

export default function Grid() {
  const [grids, activeGridIndex, moveLeft, moveRight] = useGridPicker();
  const activeGrid = grids[activeGridIndex];

  return (
    <main className="flex flex-wrap">
      <div className="w-100 w-80-l center">
        <ContentBox title="Grade Curricular" color="red">
          <GridPickerTop
            onMoveLeft={moveLeft}
            onMoveRight={moveRight}
            activeGridYear={activeGrid.year}
          />
          <div className="flex flex-wrap items-stretch">
            {activeGrid.grid.map((
              classes,
              index,
            ) => (
              <div
                className="w-100 w-50-l pa2"
                key={isFullClasse(classes[0])
                  ? classes[0].code
                  : classes[0].slot}
              >
                <GridBox classes={classes} semester={index + 1} />
              </div>
            ))}
          </div>
          <GridSubtitles />
          <GridPickerBottom
            onMoveLeft={moveLeft}
            onMoveRight={moveRight}
            activeGridIndex={activeGridIndex}
            gridSize={grids.length}
          />
        </ContentBox>
      </div>
    </main>
  );
}
