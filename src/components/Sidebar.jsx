import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div className='h-screen w-64 bg-white shadow-md'>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          Overview
        </Menu.Item>
        <Menu.Item key='2' icon={<DesktopOutlined />}>
          Analytics
        </Menu.Item>
        <Menu.Item key='3' icon={<AppstoreOutlined />}>
          Reports
        </Menu.Item>
        <Menu.Item key='4' icon={<MailOutlined />}>
          Notifications
        </Menu.Item>
        {/* Add additional navigation links as needed */}
      </Menu>
    </div>
  );
};

export default Sidebar;
