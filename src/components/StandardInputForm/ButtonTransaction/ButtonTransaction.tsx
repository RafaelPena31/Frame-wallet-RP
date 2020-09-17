import React, { ButtonHTMLAttributes } from 'react'
import './ButtonTransaction.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const ButtonTransaction: React.FC<Props> = ({ label, onclick }: Props) => {
  return (
    <div className='button-transaction'>
      <button type='submit' onClick={onclick}>
        {label}
      </button>
    </div>
  )
}

ButtonTransaction.defaultProps = {
  onclick: undefined
}

export default ButtonTransaction
