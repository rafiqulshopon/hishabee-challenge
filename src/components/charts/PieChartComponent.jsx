import { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Button, Dropdown, Menu } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import FileSaver from 'file-saver';
import mockData from '../helpers/pie.json';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = () => {
  const [visibleCategory, setVisibleCategory] = useState('All');

  const colors = [
    'rgba(255, 99, 132, 0.5)',
    'rgba(54, 162, 235, 0.5)',
    'rgba(255, 206, 86, 0.5)',
    'rgba(75, 192, 192, 0.5)',
    'rgba(153, 102, 255, 0.5)',
  ];

  const getChartData = (category) => {
    const isAllCategories = category === 'All';
    return {
      labels: mockData.categories.map((c) => c.name),
      datasets: [
        {
          data: mockData.categories.map((c) => c.value),
          backgroundColor: mockData.categories.map((c, index) =>
            isAllCategories || c.name === category
              ? colors[index % colors.length]
              : 'rgba(200, 200, 200, 0.5)'
          ),
        },
      ],
    };
  };

  const [chartData, setChartData] = useState(getChartData(visibleCategory));

  const handleMenuClick = (e) => {
    setVisibleCategory(e.key);
    setChartData(getChartData(e.key));
  };

  const categoryMenu = (
    <Menu onClick={handleMenuClick} selectedKeys={[visibleCategory]}>
      <Menu.Item key='All'>All Categories</Menu.Item>
      {mockData.categories.map((category) => (
        <Menu.Item key={category.name}>{category.name}</Menu.Item>
      ))}
    </Menu>
  );

  const exportToCSV = () => {
    const filteredCategories =
      visibleCategory === 'All'
        ? mockData.categories
        : mockData.categories.filter(
            (category) => category.name === visibleCategory
          );

    const csvData = filteredCategories
      .map(({ name, value }) => `${name},${value}`)
      .join('\n');
    const blob = new Blob([`Category,Value\n${csvData}`], {
      type: 'text/csv;charset=utf-8;',
    });
    FileSaver.saveAs(blob, `chart-data-${visibleCategory}.csv`);
  };

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'left',
        fullWidth: false,
        labels: {
          boxWidth: 20,
          padding: 20,
        },
      },
    },
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Dropdown overlay={categoryMenu} trigger={['click']}>
          <Button>
            {visibleCategory === 'All' ? 'Select Category' : visibleCategory}
          </Button>
        </Dropdown>
        <Button
          icon={<DownloadOutlined />}
          style={{ marginLeft: 8 }}
          onClick={exportToCSV}
        >
          Export Data
        </Button>
      </div>
      <Pie data={chartData} options={options} />
    </>
  );
};

export default PieChartComponent;
