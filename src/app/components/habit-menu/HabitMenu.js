"use client";
import React, { useState } from "react";
import { useGlobalState } from "@/app/context/GlobalContext";

export default function HabitMenu() {
  const { setSelectedOption } = useGlobalState();

  return (
    <div className="habit-menu h-3/6  w-[185px] bg-orange-400 space-y-2  ">
      <button
        className="btn btn-ghost w-full"
        onClick={() => setSelectedOption(1)}
      >
        Your habits
      </button>
      <button
        className="btn btn-ghost w-full"
        onClick={() => setSelectedOption(2)}
      >
        Leaderboards
      </button>
      <button
        className="btn btn-ghost w-full"
        onClick={() => setSelectedOption(3)}
      >
        Option
      </button>
    </div>
  );
}
