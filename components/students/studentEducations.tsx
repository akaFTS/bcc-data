import React from 'react';
import { Education, EducationValues, Epoch } from 'types/students';
import useStudents from 'hooks/useStudents';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer } from 'recharts';
import StudentDataPicker from './studentDataPicker';
import ContentBox from '../layout/contentBox';
import styles from './studentEducations.module.css';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function assertUnreachable(x: never): never {
  throw new Error("Didn't expect to get here");
}

function getNameFromEducation(education: Education): string {
  if (education === 'GRADUATE') {
    return 'Apenas BCC';
  }
  if (education === 'MBA') {
    return 'MBA ou Especialização';
  }
  if (education === 'MASTER') {
    return 'Mestrado';
  }
  if (education === 'DOCTOR') {
    return 'Doutorado';
  }
  if (education === 'TWO_GRADUATES') {
    return 'Outra graduação';
  }
  return assertUnreachable(education);
}

type Props = {
  currentSelection: Epoch;
  onEpochSelected: (epoch: Epoch) => void;
};

export default function StudentEducations({
  currentSelection,
  onEpochSelected,
}: Props) {
  const educationMap = new Map<Education, number>();
  // This is necessary to maintain a constant order of keys.
  EducationValues.map((education) => educationMap.set(education, 0));

  const studentData = useStudents(currentSelection);
  studentData.forEach((student) => {
    const count = educationMap.get(student.education) ?? 0;
    educationMap.set(student.education, count + 1);
  });

  const educationData = EducationValues.map((education) => ({
    name: getNameFromEducation(education),
    value: educationMap.get(education),
  }));

  const colors = ['#FFA600', '#FF6361', '#BC5090', '#58508D', '#003F5C'];

  return (
    <ContentBox title="Nível de Escolaridade" color="brand-blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <div className={styles.container}>
        <div className={styles.inner}>
          <ResponsiveContainer height={300} width="99%">
            <PieChart>
              <Legend
                height={60}
                verticalAlign="bottom"
                formatter={(value: string) => (
                  <span className={styles.subtitle}>{value}</span>
                )}
              />
              <Pie data={educationData} dataKey="value" nameKey="name">
                {educationData.map((ed, index) => (
                  <Cell key={ed.name} fill={colors[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </ContentBox>
  );
}
