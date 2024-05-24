import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { format } from "date-fns";
import { parseISO } from "date-fns";

export default function HeatMap({ values, startDate, endDate }) {
  const getColorForValue = (value) => {
    if (!value) {
      return "heatmap-empty";
    }
    switch (true) {
      case value.count >= 5:
        return "heatmap-scale-4";
      case value.count >= 4:
        return "heatmap-scale-3";
      case value.count >= 3:
        return "heatmap-scale-2";
      case value.count >= 2:
        return "heatmap-scale-1";
      default:
        return "heatmap-scale-0";
    }
  };
  const weekdayLabels = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className=" mr-8">
      <CalendarHeatmap
        startDate={startDate}
        endDate={endDate}
        values={values}
        classForValue={(value) => getColorForValue(value)}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip":
              value && value.date && value.date.length === 10
                ? `${format(parseISO(value.date), "yyyy-MM-dd")}: ${
                    value.count ? value.count : 0
                  } activities`
                : "No data",
          };
        }}
        weekdayLabels={weekdayLabels}
        showWeekdayLabels
        gutterSize={1} //Space between cells of the heatmap
        transformDayElement={(rect, value) =>
          React.cloneElement(rect, {
            // how round the cells are
            rx: 2,
            ry: 2,
            className: `${rect.props.className} m-1`,
            style: {
              width: "9.5px", // Adjust the width
              height: "9.5px",
            },
          })
        }
      />
    </div>
  );
}
