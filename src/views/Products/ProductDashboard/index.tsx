import { Col, Row } from 'antd';
import React from 'react';
import BarChart from '../../../shared/components/BarChart';
import LineChart from '../../../shared/components/LineChart';
import './styles.scss';
import Button from '../../../shared/components/Button';
import CarbonLabel from '../../../assets/images/carbonLabel.png';
import DownloadIcon from '../../../assets/icons/download.svg';
import Dropdown from '../../../shared/components/Dropdown';
type Props = {};
const dataset1 = [
  {
    id: 1,
    product_name: 'Raw Material',
    emissions: 32,
  },
  {
    id: 1,
    product_name: 'Raw Material transportation',
    emissions: 6,
  },
  {
    id: 1,
    product_name: 'Processing Facility',
    emissions: 60,
  },
  {
    id: 1,
    product_name: 'Product Distribution',
    emissions: 2,
  },
];

const dataset2 = [
  {
    id: 1,
    product_name: 'Wheat - Canada',
    emissions: 32,
  },
  {
    id: 1,
    product_name: 'Sugar - Brazil',
    emissions: 6,
  },
  {
    id: 1,
    product_name: 'Sunflower Oil - Argentina',
    emissions: 60,
  },
  {
    id: 1,
    product_name: 'Wheat - Canada',
    emissions: 2,
  },
  {
    id: 1,
    product_name: 'Sunflower Oil - Argentina',
    emissions: 90,
  },
  {
    id: 1,
    product_name: 'Wheat - Canada',
    emissions: 93,
  },
  {
    id: 1,
    product_name: 'Sugar - Brazil',
    emissions: 79,
  },
  {
    id: 1,
    product_name: 'Sunflower Oil - Argentina',
    emissions: 12,
  },
  {
    id: 1,
    product_name: 'Sugar - Brazil',
    emissions: 49,
  },
  {
    id: 1,
    product_name: 'Wheat - Canada',
    emissions: 90,
  },
];

const dataset3 = [
  {
    id: 'jan',
    value: 80,
  },
  {
    id: 'feb',
    value: 77,
  },
  {
    id: 'mar',
    value: 60,
  },
  {
    id: 'apr',
    value: 52,
  },
  {
    id: 'may',
    value: 49,
  },
  {
    id: 'jun',
    value: 42,
  },
  {
    id: 'jul',
    value: 30,
  },
  {
    id: 'aug',
    value: 23,
  },
  {
    id: 'sep',
    value: 15,
  },
  {
    id: 1,
    value: 30,
  },
  {
    id: 1,
    value: 13,
  },
  {
    id: 1,
    value: 9,
  },
];
const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const ProductDashboard = (props: Props) => {
  return (
    <div className="product-dashboard-wrapper">
      <Row justify="space-between">
        <Col span={9}>
          <BarChart
            title="CO2e of each Life Cycle Stage"
            label="Carbon Footprint"
            yAxisTitle="In percentage"
            dataset={dataset1}
            additionalSuffix={
              <Row justify='end'>
              <Col span={6}><Dropdown
                value={'B2B'}
                options={[
                  {
                    id: 1,
                    value: 'B2B',
                  },
                  {
                    id: 2,
                    value: 'B2C',
                  },
                ]}
              /></Col></Row>
            }
          />
        </Col>
        <Col span={14}>
          <BarChart
            title="Breakdown of each Life Cycle Stage"
            label="Carbon Footprint"
            yAxisTitle="In percentage"
            dataset={dataset2}
            additionalSuffix={
              <Row gutter={[16, 16]} justify="end" className="cycle-stage-dropdown">
                <Col span={6}>
                  <Dropdown
                    value={'B2B'}
                    options={[
                      {
                        id: 1,
                        value: 'B2B',
                      },
                      {
                        id: 2,
                        value: 'B2C',
                      },
                    ]}
                  />
                </Col>
                <Col span={12 }>
                  <Dropdown
                    value={'Raw Material'}
                    options={[
                      {
                        id: 1,
                        value: 'Raw Material',
                      },
                      {
                        id: 4,
                        value: 'Processing Facility',
                      },
                      {
                        id: 2,
                        value: 'Product Distribution',
                      },
                    ]}
                  />
                </Col>
              </Row>
            }
          />
        </Col>
        <Col span={24}>
          <LineChart
            title="Breakdown of each Life Cycle Stage"
            label="Carbon Footprint"
            yAxisTitle="In percentage"
            dataset={dataset3}
            labels={labels}
            additionalSuffix={
              <Row justify='end'>
              <Col span={6}><Dropdown
                value={'B2B'}
                options={[
                  {
                    id: 1,
                    value: 'B2B',
                  },
                  {
                    id: 2,
                    value: 'B2C',
                  },
                ]}
              /></Col></Row>
            }
          />
        </Col>
        <Col span={11} className="analytics">
          <Row justify="space-between" className="analytics-title">
            <h4>
              Total CO<sub>2</sub>e of annual production
            </h4>
            <Dropdown
              value={'B2B'}
              options={[
                {
                  id: 1,
                  value: 'B2B',
                },
                {
                  id: 2,
                  value: 'B2C',
                },
              ]}
            />
          </Row>
          <div className="analytics-card">
            <h2>
              24.34
              <span className="header-units">
                CO<sub>2</sub>e
              </span>
            </h2>
            <p className="growth-wrapper">
              <span className="growth-info">20% more than the set goal</span>
              <span className="goal-info"> 25000.00 CO2e</span>{' '}
              <Button type="link">Edit</Button>
            </p>
          </div>
        </Col>
        <Col span={11} className="analytics">
          <Row justify="space-between" className="analytics-title">
            <h4>Consumer Facing Carbon footprint Label</h4>
          </Row>
          <div className="carbon-footprint">
            <Row>
              <Col span={12} className="label">
                <img src={CarbonLabel} alt="" />
                <h4>
                  <span className="value">0.84</span>
                  <br />
                  <span className="unit">
                    Kg CO<sub>2</sub>e
                  </span>
                  <br />
                  <span className="scale">per Kg</span>
                  <br />
                </h4>
              </Col>
              <Col span={6} className="m-auto">
                <Button type="primary" suffixIcon={DownloadIcon}>
                  Download
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDashboard;
