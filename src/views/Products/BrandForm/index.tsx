import React, { useState } from 'react';
import Modal from '../../../shared/components/Modal';
import AppHeader from '../../../shared/components/AppHeader';
import { Form, Formik } from 'formik';
import InputField from '../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Button, Col, Row } from 'antd';
import { validationSchema } from './BrandValidation';
import DropdownField from '../../../shared/components/DropdownField';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '../../../routes/routeConstants/appRoutes';

type Props = {
  visible: boolean;
  closeForm: () => void;
};

const BrandForm = ({ visible, closeForm }: Props) => {
  const navigate = useNavigate();
  const [categoryId, setCategoryId] = useState<string>("Category 1")
  const onSubmit = () => {
    console.log('sibnmoit');
    closeForm();
  };

  const handleCategoryChange = (value: string, options:any) => {
    setCategoryId(value)
  }
  return (
    <Modal
      width={450}
      title="Create Product"
      visible={visible}
      closeModal={closeForm}
      okText="Create"
      handleOk={onSubmit}
    >
      <div className="brand-form">
        <Formik
          initialValues={{}}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Row  className="form-actions">
              <Col span={24}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="brandName"
                  placeholder="Brand name"
                />
              </Col>
              <Col span={24}>
              <DropdownField
                      name="category"
                      placeholder='Category'
                      options={[
                        { label: 'Category 1', vale: '1' },
                        { label: 'Category 2', vale: '2' },
                        { label: 'Category 3', vale: '3' },
                        { label: 'Category 4', vale: '4' },
                      ]}
                      value={categoryId} 
                      onChange={() => console.log('sdfg')}
                    />
              </Col>
            </Row>
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};

export default BrandForm;
