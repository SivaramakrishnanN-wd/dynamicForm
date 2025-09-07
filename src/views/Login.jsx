import React from "react";
import { Form, Typography } from "antd";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AntdCard from "../components/AntdCard";
import AntdEmailInput from "../components/AntdEmailInput";
import AntdPasswordInput from "../components/AntdPasswordInput";
import AntdButton from "../components/AntdButton";

const { Title } = Typography;

const Login = () => {
  const onFinish = async (values) => {
    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        console.log("Success:", data);
        alert("Login Successful!");
      } else {
        console.error("Error:", data.message);
        alert(`Login failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Server Error:", error);
      alert("Server error. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <AntdCard className="login-card">
        <Title level={2} className="login-title">
          Login
        </Title>

        <Form
          name="login-form"
          layout="vertical"
          onFinish={onFinish}
          initialValues={{ email: "", password: "" }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <AntdEmailInput prefix={<MailOutlined />} placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <AntdPasswordInput prefix={<LockOutlined />} placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <AntdButton type="primary" htmlType="submit">
              Login
            </AntdButton>
          </Form.Item>
        </Form>
        <div className="register-link-container">
          Don't have an account? <Link to="/register">Register now!</Link>
        </div>
      </AntdCard>
    </div>
  );
};

export default Login;