import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ data }) => {
  const options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieChartComponent;
