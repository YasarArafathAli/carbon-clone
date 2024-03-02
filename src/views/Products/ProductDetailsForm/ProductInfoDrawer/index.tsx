import { Col, Drawer, Row } from 'antd';
import React from 'react'
import DrinkImg from "../../../../assets/images/product_img1.png"
import Button from '../../../../shared/components/Button';
import { ArrowRightOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../routes/routeConstants/appRoutes';
type Props = {
  visible: boolean;
}

const ProductInfoDrawer = ({visible}: Props) => {
  const navigate=  useNavigate();

  const handleProductDashboard = () => {
    navigate(AppRoutes.PRODUCT_DASHBOARD)
  }
  return (
    <Drawer
    width={250}
    closable={false}
    visible={visible}
    placement="right"
    zIndex={5}
    mask={false}
  >
    <div className="product-info-wrapper">
      <div className="product-info-header">
        <div className="header-img"><img src={DrinkImg} alt="" width={200} /></div>
        <div className="header-info text-center m-0">
          <h2>Beverage Product</h2>
          <p className='quantity m-0'>250 ml</p>
          <p className="brand m-0">Brand</p>
        </div>
        
      <div className="product-details">
        <Row justify='space-between' className='mb-5'>
          <Col span={15}>Product gross weight (g)</Col>
          <Col span={8} className='m-auto text-right'><h5>300g</h5></Col>
        </Row>
        <Row justify='space-between' className='mb-5'>
          <Col span={15}>Temperature control</Col>
          <Col span={8} className='m-auto text-right'><h5>Ambient</h5></Col>
        </Row>
        <Row justify='space-between' className='mb-5'>
          <Col span={15}>Reporting period production (units)</Col>
          <Col span={8} className='m-auto text-right'><h5>27342</h5></Col>
        </Row>
        <Row justify='space-between' className='mb-5'>
          <Col span={15}>Percentage of processing facility cost of goods sold</Col>
          <Col span={8} className='m-auto text-right'><h5>17%</h5></Col>
        </Row>
        <Row justify='space-between' className='mb-5'>
          <Col span={15}>Choose reporting period</Col>
          <Col span={8} className='m-auto text-right'><h5>May 2023- May 2024</h5></Col>
        </Row>
      </div>
      <div className="emission-info">
        <Row className='emission-row'>
          <Col span={6}><h4>B2B</h4></Col>
          <Col span={15}><span className='emission-value'>25.7 CO2e</span></Col>
        </Row>
        <Row className='emission-row'>
          <Col span={6}><h4>B2C</h4></Col>
          <Col span={15}><span className='emission-value'>25.7 CO2e</span></Col>

        </Row>
      </div>
      <div className="product-dashboard-link text-center">
      <Button
          type="link"
          clickHandler={handleProductDashboard}
        >
          Product Dashboard <ArrowRightOutlined />
        </Button>
      </div>
      </div>

      {/* <Drawer
    width={"95vw"}
    closable={false}
    visible={activeStep>3}
    placement="right"
    zIndex={5}
    mask={false}
  ></Drawer> */}
    </div>

  </Drawer>
  )
}

export default ProductInfoDrawer