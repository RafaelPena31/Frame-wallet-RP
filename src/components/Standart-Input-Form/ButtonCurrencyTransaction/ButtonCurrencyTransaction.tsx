import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './ButtonCurrencyTransaction.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

const ButtonCurrencyTransaction: React.FC<Props> = ({ label, ...rest }) => {
    return (
        <div className="button-currency-transaction">
            <button {...rest}>
                {label}
            </button>
        </div>
    )
}

export default ButtonCurrencyTransaction;