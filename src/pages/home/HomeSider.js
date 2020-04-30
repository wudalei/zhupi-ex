import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
const { Sider } = Layout;
const { SubMenu } = Menu;

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { menu, tabs } from '../../router/menuList'

class HomeSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: this.props.collapsed,
      menu: menu,
    }
  }

  onCollapse = collapsed => {
    this.setState({ collapsed })
  }

  //点击添加key
  addKey = (item) => {
    const tags = this.props.tags
    const activeTag = item.key
    let add = true //如果不存在就添加一个标签
    if (tags.length > 0) {
      add = tags.every((item) => {
        return activeTag != item.key
      })
    }
    if (add) {
      item.content = tabs[item.key]
      tags.push(item)
    }
    this.props.onChance({  //调用父组件方法进行传值
      activeTag,
      tags,
    })
  }


  render () {
    let menuList = this.state.menu;
    let option = menuList.map((item) => {
      var ComponentName = item.icon;
      return (
        item.children ? (<SubMenu
          key={item.key}
          title={
            <span>
              <ComponentName />
              <span>{item.name}</span>
            </span>
          }
        >
          {
            item.children.map(res => {
              return (<Menu.Item key={res.key} onClick={this.addKey.bind(this, res)}>
                <span >{res.name}</span>
              </Menu.Item>)
            })
          }
        </SubMenu>) : (
            <Menu.Item key={item.key} onClick={this.addKey.bind(this, item)}>
              <ComponentName />
              <span >{item.name}</span>
            </Menu.Item>))
    })
    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {option}
        </Menu>
      </Sider>
    );
  }
}

export default HomeSider;