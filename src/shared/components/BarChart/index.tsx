import React, { ReactElement } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import "./styles.scss";
import { Col, Row } from 'antd';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


type BarProps = {
  title: string;
  label: string;
  yAxisTitle?: string;
  dataset: any;
  additionalSuffix?: ReactElement;

}




const BarChart = ({title, label, yAxisTitle, dataset, additionalSuffix}: BarProps) => {

  const options = {
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: function(value: number) {
          return value;
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    maxBarThickness: 40,
    borderRadius: 5,
    barPercentage: 0.5,
    minBarLength: 10,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          min: 0,
          max: 100,
          stepSize: 25
        },
        title: {
          display: true,
          text: yAxisTitle
        },
        grid: {
          lineWidth: 1, 
        },
        border:{
          dash: [4,4]
        },
        lineHeight: 0
        
      },
      x: {
            grid: {
              lineWidth: 0,
              drawBorder: false,
              display: false
  
            }
          },
    }
  };

const labels = dataset.map((data : any) => data.product_name);

const data = {
  labels,
  datasets: [
    {
      label,
      data: labels.map(() => Math.random() * 100),
      backgroundColor: "#005CA7"
    },
  ],
};
  return <Row className="bar-chart-wrapper">
    <Row className="bar-chart-title" gutter={[12,12]} justify='space-between'>
      <Col span={12}><h4>{title}</h4></Col>
      <Col span={12} className="additional-suffix-wrapper">
        {additionalSuffix}
      </Col>
    </Row>
  <Col span={24} className="chart-card">
 <Bar options={options} data={data} />
  </Col>
  </Row>;
}

export default BarChart