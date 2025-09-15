import React, { useEffect } from "react";
import { Form, Typography } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import AntdCard from "../components/AntdCard";
import AntdEmailInput from "../components/AntdEmailInput";
import AntdPasswordInput from "../components/AntdPasswordInput";
import AntdButton from "../components/AntdButton";
import axios from "axios";

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      navigate("/home", { replace: true });
    }
  }, []);

  const onFinish = (values) => {
    const { email, password } = values;
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        if (result.data.message === "Success") {
          const token = result.data.token;
          sessionStorage.setItem("authToken", token);
          navigate("/home");
        } else {
          console.error(result.data.message);
        }
      })
      .catch((error) => console.error(error));
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
            <AntdEmailInput
              prefix={<MailOutlined />}
              placeholder="Enter your email"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <AntdPasswordInput
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
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
