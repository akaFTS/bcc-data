import React from "react";
import Propposal from "~/components/information/propposal.tsx";
import Schedule from "~/components/information/schedule.tsx";
import Evolution from "~/components/information/evolution.tsx";
import Sources from "~/components/information/sources.tsx";

export default function TCC() {
  return (
    <main>
      <div className="flex flex-wrap">
        <div className="w-100 w-50-l ph2">
          <Propposal />
          <Evolution />
        </div>
        <div className="w-100 w-50-l ph2">
          <Schedule />
          <Sources />
        </div>
      </div>
    </main>
  );
}
