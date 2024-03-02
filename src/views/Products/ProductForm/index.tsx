import React, { useState } from 'react';
import Modal from '../../../shared/components/Modal';
import { Form, Formik } from 'formik';
import InputField from '../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Col, Row } from 'antd';
import { validationSchema } from './ProductValidation';
import DropdownField from '../../../shared/components/DropdownField';
import { useNavigate } from 'react-router-dom';

import { AppRoutes } from '../../../routes/routeConstants/appRoutes';
import UploadProfile from '../../../shared/components/UploadProfile';
import DatePickerField from '../../../shared/components/DatePickerField';

type Props = {
  visible: boolean;
  closeForm: () => void;
};

const ProductForm = ({ visible, closeForm }: Props) => {
  const navigate = useNavigate();
  const [brand, setBrand] = useState<string>()
  const [temp, setTemp] = useState()
  const [facility, setFacility] = useState()
  const onSubmit = () => {
    console.log('sibnmoit');
    navigate(AppRoutes.PRODUCT_FORM_CREATE)
  };

  const handleBrandChange = (value: string) => {
    console.log(value)
    setBrand(value)}
  return (
    <Modal
      width={900}
      title="Create Product"
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
              <Col span={24}><UploadProfile /></Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="title"
                  placeholder="Product name"
                />
              </Col>
              <Col span={12}>
              <DropdownField
                      name="brand"
                      placeholder='Select Brand'
                      value={brand}
                      options={[
                        { label: 'Brand 1', vale: '1' },
                        { label: 'Brand 2', vale: '2' },
                        { label: 'Brand 3', vale: '3' },
                        { label: 'Brand 4', vale: '4' },
                      ]}
                      onSelect={handleBrandChange}
                    />
              </Col>
              <Col span={12}>
                <Row gutter={12}>
                  <Col span={19}>
                    {' '}
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      name="netWeight"
                      placeholder="Product net weight (excluding packing)"
                    />
                  </Col>
                  <Col span={5}>
                    <DropdownField
                      name="weightUnits"
                      placeholder='Units'
                      value={"ml"}
                      options={[
                        { label: 'ml', vale: 'ml' },
                        { label: 'mg', vale: 'mg' },
                        { label: 'g', vale: 'g' },
                        { label: 'kg', vale: 'kh' },
                      ]}
                    />
                  </Col>
                </Row>
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="gross"
                  placeholder="Product gross weight (including packing)"
                />
              </Col>
              <Col span={12}>
              <DropdownField
                      name="temperature"
                      placeholder='Temperature'
                      value={temp}
                      options={[
                        { label: 'Cold', vale: 'Cold' },
                        { label: 'Warm', vale: 'Warm' },
                        { label: 'Hot', vale: 'Hot' },
                        { label: 'Freezed', vale: 'Freezed' },
                      ]}
                    />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="productionUnits"
                  placeholder="Reporting period production (units)"
                />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="soldCost"
                  placeholder="Percentage of processing facility cost of goods sold"
                />
              </Col>
              <Col span={12}>
                <DatePickerField
                name="reportingPeriod"
                ></DatePickerField>
              </Col>
              <Col span={12}>
              <DropdownField
                      name="facility"
                      placeholder='Processing Facility'
                      value={facility}
                      options={[
                        { label: 'Facility1', vale: 'Facility1' },
                        { label: 'Facility2', vale: 'Facility2' },
                        { label: 'Facility3', vale: 'Facility3' },
                        { label: 'Facility4', vale: 'Facility4' },
                      ]}
                    />
              </Col>
              <Col span={12}>
                <InputField
                  type={INPUT_TYPE.TEXT}
                  name="density"
                  placeholder="Density of the product"
                />
              </Col>
            </Row>
          </Form>
        </Formik>
      </Row>
    </Modal>
  );
};

export default ProductForm;
