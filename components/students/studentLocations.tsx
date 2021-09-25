import React from "react";
import ContentBox from "../layout/contentBox.tsx";
import StudentDataPicker from "./studentDataPicker.tsx";
import WorldMap from "./worldMap.tsx";
import useStudents from "~/hooks/useStudents.ts";
import { Epoch, Student } from "~/types/students.ts";

function countCities(data: Student[]): Map<string, number> {
  const citiesCount = new Map<string, number>();
  data.forEach((student) => {
    const city = citiesCount.get(student.location) ?? 0;
    citiesCount.set(student.location, city + 1);
  });

  return citiesCount;
}

type Props = {
  currentSelection: Epoch;
  onEpochSelected: (epoch: Epoch) => void;
};

export default function StudentLocations({
  currentSelection,
  onEpochSelected,
}: Props) {
  const studentData = useStudents(currentSelection);
  const citiesCount = countCities(studentData);

  return (
    <ContentBox title="Localização Atual" color="blue">
      <StudentDataPicker
        currentSelection={currentSelection}
        onEpochSelected={onEpochSelected}
      />
      <WorldMap citiesCount={citiesCount} />
    </ContentBox>
  );
}
