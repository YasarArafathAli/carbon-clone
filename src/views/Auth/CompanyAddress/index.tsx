import React from 'react';
import Button from '../../../shared/components/Button';
import { Form, Formik } from 'formik';
import { User } from '../../../models/user.model';
import { validationSchema } from './AddressValidation';
import InputField from '../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Col, Row } from 'antd';
const CompanyAddress = () => {

  const onSubmit = (formValues: any) => {
    console.log(formValues);
  };

  return (
    <div className="auth-company-details-wrapper">
      <div className="form-header">
        <div className="header-info">
          <h2>Company Address</h2>
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
            name="locality"
            placeholder="Street/Locality"
          />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="province"
            placeholder="Province"
          />
          <InputField type={INPUT_TYPE.TEXT} name="city" placeholder="City" />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="postalCode"
            placeholder="Postal code"
          />
          <InputField
            type={INPUT_TYPE.TEXT}
            name="country"
            placeholder="Country"
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

export default CompanyAddress;
