import { List, Avatar, Select } from 'antd';
import { useState } from 'react';
import { faker } from '@faker-js/faker';

const RecentSalesList = ({ salesData }) => {
  const [minimumAmount, setMinimumAmount] = useState(null);

  const filteredSalesData = minimumAmount
    ? salesData.filter((sale) => sale.amount >= minimumAmount)
    : salesData;

  return (
    <div className='bg-white p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold'>Recent Sales</h3>
        <Select
          className='h-11'
          style={{ width: 220 }}
          onChange={(value) => setMinimumAmount(value)}
          allowClear
          placeholder='Filter by minimum amount'
          options={[
            { label: '$1000', value: 1000 },
            { label: '$2000', value: 2000 },
            { label: '$5000', value: 5000 },
            { label: '$8000', value: 8000 },
          ]}
        />
      </div>
      <List
        itemLayout='horizontal'
        dataSource={filteredSalesData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={faker.image.avatar()} />}
              title={<a href='sales-detail'>{item.name}</a>}
              description={`Sale amount: $${item.amount}`}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default RecentSalesList;
