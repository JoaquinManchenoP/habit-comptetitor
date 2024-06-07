"use client";
import React, { useState, useEffect } from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import { subMonths } from "date-fns";
import HabitCard from "@/app/components/habit-card/HabitCard";
import DropDownMenu from "@/app/components/drop-down-menu/DropDownMenu";

const activityData = [
  { date: "2024-06-05", count: 2 },
  { date: "2024-06-04", count: 2 },
  { date: "2024-06-03", count: 2 },
  { date: "2024-06-02", count: 2 },
  { date: "2024-06-01", count: 2 },
  { date: "2024-05-31", count: 2 },
  { date: "2024-05-30", count: 2 },
  { date: "2024-05-29", count: 3 },
  { date: "2024-05-28", count: 3 },
  { date: "2024-05-27", count: 3 },
  { date: "2024-05-26", count: 3 },
  { date: "2024-05-25", count: 3 },
  { date: "2024-05-24", count: 3 },
  { date: "2024-05-23", count: 3 },
  { date: "2024-05-22", count: 3 },
  { date: "2024-05-21", count: 3 },
  { date: "2024-05-20", count: 3 },
  { date: "2024-05-19", count: 3 },
  { date: "2024-05-18", count: 3 },
  { date: "2024-05-17", count: 3 },
  { date: "2024-05-16", count: 2 },
  { date: "2024-05-15", count: 2 },
  { date: "2024-05-14", count: 2 },
  { date: "2024-05-13", count: 2 },
  { date: "2024-05-12", count: 2 },
  { date: "2024-05-11", count: 2 },
  { date: "2024-05-10", count: 2 },
  { date: "2024-05-09", count: 1 },
  { date: "2024-05-08", count: 1 },
  { date: "2024-05-07", count: 1 },
  { date: "2024-05-06", count: 1 },
  { date: "2024-05-05", count: 1 },
  { date: "2024-05-04", count: 1 },
  { date: "2024-05-03", count: 1 },
  { date: "2024-05-02", count: 1 },
  { date: "2024-05-01", count: 1 },
  { date: "2024-04-30", count: 1 },
  { date: "2024-04-29", count: 1 },
  { date: "2024-04-28", count: 1 },
  { date: "2024-04-27", count: 1 },
  { date: "2024-04-26", count: 1 },
  { date: "2024-04-25", count: 1 },
  { date: "2024-04-24", count: 1 },
  { date: "2024-04-23", count: 1 },
  { date: "2024-04-22", count: 1 },
  { date: "2024-04-21", count: 1 },
  { date: "2024-04-20", count: 1 },
  { date: "2024-04-19", count: 1 },
  { date: "2024-04-18", count: 1 },
  { date: "2024-04-17", count: 1 },
  { date: "2024-04-16", count: 1 },
  { date: "2024-04-15", count: 1 },
  { date: "2024-04-14", count: 1 },
  { date: "2024-04-13", count: 1 },
  { date: "2024-04-12", count: 1 },
  { date: "2024-04-11", count: 1 },
  { date: "2024-04-10", count: 1 },
  { date: "2024-04-09", count: 1 },
  { date: "2024-04-08", count: 1 },
  { date: "2024-04-07", count: 1 },
  { date: "2024-04-06", count: 1 },
  { date: "2024-04-05", count: 1 },
  { date: "2024-04-04", count: 1 },
  { date: "2024-04-03", count: 1 },
  { date: "2024-04-02", count: 1 },
  { date: "2024-04-01", count: 1 },
  { date: "2024-03-31", count: 1 },
  { date: "2024-03-30", count: 1 },
  { date: "2024-03-29", count: 1 },
  { date: "2024-03-28", count: 1 },
  { date: "2024-03-27", count: 1 },
  { date: "2024-03-26", count: 1 },
  { date: "2024-03-25", count: 1 },
  { date: "2024-03-24", count: 1 },
  { date: "2024-03-23", count: 1 },
  { date: "2024-03-22", count: 1 },
  { date: "2024-03-21", count: 1 },
  { date: "2024-03-20", count: 1 },
  { date: "2024-03-19", count: 1 },
  { date: "2024-03-18", count: 1 },
  { date: "2024-03-17", count: 1 },
  { date: "2024-03-16", count: 1 },
  { date: "2024-03-15", count: 1 },
  { date: "2024-03-14", count: 1 },
  { date: "2024-03-13", count: 1 },
  { date: "2024-03-12", count: 1 },
  { date: "2024-03-11", count: 1 },
  { date: "2024-03-10", count: 1 },
  { date: "2024-03-09", count: 1 },
  { date: "2024-03-08", count: 1 },
  { date: "2024-03-07", count: 1 },
  { date: "2024-03-06", count: 1 },
  { date: "2024-03-05", count: 1 },
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
              <div className="habit-card-container grid grid-cols-1 md:grid-cols-2  gap-x-2 ">
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
          {selectedOption === 2 && <div>Challnges</div>}
          {selectedOption === 4 && <div>Plans</div>}
        </div>
      </div>
    </div>
  );
}
