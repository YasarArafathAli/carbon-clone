import React from "react";
import { Select } from "antd";
import "./dropdown.scss";
import { Field, ErrorMessage } from "formik";
import Error from "../Error";

interface DropdownProps {
  options?: any[];
  title?: string;
  placeholder?: string;
  value?: any;
  mode?: 'multiple' | 'tags';
  onChange?: (value: any, option: any) => void;
}

function Dropdown(props: DropdownProps) {
  const {
    title,
    options,
    placeholder,
    onChange,
    value,
    mode
  } = props;

  return (
          <div
            className={`dropdown-field`}
          >
            {title && <div className="dropdown-field__title">{title}</div>}
            <Select
              options={options}
              placeholder={placeholder ?? "Select"}
              onChange={onChange}
              allowClear
              value={value}
              
              mode={mode}
            />
          </div>
        );
}

export default Dropdown;
