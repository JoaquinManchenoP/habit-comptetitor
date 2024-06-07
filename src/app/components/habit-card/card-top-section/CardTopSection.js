import React, { useState } from "react";
import {
  parseISO,
  isSameDay,
  subDays,
  differenceInDays,
  format,
  subMonths,
} from "date-fns";

export default function CardTopSection({ activityData }) {
  const [checkInBox, setCheckInBox] = useState(false);
  const [valueMenu, setValueMenu] = useState(false);

  const handleCheckBoxchange = () => {
    setCheckInBox(!checkInBox);
    if (checkInBox) {
      setValueMenu(false);
    } else {
      setValueMenu(true);
    }
  };

  const handleValueMenu = () => {
    setValueMenu(!valueMenu);
  };

  const handleUserInput = (value) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    const checkedHabit = { date: formattedDate, count: value };
    console.log("checkedHabit", checkedHabit);
  };

  //Determine the day streak of user
  const getStreak = (activityData) => {
    const today = new Date();
    let streak = 0;

    // Sort the data in ascending order
    const sortedData = activityData
      .map((item) => ({
        ...item,
        date: parseISO(item.date),
      }))
      .sort((a, b) => a.date - b.date);

    // Find the index of today's date in sortedData
    const todayIndex = sortedData.findIndex((item) =>
      isSameDay(item.date, today)
    );

    // Start checking for streaks from today's index and go backwards
    for (let i = todayIndex; i >= 0; i--) {
      const currentDate = sortedData[i].date;

      // If the date is the same as today minus streak days, increase streak
      if (isSameDay(currentDate, subDays(today, streak))) {
        streak++;
      } else {
        // If dates are not consecutive, break the loop
        break;
      }
    }

    return streak;
  };

  //Determine the score of user
  const calculateScore = (activityData) => {
    // Get today's date and six months ago
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);

    // Calculate the number of days between today and six months ago
    const daysInRange = Math.floor(
      (today - sixMonthsAgo) / (1000 * 60 * 60 * 24)
    );

    // Calculate the total possible count if there were counts for each day
    const totalPossibleCount = daysInRange * 3; // Assuming 3 is the max count per day

    // Calculate the actual count from the provided activity data
    const actualCount = activityData.reduce(
      (total, item) => total + item.count,
      0
    );

    // Calculate the score as a percentage
    let score = (actualCount / totalPossibleCount) * 100;

    // Ensure the score is between 0 and 100
    score = Math.min(Math.max(score, 0), 100);

    // Round the score
    return Math.round(score);
  };

  // Calculate the consistency percentage
  const calculateConsistency = (activityData) => {
    const today = new Date();
    const sixMonthsAgo = subMonths(today, 6); // Exactly 6 months ago

    const numDays = differenceInDays(today, sixMonthsAgo) + 1; // Total days in range

    // Create a set of unique dates in the activityData
    const uniqueDates = new Set(
      activityData.map((item) => format(parseISO(item.date), "yyyy-MM-dd"))
    );

    // Calculate the consistency percentage
    const consistencyPercent = (uniqueDates.size / numDays) * 100;

    return Math.floor(consistencyPercent); // Round to the nearest whole number
  };

  console.log("consistency", calculateConsistency(activityData));

  return (
    <div className="delete-button">
      <div className="w-[450px] h-[100px] flex mx-3 ">
        <div className="check-in h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[60px] w-[95px] bg-gray-100 rounded-lg shadow-lg">
            <div className="main-streak-content h-4/6 w-full flex items-center justify-center">
              <div className="form-control">
                <label className="cursor-pointer label">
                  <input
                    type="checkbox"
                    checked={checkInBox}
                    onChange={handleCheckBoxchange}
                    className="checkbox checkbox-warning h-7 w-7"
                  />
                </label>
              </div>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Check-in</span>
            </div>
          </div>
          {valueMenu && (
            <div className="flex-none" onClick={handleValueMenu}>
              <div className="dropdown dropdown-end dropdown-open">
                <ul
                  tabIndex="0"
                  className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-28 mr-5 mt-1"
                >
                  <li onClick={() => handleUserInput(1)}>
                    <a>Started</a>
                  </li>
                  <li onClick={() => handleUserInput(2)}>
                    <a>Halfway</a>
                  </li>
                  <li onClick={() => handleUserInput(3)}>
                    <a>Completed!</a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="streak-container h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[60px] w-[95px] bg-gray-100 rounded-xl shadow-lg">
            <div className="main-streak-content h-4/6 w-full flex items-center justify-center">
              <span className="text-2xl">{getStreak(activityData)}</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Streak</span>
            </div>
          </div>
        </div>
        <div className="streak-container h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[55px] w-[95px] bg-gray-100 rounded-lg shadow-lg">
            <div className="main-streak-content h-4/6 w-full flex items-center justify-center">
              <span className="text-2xl">{calculateScore(activityData)}</span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Score</span>
            </div>
          </div>
        </div>
        <div className="streak-container h-full w-1/4 flex items-center justify-center">
          <div className="streak-content h-[60px] w-[95px] bg-gray-100 rounded-xl shadow-lg">
            <div className="main-streak-content h-4/6 w-full flex items-center justify-center">
              <span className="text-2xl">
                {calculateConsistency(activityData)}
              </span>
            </div>
            <div className="streak-details flex items-centery justify-center">
              <span className="text-sm">Consistency</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
