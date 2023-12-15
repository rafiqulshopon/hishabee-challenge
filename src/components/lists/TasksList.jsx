import { useState } from 'react';
import { List, Tag, Dropdown, Menu, Button, Checkbox } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const getTagColor = (priority) => {
  const color = {
    High: 'volcano',
    Medium: 'geekblue',
    Low: 'green',
  };
  return color[priority] || 'default';
};

const priorityOptions = ['High', 'Medium', 'Low'];

const TasksList = ({ tasksData }) => {
  const [selectedPriorities, setSelectedPriorities] = useState([]);

  const handleCheck = ({ key, checked }) => {
    const newSelectedPriorities = checked
      ? [...selectedPriorities, key]
      : selectedPriorities.filter((priority) => priority !== key);
    setSelectedPriorities(newSelectedPriorities);
  };

  const menu = (
    <Menu
      items={priorityOptions.map((priority) => ({
        key: priority,
        label: (
          <Checkbox
            onChange={(e) =>
              handleCheck({ key: priority, checked: e.target.checked })
            }
            checked={selectedPriorities.includes(priority)}
          >
            {priority}
          </Checkbox>
        ),
      }))}
    />
  );

  const filteredTasksData =
    selectedPriorities.length === 0
      ? tasksData
      : tasksData.filter((task) => selectedPriorities.includes(task.priority));

  return (
    <div className='bg-white p-4'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-xl font-semibold'>Tasks</h3>
        <Dropdown overlay={menu} trigger={['click']}>
          <Button>
            Filter by priority <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      <List
        itemLayout='horizontal'
        dataSource={filteredTasksData}
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
