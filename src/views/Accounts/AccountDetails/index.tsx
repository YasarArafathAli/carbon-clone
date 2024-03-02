import { Col, Row } from 'antd'
import React from 'react'
import Logo from "../../../assets/ColorIcons/PNG/super_plan.png"
import "./styles.scss"
type Props = {}

const AccountDetails = (props: Props) => {
  return (
    <div className='account-details-wrapper'>
      <Row className="account-card">
        <Col span={12}>
          <Row>
            <Col span={2}>
            <img src={Logo} alt="Logo" />
            </Col>
            <Col className='title' span={20}>
              <h2>Canadian Company <span className='dot'>&#8226;</span> <span className='title-desc'>Food & beverages</span></h2>
              <p ><span className='icon-location_line'> </span>Ontario, Canada</p>
            </Col>
          </Row>
        </Col>
        <Col className='company-info' span={5}>
          <p><span className='title'>Revenue range</span><span className="value">$10000</span></p>
          <p><span className='title'>Product type</span><span className="value">CPG</span></p>
        </Col>
        <Col className='company-info' span={6}>
        <p><span className='title'>No. of products</span><span className="value">340</span></p>
        <p><span className='title'>Member</span><span className="value">Alberta Food Processing Association</span></p>

        </Col>
      </Row>
    </div>
  )
}

export default AccountDetails