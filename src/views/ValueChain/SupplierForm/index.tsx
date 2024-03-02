import React from 'react';
import Modal from '../../../shared/components/Modal';
import { Form, Formik } from 'formik';
import InputField from '../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../enums/inputType';
import {  Col, Row } from 'antd';
import { validationSchema } from './SupplierValidation';

type Props = {
  visible: boolean;
  closeForm: () => void;
};

const SupplierForm = ({ visible, closeForm }: Props) => {
  const onSubmit = () => {
    console.log('sibnmoit');
  };
  return (
    <Modal
      width={900}
      title="Create Supplier"
      visible={visible}
      closeModal={closeForm}
      okText="Create"
      handleOk={onSubmit}
    >
      <Row className="product-form">
        <Formik
          initialValues={{}}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Row gutter={[32, 0]} className="form-actions">
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="supplierName"
                  placeholder="Supplier name"
                />
              </Col>
              <Col span={12}>
              <InputField
                  type={INPUT_TYPE.TEXT}
                  name="address"
                  placeholder="Street/Locality"
                />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="city"
                  placeholder="City"
                />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="province"
                  placeholder="Province"
                />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="Country"
                  placeholder="country"
                />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="postalCode"
                  placeholder="Postal Code"
                />
              </Col>
            </Row>
          </Form>
        </Formik>
      </Row>
    </Modal>
  );
};

export default SupplierForm;
