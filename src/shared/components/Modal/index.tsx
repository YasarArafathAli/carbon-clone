import React from 'react';
import { Modal as CustomModal } from 'antd';
import './modal.scss';

interface ModalProps {
  children?: React.ReactNode;
  handleShow?: () => void;
  closeModal: () => void;
  handleOk?: () => void;
  visible: boolean;
  width?: number;
  title?: string;
  cancelDanger?: boolean;
  footer?: JSX.Element[];
  confirmLoading?: boolean;
  cancelText?: string;
  okText?: string;
}

/* Pass in the following props: 
child component, 
closeModal function,
open/close state for the modal
modal Title (optional)
width (optional)
footer (optional) - pass array of JSX.Element like buttons for the footer
handleOk (optional) - pass an async function: to be used for executing async operationsw
confirmLoading(optional) - Boolean value to set loading indicator for confirm button in a modal
*/
const Modal: React.FC<ModalProps> = ({
  children,
  closeModal,
  visible,
  title,
  width,
  handleOk,
  cancelDanger,
  footer,
  okText,
  cancelText,
  confirmLoading,
}: ModalProps) => {
  return (
    <div className='modal-container'>
      <CustomModal
        width={width ?? width}
        footer={footer ?? footer}
        title={title ? title : ''}
        visible={visible}
        cancelText={cancelText}
        centered
        onOk={handleOk ? handleOk : closeModal}
        onCancel={closeModal}
        okText ={okText}
        cancelButtonProps={{danger: cancelDanger}}
        confirmLoading={confirmLoading}
      >
        {children}
      </CustomModal>
    </div>
  );
};

export default Modal;
