import { Modal } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useContext, useState } from 'react'
import { currencyIconArray } from '../../assets/IconArray/IconArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import ButtonCurrencyTransaction from '../../components/StandartInputForm/ButtonCurrencyTransaction/ButtonCurrencyTransaction'
import InputCurrency from '../../components/StandartInputForm/InputCurrency/InputCurrency'
import SelectCurrency from '../../components/StandartInputForm/SelectCurrency/SelectCurrency'
import { WalletContext } from '../../context/WalletContext'
import { Coin } from '../../types/Types'
import './Home.scss'

function Homepage(): JSX.Element {
  /*   const [loading, setLoading] = useState(false) */
  const [visible, setVisible] = useState(false)
  const [icon, setIcon] = useState(0)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [currencyList, setCurrencyList] = useState<Array<Coin>>([])
  const currencyStart = [
    { name: 'Bitcoin', value: 64448.78, icon: 5 },
    { name: 'Ethereum', value: 2576.43, icon: 17 },
    { name: 'Bitcoin Cash', value: 1530.58, icon: 6 },
    { name: 'Litecoin', value: 343.4, icon: 27 }
  ]

  /*   const WalletRegisterContext = useContext(WalletContext) */
  const { walletValue, setWalletValue } = useContext(WalletContext)

  function showModal() {
    setVisible(true)
  }

  /*   function handleOk() {
    setLoading(true)
  } */

  function handleClose() {
    setVisible(false)
  }

  function handleCreateCurrencyBox(e: FormEvent) {
    e.preventDefault()

    const { name } = currencyIconArray[icon]

    setCurrencyList([...currencyList, { name, value: currencyValue, icon }])
    setWalletValue([...walletValue, { name, value: currencyValue, icon }])
  }

  return (
    <div className='homepage'>
      <Header />

      <Modal visible={visible} title='New Cryptocurrency' onCancel={handleClose} footer={[]}>
        <form onSubmit={handleCreateCurrencyBox}>
          <SelectCurrency
            name='currencyOptionIcon'
            label='Select a cryptocurrency:'
            onchange={e => {
              setIcon(parseInt(e.target.value, 10))
            }}
            optionControler={[
              { option: 'Ardor', value: 0 },
              { option: 'Ark', value: 1 },
              { option: 'Augur', value: 2 },
              { option: 'Basic Attention Token', value: 3 },
              { option: 'Binancecoin', value: 4 },
              { option: 'Bitcoin', value: 5 },
              { option: 'Bitcoin-cash', value: 6 },
              { option: 'Bitcoin-dark', value: 7 },
              { option: 'Bitconnect', value: 8 },
              { option: 'BitShares', value: 9 },
              { option: 'Bytecoin', value: 10 },
              { option: 'Cardano', value: 11 },
              { option: 'Dash', value: 12 },
              { option: 'Decred', value: 13 },
              { option: 'Digixdao', value: 14 },
              { option: 'Dogecoin', value: 15 },
              { option: 'Eos', value: 16 },
              { option: 'Ethereum', value: 17 },
              { option: 'Ethereum-classic', value: 18 },
              { option: 'Factom', value: 19 },
              { option: 'Gas', value: 20 },
              { option: 'Golem', value: 21 },
              { option: 'Hshare', value: 22 },
              { option: 'Iota', value: 23 },
              { option: 'Komodo', value: 24 },
              { option: 'Kybernetwork', value: 25 },
              { option: 'Lisk', value: 26 },
              { option: 'Litecoin', value: 27 },
              { option: 'Maidsafecoin', value: 28 },
              { option: 'Monacoin', value: 29 },
              { option: 'Monero', value: 30 },
              { option: 'Nem', value: 31 },
              { option: 'Neo', value: 32 },
              { option: 'Omisego', value: 33 },
              { option: 'Pivx', value: 34 },
              { option: 'Populous', value: 35 },
              { option: 'Qtum', value: 36 },
              { option: 'Ripple', value: 37 },
              { option: 'Salt', value: 38 },
              { option: 'Steem', value: 39 },
              { option: 'Stellar', value: 40 },
              { option: 'Stratis', value: 41 },
              { option: 'Tenx', value: 42 },
              { option: 'Tether', value: 43 },
              { option: 'Tron', value: 44 },
              { option: 'Verge', value: 45 },
              { option: 'Vertcoin', value: 46 },
              { option: 'Walton', value: 47 },
              { option: 'Waves', value: 48 },
              { option: 'Zcash', value: 49 }
            ]}
          />
          <div className='input-form-currency'>
            <InputCurrency
              name='currency-name'
              type='number'
              step='0.01'
              label='Value to buy:'
              onchange={e => {
                setCurrencyValue(parseInt(e.target.value, 10))
              }}
            />
            <ButtonCurrencyTransaction label='Finish transaction' onclick={handleClose} />
            {/*             <div className='spin-modal'>
              <Spin spinning={loading} />
            </div> */}
          </div>
        </form>
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
                name={currencyIconArray[currency.icon].name}
                price={currency.value}
                icon={currencyIconArray[currency.icon].iconSet}
                sigla={currencyIconArray[currency.icon].sigla}
                onclick={showModal}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default Homepage
