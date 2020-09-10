import React from 'react'
import './CurrencyTable.scss'

interface currencyControler {
  id: number
  name: string
  sigla: string
  price: number
  icon: string
  product: boolean
  onclick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const CurrencyTable: React.FC<currencyControler> = ({ id, name, price, icon, sigla, product, onclick }: currencyControler) => {
  if (product) {
    return (
      <div className='currency-table' key={id}>
        <div className='data-table'>{id}</div>
        <div className='data-table'>
          <img src={icon} alt={name} />
        </div>
        <div className='data-table'>
          {name}
          <span>{sigla}</span>
        </div>
        <div className='data-table'>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
        <div className='data-table'>
          <button type='button' onClick={onclick}>
            Sell
          </button>
        </div>
      </div>
    )
  }
  return (
    <div className='currency-table' key={id}>
      <div className='data-table'>{id}</div>
      <div className='data-table'>
        <img src={icon} alt={name} />
      </div>
      <div className='data-table'>
        {name}
        <span>{sigla}</span>
      </div>
      <div className='data-table'>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
      <div className='data-table'>
        <button type='button' onClick={onclick}>
          Buy
        </button>
      </div>
    </div>
  )
}

CurrencyTable.defaultProps = {
  onclick: undefined
}

export default CurrencyTable
