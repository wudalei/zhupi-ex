import React from 'react';
import {
  Route,
  HashRouter
} from 'react-router-dom';
import { ConfigProvider } from 'antd';
//异步加载组件
import AsyncComponent from './asyncComponent';
//统一样式
import '../style/mian.less';

const Login = AsyncComponent(() => import('../pages/login'), 'login');
const Home = AsyncComponent(() => import('../pages/home'), 'home');
// const Error = AsyncComponent(() => import('../pages/error'), 'error');

class Router extends React.Component {
  render () {
    return (
      <HashRouter>
        <ConfigProvider>
          <div className="app-container">
            <Route exact path="/" component={Login} />
            <Route exact path="/login" component={Login} />
            <Route path="/home" component={Home} />
            <Route exact path="/error" component={Error} />
          </div>
        </ConfigProvider>
      </HashRouter>
    )
  }
}

export default Router