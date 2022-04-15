import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import { dataChartjs } from "../../consts/";
import { getDataGraph } from "../../helpers/";

defaults.global.animation = false;
defaults.global.maintainAspectRatio = false;

export default function Graph({ dataYear }) {
  let data = getDataGraph(dataChartjs, dataYear);

  return (
    <div className="mb-5 canvas-container">
      <Bar
        data={data}
        options={{
          scales: {
            yAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                stacked: true,
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
