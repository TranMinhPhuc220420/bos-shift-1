import React, { useState } from 'react';

import {
  AuditOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
  DashboardFilled,
  BarChartOutlined
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SiderApp = () => {
  const [collapsed, setCollapsed] = useState(false);

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem('Dashboard', '1', <HomeOutlined />),
    getItem('Report', '2', <BarChartOutlined />),
    getItem('Nhân viên', 'sub1', <TeamOutlined />, [
      getItem('Quản lý', '3'),
      getItem('Phân loại kỹ năng', '4'),
      getItem('Theo giỏi giờ làm việc', '5'),
    ]),
    getItem('Tối ưu hóa ca', 'sub2', <DashboardFilled />, [
      getItem('Sắp xếp ca làm việc', '6'),
      getItem('Thiết lập sắp xếp ca', '7'),
    ]),
    getItem('Dự báo doanh thu', 'sub3', <AuditOutlined />, [
      getItem('Phân tích dữ liệu lịch sử', '8'),
      getItem('Dự báo doanh thu', '9'),
    ]),
  ];

  return (
    <div>
      {/* Logo */}
      <div className='flex items-center justify-center h-16 bg-white shadow-sm'>
        <img src="/favicon.ico" alt="Logo" className='h-10' />
      </div>

      {/* Sider */}
      <Sider collapsed={collapsed} onCollapse={value => setCollapsed(value)} className='h-full' width={220} style={{ backgroundColor: '#fff' }}>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
    </div>
  );
};


export default SiderApp;