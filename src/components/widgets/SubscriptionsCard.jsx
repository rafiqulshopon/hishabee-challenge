import { Card } from 'antd';

const SubscriptionsCard = () => {
  return (
    <Card
      title='Subscriptions'
      bordered={false}
      className='shadow-lg transition-shadow duration-300 hover:shadow-2xl'
    >
      <p>+2350</p>
    </Card>
  );
};

export default SubscriptionsCard;
