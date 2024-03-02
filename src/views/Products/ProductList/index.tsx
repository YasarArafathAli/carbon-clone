import React, { MouseEvent, useState } from 'react';
import { ProductsModel } from '../../../models/Products/products.model';
import { Col, Row } from 'antd';
import './styles.scss';
import ConfirmationModal from '../../../shared/components/ConfirmationModal';
import DuplicateIcon from "../../../assets/ColorIcons/PNG/copy_icon.png";
import DeleteIcon from "../../../assets/ColorIcons/PNG/delete_icon.png";
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../routes/routeConstants/appRoutes';

import { ProductTab } from '..';
type ProductListProps = {
  data: ProductsModel[];
  extendedCard?: boolean;
  type: ProductTab;
};

export enum ProductConfirmationTypes {
  DELETE = 'delete',
  DUPLICATE = 'duplicate',
}

const ProductList = ({ data, extendedCard, type }: ProductListProps) => {
  const navigate = useNavigate()

  const [confirmationType, setConfirmationType] =
    useState<ProductConfirmationTypes>();

  const openConfirmationType = (type: ProductConfirmationTypes) => (e: MouseEvent) => {
    e.stopPropagation()
    setConfirmationType(type);
  };

  const closeConfirmationModal = () => setConfirmationType(undefined);

  const onConfirm = () => {
    console.log('consoled');
    closeConfirmationModal();
  };

  const getProductStatusIcon = (status: string) => {
    switch(status){
      case "draft":
          return "icon-draft"
      case "in_review":
        return 'icon-search'
      case "declined":
        return "icon-declined"
      case "verified":
        return "icon-verified"
    }
  }

  const productClickHandler = () => {
    navigate(AppRoutes.PRODUCT_SUMMARY)
  }
  return (
    <Row gutter={[32, 32]} className="product-list-wrapper">
      {data.map((product) => (
        <Col span={6} className="product-card" onClick={productClickHandler}>
          <div className="product-card-wrapper">
            <p className="card-actions">
           {type === ProductTab.VERIFIED && <span
                className="card-action icon-download"
              />}
              <span
                className="card-action icon-duplicate"
                onClick={openConfirmationType(
                  ProductConfirmationTypes.DUPLICATE
                )} />
                <span
                className="card-action icon-delete"
                onClick={openConfirmationType(ProductConfirmationTypes.DELETE)}
              />
             
            </p>
            <Row>
              <Col span={4}>
                <img src={product.productImage} alt="" />
              </Col>
              <Col span={20}>
                <Row>
                <h5 className="product-title">{product.title}</h5>
                {type === ProductTab.PRODUCT && product.status &&   <span className={`product-status ${product.status} ${getProductStatusIcon(product.status)}`}></span>}
                </Row>
              </Col>
            </Row>
            {extendedCard && (
              <div className="extended-card">
                <p>
                  <span className='icon-manufacturer'>
                  </span>
                  <span className="card-info">{product.location}</span>
                </p>
                <p>
                  <span className='icon-brand'>
                  </span>
                  <span className="card-info">{product.brand}</span>
                </p>
                <p className="emissions-info">
                  <span className='icon-co2e'>
                  </span>
                  <span className="card-info">
                    {product.emission}CO<sub>2</sub>e
                  </span>
                </p>
              </div>
            )}
          </div>
        </Col>
      ))}

      <ConfirmationModal
        visible={confirmationType === ProductConfirmationTypes.DUPLICATE}
        title="Do you want to duplicate the product?"
        description="By duplicating the product, it will be considered as a    new product and you have submit the duplicated product for the verification to get the certificate"
        onCancel={closeConfirmationModal}
        onConfirm={onConfirm}
        icon={DuplicateIcon}
              />

<ConfirmationModal
        visible={confirmationType === ProductConfirmationTypes.DELETE}
        title="Do you want to delete the product?"
        description="By deleting the product, it will be permanently removed and you will not be able to retrieve it later."
        onCancel={closeConfirmationModal}
        onConfirm={onConfirm}
        icon={DeleteIcon}
        cancelText='Delete'
        confirmText='Cancel'
        cancelDanger
              />
    </Row>
  );
};

export default ProductList;
