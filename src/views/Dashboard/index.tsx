import React from 'react';
import AppHeader from '../../shared/components/AppHeader';
import { Row, Col } from 'antd';
import GoalCard from './GoalCard';
import BarChart from '../../shared/components/BarChart';
import Navbar from '../../shared/components/Navbar';
import "./styles.scss"
import ProductRed from "../../assets/images/product_red.svg"
import ProductGreen from "../../assets/images/product_green.svg"
import TotalGreen from "../../assets/images/total_co2e_of_company_green.svg"
import TotalRed from "../../assets/images/total_co2e_of_company_red.svg"

type Props = {};


const dataset = [{
  id:1,
  product_name: "product1",
  emissions: 32
},{
  id:1,
  product_name: "product2",
  emissions: 6
},{
  id:1,
  product_name: "product3",
  emissions: 60
},{
  id:1,
  product_name: "product4",
  emissions: 2
},{
  id:1,
  product_name: "product5",
  emissions: 90
},{
  id:1,
  product_name: "product6",
  emissions: 93
},{
  id:1,
  product_name: "product7",
  emissions: 79
},{
  id:1,
  product_name: "product8",
  emissions: 12
},{
  id:1,
  product_name: "product9",
  emissions: 49
},
{
  id:1,
  product_name: "product10",
  emissions: 90
},{
  id:1,
  product_name: "product11",
  emissions: 93
},{
  id:1,
  product_name: "product12",
  emissions: 79
},{
  id:1,
  product_name: "product13",
  emissions: 12
},{
  id:1,
  product_name: "product14",
  emissions: 49
}
]


const Dashboard = (props: Props) => {
  return (
    <Row>
    <div className="dashboard-wrapper">
      <AppHeader title="Dashboard" />
    <Row className="emission-info" justify='space-between' gutter={[64,0]}>
      <Col span={12}><GoalCard cardType='company' greenResourceImg={TotalGreen} redResourceImg={TotalRed}/></Col>
      <Col span={12}><GoalCard cardType='product' greenResourceImg={ProductGreen} redResourceImg={ProductRed}/></Col>
    </Row>
    <div className="carbon-footprint-wrapper">
      <BarChart title='Product Carbon Footprints (per kg)' label="Carbon Footprint" dataset={dataset}/>
    </div>
    <div className="carbon-footprint-wrapper">
      <BarChart title='Total Product CO2e (annual production) of each product' label={"C02e"} dataset={dataset}/>
    </div>
    </div>
    </Row>
  );
};

export default Dashboard;