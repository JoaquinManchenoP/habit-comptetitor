import React from "react";
import HeatMap from "../heat-map/HeatMap";

export default function HabitCard({
  activityData,
  startDate,
  endDate,
  values,
}) {
  return (
    <div className="h-[300px] w-1/2 bg-green-500">
      <HeatMap
        activityData={activityData}
        startDate={startDate}
        endDate={endDate}
        values={values}
      />
    </div>
  );
}
