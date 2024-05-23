import React, { useState } from "react";
import HeatMap from "../heat-map/HeatMap";
import HabitTimeline from "../habit-timeline/HabitTimeline";

export default function HabitCard({
  activityData,
  startDate,
  endDate,
  values,
}) {
  return (
    <div className="bg-blue-300 mb-10 pb-2 ">
      <div className="bg-red-500 w-[410px] h-[100px] "></div>

      <div className="h-[1/3] w-[410px] flex items-center justify-center">
        <div className="heat-map-container h-[130px] w-full bg-orange-600 pt-2 ">
          <HeatMap values={values} startDate={startDate} endDate={endDate} />
        </div>
      </div>
      <div className="bg-green-500 w-[410px] flex flex-col items-center overflow-y-auto space-y-2 mt-2">
        <HabitTimeline activityData={activityData} />
        <HabitTimeline activityData={activityData} />
        <HabitTimeline activityData={activityData} />
      </div>
    </div>
  );
}
