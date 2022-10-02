import axios from 'axios';
import { useNavigate } from 'react-router';
import { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';

 function Login () {
  const navigate = useNavigate();
    const [user, setUser] = useState(null);
  const [password,setPassword]= useState()
  const [username,setUsername]= useState()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res= await axios.post("https://uit-furniture-shop.herokuapp.com/api/auth/login",{username,password});
      setUser(res.data);
      navigate('/Success')
     
    }
    catch (err) {
      console.log(err)
    }
  }
  const onFinish = (values) => {
    // console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        onChange={(e) =>setUsername(e.target.value)}
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        onChange={(e) =>setPassword(e.target.value)}
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={handleSubmit} type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login