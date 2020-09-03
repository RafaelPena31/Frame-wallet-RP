import React, { SelectHTMLAttributes } from 'react'
import './SelectCurrency.scss'

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string
  label: string
  optionControler: Array<{
    option: string
    value: number
  }>
}

const SelectCurrency: React.FC<Props> = ({ name, label, optionControler, ...rest }) => {
  return (
    <div className='select-currency'>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} {...rest}>
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
