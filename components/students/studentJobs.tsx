import React from 'react';
import ContentBox from '../layout/contentBox';
import StudentDataPicker from './studentDataPicker';
import { Epoch, Job, JobValues } from 'types/students';
import useStudents from 'hooks/useStudents';
import JobBoard from './jobBoard';

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
  studentData.map((student) => {
    const count = jobMap.get(student.job) ?? 0;
    jobMap.set(student.job, count + 1);
  });

  return (
    <ContentBox title="Ocupação Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <JobBoard jobCategories={jobMap} />
      <p className="silver f7 fw3 tc ph3 lh-title">
        Todos os logotipos são propriedade de suas respectivas empresas e são
        usados para fins meramente ilustrativos neste trabalho. Todos os
        direitos reservados.
      </p>
    </ContentBox>
  );
}
