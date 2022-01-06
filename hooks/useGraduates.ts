import { maleGraduatesByYear } from 'data/students/maleGraduates';
import { femaleGraduatesByYear } from 'data/students/femaleGraduates';
import { Epoch, YearGraduates } from 'types/students';

function getYearRangeFromEpoch(epoch: Epoch) {
  if (epoch === 'ALL') return [0, 44];
  if (epoch === '1974') return [0, 15];
  if (epoch === '1989') return [15, 30];
  return [30, 44];
}

const kFirstYear = 1974;
const kLastYear = 2018;

export default function useGraduates(currentEpoch: Epoch): YearGraduates[] {
  const yearRange = [...Array(kLastYear - kFirstYear).keys()];

  const graduatesByYear: YearGraduates[] = yearRange.map((index) => ({
    year: index + kFirstYear,
    males: 0,
    females: 0,
  }));

  maleGraduatesByYear.reduce((accumulated, year, index) => {
    return (graduatesByYear[index].males = accumulated + year);
  }, 0);

  femaleGraduatesByYear.reduce((accumulated, year, index) => {
    return (graduatesByYear[index].females = accumulated + year);
  }, 0);

  return graduatesByYear.slice(...getYearRangeFromEpoch(currentEpoch));
}
