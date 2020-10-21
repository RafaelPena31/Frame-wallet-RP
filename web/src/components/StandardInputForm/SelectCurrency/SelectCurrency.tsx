import React, { SelectHTMLAttributes } from 'react'
import './SelectCurrency.scss'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  optionControler: Array<{
    option: string
    value: number
  }>
  value: number
  onchange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const SelectCurrency: React.FC<Props> = ({ name, label, optionControler, value, onchange }: Props) => {
  return (
    <div className='select-currency'>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={onchange} value={value}>
        <option value='' disabled>
          Select an option
        </option>
        {optionControler.map(option => {
          return (
            <option value={option.value} key={option.value}>
              {option.option}
            </option>
          )
        })}
      </select>
    </div>
  )
}

export default SelectCurrency
