import React, { InputHTMLAttributes } from 'react';
import './InputCurrency.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    type: string;
}

const InputCurrency: React.FC<Props> = ({ name, label, type, ...rest }) => {
    return (
        <div className="input-currency">
            <label htmlFor={name}>{label}</label>
            <input type={type} {...rest} id={name} name={name}/>
        </div>
    )
}

export default InputCurrency;