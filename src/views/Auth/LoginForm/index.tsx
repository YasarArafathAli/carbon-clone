import React from "react";
import { Formik, Form } from "formik";
import InputField from "../../../shared/components/InputField";
import { validationSchema } from './LoginValidation';
import UserService from "../../../services/AuthService/auth.service";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../routes/routeConstants/appRoutes";
import { AuthContext } from "../../../context/AuthContext";
import LogoFull from '../../../assets/logo/logo_full.png';
import Button from '../../../shared/components/Button';
import { Col } from 'antd';
import { INPUT_TYPE } from '../../../enums/inputType';

interface User {
  email: string;
  password: string;
}

const initialValue = {
  email: "abc@123.com",
  password: "test@1234",
};

const LoginForm = (props: any) => {
  const { error, loading, loginUser } = UserService();


  const onSubmit = (user: User) => {
    loginUser(user);
  };

  return (
    <div className="auth-login-wrapper">
      <div className="form-header">
        <div className="header-info">
          <h2>Welcome Back</h2>
          <p>
            Don't have an account?
            <Button type="text">Signup</Button>
          </p>
        </div>
      </div>
      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <InputField
            type={INPUT_TYPE.EMAIL}
            name="email"
            placeholder="Email"
          />
          <InputField
            type={INPUT_TYPE.PASSWORD}
            name="password"
            placeholder="Password"
          />

          <p className="forgot-password-link">
            <Button type="link">Forgot Password</Button>
          </p>
          <Col span={12}>
            <Button htmlType="submit" type="primary">
              Confirm
            </Button>
          </Col>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
