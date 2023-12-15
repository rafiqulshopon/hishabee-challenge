import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  MailOutlined,
} from '@ant-design/icons';

const Sidebar = () => {
  return (
    <div className='full-screen w-64 bg-white shadow-md mb-4 rounded-lg'>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          Dashboard
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
      </Menu>
    </div>
  );
};

export default Sidebar;
