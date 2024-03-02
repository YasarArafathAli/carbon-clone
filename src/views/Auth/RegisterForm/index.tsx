import React, { useState } from "react";
import Button from '../../../shared/components/Button';
import { Form, Formik } from 'formik';
import { User } from '../../../models/user.model';
import { validationSchema } from './RegisterValidation';
import InputField from '../../../shared/components/InputField';
import LogoFull from '../../../assets/logo/logo_full.png';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Col, Row } from 'antd';
import Checkbox from "../../../shared/components/Checkbox";
const RegisterForm = () => {

  const [terms, setTerms] = useState(false);
  const onSubmit = (user: User) => {
    console.log('asdf');
  };

  const handleTermsCheckbox = () => setTerms(prev => !prev)

    return (
      <div className="auth-register-wrapper">
        <div className="form-header">
          <div className="header-info">
            <h2>Let's create your account</h2>
            <p>
              Already have an account?
              <Button type="text">login</Button>
            </p>
          </div>
        </div>
        <Formik
          initialValues={{}}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <InputField
              type={INPUT_TYPE.TEXT}
              name="admin"
              placeholder="Admin name"
            />
            <InputField
              type={INPUT_TYPE.TEXT}
              name="position"
              placeholder="Position"
            />
            <InputField
              type={INPUT_TYPE.EMAIL}
              name="email"
              placeholder="Email"
            />
            <InputField
              type={INPUT_TYPE.TEXT}
              name="phone"
              prefix="+1"
              placeholder="Phone Number (optional)"
            />

            <InputField
              type={INPUT_TYPE.PASSWORD}
              name="password"
              placeholder="Create password"
            />
            <InputField
              type={INPUT_TYPE.TEXT}
              name="password"
              placeholder="Confirm password"
            />
            <Checkbox checked={terms} onChange={handleTermsCheckbox}>Agree to terms & conditions</Checkbox>
            <Row className="form-actions">
              <Col span={12}>
                <Button htmlType="submit" type="primary">
                  Create
                </Button>
              </Col>
            </Row>
          </Form>
        </Formik>
      </div>
    );
}

export default RegisterForm;