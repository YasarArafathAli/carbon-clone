import React from 'react';
import Modal from '../../../shared/components/Modal';
import AppHeader from '../../../shared/components/AppHeader';
import { Form, Formik } from 'formik';
import InputField from '../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../enums/inputType';
import { Button, Col, Row } from 'antd';
import { validationSchema } from './FacilityValidation';
import DropdownField from '../../../shared/components/DropdownField';
import "./styles.scss"
type Props = {
  visible: boolean;
  closeForm: () => void;
};

const FacilityForm = ({ visible, closeForm }: Props) => {
  const onSubmit = () => {
    console.log('sibnmoit');
  };
  return (
    <Modal
      width={900}
      title="New Processing Facility"
      visible={visible}
      closeModal={closeForm}
      okText="Create"
      handleOk={onSubmit}
    >
      <Row className="facility-form">
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
                  name="facilityName"
                  placeholder="Processing Facility name"
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
              <Col span={24}>
              <h3 className="sub-header">Scope value</h3>
              </Col>

              <Col span={12}>
                <Row gutter={12}>
                  <Col span={16}>
                    {' '}
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      name="net"
                      placeholder="Product net weight (excluding packing)"
                    />
                  </Col>
                  <Col span={8}>
                    <DropdownField
                      name="weightUnits"
                      placeholder='Units'
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
                <Row gutter={12}>
                  <Col span={16}>
                    {' '}
                    <InputField
                      type={INPUT_TYPE.TEXT}
                      name="net"
                      placeholder="Product net weight (excluding packing)"
                    />
                  </Col>
                  <Col span={8}>
                    <DropdownField
                      name="weightUnits"
                      placeholder='Units'
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
              <Col span={24} className="additional-link">
              <h2 className="calculate-link">Calculate Scope 1 and 2 Emissions</h2>
                <p>If you don’t have scope1 and scope2 value .you can calculate here.</p>
              </Col>
              <Col span={24} className="additional-link">
              <h2 className="calculate-link">Enter Waste Management EOL Data</h2>
                <p>Check this box, If you don’t have Waste Management Data, Proxy Data of 5% FLW will be taken into account.</p>
              </Col>
              
            </Row>
          </Form>
        </Formik>
      </Row>
    </Modal>
  );
};

export default FacilityForm;
