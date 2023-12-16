import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Button, Dropdown, Menu } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import FileSaver from 'file-saver';
import mockData from '../helpers/data.json';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [],
  });
  const [visibleProduct, setVisibleProduct] = useState('All');

  useEffect(() => {
    const months = Object.keys(mockData.products[0].monthlyRevenue);
    const datasets = mockData.products.map((product, index) => {
      const isSelected =
        visibleProduct === 'All' || product.name === visibleProduct;
      const color = isSelected
        ? `rgba(${255 - index * 12}, ${99 + index * 6}, ${
            132 + index * 6
          }, 0.5)`
        : `rgba(200, 200, 200, 0.5)`;

      return {
        label: product.name,
        data: months.map((month) => product.monthlyRevenue[month]),
        backgroundColor: color,
      };
    });

    setData({
      labels: months,
      datasets: datasets,
    });
  }, [visibleProduct]);

  const exportToCSV = () => {
    const productData =
      visibleProduct === 'All'
        ? mockData.products
        : mockData.products.filter(
            (product) => product.name === visibleProduct
          );
    const csvContent =
      'data:text/csv;charset=utf-8,' +
      productData
        .map((p) => {
          return `${p.name},${Object.values(p.monthlyRevenue).join(',')}`;
        })
        .join('\n');
    const encodedUri = encodeURI(csvContent);
    FileSaver.saveAs(encodedUri, `products_data-${visibleProduct}.csv`);
  };

  const productMenu = (
    <Menu
      onClick={(e) => setVisibleProduct(e.key)}
      selectedKeys={[visibleProduct]}
      className='max-h-60 overflow-y-auto scrollbar-hide'
    >
      <Menu.Item key='All'>All Products</Menu.Item>
      {mockData.products.map((product) => (
        <Menu.Item key={product.name}>{product.name}</Menu.Item>
      ))}
    </Menu>
  );

  const options = {
    responsive: true,
    aspectRatio: 1.5,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
        text: 'Monthly Revenue by Product',
      },
    },
  };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <Dropdown overlay={productMenu} trigger={['click']}>
          <Button>
            {visibleProduct === 'All' ? 'Select Product' : visibleProduct}
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
      <Bar data={data} options={options} />
    </>
  );
};

export default BarChartComponent;
