/**
 * This component returns a Radial bar chart (ReactApexChart) component with the options and series props set to the options and
 * series variables
 * @returns A RadialBarChart
 */
import ReactApexChart from 'react-apexcharts';

const RadialBarChart = () => {
  /* Setting the options and series for the chart. */
  const series = [44, 55, 67, 83],
    options = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                return 249;
              },
            },
          },
        },
      },
      labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
    };
  return <ReactApexChart options={options} series={series} type="radialBar" />;
};

export default RadialBarChart;
