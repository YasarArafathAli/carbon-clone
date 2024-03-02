import React, { FC, useState } from "react";
import { StepProps, Steps, StepsProps } from "antd";

import "./stepper.module.scss";

export interface StepItem extends StepProps {
  component?: React.ReactElement;
}
interface StepperProps extends StepsProps {
  items: StepItem[];
  title?: string;
  destroyOnChange?: boolean;
}

const Stepper: FC<StepperProps> = ({ items, destroyOnChange, ...props }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="stepper">
      <div className="stepper__header">
        <Steps current={current} onChange={setCurrent} {...props}>
          {items.map(({ component, ...props }) => (
            <Steps.Step {...props} />
          ))}
        </Steps>
      </div>
      <div className="stepper__content">
        {destroyOnChange
          ? items[current]?.component
          : items?.map(({ component = <></> }, index) => (
              <div className={index !== current ? "d-none" : ""}>
                {component}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Stepper;
