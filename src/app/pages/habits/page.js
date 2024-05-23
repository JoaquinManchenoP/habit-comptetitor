"use client";
import React from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import { subMonths } from "date-fns";
import HabitCard from "@/app/components/habit-card/HabitCard";

const activityData = [
  { date: "2024-01-2", count: 2 },
  { date: "2024-01-10", count: 1 },
  { date: "2024-01-27", count: 8 },
  { date: "2024-03-10", count: 5 },
  { date: "2024-03-12", count: 5 },
  { date: "2024-03-11", count: 5 },
  { date: "2024-03-14", count: 5 },
  { date: "2024-03-16", count: 5 },
  { date: "2024-03-17", count: 5 },
  { date: "2024-03-18", count: 5 },
  { date: "2024-04-10", count: 5 },
  { date: "2024-04-12", count: 5 },
  { date: "2024-04-11", count: 5 },
  { date: "2024-04-14", count: 5 },
  { date: "2024-04-16", count: 5 },
  { date: "2024-04-17", count: 5 },
  { date: "2024-04-18", count: 5 },
  { date: "2024-05-23", count: 3 },
  // More data...
];
const startAndEndDate = {
  startDate: subMonths(new Date(), 6),
  endDate: new Date(),
};

export default function page() {
  const { selectedOption } = useGlobalState();
  console.log(selectedOption);
  return (
    <div className="home-page h-full w-full flex">
      <HabitMenu />
      <div className="content h-full w-full bg-blue-400">
        <div className="h-[800px] w-full bg-orange-400 flex">
          {selectedOption === 1 && (
            <div className="habit-card h-full w-full  bg-red-400">
              <div className="habit-card-container flex justify-center space-x-7">
                <HabitCard
                  activityData={activityData}
                  startDate={startAndEndDate.startDate}
                  endDate={startAndEndDate.endDate}
                  values={activityData}
                />
                <HabitCard
                  activityData={activityData}
                  startDate={startAndEndDate.startDate}
                  endDate={startAndEndDate.endDate}
                  values={activityData}
                />
              </div>
            </div>
          )}
          {selectedOption === 2 && <div>Leaderboards</div>}
          {selectedOption === 3 && <div>Option</div>}
        </div>
      </div>
    </div>
  );
}
