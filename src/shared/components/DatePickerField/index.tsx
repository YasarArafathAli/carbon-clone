import React from "react";
import {
  DatePicker as AntDatePicker,
  DatePickerProps as AntDatePickerProps,
} from "antd";
import "./datePickerField.scss";
import { ErrorMessage, Field, useField } from "formik";
import Error from "../Error";
import { DATE_FORMAT } from "../../constants/date";

interface DatePickerProps {
  name: string;
  title?: string;
}

const DatePicker = ({
  title,
  ...props
}: DatePickerProps & AntDatePickerProps) => {
  return (
    <div className="datepicker-field">
      {title && <div className="dropdown-field__title">{title}</div>}
      <AntDatePicker {...props} />
    </div>
  );
};

const DatePickerWithFormik = (props: DatePickerProps & AntDatePickerProps) => {
  const [, , { setValue }] = useField(props.name);

  const handleChange: AntDatePickerProps["onChange"] = (date) =>
    setValue(date?.format(DATE_FORMAT));

  return (
    <>
      <Field component={DatePicker} onChange={handleChange} {...props} />
      <ErrorMessage name={props.name}>
        {(message) => <Error message={message} />}
      </ErrorMessage>
    </>
  );
};

DatePicker.Formik = DatePickerWithFormik;

export default DatePicker;
