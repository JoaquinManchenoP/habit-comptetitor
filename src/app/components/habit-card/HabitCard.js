import React, { useState } from "react";
import HeatMap from "../heat-map/HeatMap";
import HabitTimeline from "../habit-timeline/HabitTimeline";
import CardTopSection from "./card-top-section/CardTopSection";

export default function HabitCard({ activityData, startDate, endDate }) {
  return (
    <>
      <div className="bg-white mb-6 pb-2 w-[520px] card shadow-xl rounded-lg ">
        <div className="delete-habit w-full relative ">
          <div className="habit-title h-20 w-full bg-purple-400">
            <div className="title">this is the habit</div>
            <div className="habit-description">
              this is the habit description
            </div>
          </div>
          <button className="h-10 w-10 rounded-full bg-red-500 absolute -right-3 -top-3 shadow-xl">
            <span className="text-black">X</span>
          </button>
        </div>
        <div className="top-section h-[100px] w-full flex items-center justify-center">
          <CardTopSection activityData={activityData} />
        </div>

        <div className="h-[1/3] w-full flex items-center justify-center mt-3">
          <div className="heat-map-container h-[130px] w-full ">
            <HeatMap
              activityData={activityData}
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <div className="bg-green-500 w-full flex flex-col items-center overflow-y-auto space-y-2 mt-8">
          <div className="progress h-5 w-full bg-gray-200 rounded-none flex items-center">
            <span className="text-sm pl-3">30 Day Progress</span>
          </div>
          <HabitTimeline activityData={activityData} />
          <HabitTimeline activityData={activityData} />
          <HabitTimeline activityData={activityData} />
          {/* <HabitTimeline activityData={activityData} />
        <HabitTimeline activityData={activityData} /> */}
        </div>
      </div>
    </>
  );
}
