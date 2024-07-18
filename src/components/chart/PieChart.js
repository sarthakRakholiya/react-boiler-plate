/**
 * This component returns a pie (chartReactApexChart) component with the options and series props set to the options and
 * series variables
 * @returns A pie chart
 */
import ReactApexChart from 'react-apexcharts';

const PieChart = () => {
  /* Setting the options and series variables for the pie chart */
  const series = [44, 55, 13, 43, 22],
    options = {
      chart: {
        width: 200,
        type: 'pie',
      },
      labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
      legend: {
        position: 'bottom',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    };

  return <ReactApexChart options={options} series={series} type="pie" />;
};

export default PieChart;
