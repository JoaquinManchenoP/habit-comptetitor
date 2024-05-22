import React from "react";
import { parseISO, isAfter, subMonths, differenceInDays } from "date-fns";
import { motion } from "framer-motion";

export default function HabitTimeline({ activityData }) {
  const todaysDate = new Date();
  const threeMonthsAgo = subMonths(todaysDate, 3);

  // Calculate the number of days in the last three months
  const numDaysLastThreeMonths =
    differenceInDays(todaysDate, threeMonthsAgo) + 1;

  // Filter data to include only the last three months
  const filteredData = activityData.filter((item) => {
    const itemDate = parseISO(item.date);
    return isAfter(itemDate, threeMonthsAgo) && isAfter(todaysDate, itemDate);
  });

  // Calculate the count total within the last three months
  const actualCountTotal = filteredData.reduce(
    (total, item) => total + item.count,
    0
  );

  // Calculate total possible count within the last three months
  const totalPossibleCount = numDaysLastThreeMonths * 5;

  // Calculate the position percentage of the avatar
  const positionPercent = (actualCountTotal / totalPossibleCount) * 100;
  console.log("positionpercent", positionPercent);

  return (
    <div className="h-[150px] w-full relative bg-gray-100">
      <motion.div
        className="absolute top-10 transform -translate-y-1/2 h-8 w-8 bg-blue-500 rounded-full"
        style={{ left: `${positionPercent}%`, zIndex: 1 }} // Ensure the avatar is above the line
        initial={{ x: -65, y: 0 }}
        animate={{ x: 0, y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      />
      <div className="absolute w-full h-1 bg-gray-300 top-1/2 transform -translate-y-1/2" />
    </div>
  );
}
