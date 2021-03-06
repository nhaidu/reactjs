import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Row,
  Col,
  Form,
  Input,
  Button
} from 'antd';
import { api } from '../../services/api';
import { helper } from '../../helpers/common';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPage = () => {
  const [errorLogin, setErrorLogin] = useState('');
  const history = useHistory();

  const onFinish = (values) => {
    const user = values.username;
    const pass = values.password;
    const token = api.loginUser(user, pass)
    if(token !== null){
      setErrorLogin('');
      //console.log(token);
      helper.saveToken(token)
      history.push('/popular-movie');
    } else {
      setErrorLogin('Nhập sai rồi, đồ quỷ sứ hà...');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row style={{ marginTop: '30px'}}>
      <Col span={10} offset={7}>
        <h2 style={{ textAlign: 'center', color: 'black'}}>Cùng vào xem phim nào</h2>
        <h3 style={{ textAlign: 'center', color: 'red' }}>
          { errorLogin }
        </h3>

        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Tài khoản là: admin" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder="Mật khẩu là: 123" />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
            {/* <Link to="/"> Home page</Link> */}
          </Form.Item>
        </Form>
      </Col>
    </Row>
  )
}
export default React.memo(LoginPage);