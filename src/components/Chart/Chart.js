import React from "react";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const valueArray=props.dataPoints.map(dataPoint=>dataPoint.value);
  const totalMax=Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.value}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart
