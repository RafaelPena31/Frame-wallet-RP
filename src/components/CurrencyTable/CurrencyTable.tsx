import React from 'react'
import { Link } from 'react-router-dom'
import './CurrencyTable.scss'

interface currencyControler {
  id: number
  name: string
  sigla: string
  price: number
  icon: string
  onclick: (event: React.MouseEvent<HTMLAnchorElement>) => void
}

const CurrencyTable = ({ id, name, price, icon, sigla, onclick }: currencyControler) => {
  return (
    <div className='currency-table' key={id}>
      <div className='data-table'>{id}</div>
      <div className='data-table'>
        <img src={icon} alt={name} />
        {name}
        <span>{sigla}</span>
      </div>
      <div className='data-table'>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      <div className='data-table'>
        <Link to='/' onClick={onclick}>
          Buy
        </Link>
      </div>
    </div>
  )
}

export default CurrencyTable
