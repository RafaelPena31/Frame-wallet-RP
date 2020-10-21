import { PoweroffOutlined } from '@ant-design/icons'
import { Button, Modal } from 'antd'
import 'antd/dist/antd.css'
import React, { useState } from 'react'
import { BsWallet } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import colors from '../../styles/_colors'
import './Home.scss'

function Homepage(): JSX.Element {
  const [visible, setVisible] = useState(false)

  const currencyStart = [
    { name: 'Bitcoin', icon: 5 },
    { name: 'Ethereum', icon: 17 },
    { name: 'Bitcoin Cash', icon: 6 },
    { name: 'Litecoin', icon: 27 }
  ]

  function showModal() {
    setVisible(true)
  }

  function handleClose() {
    setVisible(false)
  }

  return (
    <div className='homepage'>
      <Header />

      <Modal visible={visible} title='Your cryptocurrency wallet' onCancel={handleClose} footer={[]}>
        <div className='modal-sign'>
          <section>
            <BsWallet size={30} color={colors.secondaryDark} />
            <h1>Frame Wallet</h1>
          </section>
          <div>
            <Link to='/sign'>
              <Button type='primary' icon={<PoweroffOutlined />} size='large'>
                Sign Up - In
              </Button>
            </Link>
          </div>
        </div>
      </Modal>

      <main>
        <div className='table-currency'>
          <div className='currency-table'>
            <div className='header-table'>#</div>
            <div className='header-table'>Name</div>
            <div className='header-table'>Price</div>
            <div className='header-table'>$$</div>
          </div>

          {currencyStart.map(currency => {
            return (
              <CurrencyTable
                key={currency.icon}
                id={currency.icon + 1}
                name={currencyArray[currency.icon].name}
                price={currencyArray[currency.icon].price}
                icon={currencyArray[currency.icon].iconSet}
                sigla={currencyArray[currency.icon].sigla}
                onclick={showModal}
                product={false}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Homepage
