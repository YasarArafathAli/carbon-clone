import React, { FC } from "react";
import { Field, ErrorMessage } from "formik";
import { Input } from 'antd';
import Error from "../Error";
import "./styles.scss"

interface InputFieldProps {
    type: string;
    name: string;
    value?: string | number;
    title?: string;
    placeholder: string;
    prefix?: string;
    disabled?: boolean
}

const InputField: FC<InputFieldProps> = (props) => {
    const { name, title } = props;
    return (
        <div className="field-input-wrapper">
              {title && <p className="mb-1 field-input-title">{title}</p>}
            <Field as={Input} {...props} className="field-input"/>
            <ErrorMessage name={name}>
                {(message: string) => <Error message={message} />}
            </ErrorMessage>
        </div>
    )
}

export default InputField;