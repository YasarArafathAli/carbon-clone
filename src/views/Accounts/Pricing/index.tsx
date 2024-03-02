import React from 'react'
import Button from '../../../shared/components/Button'
import { Col, Divider, Row } from 'antd'
import "./styles.scss";
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../routes/routeConstants/appRoutes';
type Props = {
  data: any
}

const Pricing = ({data}: Props) => {
  const navigate = useNavigate()
  const redirectToSubscription = () => navigate(AppRoutes.ACC_SUBSCRIPTION)
  return (
    <div className='pricing-wrapper'>
      <div className="plan-wrapper">
        <h2>Carbon One</h2>
        <Row justify='space-between'>
          <Col span={10}> <p>Premium annual plan <span className='text-light'>From 20 Jan 2021 to 20 Jan 2022</span></p></Col>
          <Col span={10}  className='text-right'><p className='text-light'>We have more exciting plans</p></Col>
        </Row>
        <Row justify='space-between' className='plan-actions'>
          <Col span={5}><Button type='text' >Cancel renewal</Button></Col>
          <Col span={2} className='text-right'><p><Button type='primary' clickHandler={redirectToSubscription}>Change plan</Button></p></Col>
        </Row>
        
      </div>
      <Divider />
      <div className="next-payment-info">
        <h3><span>Your next payment is </span>$7840.00</h3>
        <p className='text-light'>Your payment will be automatically renewed each year</p>
        <small><sup>*</sup>condition applied</small>
      </div>
    </div>
  )
}

export default Pricing