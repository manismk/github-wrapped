import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';
import { useEffect, useRef, useState } from 'react';

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Weekly contribution chart',
      color: 'rgb(59, 55, 191)',
      font: {
        size: 16,
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: { maxTicksLimit: 3 },
      beginAtZero: true,
    },
  },
};

export const WeekWiseGraph = ({ weekData = {} }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      labels,
      datasets: [
        {
          backgroundColor: 'rgb(59, 55, 191',
          fill: true,
          data: Object.values(weekData),
          barPercentage: 0.4,
          borderRadius: 4,
        },
      ],
    };

    setChartData(chartData);
  }, []);

  return (
    <>
      <Bar
        height="180"
        width="320px"
        ref={chartRef}
        options={options}
        data={chartData}
      />
    </>
  );
};
