/**
 * This componenet returns a ReactApexChart component with the options, series, type and height props
 * @returns A area chart.
 */

import ReactApexChart from 'react-apexcharts';

const AreaChart = () => {
  /* Setting the options and series variables for the pie chart */
  const series = [
      {
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100, 40, 60, 89, 75, 87],
      },
      {
        name: 'series2',
        data: [11, 32, 45, 32, 34, 52, 41, 31, 40, 28, 51, 42],
      },
    ],
    /* Setting the options for the chart. */
    options = {
      chart: {
        height: 350,
        type: 'area',
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: true,
          tools: {
            download: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      xaxis: {
        type: 'month',
        categories: [
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
        ],
      },
      tooltip: {
        x: {
          format: 'MMM',
        },
      },
    };

  return (
    <ReactApexChart
      options={options}
      series={series}
      type="area"
      height={500}
    />
  );
};

export default AreaChart;
