import React, { ReactElement } from 'react';
import Button from '../Button';
import { Col, Row } from 'antd';
import "./styles.scss";
import PlusIcon from "../../../assets/icons/add.svg"
import { ButtonType } from 'antd/lib/button';

type AppHeaderProps = {
  title: string;
  buttonText?: string | ReactElement;
  buttonAction?: () => void;
  buttonType?: ButtonType;
  smallHeader?: boolean;
  additionalButtonText?: string | ReactElement;
  additionalButtonType?: ButtonType;
  additionalButtonAction?: () => void;
  showAddIcon?: boolean;
  customPrimaryButtonIcon?: string;
};

const AppHeader = ({ title, buttonText, smallHeader,buttonAction,additionalButtonText, additionalButtonAction,showAddIcon, additionalButtonType = "ghost",buttonType, customPrimaryButtonIcon= PlusIcon }: AppHeaderProps) => {
  return (
    <Row className="app-header-wrapper" justify='space-between'>
      <Col className={`header-title ${smallHeader && "small"}`}>
        <h1>{title}</h1>
      </Col>
      <Col>
      <Row gutter={[16,16]}>
      {additionalButtonText && <Col><Button type={additionalButtonType} clickHandler={additionalButtonAction}>{additionalButtonText}</Button></Col>}
      {buttonText && <Col><Button type={buttonType ?? "primary"} {...showAddIcon? {prefixIcon: customPrimaryButtonIcon} :{}} clickHandler={buttonAction}>{buttonText}</Button></Col>}
      </Row>
      </Col>
     
    </Row>
  );
};

export default AppHeader;
