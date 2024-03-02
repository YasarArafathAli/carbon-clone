import React, { FC } from 'react'
import "./radio.module.scss"
import { Radio as AntRadio, CheckboxOptionType, RadioChangeEvent } from "antd";
import { Field } from 'formik';

interface RadioProps {
    name: string
    value?: string | number
    options: CheckboxOptionType[]
    onChange: (e: string| number) => void
}

const Radio: FC<RadioProps> = (props) => {

    const {
        name,
        value,
        options,
        onChange,
    } = props

    return (
        <Field name={name}>
            {({ field }: any) => <div className="radio-component">
                <AntRadio.Group
                    {...field}
                    value={value}
                    options={options}
                    onChange={(e) => onChange(e.target.value)}
                />
            </div>}
        </Field>
    )
}

export default Radio;