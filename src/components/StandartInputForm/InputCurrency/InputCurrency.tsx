import React, { InputHTMLAttributes } from 'react'
import './InputCurrency.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  type: string
  onchange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const InputCurrency: React.FC<Props> = ({ name, label, type, onchange }: Props) => {
  return (
    <div className='input-currency'>
      <label htmlFor={name}>{label}</label>
      <input type={type} onChange={onchange} id={name} name={name} />
    </div>
  )
}

export default InputCurrency
