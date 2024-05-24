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
    <div className="bg-blue-300 mb-10  pb-2 card shadow-xl rounded-lg ">
      <div className="w-[410px] h-[100px] flex ">
        <div className="streak-container h-full w-1/3 flex items-center justify-center">
          <div className="streak-content h-15 w-28 bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <span className="text-2xl">27</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Day Streak</span>
            </div>
          </div>
        </div>
        <div className="streak-container h-full w-1/3 flex items-center justify-center">
          <div className="streak-content h-15 w-28 bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <span className="text-2xl">45%</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Success score</span>
            </div>
          </div>
        </div>
        <div className="streak-container h-full w-1/3 flex items-center justify-center">
          <div className="streak-content h-15 w-28 bg-red-400">
            <div className="main-streak-content h-4/6 w-full bg-blue-400 flex items-center justify-center">
              <span className="text-2xl">45%</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Consistency</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1/3] w-[410px] flex items-center justify-center">
        <div className="heat-map-container h-[130px] w-full bg-orange-600 pt-2 ">
          <HeatMap values={values} startDate={startDate} endDate={endDate} />
        </div>
      </div>
      <div className="bg-green-500 w-[410px] flex flex-col items-center overflow-y-auto space-y-2 mt-2">
        <HabitTimeline activityData={activityData} />
        {/* <HabitTimeline activityData={activityData} />
        <HabitTimeline activityData={activityData} /> */}
      </div>
    </div>
  );
}
