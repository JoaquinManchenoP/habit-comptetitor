"use client";
import React, { useState, useEffect } from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import { subMonths } from "date-fns";
import HabitCard from "@/app/components/habit-card/HabitCard";
import DropDownMenu from "@/app/components/drop-down-menu/DropDownMenu";

const activityData = [
  { date: "2024-05-27", count: 3 },
  { date: "2024-05-26", count: 1 },
  { date: "2024-05-25", count: 3 },
  { date: "2024-05-24", count: 2 },
  { date: "2024-05-23", count: 3 },
  { date: "2024-05-22", count: 1 },
  { date: "2024-05-25", count: 1 },
  { date: "2024-05-24", count: 2 },
  { date: "2024-05-23", count: 3 },
  { date: "2024-05-22", count: 2 },
];

export default function page() {
  const breakpoints = {
    md: 1350,
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
      <div className="content h-full w-full">
        <div className="h-[800px] w-full flex">
          {selectedOption === 1 && (
            <div className="habit-card h-full w-full  mt-2 ">
              <div className="habit-card-container grid grid-cols-1 md:grid-cols-2  gap-x-3 ">
                <div className="flex justify-center xs:flex-col sm:flex-col md:flex-row md:space-x-6 lg:flex-row lg:space-x-6 xs:items-center">
                  <HabitCard
                    activityData={activityData}
                    startDate={startAndEndDate.startDate}
                    endDate={startAndEndDate.endDate}
                    values={activityData}
                  />
                </div>
                <div className="flex justify-center xs:flex-col sm:flex-col md:flex-row md:space-x-6 lg:flex-row lg:space-x-6 xs:items-center">
                  <HabitCard
                    activityData={activityData}
                    startDate={startAndEndDate.startDate}
                    endDate={startAndEndDate.endDate}
                    values={activityData}
                  />
                </div>
                <div className="flex justify-center xs:flex-col sm:flex-col md:flex-row md:space-x-6 lg:flex-row lg:space-x-6 xs:items-center">
                  <HabitCard
                    activityData={activityData}
                    startDate={startAndEndDate.startDate}
                    endDate={startAndEndDate.endDate}
                    values={activityData}
                  />
                </div>
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
