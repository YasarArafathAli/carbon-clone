import React, { useState } from "react";
import { Col, Menu, Row } from 'antd';
import "./navbar.scss";
import Notification from "../Notification";
import { NotificationTypes } from "../../../enums/notificationTypes";
import DashBoardPlain from "../../../assets/icons/dashboard_def.svg";
import ProductPlain from "../../../assets/icons/product_tog.svg";
import DashBoardSelected from "../../../assets/icons/dashboard_tog.svg";
import ProductSelected from "../../../assets/icons/product_def.svg";
import ValueChainSelected from "../../../assets/icons/value_chain_def_and_tog.svg"
import AccountsPlain from "../../../assets/icons/accounts_def.svg"
import AccountsSelected from "../../../assets/icons/accounts_tog.svg"
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../../../assets/ColorIcons/PNG/super_plan.png"
import { BellOutlined } from "@ant-design/icons";
import CustomAvatar from "../CustomAvatar";
import user1 from "../../../assets/images/user_2.jpeg"
import { MenuInfo } from 'rc-menu/lib/interface';
import { NavigationRoutes } from "../../../routes/routeConstants/appRoutes";

const Navbar = (props: any) => {
  const navigate = useNavigate()
  const location = useLocation()
  const [selectedKey, setSelectedKey] = useState<string>(location.pathname);

  const handleClick = (e: MenuInfo) => {
    setSelectedKey(e.key);
    navigate(e.key)
    
  };
  return (
    <div className="navbar-wrapper">
      <Row dir="column" justify="space-between">
        <Col className="top-navbar">
          <div className="navbar-link-container logo">
            <img src={Logo} alt="Logo" />
          </div>
          <Menu 
          onClick={handleClick} 
          defaultSelectedKeys={[selectedKey]}
          mode="inline"
          selectedKeys={[selectedKey]}
          // mode="horizontal"
          >
            <Menu.Item className="navbar-link-container" key={NavigationRoutes.DASHBOARD}>
              <img
                src={
                  selectedKey.includes('dashboard')
                    ? DashBoardSelected
                    : DashBoardPlain
                }
                alt="Dashboard"
              />
              <p className="navbar-link"> Dashboard</p>
            </Menu.Item>
            <Menu.Item className="navbar-link-container" key={NavigationRoutes.PRODUCT}>
              <img
                src={
                  selectedKey.includes('product') ? ProductSelected : ProductPlain
                }
                alt="Product"
              />
              <p className="navbar-link"> Product</p>
            </Menu.Item>
            <Menu.Item className="navbar-link-container" key={NavigationRoutes.VALUE_CHAIN}>
              <img src={ValueChainSelected} alt="Value chain" />
              <p className="navbar-link"> Value Chain</p>
            </Menu.Item>
            <Menu.Item className="navbar-link-container" key={NavigationRoutes.ACCOUNTS}>
              <img
                src={
                  selectedKey.includes('accounts')
                    ? AccountsSelected
                    : AccountsPlain
                }
                alt="Accounts"
              />
              <p className="navbar-link"> Accounts</p>
            </Menu.Item>
          </Menu>

        </Col>
        <Col className="bottom-navbar">
          <div className="navbar-link-container notification-icon">
            <BellOutlined />
          </div>
          <div className="navbar-link-container user">
            <CustomAvatar url={user1}></CustomAvatar>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Navbar;