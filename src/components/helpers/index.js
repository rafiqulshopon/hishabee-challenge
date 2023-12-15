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

export const salesData = [
  { name: 'Jane Smith', amount: 8509.74 },
  {
    name: 'Edward Johnson',
    amount: 7843.81,
  },
  {
    name: 'Patricia Brown',
    amount: 7567.51,
  },
  {
    name: 'Jennifer Taylor',
    amount: 7280.92,
  },
  {
    name: 'Michael Davis',
    amount: 3063.94,
  },
  {
    name: 'Linda Martinez',
    amount: 9793.42,
  },
  {
    name: 'William Rodriguez',
    amount: 3365.9,
  },
  {
    name: 'Elizabeth Hernandez',
    amount: 2478.67,
  },
];

export const tasksData = [
  { title: 'Implement responsive layout', priority: 'High' },
  { title: 'Finalize chart components', priority: 'High' },
  { title: 'Update user profiles', priority: 'Low' },
  { title: 'Refactor backend code', priority: 'Low' },
  { title: 'Fix security issues', priority: 'Low' },
  { title: 'Optimize database queries', priority: 'Medium' },
  { title: 'Deploy to production', priority: 'High' },
  { title: 'Run marketing campaign', priority: 'Medium' },
];
