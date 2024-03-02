import { Col, Row } from 'antd';
import React, { useState } from 'react';
import Button from '../../../shared/components/Button';
import "./styles.scss";
import CompanyRep from "../../../assets/images/company_men.svg"
import ProductRep from "../../../assets/images/product_girl.svg"

type Props = {
  redResourceImg: string;
  greenResourceImg: string;
  cardType: "company" | "product";
}

const GoalCard = ({redResourceImg, greenResourceImg, cardType}: Props) => {
  const [cardState, setCardState] = useState(false)

  const toggleCardState = () => setCardState(prev => !prev)
  return (<div className={`emission-card ${cardType} ${cardState? "red-card" : "green-card"}`}  onClick={toggleCardState}>
    <Col className="emission-card__wrapper">
      <p className="emission-card__pre-info">Total CO<sub>2</sub>e od company</p>
      <h2 className={`${cardState? "red-card" : "green-card"}`}>
        34560.00
        <span className="header-units">CO<sub>2</sub>e</span>
      </h2>
      <p className={`growth-wrapper ${cardState? "red-card" : "green-card"}`}>
        <span className="growth-info">20% more than the set goal</span>
        <span className="goal-info"> 25000.00 CO2e</span>{' '}
        <Button type='link'>Edit</Button>
      </p>
    </Col>
    <div className={`resource-img ${cardType} ${cardState? "red-card" : "green-card"}`}>
      <img src={cardState?redResourceImg:greenResourceImg} alt="" draggable="false"/>
      <div className={`resource-img-green ${cardState? "hidden": ""} ${cardType}`}>{
      <img src={cardType === "product"? ProductRep :  CompanyRep} alt="" />
    }</div>
    </div>
   
    </div>
  )
}

export default GoalCard