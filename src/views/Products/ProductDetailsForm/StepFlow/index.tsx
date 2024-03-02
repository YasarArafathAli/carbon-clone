import { Col, Row } from 'antd'
import React from 'react'
import "./styles.scss"
type Props = {
  activeStep: number;
  hideViewMore?: boolean;
}

const StepFlow = ({activeStep, hideViewMore}: Props) => {
  return (
    <Row justify="space-between" className="form-steps m-auto">
      {!hideViewMore && <p className='view-more-info'>Click to view more</p>}
      <Col
        span={6}
        className={`${activeStep > 0 ? 'form-steps-item-completed' : ''}`}
      >
        <Col
          span={12}
          className={`form-steps-item  ${
            activeStep === 0 ? 'active' : ''
          }`}
        >
          Raw Materials
        </Col>
      </Col>
      <Col
        span={6}
        className={`${activeStep > 1 ? 'form-steps-item-completed' : ''}`}
      >
        <Col
       
          className={`form-steps-item  ${
            activeStep === 1 ? 'active' : ''
          }`}
        >
          Raw Materials transportation
        </Col>
      </Col>
      <Col
        span={6}
        className={`${activeStep > 2 ? 'form-steps-item-completed' : ''}`}
      >
        <Col
          span={12}
          className={`form-steps-item  ${
            activeStep === 2 ? 'active' : ''
          }`}
        >
          Processing Facility
        </Col>
      </Col>
      <Col
        span={6}
        className={`${activeStep > 2 ? 'form-steps-item-completed' : ''} `}
        
      >
        <Col
          span={12}
          className={`form-steps-item  ${
            activeStep === 3 ? 'active' : ''
          }`}
        >
          Product Distribution
        </Col>
      </Col>
    </Row>
  )
}

export default StepFlow