import { Card } from 'antd';

const RevenueCard = () => {
  return (
    <Card
      title='Total Revenue'
      bordered={false}
      className='shadow-lg transition-shadow duration-300 hover:shadow-2xl'
    >
      <p>$45,231.89</p>
    </Card>
  );
};

export default RevenueCard;
