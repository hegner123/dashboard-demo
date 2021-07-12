import { Chart } from "react-charts";
import React from "react";

function MyChart() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 1],
          [2, 4],
          [3, 1],
          [4, 8],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 2],
          [1, 1],
          [2, 6],
          [3, 1],
          [4, 1],
        ],
      },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      type: "area",
    }),
    []
  );
  const axes = React.useMemo(
    () => [
      { primary: true, position: "bottom", type: "linear", show: false },
      { position: "left", type: "linear", stacked: true, show: true },
    ],
    []
  );

  return (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "100%",
        height: "100px",
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  );
}

export default function Activity(props) {
  return (
    <div>
      <MyChart />
    </div>
  );
}
