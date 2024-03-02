import React from 'react';
import Button from '../../../shared/components/Button';
import { Form, Formik } from 'formik';
import { User } from '../../../models/user.model';
import { validationSchema } from './CompanyValidation';
import InputField from '../../../shared/components/InputField';
import LogoFull from '../../../assets/logo/logo_full.png';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Col, Row } from 'antd';
import UploadProfile from '../../../shared/components/UploadProfile';
const CompanyDetails = () => {
  const onSubmit = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <div className="auth-company-details-wrapper">
      <div className="form-header">
        <div className="header-info">
          <h2>Company Details</h2>
        </div>
      </div>
      <Formik
        initialValues={{}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <UploadProfile />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="companyName"
            placeholder="Company name"
          />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="companyType"
            placeholder="Company type"
          />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="revenue"
            placeholder="Revenue range"
          />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="member"
            placeholder="Member of any Industry Associations"
          />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="reach"
            placeholder="How did you hear about us"
          />

          <Row gutter={[32, 0]} className="form-actions">
            <Col span={12}>
              <Button htmlType="submit" type="primary">
                Continue
              </Button>
            </Col>
            <Col span={12}>
              <Button htmlType="submit" type="ghost">
                Back
              </Button>
            </Col>
          </Row>
        </Form>
      </Formik>
    </div>
  );
};

export default CompanyDetails;
