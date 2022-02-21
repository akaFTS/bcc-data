import graduatesByYear from 'data/students/graduates.yml';
import { Epoch, YearGraduates } from 'types/students';

function getYearRangeFromEpoch(epoch: Epoch) {
  if (epoch === 'ALL') return [0, 44];
  if (epoch === '1974') return [0, 15];
  if (epoch === '1989') return [15, 30];
  return [30, 44];
}

export default function useGraduates(currentEpoch: Epoch): YearGraduates[] {
  const slicedGraduates = graduatesByYear.slice(
    ...getYearRangeFromEpoch(currentEpoch),
  );

  const accumulatedGraduates: YearGraduates[] = [];
  slicedGraduates.reduce(
    (acc: YearGraduates, current: YearGraduates, i: number): YearGraduates => {
      const tempYearGraduates = { ...acc };
      tempYearGraduates.year = current.year;
      tempYearGraduates.males += current.males;
      tempYearGraduates.females += current.females;
      accumulatedGraduates[i] = tempYearGraduates;
      return tempYearGraduates;
    },
    { males: 0, females: 0, year: 0 },
  );

  return accumulatedGraduates;
}
