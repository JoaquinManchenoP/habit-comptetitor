"use client";
import React, { useState, useEffect } from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import { subMonths } from "date-fns";
import HabitCard from "@/app/components/habit-card/HabitCard";
import DropDownMenu from "@/app/components/drop-down-menu/DropDownMenu";

const activityData = [
  { date: "2024-01-2", count: 2 },
  { date: "2024-01-10", count: 1 },
  { date: "2024-01-27", count: 8 },
  { date: "2024-04-28", count: 5 },
  { date: "2024-04-27", count: 5 },
  { date: "2024-04-26", count: 5 },
  { date: "2024-05-14", count: 5 },
  { date: "2024-05-15", count: 5 },
  { date: "2024-05-16", count: 5 },
  { date: "2024-05-17", count: 5 },
  { date: "2024-05-18", count: 5 },
  { date: "2024-05-19", count: 5 },
  { date: "2024-05-25", count: 5 },
  // More data...
];

export default function page() {
  const breakpoints = {
    md: 1149,
  };
  const { selectedOption } = useGlobalState();
  const [smallScreen, setSmallScreen] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setSmallScreen(window.innerWidth <= breakpoints.md);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (smallScreen === null) {
    return (
      <div className="home-page h-full w-full flex items-center justify-center xs:flex-col sm:flex-col md:flex-col lg:flex-row ">
        <div className="loading loading-spinner text-warning h-12 w-12"></div>
      </div>
    );
  }

  const startAndEndDate = {
    startDate: subMonths(new Date(), 6),
    endDate: new Date(),
  };

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
              <div className="habit-card-container flex justify-center xs:flex-col sm:flex-col md:flex-row md:space-x-2 lg:flex-row lg:space-x-6 xs:items-center  ">
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
