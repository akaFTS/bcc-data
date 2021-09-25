import React from "react";
import ContentBox from "~/components/layout/contentBox.tsx";
import TimelineYear from "./timelineYear.tsx";
import useTimeline from "~/hooks/useTimeline.ts";

export default function Timeline() {
  const timelineYears = useTimeline();

  return (
    <ContentBox title="Timeline" color="purple">
      <div role="list">
        {timelineYears.map((
          yearEntry,
        ) => <TimelineYear entry={yearEntry} key={yearEntry.year} />)}
      </div>
    </ContentBox>
  );
}
