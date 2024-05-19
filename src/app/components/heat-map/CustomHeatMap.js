import React from "react";

const CustomHeatmap = ({ startDate, endDate, activityData }) => {
  // Function to generate heatmap cells
  const renderCells = () => {
    const cells = [];
    let currentDate = new Date(startDate);

    // Loop through each day between startDate and endDate
    while (currentDate <= endDate) {
      const dateString = currentDate.toISOString().split("T")[0];
      const count = activityData[dateString]
        ? activityData[dateString].count
        : 0;

      // Determine color class based on count
      let colorClass;
      if (count <= 2) {
        colorClass = "bg-orange-200"; // Custom color class for low count
      } else if (count <= 5) {
        colorClass = "bg-orange-400"; // Custom color class for medium count
      } else {
        colorClass = "bg-orange-600"; // Custom color class for high count
      }

      // Add cell to cells array
      cells.push(
        <div
          key={dateString}
          className={`w-8 h-8 ${colorClass} rounded-full`}
        ></div>
      );

      // Move to the next day
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return cells;
  };

  return (
    <div className="overflow-x-auto">
      <div className="flex">{renderCells()}</div>
    </div>
  );
};

export default CustomHeatmap;
