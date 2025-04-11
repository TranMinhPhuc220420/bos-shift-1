
import React from 'react';
import { Outlet } from 'react-router';

import { Layout } from 'antd';
const { Content } = Layout;

import SiderApp from './SiderApp';
import HeaderApp from './HeaderApp';

const LayoutApp = () => {

  return (
    <Layout className='h-screen'>

      {/* Sider */}
      <SiderApp />

      <Layout>

        {/* Header */}
        <HeaderApp />

        {/* Content */}
        <Content>
          {/* This is where the child routes will be rendered */}
          <Outlet />
        </Content>

      </Layout>
    </Layout>
  );
};
export default LayoutApp;