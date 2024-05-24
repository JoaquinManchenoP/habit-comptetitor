"use client";
import React, { useState, useEffect } from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import { subMonths } from "date-fns";
import HabitCard from "@/app/components/habit-card/HabitCard";
import DropDownMenu from "@/app/components/drop-down-menu/DropDownMenu";
import useWindowSize from "@/app/custom-hooks/useWindowSize";

const activityData = [
  { date: "2024-01-2", count: 2 },
  { date: "2024-01-10", count: 1 },
  { date: "2024-01-27", count: 8 },
  { date: "2024-03-10", count: 5 },
  { date: "2024-03-11", count: 1 },
  { date: "2024-03-12", count: 1 },
  { date: "2024-03-13", count: 1 },
  { date: "2024-03-14", count: 1 },
  { date: "2024-03-15", count: 1 },
  { date: "2024-03-16", count: 1 },
  { date: "2024-03-17", count: 1 },
  { date: "2024-03-18", count: 1 },
  { date: "2024-03-19", count: 1 },
  { date: "2024-03-20", count: 1 },
  { date: "2024-04-11", count: 1 },
  { date: "2024-04-12", count: 1 },
  { date: "2024-04-13", count: 1 },
  { date: "2024-04-14", count: 1 },
  { date: "2024-04-15", count: 1 },
  { date: "2024-04-16", count: 1 },
  { date: "2024-04-17", count: 1 },
  { date: "2024-04-18", count: 1 },
  { date: "2024-04-19", count: 1 },
  { date: "2024-04-20", count: 1 },
  // More data...
];

const breakpoints = {
  md: 1149,
};

export default function page() {
  const { width } = useWindowSize();
  const { selectedOption } = useGlobalState();
  const [smallScreen, setSmallScreen] = useState(false);

  const startAndEndDate = {
    startDate: subMonths(new Date(), 6),
    endDate: new Date(),
  };

  useEffect(() => {
    if (width <= breakpoints.md) {
      setSmallScreen(true);
    } else {
      setSmallScreen(false);
    }
  }, [width]);

  return (
    <div className="home-page h-full w-full flex xs:flex-col sm:flex-col md:flex-col lg:flex-row">
      {!smallScreen ? (
        <div className="menu">
          <HabitMenu />
        </div>
      ) : (
        <div className="dropdown-menu">
          <DropDownMenu />
        </div>
      )}
      <div className="content h-full w-full bg-blue-400">
        <div className="h-[800px] w-full bg-orange-400 flex">
          {selectedOption === 1 && (
            <div className="habit-card h-full w-full  bg-red-400 mt-8">
              <div className="habit-card-container flex justify-center xs:flex-col sm:flex-col md:flex-row md:space-x-10 lg:flex-row lg:space-x-10 xs:items-center  ">
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
          {selectedOption === 3 && <div>Challnges</div>}
          {selectedOption === 4 && <div>Plans</div>}
        </div>
      </div>
    </div>
  );
}
