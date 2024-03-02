import { Col, Row } from 'antd';
import React from 'react';
import Button from '../../../../shared/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import BackIcon from '../../../../assets/icons/arrow_outline_enclosed.svg';
import AddOutlined from '../../../../assets/icons/add_enclosed.svg';
import { Field, FormikProps, FormikValues } from 'formik';
import { ProductsModel } from '../../../../models/Products/products.model';
type Props = {
  title: string;
  showBackButton?: boolean;
  primaryButtonText?: string;
  hideNextArrow?: boolean;
  backButtonHandler?: () => void;
  primarySubmitHandler?: (values: FormikValues) => void;
  showHeaderAdditionalButtons?: boolean;
  showEndMarketButton?: boolean;
  endMarketHandler?: () => void;
  handleAddIngredient?: () => void;
  handleAddPrimaryMaterial?: () => void;
  handleAddSecondaryMaterial?: () => void;
};

const ProductFormHeader = ({
  title,
  showBackButton,
  primaryButtonText,
  hideNextArrow,
  primarySubmitHandler,
  backButtonHandler,
  endMarketHandler,
  showHeaderAdditionalButtons,
  handleAddIngredient,
  handleAddPrimaryMaterial,
  handleAddSecondaryMaterial,
  showEndMarketButton,
}: Props) => {
  return (
    <Row justify="space-between" className="form-step-header">
      <Col span={8}>
        <p className="form-title">
          {showBackButton && (
            <span className="form-back icon-arrow_outline_enclosed" onClick={backButtonHandler}>
            </span>
          )}
          <span>{title}</span>{' '}
        </p>
      </Col>
      <Col span={16}>
        <Row gutter={[32, 0]} justify={(showHeaderAdditionalButtons) ? "space-around": "end"}>
         {showHeaderAdditionalButtons && <Col className="add-ingredient">
            <Button
              type="link"
              prefixIcon={AddOutlined}
              clickHandler={handleAddIngredient}
            >
              Add ingredient
            </Button>
          </Col>}
          {showHeaderAdditionalButtons &&
          <Col className="primary-packing">
            <Button
              type="link"
              prefixIcon={AddOutlined}
              clickHandler={handleAddPrimaryMaterial}
            >
              Add Primary packing Material
            </Button>
          </Col>}
          {showHeaderAdditionalButtons &&
          <Col className="secondary-packing">
            <Button
              type="link"
              prefixIcon={AddOutlined}
              clickHandler={handleAddSecondaryMaterial}
            >
              Add Secondary Packing Material
            </Button>
          </Col>}
          {showEndMarketButton &&  <Col className="end-market">
            <Button
              type="link"
              prefixIcon={AddOutlined}
              clickHandler={endMarketHandler}
            >
              Add End Market Location
            </Button>
            </Col>}
          {!!primarySubmitHandler && <div className="next">
            <Button
              type="primary"
              htmlType='submit'
              clickHandler={primarySubmitHandler}
            >
              {' '}
              {primaryButtonText} {!hideNextArrow && <ArrowRightOutlined />}
            </Button>
          </div>}
        </Row>
      </Col>
    </Row>
  );
};

export default ProductFormHeader;
