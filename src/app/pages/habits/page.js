"use client";
import React, { useState, useEffect } from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";
import { subMonths } from "date-fns";
import HabitCard from "@/app/components/habit-card/HabitCard";
import DropDownMenu from "@/app/components/drop-down-menu/DropDownMenu";

const activityData = [
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
  { date: "2024-05-16", count: 3 },
  { date: "2024-05-15", count: 3 },
  { date: "2024-05-14", count: 3 },
  { date: "2024-05-13", count: 3 },
  { date: "2024-05-12", count: 3 },
  { date: "2024-05-11", count: 3 },
  { date: "2024-05-10", count: 3 },
  { date: "2024-05-09", count: 3 },
  { date: "2024-05-08", count: 3 },
  { date: "2024-05-07", count: 3 },
  { date: "2024-05-06", count: 3 },
  { date: "2024-05-05", count: 3 },
  { date: "2024-05-04", count: 3 },
  { date: "2024-05-03", count: 3 },
  { date: "2024-05-02", count: 3 },
  { date: "2024-05-01", count: 3 },
  { date: "2024-03-27", count: 3 },
  { date: "2024-03-26", count: 3 },
  { date: "2024-03-25", count: 3 },
  { date: "2024-03-24", count: 3 },
  { date: "2024-03-23", count: 3 },
  { date: "2024-03-22", count: 3 },
  { date: "2024-03-21", count: 3 },
  { date: "2024-03-20", count: 3 },
  { date: "2024-03-19", count: 3 },
  { date: "2024-03-18", count: 3 },
  { date: "2024-03-17", count: 3 },
  { date: "2024-03-16", count: 3 },
  { date: "2024-03-15", count: 3 },
  { date: "2024-03-14", count: 3 },
  { date: "2024-03-13", count: 3 },
  { date: "2024-03-12", count: 3 },
  { date: "2024-03-11", count: 3 },
  { date: "2024-03-10", count: 3 },
  { date: "2024-03-09", count: 3 },
  { date: "2024-03-08", count: 3 },
  { date: "2024-03-07", count: 3 },
  { date: "2024-03-06", count: 3 },
  { date: "2024-03-05", count: 3 },
  { date: "2024-03-03", count: 3 },
  { date: "2024-03-03", count: 3 },
  { date: "2024-03-02", count: 3 },
  { date: "2024-03-01", count: 3 },
  { date: "2024-03-27", count: 3 },
  { date: "2024-03-26", count: 3 },
  { date: "2024-03-25", count: 3 },
  { date: "2024-03-24", count: 3 },
  { date: "2024-03-23", count: 3 },
  { date: "2024-03-22", count: 3 },
  { date: "2024-03-21", count: 3 },
  { date: "2024-03-20", count: 3 },
  { date: "2024-03-19", count: 3 },
  { date: "2024-03-18", count: 3 },
  { date: "2024-03-17", count: 3 },
  { date: "2024-03-16", count: 3 },
  { date: "2024-03-15", count: 3 },
  { date: "2024-03-14", count: 3 },
  { date: "2024-03-13", count: 3 },
  { date: "2024-03-12", count: 3 },
  { date: "2024-03-11", count: 3 },
  { date: "2024-03-10", count: 3 },
  { date: "2024-03-09", count: 3 },
  { date: "2024-03-08", count: 3 },
  { date: "2024-03-07", count: 3 },
  { date: "2024-03-06", count: 3 },
  { date: "2024-03-05", count: 3 },
  { date: "2024-03-04", count: 3 },
  { date: "2024-03-03", count: 3 },
  { date: "2024-03-02", count: 3 },
  { date: "2024-03-01", count: 3 },
  { date: "2024-02-02", count: 3 },
  { date: "2024-02-01", count: 3 },
  { date: "2024-02-27", count: 3 },
  { date: "2024-02-26", count: 3 },
  { date: "2024-02-25", count: 3 },
  { date: "2024-02-24", count: 3 },
  { date: "2024-02-23", count: 3 },
  { date: "2024-02-22", count: 3 },
  { date: "2024-02-21", count: 3 },
  { date: "2024-02-20", count: 3 },
  { date: "2024-02-19", count: 3 },
  { date: "2024-02-18", count: 3 },
  { date: "2024-02-17", count: 3 },
  { date: "2024-02-16", count: 3 },
  { date: "2024-02-15", count: 3 },
  { date: "2024-02-14", count: 3 },
  { date: "2024-02-13", count: 3 },
  { date: "2024-02-12", count: 3 },
  { date: "2024-02-11", count: 3 },
  { date: "2024-02-10", count: 3 },
  { date: "2024-02-09", count: 3 },
  { date: "2024-02-08", count: 3 },
  { date: "2024-02-07", count: 3 },
  { date: "2024-02-06", count: 3 },
  { date: "2024-02-05", count: 3 },
  { date: "2024-02-04", count: 3 },
  { date: "2024-02-03", count: 3 },
  { date: "2024-02-02", count: 3 },
  { date: "2024-02-01", count: 3 },
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
        <div className="h-[800px] w-fullflex">
          {selectedOption === 1 && (
            <div className="habit-card h-full w-full bg-gray-100 mt-2">
              <div className="habit-card-container grid grid-cols-1 md:grid-cols-2  gap-x-3  ">
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
