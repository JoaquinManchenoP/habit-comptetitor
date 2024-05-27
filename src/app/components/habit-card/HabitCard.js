import React, { useState } from "react";
import HeatMap from "../heat-map/HeatMap";
import HabitTimeline from "../habit-timeline/HabitTimeline";
import CardTopSection from "./card-top-section/CardTopSection";

export default function HabitCard({
  activityData,
  startDate,
  endDate,
  values,
}) {
  return (
    <>
      <div className="bg-blue-300 mb-10  pb-2 card shadow-xl rounded-lg ">
        <div className="delete-habit w-full relative">
          <button className="h-8 w-8 bg-red-500 rounded-full absolute -right-2 -top-2 shadow-xl">
            <span className="text-black">X</span>
          </button>
        </div>
        <CardTopSection />
        <div className="h-[1/3] w-full flex items-center justify-center">
          <div className="heat-map-container h-[130px] w-full bg-orange-600 ">
            <HeatMap values={values} startDate={startDate} endDate={endDate} />
          </div>
        </div>
        <div className="progress h-5 w-full bg-gray-200 rounded-none flex items-center">
          <span className="text-sm pl-3">30 Day Progress</span>
        </div>

        <div className="bg-green-500 w-full flex flex-col items-center overflow-y-auto space-y-2 mt-1">
          <HabitTimeline activityData={activityData} />
          <HabitTimeline activityData={activityData} />
          {/* <HabitTimeline activityData={activityData} />
        <HabitTimeline activityData={activityData} /> */}
        </div>
      </div>
    </>
  );
}
