"use client";
import React from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import Calendar from "@/app/components/tracker-calendar/Calendar";

const activityData = [
  { date: "2024-01-2", count: 2 },
  { date: "2024-01-10", count: 1 },
  // More data...
];

export default function page() {
  const { selectedOption } = useGlobalState();
  console.log(selectedOption);
  return (
    <div className="home-page h-full w-full flex">
      <HabitMenu />
      <div className="content h-full w-full bg-blue-400">
        <div className="h-[800px] w-9/12 bg-purple-400">
          {selectedOption === 1 && <Calendar activityData={activityData} />}
          {selectedOption === 2 && <div>Leaderboards</div>}
          {selectedOption === 3 && <div>Option</div>}
        </div>
      </div>
    </div>
  );
}
