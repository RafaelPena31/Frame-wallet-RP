import { Modal, Spin } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useState } from 'react'
import ardorIcon from '../../assets/icons/ardor.png'
import ArkIcon from '../../assets/icons/ark.png'
import AugurIcon from '../../assets/icons/augur.png'
import BasicattentiontokenIcon from '../../assets/icons/basicattentiontoken.png'
import BinancecoinIcon from '../../assets/icons/binancecoin.png'
import BitcoinCashIcon from '../../assets/icons/bitcoin-cash.png'
import BitcoinIcon from '../../assets/icons/bitcoin.png'
import BitcoinDarkIcon from '../../assets/icons/bitcoindark.png'
import BitconnectIcon from '../../assets/icons/bitconnect.png'
import BitshareIcon from '../../assets/icons/bitshares.png'
import BytecoinIcon from '../../assets/icons/bytecoin.png'
import CardanoIcon from '../../assets/icons/cardano.png'
import DashIcon from '../../assets/icons/dash.png'
import DecredIcon from '../../assets/icons/decred.png'
import DigixdaoIcon from '../../assets/icons/digixdao.png'
import DogecoinIcon from '../../assets/icons/dogecoin.png'
import EosIcon from '../../assets/icons/eos.png'
import EthereumClassicIcon from '../../assets/icons/ethereum-classic.png'
import EthereumIcon from '../../assets/icons/ethereum.png'
import FactomIcon from '../../assets/icons/factom.png'
import GasIcon from '../../assets/icons/gas.png'
import GolemIcon from '../../assets/icons/golem.png'
import HshareIcon from '../../assets/icons/hshare.png'
import IotaIcon from '../../assets/icons/iota.png'
import KomodoIcon from '../../assets/icons/komodo.png'
import KybernetworkIcon from '../../assets/icons/kybernetwork.png'
import LiskIcon from '../../assets/icons/lisk.png'
import LitecoinIcon from '../../assets/icons/litecoin.png'
import MaidsafecoinIcon from '../../assets/icons/maidsafecoin.png'
import MonacoinIcon from '../../assets/icons/monacoin.png'
import MoneroIcon from '../../assets/icons/monero.png'
import NemIcon from '../../assets/icons/nem.png'
import NeoIcon from '../../assets/icons/neo.png'
import OmisegoIcon from '../../assets/icons/omisego.png'
import PivxIcon from '../../assets/icons/pivx.png'
import PopulousIcon from '../../assets/icons/populous.png'
import QtumIcon from '../../assets/icons/qtum.png'
import RippleIcon from '../../assets/icons/ripple.png'
import SaltIcon from '../../assets/icons/salt.png'
import SteemIcon from '../../assets/icons/steem.png'
import StellarIcon from '../../assets/icons/stellar-lumens.png'
import StratisIcon from '../../assets/icons/stratis.png'
import TenxIcon from '../../assets/icons/tenx.png'
import TetherIcon from '../../assets/icons/tether.png'
import TronIcon from '../../assets/icons/tron.png'
import VergeIcon from '../../assets/icons/verge.png'
import VertcoinIcon from '../../assets/icons/vertcoin.png'
import WaltonkIcon from '../../assets/icons/walton.png'
import WavesIcon from '../../assets/icons/waves.png'
import ZcashIcon from '../../assets/icons/zcash.png'
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable'
import Header from '../../components/Header/Header'
import ButtonCurrencyTransaction from '../../components/StandartInputForm/ButtonCurrencyTransaction/ButtonCurrencyTransaction'
import InputCurrency from '../../components/StandartInputForm/InputCurrency/InputCurrency'
import SelectCurrency from '../../components/StandartInputForm/SelectCurrency/SelectCurrency'
import './Home.scss'

type Coin = {
  name: string
  value: number
  icon: number
}

