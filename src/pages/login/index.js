import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, message } from 'antd';

import Background from '../../compenents/Background'
import './index.less';

class Login extends Component {
  state = {
    isLogin: true
  }


  render () {
    const layout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 6, span: 16 },
    };

    //提交表单
    const onFinish = values => {
      if (values.username === 'admin' && values.password === '123456') {
        message.success('登陆成功');
        this.props.history.push("/home");
        return;
      }
      message.error('登陆失败，登录名或密码有误');
    };

    //提交失败
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };



    return (
      <div>
        < Background >
          <div id='login'>
            <div className='login-box'>
              <div className='login-box-left'>
                <img src='https://www.ysdevelop.cn/project/web/img/login.ff1aa8bf.png'></img>
              </div>
              <div className='login-box-right'>
                <div className='title'>用户{this.state.isLogin ? '登录' : '注册'}</div>
                <Form
                  {...layout}
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  size='large' >
                  <Form.Item
                    label="登录名"
                    name="username"
                    rules={[{ required: true, message: '输入你的账号' }]}>
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="密 码"
                    name="password"
                    rules={[{ required: true, message: '输入你的密码' }]}>
                    <Input.Password />
                  </Form.Item>

                  <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" size='middle'>
                      {this.state.isLogin ? '登录' : '注册'}
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Background>
      </div>
    )
  }
}

export default Login;
