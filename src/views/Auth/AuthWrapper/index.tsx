import React from "react";
import AuthRouter from "../authRouters";
import WelcomeImg from "../../../assets/images/welcome_image.svg"
import "./auth.scss";
import LogoFull from '../../../assets/logo/logo_full.png';
import { Col, Row } from "antd";
const AuthWrapper = () => {
    return (
    <Row className="auth-wrapper">
    <Col span={15} className="auth-welcome-img">
        <img src={WelcomeImg} alt="" />
        <div className="auth-welcome-banner-info">
            <h1>Measure <span>&#8226;</span> Improve <span>&#8226;</span> Communicate</h1>
            <p className="banner-info-text">Trusted Carbon Intelligence for Canadian Food and Beverage Companies</p>
        </div>
    </Col>
    <Col span={9}>
        <div className="auth-wrapper-header">
        <div className="header-logo">
            <img src={LogoFull} alt="" />
          </div>
        </div>
    <AuthRouter />
    </Col>
    </Row>
    )
}

export default AuthWrapper;
