import React from 'react';

import './Home.scss';

import Header from '../../components/Header/Header';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';

import ardorIcon from '../../assets/icons/ardor.png';


function Homepage() {
  return (
    <div className="homepage">
      <Header>
         <button type="button">New Cryptocurrency+</button>
      </Header>
      <main>
        <div className="table-currency">
          <CurrencyTable 
          currencyControler={[
              {id:1, name:'Ardor', price:43000, icon: ardorIcon}
            ]} 
          />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
