import React, { Component } from 'react';
import Header from './HomeHeader'
import Content from './HomeContent'
import Sider from './HomeSider'
import './index.less';
import { Layout, Menu, Breadcrumb } from 'antd';

class Home extends Component {
  state = {
    collapsed: false,//控制左边菜单栏展开
    tags: [],//页面内容
    activeTag: ''//活动的标签
  };

  //修改state,组件的state提升
  _setState = (obj) => {
    this.setState(obj)
  }

  componentDidMount () { }

  render () {
    const { collapsed, tags, activeTag } = this.state
    return (
      <Layout className='home-container' style={{ minHeight: '100vh' }}>
        <Sider collapsed={collapsed}
          tags={tags}
          onChance={this._setState}></Sider>
        <Layout className="site-layout">
          <Header></Header>
          <Content tags={tags} activeTag={activeTag} onChance={this._setState}></Content>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
