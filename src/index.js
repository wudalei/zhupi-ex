import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import Route from './router/router';
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <Route />
  </Provider>,
  document.getElementById('root')
);
//↓此方法用于缓存页面
serviceWorker.unregister();
