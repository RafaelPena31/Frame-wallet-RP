import React, {useState} from 'react';

import 'antd/dist/antd.css';
import './Home.scss';

import Header from '../../components/Header/Header';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';

import ardorIcon from '../../assets/icons/ardor.png';

import { Modal, Button } from 'antd';


function Homepage() {

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setLoading(true);
    setTimeout(() =>( 
      setLoading(false), setVisible(false)
    ), 3000);
  }

  function handleCancel() {
    setVisible(false);
  };

  return (
    <div className="homepage">
      <Header>
         <button type="button" onClick={showModal}>New Cryptocurrency+</button>
         <>
          <Modal
            visible={visible}
            title="New Cryptocurrency"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Add
              </Button>,
            ]}
          >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Modal>
         </>
      </Header>
      <main>
        <div className="table-currency">
          <div className="currency-table">
            <div className="header-table">#</div>
            <div className="header-table">Name</div>
            <div className="header-table">Price</div>
            <div className="header-table">$$</div>
          </div>
          <CurrencyTable 
          currencyControler={[
              {id:1, name:'Ardor', price:43000, icon: ardorIcon}
            ]} 
          />
          <CurrencyTable 
          currencyControler={[
              {id:1, name:'Ardor', price:43000, icon: ardorIcon}
            ]} 
          />
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
