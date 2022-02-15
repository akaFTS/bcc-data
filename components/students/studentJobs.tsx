import React from 'react';
import useStudents from 'hooks/useStudents';
import { Epoch, Job, JobValues } from 'types/students';
import ContentBox from '../layout/contentBox';
import StudentDataPicker from './studentDataPicker';
import JobBoard from './jobBoard';
import styles from './studentJobs.module.css';

type Props = {
  currentSelection: Epoch;
  onEpochSelected: (epoch: Epoch) => void;
};

export default function StudentJobs({
  currentSelection,
  onEpochSelected,
}: Props) {
  const jobMap = new Map<Job, number>();
  // This is necessary to maintain a constant order of keys.
  JobValues.map((job) => jobMap.set(job, 0));

  const studentData = useStudents(currentSelection);
  studentData.forEach((student) => {
    const count = jobMap.get(student.job) ?? 0;
    jobMap.set(student.job, count + 1);
  });

  return (
    <ContentBox title="Ocupação Atual" color="brand-blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <JobBoard jobCategories={jobMap} />
      <p className={styles.disclaimer}>
        Todos os logotipos são propriedade de suas respectivas empresas e são
        usados para fins meramente ilustrativos neste trabalho. Todos os
        direitos reservados.
      </p>
    </ContentBox>
  );
}
