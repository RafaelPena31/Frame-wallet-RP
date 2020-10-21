import { Divider, message, Modal } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useContext, useState } from 'react'
import { BsWallet } from 'react-icons/bs'
import api from '../../api/api'
import { currencyArray } from '../../assets/currencyArray/currencyArray'
import ButtonCurrencyTransaction from '../../components/StandardInputForm/ButtonTransaction/ButtonTransaction'
import { CapitalValue } from '../../context/CapitalValueContext'
import { TotalValue } from '../../context/TotalValueContext'
import { UserContext } from '../../context/UserContext'
import { WalletContext } from '../../context/WalletContext'
import InputCurrency from '../StandardInputForm/InputCurrency/InputCurrency'
import SelectCurrency from '../StandardInputForm/SelectCurrency/SelectCurrency'
import './Header.scss'
import Menu from './Menu/Menu'

function Header(): JSX.Element {
  const [capital, setCapital] = useState<string>('none')
  const [crypto, setCrypto] = useState<string>('flex')
  const [modalVisibleCrypto, setModalVisibleCrypto] = useState<boolean>(false)
  const [modalVisibleCapital, setModalVisibleCapital] = useState<boolean>(false)
  const [currencyId, setCurrencyId] = useState<number>(0)
  const [currencyValue, setCurrencyValue] = useState(0)
  const [totalCurrencyValue, setTotalCurrencyValue] = useState(0)
  const [capitalValue, setCapitalValue] = useState<number>(0)

  const { walletValue, setWalletValue } = useContext(WalletContext)
  const { currencyUserApp } = useContext(UserContext)
  const { capitalValueContext, setCapitalValueContext } = useContext(CapitalValue)
  const { totalValueContext, setTotalValueContext } = useContext(TotalValue)

  function ResetModals() {
    setModalVisibleCrypto(false)
    setModalVisibleCapital(false)
  }

  async function BuyCurrency(e: FormEvent) {
    e.preventDefault()
    if (currencyValue !== 0) {
      const { name } = currencyArray[currencyId]
      const walletIndex = walletValue.findIndex(item => item.name === name)
      if (capitalValueContext > currencyValue * currencyArray[currencyId].price) {
        if (walletIndex === -1) {
          api.put('walletAdd', {
            uid: currencyUserApp,
            coins: [
              ...walletValue,
              {
                id: currencyId,
                name: currencyArray[currencyId].name,
                value: currencyValue,
                realValue: parseFloat((currencyValue * currencyArray[currencyId].price).toFixed(2))
              }
            ],
            totalValue: parseFloat((totalValueContext + currencyValue * currencyArray[currencyId].price).toFixed(2)),
            capitalValue: capitalValueContext - parseFloat((currencyValue * currencyArray[currencyId].price).toFixed(2))
          })
          setWalletValue([
            ...walletValue,
            {
              id: currencyId,
              name: currencyArray[currencyId].name,
              value: currencyValue,
              realValue: parseFloat((currencyValue * currencyArray[currencyId].price).toFixed(2))
            }
          ])
          setTotalValueContext(parseFloat((totalValueContext + currencyValue * currencyArray[currencyId].price).toFixed(2)))
          setCapitalValueContext(capitalValueContext - parseFloat((currencyValue * currencyArray[currencyId].price).toFixed(2)))
        } else {
          api.put('walletAdd', {
            uid: currencyUserApp,
            coins: [
              ...walletValue.filter(item => item.name !== walletValue[walletIndex].name),
              {
                name: walletValue[walletIndex].name,
                value: walletValue[walletIndex].value + currencyValue,
                realValue: parseFloat((walletValue[walletIndex].realValue + currencyValue * currencyArray[currencyId].price).toFixed(2)),
                id: walletValue[walletIndex].id
              }
            ],
            totalValue: parseFloat((totalValueContext + currencyValue * currencyArray[currencyId].price).toFixed(2)),
            capitalValue: capitalValueContext - parseFloat((currencyValue * currencyArray[currencyId].price).toFixed(2))
          })
          setWalletValue([
            {
              name: walletValue[walletIndex].name,
              value: walletValue[walletIndex].value + currencyValue,
              realValue: parseFloat((walletValue[walletIndex].realValue + currencyValue * currencyArray[currencyId].price).toFixed(2)),
              id: walletValue[walletIndex].id
            },
            ...walletValue.filter(item => item.name !== walletValue[walletIndex].name)
          ])
        }
        setTotalValueContext(parseFloat((totalValueContext + currencyValue * currencyArray[currencyId].price).toFixed(2)))
        setCapitalValueContext(capitalValueContext - parseFloat((currencyValue * currencyArray[currencyId].price).toFixed(2)))
      } else {
        message.error(
          'Transaction declined - You do not have enough investment capital to complete this transaction, increase your investment capital first.'
        )
        setCurrencyId(0)
        setCurrencyValue(0)
      }
      ResetModals()
    } else {
      message.error('Invalid value')
      setCurrencyId(0)
      setCurrencyValue(0)
    }
  }

  async function CapitalAdd() {
    if (capitalValue !== 0) {
      api.put('walletAdd', {
        uid: currencyUserApp,
        coins: walletValue,
        totalValue: totalValueContext,
        capitalValue: capitalValueContext + capitalValue
      })
      setCapitalValueContext(capitalValueContext + capitalValue)
      ResetModals()
    } else {
      message.error('Invalid value')
      setCurrencyId(0)
      setCurrencyValue(0)
    }
  }

  if (currencyUserApp !== undefined) {
    return (
      <header className='header'>
        <Modal visible={modalVisibleCrypto} title='New Cryptocurrency' onCancel={ResetModals} footer={[]}>
          <form onSubmit={BuyCurrency}>
            <SelectCurrency
              name='currencyOptionIcon'
              label='Select a cryptocurrency:'
              onchange={e => {
                setCurrencyId(parseInt(e.target.value, 10))
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
              <ButtonCurrencyTransaction label='Finish transaction' onclick={ResetModals} />
              {/*             <div className='spin-modal'>
              <Spin spinning={loading} />
            </div> */}
            </div>
          </form>
        </Modal>

        <section className='container-logo'>
          <div className='logo'>
            <BsWallet size={30} color='#fff' />
            <h1>Frame Wallet</h1>
          </div>
          <Menu />
        </section>
        <Divider className='divider' />
        <div className='balance' style={{ display: crypto }}>
          <div className='balance-btn-container'>
            <button
              className='balance-btn'
              onClick={() => {
                setCapital('flex')
                setCrypto('none')
              }}>
              Buy Cryptocurrency
            </button>
            <button
              className='buy-btn'
              onClick={() => {
                setCapital('flex')
                setCrypto('none')
              }}>
              Change balance
            </button>
          </div>

          <div>
            <h1>Cryptocurrency Balance: </h1>
            <h1>{totalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</h1>
          </div>
        </div>

        <div className='balance' style={{ display: capital }}>
          <div className='balance-btn-container'>
            <button
              className='balance-btn'
              onClick={() => {
                setCapital('flex')
                setCrypto('none')
              }}>
              Buy Cryptocurrency
            </button>
            <button
              className='buy-btn'
              onClick={() => {
                setCapital('none')
                setCrypto('flex')
              }}>
              Change balance
            </button>
          </div>
          <div>
            <h1>Invested capital Balance: </h1>
            <h1>{capitalValueContext.toLocaleString('en', { style: 'currency', currency: 'USD', useGrouping: false })}</h1>
          </div>
        </div>
      </header>
    )
  } else {
    return (
      <header className='header'>
        <section className='container-logo'>
          <div className='logo'>
            <BsWallet size={30} color='#fff' />
            <h1>Frame Wallet</h1>
          </div>
          <Menu />
        </section>
      </header>
    )
  }
}

export default Header