function Homepage() {
  const [loading, setLoading] = useState(false)
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

  const currencyIconArray = [
    { icon: ardorIcon, name: 'Ardor', sigla: 'ARDR' },
    { icon: ArkIcon, name: 'Ark', sigla: 'ARK' },
    { icon: AugurIcon, name: 'Augur', sigla: 'REP' },
    { icon: BasicattentiontokenIcon, name: 'Basic Attention Token', sigla: 'BAT' },
    { icon: BinancecoinIcon, name: 'Binance Coin', sigla: 'BNB' },
    { icon: BitcoinIcon, name: 'Bitcoin', sigla: 'BTC' },
    { icon: BitcoinCashIcon, name: 'Bitcoin Cash', sigla: 'BCH' },
    { icon: BitcoinDarkIcon, name: 'Bitcoin Dark', sigla: 'BTCD' },
    { icon: BitconnectIcon, name: 'Bit Connect', sigla: 'BBC' },
    { icon: BitshareIcon, name: 'Bit Shares', sigla: 'BTS' },
    { icon: BytecoinIcon, name: 'Bytecoin', sigla: 'BCN' },
    { icon: CardanoIcon, name: 'Cardano', sigla: 'ADA' },
    { icon: DashIcon, name: 'Dash', sigla: 'DASH' },
    { icon: DecredIcon, name: 'Decred', sigla: 'DCR' },
    { icon: DigixdaoIcon, name: 'Digixdao', sigla: 'DGD' },
    { icon: DogecoinIcon, name: 'Dogecoin', sigla: 'DOGE' },
    { icon: EosIcon, name: 'Eos', sigla: 'EOS' },
    { icon: EthereumIcon, name: 'Ethereum', sigla: 'ETH' },
    { icon: EthereumClassicIcon, name: 'Ethereum-classic', sigla: 'ETC' },
    { icon: FactomIcon, name: 'Factom', sigla: 'FCT' },
    { icon: GasIcon, name: 'Gas', sigla: 'GAS' },
    { icon: GolemIcon, name: 'Golem', sigla: 'GNT' },
    { icon: HshareIcon, name: 'Hshare', sigla: 'HSR' },
    { icon: IotaIcon, name: 'Iota', sigla: 'MIOTA' },
    { icon: KomodoIcon, name: 'Komodo', sigla: 'KMD' },
    { icon: KybernetworkIcon, name: 'Kyber Network', sigla: 'KNC' },
    { icon: LiskIcon, name: 'Lisk', sigla: 'LSK' },
    { icon: LitecoinIcon, name: 'Litecoin', sigla: 'LTC' },
    { icon: MaidsafecoinIcon, name: 'MaidSafeCoin', sigla: 'MAID' },
    { icon: MonacoinIcon, name: 'MonaCoin', sigla: 'MONA' },
    { icon: MoneroIcon, name: 'Monero', sigla: 'XMR' },
    { icon: NemIcon, name: 'Nem', sigla: 'XEM' },
    { icon: NeoIcon, name: 'Neo', sigla: 'NEO' },
    { icon: OmisegoIcon, name: 'Omisego', sigla: 'OMG' },
    { icon: PivxIcon, name: 'Pivx', sigla: 'PIVX' },
    { icon: PopulousIcon, name: 'Populous', sigla: 'PPT' },
    { icon: QtumIcon, name: 'Qtum', sigla: 'QTUM' },
    { icon: RippleIcon, name: 'Ripple', sigla: 'XRP' },
    { icon: SaltIcon, name: 'Salt', sigla: 'SALT' },
    { icon: SteemIcon, name: 'Steem', sigla: 'STEEM' },
    { icon: StellarIcon, name: 'Stellar Lumens', sigla: 'XLM' },
    { icon: StratisIcon, name: 'Stratis', sigla: 'STRAT' },
    { icon: TenxIcon, name: 'Tenx', sigla: 'PAY' },
    { icon: TetherIcon, name: 'Tether', sigla: 'USDT' },
    { icon: TronIcon, name: 'Tron', sigla: 'TRX' },
    { icon: VergeIcon, name: 'Verge', sigla: 'XVG' },
    { icon: VertcoinIcon, name: 'Vertcoin', sigla: 'VTC' },
    { icon: WaltonkIcon, name: 'Walton', sigla: 'WTC' },
    { icon: WavesIcon, name: 'Waves', sigla: 'WAVES' },
    { icon: ZcashIcon, name: 'Zcash', sigla: 'ZEC' }
  ]

  function showModal() {
    setVisible(true)
  }

  function handleOk() {
    setLoading(true)
  }

  function handleCancel() {
    setVisible(false)
  }

  function handleCreateCurrencyBox(e: FormEvent) {
    e.preventDefault()

    const { icon: string, name } = currencyIconArray[icon]

    setCurrencyList([...currencyList, { name, value: currencyValue, icon }])
  }

  return (
    <div className='homepage'>
      <Header />
      <>
        <Modal visible={visible} title='New Cryptocurrency' onOk={handleOk} onCancel={handleCancel} footer={[]}>
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
              <ButtonCurrencyTransaction label='Finish transaction' type='submit' onclick={handleOk} />
              <div className='spin-modal'>
                <Spin spinning={loading} />
              </div>
            </div>
          </form>
        </Modal>
      </>
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
                id={currency.icon}
                name={currencyIconArray[currency.icon].name}
                price={currency.value}
                icon={currencyIconArray[currency.icon].icon}
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
