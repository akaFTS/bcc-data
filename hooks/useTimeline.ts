import { timeline } from "~/data/course/timeline.ts";
import { YearEntry } from "~/types/course.ts";

export default function useTimeline(): YearEntry[] {
  const yearEntries: YearEntry[] = [];
  timeline.map((record) => {
    const candidateEntry = yearEntries.find((yearEntry) =>
      yearEntry.year === record.year
    );
    if (typeof candidateEntry !== "undefined") {
      candidateEntry.records.push(record);
    } else {
      yearEntries.push({ year: record.year, records: [record] });
    }
  });

  return yearEntries;
}
