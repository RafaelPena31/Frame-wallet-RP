import React, { ButtonHTMLAttributes } from 'react'
import './ButtonCurrencyTransaction.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  onclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonCurrencyTransaction: React.FC<Props> = ({ label, onclick }: Props) => {
  return (
    <div className='button-currency-transaction'>
      <button type='button' onClick={onclick}>
        {label}
      </button>
    </div>
  )
}

export default ButtonCurrencyTransaction
