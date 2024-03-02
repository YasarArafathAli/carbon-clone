import React, { FC } from "react";
import "./error.module.scss"

interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
    return (
        <div className="input__error">
            { message }
        </div>
    )
}

export default ErrorMessage;