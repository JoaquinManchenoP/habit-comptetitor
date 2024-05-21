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
    if (value.count >= 8) {
      return "heatmap-scale-4";
    } else if (value.count >= 6) {
      return "heatmap-scale-3";
    } else if (value.count >= 4) {
      return "heatmap-scale-2";
    } else if (value.count >= 2) {
      return "heatmap-scale-1";
    } else {
      return "heatmap-scale-0";
    }
  };

  return (
    <div className="p-4 m-4">
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
        showWeekdayLabels
        gutterSize={3} //Spae between cells of the calendar
        transformDayElement={(rect, value) =>
          React.cloneElement(rect, {
            // how round the cells are
            rx: 1,
            ry: 1,
            className: `${rect.props.className} m-1`,
          })
        }
      />
    </div>
  );
}
