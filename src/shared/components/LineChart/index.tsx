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
import annotationPlugin, { AnnotationOptions } from 'chartjs-plugin-annotation';
import { Col, Row } from 'antd';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

ChartJS.register(annotationPlugin);

type BarProps = {
  title: string;
  label: string;
  yAxisTitle?: string;
  dataset: any
  labels?: any[];
  additionalSuffix?: ReactElement;
}




const LineChart = ({title, label, yAxisTitle, dataset, labels, additionalSuffix}: BarProps) => {

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
      },
       annotation: {
      annotations: [{
        type: 'line',
        yMin: 30,
        yMax: 30,
        borderColor: '#02A88A',
        borderWidth: 1,
        borderDash:[10,10],
        label: {
          content: "Goal 20%",
          position: "end",
          width: 100,
          height: 100
      
        }
      }] as AnnotationOptions[]
    },
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
              lineWidth: 1,  
            },
            border:{
              dash: [4,4]
            },
          },
    }
  };

const defaultLabels = dataset.map((data : any) => data.product_name);
// const dataValues = dataset.map((data:any) => data.value);
// console.log(dataValues, dataset)
const data = {
  labels: labels ?? defaultLabels,
  datasets: [
    {
      label,
      data: dataset.map((data:any) => data.value),
      backgroundColor: "#66939E33",
      borderColor: "#66939E",
      fill: true,
      pointRadius: 4,
      pointHitRadius: 10,
      pointBackgroundColor: "#ffffff",
      pointBorderWidth: 2,
      borderWidth: 2
    },
  ],
};
  return <Row className="line-chart-wrapper">
    <Row className="line-chart-title" gutter={[12,12]} justify='space-between'>
      <Col span={16}><h4>{title}</h4></Col>
      <Col span={8} className="additional-suffix-wrapper">
      {additionalSuffix}
      </Col>
    </Row>
  <Col span={24} className="chart-card">
  <Line options={options} data={data} />
  </Col>
  </Row>;
}

export default LineChart