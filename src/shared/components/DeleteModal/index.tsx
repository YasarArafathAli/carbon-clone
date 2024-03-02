import React from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal } from 'antd';

interface DeleteModalProps {
  children: React.ReactNode;
  resource: string;
  onOk?: () => void;
  onCancel?: () => void;
  description?: string
}
const DeleteModal: React.FC<DeleteModalProps> = ({
  children,
  onOk,
  onCancel,
  resource,
  description
}: DeleteModalProps) => {
  const { confirm } = Modal;
  const showDeleteConfirm = () => {
    confirm({
      title: `Are you sure delete this ${resource}?`,
      icon: <ExclamationCircleFilled />,
      content: description,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk,
      onCancel,
    });
  };

  return <div onClick={showDeleteConfirm}>{children}</div>;
};

export default DeleteModal;
