import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
  Chart,
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
      text: 'Monthly contribution chart',
      color: 'rgb(59, 55, 191)',
      font: {
        size: 16,
      },
    },
  },
  elements: { line: { tension: 0.5 }, point: { radius: 2 } },
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
      ticks: { maxTicksLimit: 5 },
      beginAtZero: true,
    },
  },
};

function createGradient(ctx, area) {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  gradient.addColorStop(1, 'rgba(51, 102, 255, 1');
  gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');

  return gradient;
}

export const MonthWiseGraph = ({ monthData = {} }) => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({ datasets: [] });
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      labels,
      datasets: [
        {
          backgroundColor: createGradient(chart.ctx, chart.chartArea),
          fill: true,
          data: Object.values(monthData),
          borderColor: 'rgb(59, 55, 191)',
        },
      ],
    };

    setChartData(chartData);
  }, []);

  return (
    <>
      <Line ref={chartRef} options={options} data={chartData} />
    </>
  );
};
