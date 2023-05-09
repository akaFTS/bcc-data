import React from 'react';
import Head from 'next/head';
import ContentBox from 'components/layout/contentBox';
import GridBox from 'components/grid/gridBox';
import GridPickerTop from 'components/grid/gridPickerTop';
import GridPickerBottom from 'components/grid/gridPickerBottom';
import GridSubtitles from 'components/grid/gridSubtitles';
import useGridPicker from 'hooks/useGridPicker';
import { isFullClasse } from 'types/grid';
import styles from './grid.module.css';

export default function Grid() {
  const [grids, activeGridIndex, moveLeft, moveRight] = useGridPicker();
  const activeGrid = grids[activeGridIndex];

  return (
    <main>
      <Head>
        <title>Grade • bcc-data</title>
      </Head>
      <div className={styles.mainInner}>
        <ContentBox title="Grade Curricular" color="brand-red">
          <GridPickerTop
            onMoveLeft={moveLeft}
            onMoveRight={moveRight}
            activeGridYear={activeGrid.year}
          />
          <div className={styles.gridContainer}>
            {activeGrid.grid.map((classes, index) => (
              <div
                className={styles.gridEntry}
                key={
                  isFullClasse(classes[0]) ? classes[0].code : classes[0].slot
                }
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
