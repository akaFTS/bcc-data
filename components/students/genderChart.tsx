import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "https://esm.sh/recharts@2.1.2?bundle";
import { YearGraduates } from "~/types/students.ts";

type Props = {
  graduatesByYear: YearGraduates[];
};

export default function GenderChart({ graduatesByYear }: Props) {
  return (
    <ResponsiveContainer height={400} width="100%">
      <AreaChart data={graduatesByYear}>
        <XAxis
          dataKey="year"
          minTickGap={20}
          interval="preserveStartEnd"
        />
        <YAxis width={40} />
        <CartesianGrid strokeDasharray="3 3" />
        <Area
          type="monotone"
          dataKey="females"
          stroke="#ff6385"
          strokeWidth={2}
          fill="#ff6385"
          fillOpacity={0.4}
        />
        <Area
          type="monotone"
          dataKey="males"
          stroke="#36a3eb"
          strokeWidth={2}
          fill="#36a3eb"
          fillOpacity={0.4}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
