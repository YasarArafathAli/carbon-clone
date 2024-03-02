import React, { ReactNode } from 'react';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';
import './FileUpload.module.scss';
import { UploadFile } from 'antd/lib/upload/interface';

interface FileUploadProps {
  children?: React.ReactNode;
  dragdrop?: boolean;
  uploadIcon?: ReactNode;
  uploadText?: ReactNode;
  uploadHint?: ReactNode;
  fileTypes?: string;
  actionURL?: string;
  multiple?: boolean;
  handleChange: (file: FileList | UploadFile<any>) => void;
}

// Props for generic upload with a button: child component
// Props for DragnDrop:dragdrop, uploadIcon, uploadText, uploadHint, fileTypes
const FileUpload = ({
  children,
  actionURL,
  dragdrop,
  uploadIcon,
  uploadText,
  uploadHint,
  fileTypes,
  multiple,
  handleChange,
}: FileUploadProps) => {
  const { Dragger } = Upload;
  const propsDragDrop: UploadProps = {
    name: 'file',
    multiple: multiple ? true : false,
    action: actionURL
      ? actionURL
      : 'https://www.mocky.io/v2/5cc8019d300000980a055e76', //uploading URL
    headers: {
      authorization: 'authorization-text',
    },
    accept: fileTypes,
    onChange(info) {
      if (info.file.status !== 'uploading') {
        handleChange(info.file);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      handleChange(e.dataTransfer.files);
    },
  };
  const propsGeneric: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        handleChange(info.file);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <div className='file-upload-container'>
      {dragdrop ? (
        <Dragger {...propsDragDrop}>
          <p className='ant-upload-drag-icon'>{uploadIcon}</p>
          <p className='ant-upload-text'>{uploadText}</p>
          <p className='ant-upload-hint'>{uploadHint}</p>
        </Dragger>
      ) : (
        <Upload {...propsGeneric} className='file-upload'>
          {children}
        </Upload>
      )}
    </div>
  );
};

export default FileUpload;
