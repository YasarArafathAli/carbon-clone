import { Checkbox, Col, Row } from 'antd';
import React, { useState } from 'react';
import InputField from '../../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../../enums/inputType';
import { EndMarketModel, ProductsModel } from '../../../../models/Products/products.model';
import {  RawMaterialType } from '../RawMaterialField';
import { FormikProps } from 'formik';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

type Props = {
  data: EndMarketModel;
  type?: RawMaterialType;
  form: FormikProps<ProductsModel>;
  index: number;
};
const EndMarketField = ({
  data,
  index,
  form,
  type = RawMaterialType.INGREDIENT,
}: Props) => {
  const {values, setFieldValue} = form;
  const [airTransport, setAirTransport] = useState( data.airTransport ?? false);
  const handleCheckboxChange = (e: CheckboxChangeEvent) => {
    setFieldValue(`endMarketLocation[${index}].airTransport`,e.target.value)
    setAirTransport(prev => !prev)}
  return (
    <Row className="form-wrapper">
      <h4 className="serial-number">{index+1}</h4>
      <Col span={5} className="mt-auto">
        <InputField
          type={INPUT_TYPE.TEXT}
          name={`endMarketLocation[${index}].location`}
          value={values.endMarketLocation && values.endMarketLocation[index].location}
          placeholder="Enter End Market Location"
          title="End Market Location"
        />
      </Col>
      <Col span={5} className="mt-auto">
        <InputField
          type={INPUT_TYPE.TEXT}
          name={`endMarketLocation[${index}].goodsSent`}
          value={values.endMarketLocation && values.endMarketLocation[index].goodsSent}
          placeholder="Goods Sent Through This Type"
          title="Goods Sent Through This Type"
        />
      </Col>

      <Col className="my-auto">
        <Checkbox checked={airTransport} onChange={handleCheckboxChange}>
          Check this box if transportation is via air.
        </Checkbox>
      </Col>
    </Row>
  );
};

export default EndMarketField;
