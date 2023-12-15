import { List, Avatar } from 'antd';
import { faker } from '@faker-js/faker';

const RecentSalesList = ({ salesData }) => {
  return (
    <div className='bg-white p-4'>
      <h3 className='text-xl font-semibold mb-2'>Recent Sales</h3>
      <List
        itemLayout='horizontal'
        dataSource={salesData}
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
