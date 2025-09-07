import React from "react";
import { Form, Typography } from "antd";
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AntdButton from '../components/AntdButton';
import AntdCard from '../components/AntdCard';
import AntdEmailInput from '../components/AntdEmailInput';
import AntdInput from '../components/AntdInput';
import AntdPasswordInput from '../components/AntdPasswordInput';

const { Title } = Typography;

const Register = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    alert('Registration Successful! Check the console for details.');
  };

  return (
    <div className="register-container">
      <AntdCard className="register-card">
        <Title level={2} className="register-title">
          Register
        </Title>
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          scrollToFirstError
          layout="vertical"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              { required: true, message: 'Please input your Username!' },
            ]}
          >
            <AntdInput
              prefix={<UserOutlined />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { type: 'email', message: 'The input is not a valid email!' },
              { required: true, message: 'Please input your Email!' },
            ]}
          >
            <AntdEmailInput
              prefix={<MailOutlined />}
              placeholder="Email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
              { min: 6, message: 'Password must be at least 6 characters long!' },
            ]}
            hasFeedback
          >
            <AntdPasswordInput
              prefix={<LockOutlined />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <AntdButton type="primary" htmlType="submit">
              Register
            </AntdButton>
          </Form.Item>
        </Form>
        <div className="login-link-container">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </AntdCard>
    </div>
  );
};

export default Register;