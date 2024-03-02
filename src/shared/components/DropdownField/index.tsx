import React from "react";
import { Select } from "antd";
import "./dropdownField.scss";
import { Field, ErrorMessage, FieldProps, FormikProps, FormikValues } from "formik";
import Error from "../Error";

interface DropdownFieldProps {
  name: string;
  options?: any[];
  title?: string;
  defaultValue?: string;
  placeholder?: string;
  value?: any;
  mode?: 'multiple' | 'tags';
  preventSetValue?: boolean
  onChange?: (value: any, option: any) => void;
  onSelect?:  (value: any, option: any) => void;
}

function DropdownField(props: DropdownFieldProps) {
  const {
    name,
    defaultValue,
    title,
    options,
    placeholder,
    preventSetValue,
    onChange,
    onSelect,
    value,
    mode
  } = props;
  const handleOnChange = (form: FormikProps<FormikValues>) => (value: any, opt: any) => {
    form?.setFieldValue(name, value);
    onChange && onChange(value, opt);
  }
  return (
    <Field name={name}>
      {({form}: FieldProps) => {
        return (
          <div
            className={`dropdown-field`}
          >
            {title && <div className="dropdown-field__title">{title}</div>}
            <Select
              options={options}
              placeholder={placeholder ?? "Select"}
              onChange={handleOnChange(form)}
              allowClear
              value={value}
              onSelect={onSelect}
              defaultValue={defaultValue}
              mode={mode}
            />
            <ErrorMessage name={name}>
              {(message: string) => <Error message={message} />}
            </ErrorMessage>
          </div>
        );
      }}
    </Field>
  );
}

export default DropdownField;
