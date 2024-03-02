import { Col, Row } from 'antd';
import React from 'react';
import InputField from '../../../../shared/components/InputField';
import { INPUT_TYPE } from '../../../../enums/inputType';
import {
  MaterialsModel,
  ProductsModel,
} from '../../../../models/Products/products.model';
import { FormikProps } from 'formik';
type Props = {
  data: MaterialsModel;
  type?: RawMaterialType;
  index: number;
  form: FormikProps<ProductsModel>;
  deleteHandler: () => void;
};

export enum RawMaterialType {
  PRIMARY = 'primaryMaterial',
  SECONDARY = 'secondaryMaterial',
  INGREDIENT = 'ingredients',
  END_MARKET = 'market',
}

export enum RawMaterialTitle {
  PRIMARY = 'Primary Packing Material',
  MATERIAL = 'Packing Material',
  SECONDARY = 'Secondary Packing Material',
  INGREDIENT = 'Ingredient',
}
const RawMaterial = ({
  data,
  index,
  deleteHandler,
  form,
  type = RawMaterialType.INGREDIENT,
}: Props) => {
  const { setFieldValue, values } = form;

  return (
    <Row className="form-wrapper">
      <h4 className="serial-number">{index + 1}</h4>
      <Col span={type === RawMaterialType.SECONDARY ? 5 : 6}>
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
          placeholder={`Enter ${
            type === RawMaterialType.INGREDIENT
              ? RawMaterialTitle.INGREDIENT
              : RawMaterialTitle.MATERIAL
          } Name`}
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].name`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].name`
              : `secondaryMaterial[${index}].name`
          }
          title={`Enter ${
            type === RawMaterialType.INGREDIENT
              ? RawMaterialTitle.INGREDIENT
              : RawMaterialTitle.MATERIAL
          } Name`}
        />
      </Col>
      <Col span={type === RawMaterialType.SECONDARY ? 5 : 6}>
        <InputField
          type={INPUT_TYPE.TEXT}
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].origin`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].origin`
              : `secondaryMaterial[${index}].origin`
          }
          placeholder={`Enter ${
            type === RawMaterialType.INGREDIENT
              ? RawMaterialTitle.INGREDIENT
              : RawMaterialTitle.MATERIAL
          } Origin`}
          value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.origin) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.origin) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.origin) ||
                ''
          }
          title={`Enter ${
            type === RawMaterialType.INGREDIENT
              ? RawMaterialTitle.INGREDIENT
              : RawMaterialTitle.MATERIAL
          } Origin`}
        />
      </Col>
      <Col span={type === RawMaterialType.SECONDARY ? 5 : 6}>
        <InputField
          type={INPUT_TYPE.TEXT}
          value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.region) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.region) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.region) ||
                ''
          }
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].region`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].region`
              : `secondaryMaterial[${index}].region`
          }
          placeholder="Select Best Fit Production Region"
          title="Select Best Fit Production Region"
        />
      </Col>
      <Col span={2}>
        <InputField
          type={INPUT_TYPE.TEXT}
          value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.quantity) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.quantity) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.quantity) ||
                ''
          }
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].quantity`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].quantity`
              : `secondaryMaterial[${index}].quantity`
          }
          placeholder="Quantity"
          title="Quantity"
        />
      </Col>
      <Col span={2}>
        <InputField
          type={INPUT_TYPE.TEXT}
          value={
            type === RawMaterialType.INGREDIENT
              ? (values.ingredients?.length &&
                  values.ingredients[index as number]?.unit) ||
                ''
              : type === RawMaterialType.PRIMARY
              ? (values.primaryMaterial?.length &&
                  values.primaryMaterial[index]?.unit) ||
                ''
              : (values.secondaryMaterial?.length &&
                  values.secondaryMaterial[index]?.unit) ||
                ''
          }
          name={
            type === RawMaterialType.INGREDIENT
              ? `ingredients[${index}].unit`
              : type === RawMaterialType.PRIMARY
              ? `primaryMaterial[${index}].unit`
              : `secondaryMaterial[${index}].unit`
          }
          placeholder="Unit"
          title="Unit"
        />
      </Col>

      {type === RawMaterialType.SECONDARY && (
        <Col span={3}>
          {' '}
          <InputField
            type={INPUT_TYPE.TEXT}
            name={`secondaryMaterial[${index}].noOfUnits`}
            value={(values.secondaryMaterial?.length &&
              values.secondaryMaterial[index]?.noOfUnits) ||
            ''}
            title="No of Units per Packing Material"
            placeholder="No of Units per Packing Material"
          />
        </Col>
      )}
      <Col span={1}>
        {' '}
        <p className="per-unit">/250g</p>
      </Col>

      <Col className="close-icon" onClick={deleteHandler}>
        <span className="icon-close_enclosed" />
      </Col>
    </Row>
  );
};

export default RawMaterial;
