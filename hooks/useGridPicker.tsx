import { useState } from "react";
import { Grid } from "~/types/grid.tsx";
import grids from "~/data/grid/grids.tsx";

export default function useGridPicker(): [
  Grid[],
  number,
  () => void,
  () => void,
] {
  const [activeGridIndex, selectGrid] = useState(7);
  const moveLeft = () => selectGrid((activeGridIndex + 7) % 8);
  const moveRight = () => selectGrid((activeGridIndex + 9) % 8);

  return [grids, activeGridIndex, moveLeft, moveRight];
}
