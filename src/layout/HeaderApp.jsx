import React, { } from 'react';

import clsx from 'clsx';

// Hook components
import useAuth from "../hooks/useAuth";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { toggleSider } from '../store/features/app';

// Ant Design
import { MenuUnfoldOutlined, MenuFoldOutlined, LoadingOutlined } from '@ant-design/icons';
import { Layout, Button, Dropdown, Space } from 'antd';
const { Header } = Layout;

const SiderApp = ({ isLoading }) => {
  // Hook components
  const { user, signOut } = useAuth();

  // Redux
  const dispatch = useDispatch();
  const collapsed = useSelector((state) => state.app.collapsedSider);

  // State

  // Classes - clsx
  const classes = {
    collapsedBtn: clsx('border-none', {
    }),
  };

  // Handler
  const handleCollapse = () => {
    // Dispatch action to collapse the sider
    dispatch(toggleSider());
  };
  const handlerOnSelectMenuItem = () => {
    // Call signOut function from auth provider
    signOut();
  };

  // Constants
  const items = [
    {
      label: (<span>Logout</span>),
      key: '0',
      onClick: handlerOnSelectMenuItem,
    },
  ];

  return (
    <Header className='' style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 20 }}>
      <div className='flex items-center justify-between h-full'>

        {/* Button collapse sider app */}
        <Button type='text'
          className={classes.collapsedBtn}
          onClick={handleCollapse}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />

        <div>
          {!isLoading ?
            (
              <Dropdown menu={{ items }} trigger={['click']}>
                <div className='h-10 flex items-center justify-center h-10 cursor-pointer'>
                  <img src={user.avatar} alt="Avatar" className='h-full rounded-full' />
                  <span className='ml-3'>{user.displayName}</span>
                </div>
              </Dropdown>
            )
            :
            <LoadingOutlined style={{ fontSize: 24 }} spin />
          }
        </div>

      </div>
    </Header>
  );
};


export default SiderApp;