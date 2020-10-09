import { Modal } from 'antd'
import 'antd/dist/antd.css'
import firebase from 'firebase'
import React, { FormEvent, useContext, useEffect, useLayoutEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import ButtonCurrencyTransaction from '../../components/StandardInputForm/ButtonTransaction/ButtonTransaction'
import InputCurrency from '../../components/StandardInputForm/InputCurrency/InputCurrency'
import SelectCurrency from '../../components/StandardInputForm/SelectCurrency/SelectCurrency'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import db from '../../functions/db'
import { Coin } from '../../../../types/Types'
import './Coinpage.scss'

function Coinpage(): JSX.Element {
  /*   const [loading, setLoading] = useState(false) */
  const [visible, setVisible] = useState(false)
  const [idLocal, setIdLocal] = useState(0)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [totalCurrencyValue, setTotalCurrencyValue] = useState(0)

  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { currencyUserApp } = useContext(UserContext)

  const history = useHistory()

  let idWallet = ''

  if (currencyUserApp.length !== 0) {
    idWallet = currencyUserApp[0].walletId
  } else {
    history.push('/')
  }

  useEffect(() => {
    if (idWallet !== '') {
      db.collection('wallets')
        .doc(idWallet)
        .get()
        .then(response => {
          const arrayCollection = response.data()
          if (arrayCollection !== undefined) {
            const walletData: Array<Coin> = arrayCollection.coins
            setWalletValue(walletData)
          }
        })
    } else {
      history.push('/')
    }
  }, [setWalletValue, idWallet, history])

  useLayoutEffect(() => {
    db.collection('wallets')
      .doc(idWallet)
      .update({
        coins: walletValue,
        totalValue: firebase.firestore.FieldValue.increment(totalCurrencyValue)
      })
  }, [walletValue, idWallet, totalCurrencyValue])

  function handleCreateCurrencyBox(currencyValueToUpdate: number) {
    const { name } = currencyArray[idLocal]
    const walletIndex = walletValue.findIndex(item => item.name === name)
    if (walletIndex === -1) {
      setWalletValue([...walletValue, { name, value: currencyValueToUpdate, id: idLocal }])
      setTotalCurrencyValue(currencyValueToUpdate)
    } else {
      setWalletValue([
        {
          name: walletValue[walletIndex].name,
          value: walletValue[walletIndex].value + currencyValueToUpdate,
          id: walletValue[walletIndex].id
        },
        ...walletValue.filter(item => item !== walletValue[walletIndex])
      ])
      setTotalCurrencyValue(currencyValueToUpdate)
    }
  }

  function updateCurrencyValue(e: FormEvent) {
    e.preventDefault()
    const currencyValueToUpdate = currencyValue * currencyArray[idLocal].price
    handleCreateCurrencyBox(currencyValueToUpdate)
  }

  function showModal() {
    setVisible(true)
  }

  function handleClose() {
    setVisible(false)
  }

  return (
    <div className='coinpage'>
      <Header />

      <Modal visible={visible} title='New Cryptocurrency' onCancel={handleClose} footer={[]}>
        <form onSubmit={updateCurrencyValue}>
          <SelectCurrency
            name='currencyOptionIcon'
            label='Select a cryptocurrency:'
            onchange={e => {
              setIdLocal(parseInt(e.target.value, 10))
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
              label='Amount of coin to buy:'
              onchange={e => {
                setCurrencyValue(parseFloat(e.target.value))
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

          {currencyArray.map((currency, index) => {
            return (
              <CurrencyTable
                key={currency.iconSet}
                id={index + 1}
                name={currency.name}
                price={currency.price}
                icon={currency.iconSet}
                sigla={currency.sigla}
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

export default Coinpage
