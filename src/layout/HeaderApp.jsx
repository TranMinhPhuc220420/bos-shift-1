import React, {  } from 'react';

import { Layout} from 'antd';
const { Header } = Layout;

const SiderApp = () => {
  return (
    <Header className='' style={{ backgroundColor: '#fff', paddingLeft: 10, paddingRight: 20 }}>
      <div className='flex items-center justify-between'>

        <img src="/favicon.ico" alt="Logo" className='h-10' />

        <div className='flex items-center'>
          <img src="/avatar.jpg" alt="Avatar" className='h-10 rounded-full' />
          <span className='ml-3'>Admin</span>
        </div>

      </div>
    </Header>
  );
};


export default SiderApp;