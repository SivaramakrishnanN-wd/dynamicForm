import React, { useEffect, useState } from "react";
import { Form, Modal, Typography } from "antd";
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
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [form] = Form.useForm();

  useEffect(() => {
    if (sessionStorage.getItem("authToken")) {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

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
          form={form}
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

      <Modal
        title="Welcome!"
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        footer={null}
      >
        <p>
          You can log in using the default <b>Guest Account</b> (credentials are
          already filled in), or create a new account if you prefer.
        </p>

        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <AntdButton
            onClick={() => {
              setIsModalVisible(false);
              form.resetFields(); // 👈 clear fields on close
            }}
          >
            Close
          </AntdButton>
          <AntdButton
            type="primary"
            onClick={() => {
              const guestCredentials = {
                email: "guest@example.com",
                password: "guest123",
              };
              form.setFieldsValue(guestCredentials);
              onFinish(guestCredentials);
              setIsModalVisible(false);
            }}
          >
            Login as Guest
          </AntdButton>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
