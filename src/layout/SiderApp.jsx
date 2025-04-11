import React, { } from 'react';
import { useNavigate } from "react-router";

// Redux
import { useSelector, } from "react-redux";

// i18n
import { useTranslation } from "react-i18next";

// Ant Design
import {
  AuditOutlined,
  TeamOutlined,
  HomeOutlined,
  DashboardFilled,
  BarChartOutlined
} from '@ant-design/icons';

import { Layout, Menu } from 'antd';
const { Sider } = Layout;

const SiderApp = ({ isLoading }) => {
  // Router
  const navigate = useNavigate();
  // i18n
  const { t } = useTranslation();
  // Redux
  const collapsed = useSelector((state) => state.app.collapsedSider);

  // State

  // Classes - clsx
  const classes = {
    wrapLogo: 'flex items-center justify-center h-16 bg-white shadow-sm',
    logo: 'h-10',
    wrapMenu: 'h-full',
  };

  // Process func
  const getItem = (label, pathname, key, icon, children) => {
    return { key, icon, pathname, children, label, };
  }

  // Handler func
  const handlerOnSelectMenuItem = (event) => {
    const { key, item } = event;
    const { pathname } = item.props;

    console.log(key, pathname);
    if (key && pathname) {
      navigate(pathname);
    }
  };

  // Menu items
  const items = [
    getItem(t('Dashboard'), '/dashboard', '1', <HomeOutlined />),
    getItem(t('TXT_REPORT'), '/bao-cao', '2', <BarChartOutlined />),

    getItem(t('TXT_EMPLOYEE'), '', 'sub1', <TeamOutlined />, [
      getItem(t('TXT_MANAGER'), '/nhan-vien/quan-ly', '3'),
      getItem(t('TXT_SKILL_CATEGORIZATION'), '/nhan-vien/phan-loai-ky-nang', '4'),
      getItem(t('TXT_TRACK_WORK_HOURS'), '/nhan-vien/theo-doi-thoi-gian-lam-viec', '5'),
    ]),

    getItem(t('TXT_SHIFT_OPTIMIZATION'), '', 'sub2', <DashboardFilled />, [
      getItem(t('TXT_SHIFT_SCHEDULING'), '/toi-uu-hoa-ca/sap-xep-ca-lam-viec', '6'),
      getItem(t('TXT_SHIFT_SETUP'), '/toi-uu-hoa-ca/thiet-lap-sap-xep-ca', '7'),
    ]),

    getItem(t('TXT_REVENUE_FORECAST'), '', 'sub3', <AuditOutlined />, [
      getItem(t('TXT_REVENUE_FORECAST'), '/du-doan-doanh-thu/du-doan-doanh-thu', '8'),
      getItem(t('TXT_HISTORICAL_ANALYSIS'), '/du-doan-doanh-thu/phan-tich-lich-su', '9'),
    ]),
  ];

  return (
    <div>
      {/* Logo */}
      <div className={classes.wrapLogo}>
        <img src="/favicon.ico" className={classes.logo} />
      </div>

      {/* Sider */}
      <Sider collapsed={collapsed} className={classes.wrapMenu} width={220} style={{ backgroundColor: '#fff' }}>
        {!isLoading &&
          <Menu defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={handlerOnSelectMenuItem} />
        }
      </Sider>
    </div>
  );
};


export default SiderApp;