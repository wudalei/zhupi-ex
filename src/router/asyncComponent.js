import React, {
  Component
} from 'react';
import { Layout, Spin } from 'antd';

const { Content } = Layout;

export default function asyncComponent (importComponent, page) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }

    async componentDidMount () {
      // if (!window.localStorage.getItem('auth')) {
      // 	window.location.href = '#/';
      // }

      const { default: component } = await importComponent()

      this.setState({
        component: component
      })
    }

    componentWillUnmount () {
      this.setState = (state, callback) => {
        return
      }
    }

    render () {
      const C = this.state.component;
      return C ? < C {...this.props} />
        : (page == 'app' ?
          <Spin tip="加载中...">
            <Content style={{
              margin: 0, minHeight: 400,
            }}
            >
            </Content>
          </Spin> : null
        )
    }
  }

  return AsyncComponent
}