import { Input, Menu, Dropdown, Avatar } from 'antd';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';

const Header = () => {
  const menu = (
    <Menu>
      <Menu.Item key='0'>
        <a href='/profile'>Profile</a>
      </Menu.Item>
      <Menu.Item key='1'>
        <a href='/settings'>Settings</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key='3'>Log out</Menu.Item>
    </Menu>
  );

  return (
    <div className='flex justify-between items-center p-4 mx-4 bg-white shadow-md rounded'>
      <div className='font-bold text-lg'>Dashboard</div>
      <div className='flex-grow mx-4'>
        <Input
          className='rounded-full'
          prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.45)' }} />}
          placeholder='Search...'
        />
      </div>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className='ant-dropdown-link' onClick={(e) => e.preventDefault()}>
          <Avatar
            style={{ backgroundColor: '#87d068' }}
            icon={<UserOutlined />}
          />
        </a>
      </Dropdown>
    </div>
  );
};

export default Header;
