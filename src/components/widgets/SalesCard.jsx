import { Card } from 'antd';

const SalesCard = () => {
  return (
    <Card
      title='Sales'
      bordered={false}
      className='shadow-lg transition-shadow duration-300 hover:shadow-2xl'
    >
      <p>+12,234</p>
    </Card>
  );
};

export default SalesCard;
