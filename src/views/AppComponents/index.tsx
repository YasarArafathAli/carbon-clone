import { Space, Col, Row } from 'antd';
import { Form, Formik } from 'formik';
import React, { FC, useState } from 'react';
import InputField from '../../shared/components/InputField';
import Tooltip from '../../shared/components/Tooltip';
import Timeline from '../../shared/components/Timeline';
import Tabs from '../../shared/components/Tabs';
import { INPUT_TYPE } from '../../enums/inputType';
import Switch from '../../shared/components/Switch';
import './appComponents.scss';
import { tooltipPosition } from '../../enums/tooltipPosition';
import Drawer from '../../shared/components/Drawer';
import BreadCrumb from '../../shared/components/BreadCrumb';
import Accordion from '../../shared/components/Accordion';
import SearchField from '../../shared/components/SearchField';
import CustomAvatar from '../../shared/components/CustomAvatar';

import FileUpload from '../../shared/components/FileUpload';
import DeleteModal from '../../shared/components/DeleteModal';
import Modal from '../../shared/components/Modal';
import Loader from '../../shared/components/Loader';
import Checkbox from '../../shared/components/Checkbox';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { InboxOutlined, ClockCircleOutlined } from '@ant-design/icons';
import Table from '../../shared/components/Table';
import Stepper from '../../shared/components/Stepper';
import Skeleton from '../../shared/components/Skeleton';
import Radio from '../../shared/components/Radio';
import Button from '../../shared/components/Button';
import DropdownField from '../../shared/components/DropdownField';
const AppComponents: FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checked, setChecked] = useState(true);
  const [checkedList, setCheckedList] = useState<string[]>([])
  const [radio, setRadio] = useState<string | number>();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleCheckboxGroup = (e: CheckboxValueType[]) => {
    setCheckedList(e as string[]);
    console.log(e);
  };

  const handleCheckbox = (e: CheckboxChangeEvent) => {
    setChecked((prevState) => !prevState);
    console.log(e.target.checked);
  }
  const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];


  const modalFooter = [
    <Button key='back' clickHandler={handleCloseModal}>
      Cancel
    </Button>,
    <Button key='submit' type='primary' clickHandler={handleCloseModal}>
      Submit
    </Button>
  ];
  const OpenCloseDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const [searchValue, setSearchValue] = useState('');

  const breadCrumbParams = [
    {
      path: '',
      breadcrumbName: 'Home',
    },
    {
      path: '',
      breadcrumbName: 'Components',
    },
    {
      path: '',
      breadcrumbName: 'Breadcrumb',
    }
  ]


  const list = [{
    id: '1',
    title: 'Panel 1',
    description: 'This is the first accordion panel',
    showArrow: true,
  }, {
    id: '2',
    title: 'Panel 2',
    description: 'This is the second accordion panel (without arrow)',
    showArrow: false,
  },
  {
    id: '3',
    title: 'Panel 3',
    description: 'This is the third accordion panel',
    showArrow: true,
  }
  ]

  const tabs = [
    {
      key: "tab_1",
      label: "Tab 1",
      children: <p>This is Tab 1</p>,
    },
    {
      key: "tab_2",
      label: "Tab 2",
      children: <p>This is Tab 2</p>,
    },
    {
      key: "tab_3",
      label: "Tab 3",
      children: <p>This is Tab 3</p>,
    },
  ];

  const timelines = [
    {
      label: "Step 3",
      children: <p>Demonstrating components</p>,
      dot: <ClockCircleOutlined />
    },
    {
      label: "Step 2",
      children: <p>Approving components</p>,
    },
    {
      label: "Step 1",
      children: <p>Creating components</p>,
    },
  ];



  const activeKeyChanged = (key: string | string[]) => {
    console.log('what was changed?', key)
  }

  return (
    <Row className='app-components' align="top" gutter={[24, 24]}>
      <Col span={24}>
        <h1>App components</h1>
      </Col>
      <Col span={8}>
        <p className='app-components__title'>Drawer: </p>
        <Drawer
          closable={true}
          onClose={OpenCloseDrawer}
          open={isDrawerOpen}
          placement='left'
          title='Menu'
        >
          <p>This is the drawer</p>
        </Drawer>
        <Button clickHandler={OpenCloseDrawer}>Open</Button>
      </Col>
      <Col span={8}>
        <p className='app-components__title'>Tooltip: </p>
        <Space>

          <Tooltip title='This is a tooltip' placement={tooltipPosition.BOTTOM}>
            <Button>Hover</Button>
          </Tooltip>
        </Space>
      </Col>

      <Col span={8}>
        <p className='app-components__title'>Switch: </p>
        <Switch />
      </Col>
      <Col span={8}>
        <p className='mt-5 app-components__title'>Button: </p>
        <Row>
          <Col span={8}>
            <Button type='primary' className='mr-4'>
              Primary Button
            </Button></Col>
          <Col span={8}>
            <Button type="default">Default Button</Button>
          </Col>
          <Col span={8}>
            <Button loading type="primary">Loading Button</Button>
          </Col>
        </Row>


      </Col>
      <Col span={8}>
        <p className='mt-5 app-components__title'>Search: </p>
        <SearchField
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          onSearch={() => { }}
        />
      </Col>
      <Col span={8}>
        <p className='mt-5 app-components__title'>Input: </p>
        <Formik initialValues={{}} onSubmit={() => { }}>
          <Form>
            <InputField
              type={INPUT_TYPE.TEXT}
              name='input'
              placeholder='Enter some text'
            />
          </Form>
        </Formik>
      </Col>
      <Col span={8}>
        <p className='mt-5 app-components__title'>Select: </p>
        <Formik initialValues={{}} onSubmit={() => { }}>
          <Form>
            <DropdownField name="select" options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
            ]}
              onChange={(value) => {
                console.log(value)
              }}
              placeholder={"Select"}
            />
          </Form>
        </Formik>
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Select (Multiple): </p>
        <Formik initialValues={{}} onSubmit={() => { }}>
          <Form>
            <DropdownField name="select" options={[
              { value: 'jack', label: 'Jack' },
              { value: 'lucy', label: 'Lucy' },
            ]}
            mode={"multiple"}
              onChange={(value) => {
                console.log(value)
              }}
              placeholder={"Select"}
            />
          </Form>
        </Formik>
      </Col>


      <Col span={8}>
        <p className='mt-5 app-components__title'>Avatar: </p>

        <Row>
          <Col span={8}>
            <p>Small</p>

            <CustomAvatar name="Joe Pelz" size="small" />
          </Col>
          <Col span={8}>
            <p>Large</p>
            <CustomAvatar name="Tanya Cruz" size="large" /></Col>
          <Col span={8}>
            <p>Unnamed</p>
            <CustomAvatar name="" size="large" /></Col>
        </Row>
      </Col>
      <Col span={8}>
        <p className='mt-5 app-components__title'>File upload:</p>
        <FileUpload handleChange={(value) => console.log(value)}>
          <Button>Upload File</Button>
        </FileUpload>
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Drag and Drop:</p>
        <FileUpload
          dragdrop
          handleChange={(values) => {
            console.log(values);
          }}
          uploadIcon={
            <InboxOutlined />
          }
          uploadText={<p className="ant-upload-text">Click or drag file to this area to upload</p>}
        >
        </FileUpload>
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Modal:</p>
        <Modal
          closeModal={handleCloseModal}
          visible={isModalOpen}
          title='Modal'
          handleOk={handleCloseModal}
          footer={modalFooter}
        >This is the Modal body</Modal>
        <Button clickHandler={handleOpenModal}>Open</Button>
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Delete Modal:</p>
        <DeleteModal resource='component' description='I recommend not to delete it though :('>
          <Button>Delete</Button>
        </DeleteModal>
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Loader:</p>
        <Loader tip='Loading..' />
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Checkbox:</p>
        <Checkbox checked={checked} onChange={(event) => event && handleCheckbox(event)} >
          Checkbox
        </Checkbox>
      </Col>


      <Col span={8}>
        <p className='mt-5 app-components__title'>Checkbox Group:</p>
        <Checkbox group options={options} onChange={(undefined, event) => event && handleCheckboxGroup(event)} />
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Radio:</p>
        <Formik initialValues={{}} onSubmit={() => { }}>
          <Form>
            <Radio
              options={[
                { label: "Apple", value: "apple" },
                { label: "Orange", value: "orange" },
                { label: "Banana", value: "banana" }
              ]}
              value={radio}
              name="radio"
              onChange={(value) => {
                setRadio(value)
                console.log(value)
              }}
            /></Form></Formik>
      </Col>

      <Col span={8}>
        <p className='mt-5 app-components__title'>Skeleton:</p>
        <Skeleton />
      </Col>

      <Col span={11}>
        <p className='mt-5 app-components__title'>Tabs: </p>
        <Tabs items={tabs} />
      </Col>
      <Col span={2} />
      <Col span={11}>
        <p className='mt-5 app-components__title'>Breadcrumb: </p>
        <BreadCrumb params={breadCrumbParams} />
      </Col>
      <Col span={11}>
        <p className='mt-5 app-components__title'>Accordion: </p>
        <Accordion defaultActiveKey="2" accordionList={list} onChange={activeKeyChanged} />
      </Col>
      <Col span={2} />

      <Col span={11}>
        <p className='mt-5 app-components__title'>Timeline: </p>
        <Timeline items={timelines} />
      </Col>


      <Col span={24}>
        <p className='mt-5 app-components__title'>Steps</p>
        <Stepper
          items={[
            {
              title: 'Waiting',
              component: <>Waiting Step Component</>
            },
            {
              title: 'In Progress',
              component: <>In Progress Step Component</>
            },
            {
              title: 'Finished',
              component: <>Finished Step Component</>
            },
          ]}
        />
      </Col>
      <Col span={24}>
        <p className='mt-5 app-components__title'>Table:</p>
        <Table
          columns={[
            {
              title: "Name",
              dataIndex: "name",
              key: "name",
            },
            {
              title: "Age",
              dataIndex: "age",
              key: "age",
            },
            {
              title: "Address",
              dataIndex: "address",
              key: "address",
            },
          ]}
          dataSource={[{
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
          },
          {
            key: '2',
            name: 'John',
            age: 42,
            address: '1 Up Town',
          }]}
        />
      </Col>


    </Row>
  );
};

export default AppComponents;
