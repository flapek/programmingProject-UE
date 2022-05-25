import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { Price } from '../Types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  zoomPlugin,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    // zoom: {
    //   zoom: {
    //     wheel: {
    //       enabled: true,
    //     },
    //     pinch: {
    //       enabled: true,
    //     },
    //     mode: 'xy',
    //   },
    // },
  },
};

export default function Chart({ prices }: { prices: Price[] }) {
  const labels = prices.map((price) => price.Data.getUTCDate().toString());

  const data = {
    labels,
    datasets: [
      {
        data: prices.map((price) => price.Value),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  return (
    <React.Fragment>
      <Line options={options} data={data} />
    </React.Fragment>
  );
}
