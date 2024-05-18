"use client";
import React from "react";
import HabitMenu from "@/app/components/habit-menu/HabitMenu";
import { useGlobalState } from "@/app/context/GlobalContext";

export default function page() {
  const { selectedOption } = useGlobalState();
  console.log(selectedOption);
  return (
    <div className="home-page h-full w-full flex">
      <HabitMenu />
      <div className="content h-[100px] w-[100px] bg-blue-400">
        {selectedOption === 1 && <div>Your habits</div>}
        {selectedOption === 2 && <div>Leaderboards</div>}
        {selectedOption === 3 && <div>Option</div>}
      </div>
    </div>
  );
}
