import React from "react";
import {
  parseISO,
  isAfter,
  subMonths,
  differenceInDays,
  addDays,
  format,
} from "date-fns";
import { motion } from "framer-motion";

export default function HabitTimeline({ activityData }) {
  const todaysDate = new Date();
  const oneMonthAgo = subMonths(todaysDate, 1);

  // Calculate the number of days in the last month
  const numDaysOneMonthAgo = differenceInDays(todaysDate, oneMonthAgo) + 1;

  // Filter data to include only the month
  const filteredData = activityData.filter((item) => {
    const itemDate = parseISO(item.date);
    return isAfter(itemDate, oneMonthAgo) && isAfter(todaysDate, itemDate);
  });

  const middleDate = addDays(oneMonthAgo, Math.floor(numDaysOneMonthAgo / 2));

  // Calculate the count total within the last month
  const actualCountTotal = filteredData.reduce(
    (total, item) => total + item.count,
    0
  );

  // Calculate total possible count within the last month
  const totalPossibleCount = numDaysOneMonthAgo * 3;

  // Calculate the position percentage of the avatar
  const positionPercent = (actualCountTotal / totalPossibleCount) * 100;

  const formatCustomDate = (date) => format(date, "MMM") + " " + date.getDate();

  return (
    <div className="relative w-11/12">
      <div className="h-[35px] relative bg-gray-100 rounded-xl">
        <motion.div
          className="absolute top-0 transform -translate-y-1/2 w-8 bg-blue-500"
          style={{ left: `${positionPercent}%`, zIndex: 1 }}
          initial={{ x: -30, y: 0 }}
          animate={{ x: 0, y: 0 }}
          transition={{
            type: "spring",
            duration: 20,
            bounce: 0.4,
            stiffness: 20,
          }}
        >
          <img src="/images/black-dog.png" alt="Avatar" />
        </motion.div>
        <div className="time-line-bar-container w-full h-full flex justify-center">
          <div className="absolute w-11/12 h-[2px] bg-yellow-400 top-[22px] transform -translate-y-1/2" />
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div className="start-date">
          <span>{formatCustomDate(oneMonthAgo)}</span>
        </div>

        <div className="middle-date">
          <span className="text-center w-full">
            {formatCustomDate(middleDate)}
          </span>
        </div>
        <div className="end-date">
          <span>{formatCustomDate(todaysDate)}</span>
        </div>
      </div>
    </div>
  );
}
