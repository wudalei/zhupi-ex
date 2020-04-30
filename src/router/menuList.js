import React from 'react'
import AsyncComponent from './asyncComponent';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

const ZPChart = AsyncComponent(() => import('../pages/chart'), 'ZPChart');
const ZPTable = AsyncComponent(() => import('../pages/table'), 'ZPChart');
const User = AsyncComponent(() => import('../pages/user'), 'User');

//菜单列表
const menu = [{ name: '数据统计', icon: PieChartOutlined, key: 'ZPChart' },
{ name: '表单', icon: DesktopOutlined, key: 'ZPTable' },
{ name: '用户', icon: UserOutlined, key: 'User', children: [{ key: 'add', name: '添加用户' }, { key: 'delete', name: '删除用户' }] }
]

const tabs = {
  ZPChart: <ZPChart />,
  ZPTable: <ZPTable />,
  User: <User />,
}

export {
  menu,
  tabs
}