/**
 * This component returns linechart (ReactApexChart) component with options,series, type, and height props
 * @returns A line chart.
 */
import ReactApexChart from 'react-apexcharts';

const LineChart = () => {
  /* Setting the options and series variables for the pie chart */
  const options = {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      grid: {
        show: true,
        padding: {
          left: 50,
          right: 50,
          top: 50,
          bottom: 50,
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '35%',
          borderRadius: 8,
          colors: {
            backgroundBarColors: [
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
              '#E5EAEE',
            ],
            backgroundBarRadius: 8,
          },
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      colors: ['#a7a3ff'],
      xaxis: {
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
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        show: true,
      },
      tooltip: {
        x: {
          show: false,
        },
      },
    },
    /* Setting the data for the chart. */
    series = [
      {
        name: 'Active User',
        data: [
          2000, 30000, 35000, 6000, 4000, 1000, 25000, 26000, 45000, 40000,
          35000, 30000,
        ],
      },
    ];
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        height={500}
      />
    </div>
  );
};

export default LineChart;
