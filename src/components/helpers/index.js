export const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Revenue',
      data: [12000, 19000, 3000, 5000, 2000, 3000, 4000],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export const pieChartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
      ],
    },
  ],
};
