import { Button as AntButton } from 'antd';
import { ButtonType } from 'antd/lib/button';
import React, { FC, MouseEventHandler, ReactElement, ReactNode } from 'react'
import "./button.scss"

interface ButtonProps {
    clickHandler?: MouseEventHandler;
    children: ReactNode
    htmlType?: "reset" | "submit" | "button";
    type?: ButtonType
    className?: string;
    icon?: any;
    disabled?: boolean;
    size?: "small"|"medium";
    loading?:boolean,
    prefixIcon?: string;
    suffixIcon?: string;
    name?:string,
    target?:string,
    href?:string,
}

const Button: FC<ButtonProps> = (props) => {
    const { clickHandler, children, htmlType = "button", className, icon, disabled, size, loading,name,target,href, type, prefixIcon, suffixIcon} = props;

    return (
        <div className={`button ${className}`}>
            <AntButton
                loading={!!loading}
                disabled={disabled}
                icon={icon}
                className={`${type} ${size}`}
                htmlType={htmlType}
                onClick={clickHandler}
                name={name}
                target={target}
                href={href}
                type = {type}
                >
                {prefixIcon && <img className='custom-prefix-icon' src={prefixIcon} alt="" />}                
                {children}
                {suffixIcon && <img className='custom-suffix-icon' src={suffixIcon} alt="" />}                

            </AntButton>
        </div>
    )
}

export default Button;