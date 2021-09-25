import React from "react";
import TimelineRecord from "./timelineRecord.tsx";
import { YearEntry } from "~/types/course.ts";

type Props = {
  entry: YearEntry;
};

export default function TimelineYear({ entry }: Props) {
  return (
    <div className="flex flex-column items-start">
      <div className="flex flex-column justify-center items-center mh2">
        <div className="bl br b--light-gray h1 flex-none" />
        <div
          className="white w3 tc fw6 bg-mt-purple ph2 pv1 br-pill"
          role="listitem"
        >
          {entry.year}
        </div>
        <div className="bl br b--light-gray h1 flex-none" />
      </div>
      {entry.records.map((
        record,
      ) => <TimelineRecord key={record.text} record={record} />)}
    </div>
  );
}
