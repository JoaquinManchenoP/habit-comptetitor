import React, { useState } from "react";
import HeatMap from "../heat-map/HeatMap";
import HabitTimeline from "../habit-timeline/HabitTimeline";
import CardTopSection from "./card-top-section/CardTopSection";

export default function HabitCard({ activityData, startDate, endDate }) {
  return (
    <>
      <div className="bg-white mb-5 pb-2 w-[520px] card shadow-xl rounded-lg font-sans ">
        <div className="delete-habit w-full relative ">
          <div className="habit-title h-[75px] w-full  flex flex-col justify-center  pl-5 space-y-2 mt-4">
            <div className="title text-2xl w-2/5  ">
              <span>habit title</span>
            </div>
            <div className="habit-description text-xs w-2/5">
              <span>This is the habbit desc</span>
            </div>
          </div>
          <button className="h-10 w-10 rounded-full bg-red-500 absolute -right-3 -top-3 shadow-xl flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
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
        <div className="w-full flex flex-col items-center  mt-8">
          <div className="progress h-5 w-full rounded-none flex items-center">
            <span className="text-sm pl-3 ">30 Day Progress</span>
          </div>
          <div className="timeline flex w-full flex-col items-center space-y-2 overflow-y-auto mt-5">
            <HabitTimeline activityData={activityData} />
            <HabitTimeline activityData={activityData} />
            <HabitTimeline activityData={activityData} />
            {/* <HabitTimeline activityData={activityData} />
        <HabitTimeline activityData={activityData} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
