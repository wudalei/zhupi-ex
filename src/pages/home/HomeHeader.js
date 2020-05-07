import React, { Component } from 'react';
import { Layout, Breadcrumb } from 'antd';
const { Header } = Layout;

class HomeHeader extends Component {
  render () {
    return (
      <Header className="site-layout-background header-container" style={{ padding: 0 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
    );
  }
}

export default HomeHeader;