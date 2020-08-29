import React from 'react';

import './CurrencyTable.scss';

import { Link } from 'react-router-dom';

interface Props {
  currencyControler: Array<{
    id: number;
    name: string;
    price: number;
    icon: any;
  }>
}

const CurrencyTable: React.FC<Props> = ({ currencyControler }) => {
  return (
    <>

          {currencyControler.map((currencyControl) => {
            return (
              <div className="currency-table" key={currencyControl.id}>
                <div className="data-table">{currencyControl.id}</div>
                <div className="data-table">
                  <img src={currencyControl.icon} alt={currencyControl.name}/>
                  {currencyControl.name}
                </div>
                <div className="data-table">{currencyControl.price}</div>
                <div className="data-table">
                  <Link to="/">Buy</Link>
                </div>
              </div>
            )
          })}
    </>
  )
}

export default CurrencyTable;
