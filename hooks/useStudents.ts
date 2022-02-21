import group1974 from 'data/students/group1974.yml';
import group1989 from 'data/students/group1989.yml';
import group2004 from 'data/students/group2004.yml';
import { Epoch } from 'types/students';

export default function useStudents(epoch: Epoch) {
  if (epoch === 'ALL') return [...group1974, ...group1989, ...group2004];
  if (epoch === '1974') return group1974;
  if (epoch === '1989') return group1989;
  return group2004;
}
