import { Col, Row } from 'antd';
import React from 'react';
import Button from '../Button';
import Modal from '../Modal';
import "./styles.scss"
type Props = {
  title: string;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  icon?: string;
  cancelDanger?: boolean;
  confirmText?: string;
  largeModal?: boolean;
  cancelText?: string;
  description?: string;
};

const ConfirmationModal = ({ icon, onCancel, onConfirm, visible, cancelDanger, title, description, confirmText, cancelText }: Props) => {
  return (
    <Modal
    visible={visible}
    width={500}
    closeModal={onCancel}
    okText={confirmText?? "Confirm"}
    cancelText={cancelText?? "Cancel"}
    cancelDanger={cancelDanger}
    handleOk={onConfirm}
    >

    <div className="confirmation-wrapper ">
      <Row>
       {icon &&  <Col span={24} className="confirmation-icon p-5 text-center" >
          <img src={icon}  alt="" />
        </Col>}
        <Col  className="confirmation-title text-center" span={24}>
          <h2>{title}</h2>
        </Col>
        {description && <Col  className="confirmation-desc" span={24}>
          <p >{description}</p>
        </Col>}
      </Row>
    </div>
    </Modal>
  );
};

export default ConfirmationModal;
