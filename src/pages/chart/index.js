import React, { Component } from 'react';
import * as ReactDOM from 'react-dom';
import { Statistic, Card, Button, notification } from 'antd';
import Column from './eChart/Column'
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  SmileOutlined
} from '@ant-design/icons';

import './index.less'

class ZPChart extends Component {
  state = {
    msg: [{ title: '产品总数', count: '1000' }, { title: '销售额', count: '100w' }, { title: '盈利额', count: '-20w' }, { title: '偷税漏税', count: '40w' },],
    icon: [{ name: '1', component: <DesktopOutlined /> }, { name: '2', component: <PieChartOutlined /> },
    { name: '3', component: <FileOutlined /> }, { name: '4', component: <TeamOutlined /> },
    { name: '5', component: <UserOutlined /> }, { name: '6', component: <UserOutlined /> },]
  }

  //处理数据
  componentDidMount = {


  }

  //color egg
  iconTips = () => {
    notification.open({
      message: '俺是提示',
      description:
        '您点击了并没有什么用的图标',
      icon: <SmileOutlined style={{ color: '#108ee9' }} />,
    });
  }

  render () {
    const { msg, icon } = this.state;
    const msgList = msg.map((item, index) => {
      return (
        <Statistic title={item.title} value={item.count} key={index} />
      )
    })
    const iconList = icon.map((item, index) => {
      return (
        <div className='icon-box-samle' onClick={this.iconTips.bind(this)} key={index}>
          {item.component}
        </div>
      )
    })
    return (
      <div className="chart-container">
        <div className='card welcome'>
          <div>Hi,欢迎进入EX版本后台管理系统</div>
          <div>轻松管理您的数据，提高效率，降低成本，开启引导( ´･ω･)ﾉ(._.`)摸摸头( ´･ω･)ﾉ(._.`)摸摸头( ´･ω･)ﾉ(._.`)摸摸头</div>
          <img src={require("../../assets/img/bg1.jpg")}></img>
        </div>
        <div className="left-box">
          {/* 数据统计 */}
          <div className='card msg'>
            {msgList}
          </div>
          <div className='card todo'></div>
          <div className='card todo'>
            <p>我是折线图</p>
            <Column />
          </div>
          <div className="card speak-box"></div>
        </div>
        <div className="right-box">
          <div className='card icon-box'>
            <p>我是图标</p>
            {iconList}
          </div>
          <div className='card img-box'></div>
          <div className='card data-box'></div>
          <div className='card other-box'></div>
        </div>

      </div>
    );
  }
}

export default ZPChart;