import React, { Component } from 'react';
import HomeHeader from './HomeHeader'
import HomeContent from './HomeContent'
import HomeSider from './HomeSider'
import './index.less';
import { Layout } from 'antd';

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
      <Layout className='home-container'>
        <HomeSider collapsed={collapsed}
          tags={tags}
          onChance={this._setState}></HomeSider>
        <Layout className="context-container">
          <HomeHeader className='header-container'></HomeHeader>
          <HomeContent tags={tags} activeTag={activeTag} onChance={this._setState}></HomeContent>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
