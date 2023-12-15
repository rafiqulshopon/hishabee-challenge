import { List, Tag } from 'antd';

const getTagColor = (priority) => {
  const color = {
    High: 'volcano',
    Medium: 'geekblue',
    Low: 'green',
  };
  return color[priority] || 'default';
};

const TasksList = ({ tasksData }) => {
  return (
    <div className='bg-white p-4'>
      <h3 className='text-xl font-semibold mb-2'>Tasks</h3>
      <List
        itemLayout='horizontal'
        dataSource={tasksData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={item.title}
              description={
                <Tag color={getTagColor(item.priority)}>{item.priority}</Tag>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default TasksList;
