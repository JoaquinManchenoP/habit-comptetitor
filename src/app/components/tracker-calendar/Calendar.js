import React from "react";
import ReactCalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

const Calendar = ({ activityData }) => {
  return (
    <div className="flex flex-col items-start">
      <ReactCalendarHeatmap
        startDate={new Date("2024-01-01")}
        endDate={new Date("2024-8-31")}
        values={activityData}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          // Generate a color class based on the count
          let colorClass;
          if (value.count <= 2) {
            colorClass = "color-gitlab-1";
          } else if (value.count <= 5) {
            colorClass = "color-github-5";
          } else {
            colorClass = "color-github-10";
          }
          return colorClass;
        }}
      />
    </div>
  );
};

export default Calendar;
