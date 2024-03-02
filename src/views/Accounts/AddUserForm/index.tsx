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

const AddUserForm = ({ visible, closeForm }: Props) => {
  const onSubmit = () => {
    console.log('sibnmoit');
  };
  return (
    <Modal
      width={450}
      title="Add User"
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
              <Col span={24}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="name"
                  placeholder="User name"
                />
              </Col>
              <Col span={24}>
              <InputField
                  type={INPUT_TYPE.TEXT}
                  name="role"
                  placeholder="Role"
                />
              </Col>
              <Col span={24}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="email"
                  placeholder="Email"
                />
              </Col>
              <Col span={24}>
              <InputField
              type={INPUT_TYPE.TEXT}
              name="phoneNumber"
              prefix="+1"
              placeholder="Phone Number (optional)"
            />
              </Col>
              <Col span={24}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="brand"
                  placeholder="Associate with brand / manufacturer unit"
                />
              </Col>
            </Row>
          </Form>
        </Formik>
      </Row>
    </Modal>
  );
};

export default AddUserForm;
