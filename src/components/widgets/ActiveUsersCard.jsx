import { Card } from 'antd';

const ActiveUsersCard = () => {
  return (
    <Card
      title='Active Users'
      bordered={false}
      className='shadow-lg transition-shadow duration-300 hover:shadow-2xl'
    >
      <p>+573</p>
    </Card>
  );
};

export default ActiveUsersCard;
