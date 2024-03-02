import { Checkbox, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import InputField from '../../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../../enums/inputType';
import { MaterialsModel, ProductsModel } from '../../../../models/Products/products.model';
import { RawMaterialTitle, RawMaterialType } from '../RawMaterialField';
import DropdownField from '../../../../shared/components/DropdownField';
import { FormikProps } from 'formik';
type Props = {
  data: MaterialsModel;
  type?: RawMaterialType;
  form: FormikProps<ProductsModel>;
  index: number;
};
const TransportationField = ({
  data,
  index,
  form,
  type = RawMaterialType.INGREDIENT,
}: Props) => {

  const {setFieldValue,values} = form;
  const [airTransport, setAirTransport] = useState(data.transportation?.airTransport || false);
  const [supplierId, setSupplierId] = useState<string>();
  
  
  useEffect(() => {
   data.transportation && setSupplierId(data.transportation.supplier?.id as string);
  }, []);
 
  const handleCheckboxChange = () => setAirTransport((prev) => !prev);

  const handleSupplierChange = (value: string) => {
    setFieldValue( type === RawMaterialType.INGREDIENT
      ? `ingredients[${index}].transportation.supplier.id`
      : type === RawMaterialType.PRIMARY
      ? `primaryMaterial[${index}].transportation.supplier.id`
      : `secondaryMaterial[${index}].transportation.supplier.id`, value)
  }
  return (
    <Row className="form-wrapper">
      <h4 className="serial-number">{index +1}</h4>
      <Col span={5} className="mt-auto">
        <InputField
          type={INPUT_TYPE.TEXT}
          value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.name) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.name) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.name) ||
                ''
          }
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].name`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].name`
              : `secondaryMaterial[${index}].name`
          }
          disabled
          placeholder={`Enter ${
            type === RawMaterialType.INGREDIENT
              ? RawMaterialTitle.INGREDIENT
              : RawMaterialTitle.MATERIAL
          } Name`}
          title={`Enter ${
            type === RawMaterialType.INGREDIENT
              ? RawMaterialTitle.INGREDIENT
              : RawMaterialTitle.MATERIAL
          } Name`}
        />
      </Col>
      <Col span={5} className="mt-auto">
        <DropdownField
           value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.transportation?.supplier?.id) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.transportation?.supplier?.id) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.transportation?.supplier?.id) ||
                ''
          }
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].transportation.supplier.id`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].transportation.supplier.id`
              : `secondaryMaterial[${index}].transportation.supplier.id`
          }
          placeholder="Supplier"
          options={[
            { label: 'Supplier1', vale: 'Supplier1' },
            { label: 'Supplier2', vale: 'Supplier2' },
            { label: 'Supplier3', vale: 'Supplier3' },
            { label: 'Supplier4', vale: 'Supplier4' },
          ]}
          // onSelect={handleSupplierChange}
        />
      </Col>
      <Col span={5} className="mt-auto">
        <DropdownField
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].transportation.temperature.id`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].transportation.temperature.id`
              : `secondaryMaterial[${index}].transportation.temperature.id`
          }
          value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.transportation?.temperature?.id) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.transportation?.temperature?.id) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.transportation?.temperature?.id) ||
                ''
          }
          placeholder="Temperature"
          options={[
            { label: 'Cold', value: 'Cold' },
            { label: 'Warm', value: 'Warm' },
            { label: 'Hot', value: 'Hot' },
            { label: 'Freezed', value: 'Freezed' },
          ]}
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

export default TransportationField;
