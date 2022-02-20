import { useState } from 'react';
import { Grid } from 'types/grid';
import grids from 'data/grid/grids.yml';

export default function useGridPicker(): [
  Grid[],
  number,
  () => void,
  () => void,
] {
  const numGrids = grids.length;
  const [activeGridIndex, selectGrid] = useState(numGrids - 1);
  const moveLeft = () =>
    selectGrid((activeGridIndex + numGrids - 1) % numGrids);
  const moveRight = () =>
    selectGrid((activeGridIndex + numGrids + 1) % numGrids);

  return [grids, activeGridIndex, moveLeft, moveRight];
}
