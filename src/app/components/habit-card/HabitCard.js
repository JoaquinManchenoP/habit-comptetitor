import React from "react";
import HeatMap from "../heat-map/HeatMap";
import HabitTimeline from "../habit-timeline/HabitTimeline";

export default function HabitCard({
  activityData,
  startDate,
  endDate,
  values,
}) {
  return (
    <div className="h-[450px] w-1/2 bg-green-500">
      <div className="h-1/3 w-full bg-green-500"></div>
      <div className="h-1/3 w-full bg-blue-500 flex items-center justify-center">
        <div className="heat-map-container h-[145px] w-full bg-orange-600 mt-2 ">
          <HeatMap values={values} startDate={startDate} endDate={endDate} />
        </div>
      </div>
      <div className="h-1/3 w-full bg-red-500">
        <HabitTimeline activityData={activityData} />c
      </div>
    </div>
  );
}
