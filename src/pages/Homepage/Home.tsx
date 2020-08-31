import React, { useState, FormEvent } from 'react';

import 'antd/dist/antd.css';
import './Home.scss';

import { Modal, Spin } from 'antd';

import Header from '../../components/Header/Header';
import CurrencyTable from '../../components/CurrencyTable/CurrencyTable';
import SelectCurrency from '../../components/Standart-Input-Form/SelectCurrency/SelectCurrency';

import ardorIcon from '../../assets/icons/ardor.png';
import ArkIcon from '../../assets/icons/ark.png';
import AugurIcon from '../../assets/icons/augur.png';
import BasicattentiontokenIcon from '../../assets/icons/basicattentiontoken.png';
import BinancecoinIcon from '../../assets/icons/binancecoin.png';
import BitcoinIcon from '../../assets/icons/bitcoin.png';
import BitcoinCashIcon from '../../assets/icons/bitcoin-cash.png';
import BitcoinDarkIcon from '../../assets/icons/bitcoindark.png';
import BitconnectIcon from '../../assets/icons/bitconnect.png';
import BitshareIcon from '../../assets/icons/bitshares.png';
import BytecoinIcon from '../../assets/icons/bytecoin.png';
import CardanoIcon from '../../assets/icons/cardano.png';
import DashIcon from '../../assets/icons/dash.png';
import DecredIcon from '../../assets/icons/decred.png';
import DigixdaoIcon from '../../assets/icons/digixdao.png';
import DogecoinIcon from '../../assets/icons/dogecoin.png';
import EosIcon from '../../assets/icons/eos.png';
import EthereumIcon from '../../assets/icons/ethereum.png';
import EthereumClassicIcon from '../../assets/icons/ethereum-classic.png';
import FactomIcon from '../../assets/icons/factom.png';
import GasIcon from '../../assets/icons/gas.png';
import GolemIcon from '../../assets/icons/golem.png';
import HshareIcon from '../../assets/icons/hshare.png';
import IotaIcon from '../../assets/icons/iota.png';
import KomodoIcon from '../../assets/icons/komodo.png';
import KybernetworkIcon from '../../assets/icons/kybernetwork.png';
import LiskIcon from '../../assets/icons/lisk.png';
import LitecoinIcon from '../../assets/icons/litecoin.png';
import MaidsafecoinIcon from '../../assets/icons/maidsafecoin.png';
import MonacoinIcon from '../../assets/icons/monacoin.png';
import MoneroIcon from '../../assets/icons/monero.png';
import NemIcon from '../../assets/icons/nem.png';
import NeoIcon from '../../assets/icons/neo.png';
import OmisegoIcon from '../../assets/icons/omisego.png';
import PivxIcon from '../../assets/icons/pivx.png';
import PopulousIcon from '../../assets/icons/populous.png';
import QtumIcon from '../../assets/icons/qtum.png';
import RippleIcon from '../../assets/icons/ripple.png';
import SaltIcon from '../../assets/icons/salt.png';
import SteemIcon from '../../assets/icons/steem.png';
import StellarIcon from '../../assets/icons/stellar-lumens.png';
import StratisIcon from '../../assets/icons/stratis.png';
import TenxIcon from '../../assets/icons/tenx.png';
import TetherIcon from '../../assets/icons/tether.png';
import TronIcon from '../../assets/icons/tron.png';
import VergeIcon from '../../assets/icons/verge.png';
import VertcoinIcon from '../../assets/icons/vertcoin.png';
import WaltonkIcon from '../../assets/icons/walton.png';
import WavesIcon from '../../assets/icons/waves.png';
import ZcashIcon from '../../assets/icons/zcash.png';

import InputCurrency from '../../components/Standart-Input-Form/InputCurrency/InputCurrency';
import ButtonCurrencyTransaction from '../../components/Standart-Input-Form/ButtonCurrencyTransaction/ButtonCurrencyTransaction';

type Teste = {
  name: string, value: number, icon: number
}

function Homepage() {

  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [icon, setIcon] = useState(0);
  const [currencyValue, setCurrencyValue] = useState(0);
  const [currencyBox, setCurrencyBox] = useState<Array<Teste>>([]);


  let currencyIconArray = [
    ardorIcon,
    ArkIcon,
    AugurIcon,
    BasicattentiontokenIcon,
    BinancecoinIcon,
    BitcoinIcon,
    BitcoinCashIcon,
    BitcoinDarkIcon,
    BitconnectIcon,
    BitshareIcon,
    BytecoinIcon,
    CardanoIcon,
    DashIcon,
    DecredIcon,
    DigixdaoIcon,
    DogecoinIcon,
    EosIcon,
    EthereumIcon,
    EthereumClassicIcon,
    FactomIcon,
    GasIcon,
    GolemIcon,
    HshareIcon,
    IotaIcon,
    KomodoIcon,
    KybernetworkIcon,
    LiskIcon,
    LitecoinIcon,
    MaidsafecoinIcon,
    MonacoinIcon,
    MoneroIcon,
    NemIcon,
    NeoIcon,
    OmisegoIcon,
    PivxIcon,
    PopulousIcon,
    QtumIcon,
    RippleIcon,
    SaltIcon,
    SteemIcon,
    StellarIcon,
    StratisIcon,
    TenxIcon,
    TetherIcon,
    TronIcon,
    VergeIcon,
    VertcoinIcon,
    WaltonkIcon,
    WavesIcon,
    ZcashIcon
  ]

  function showModal() {
    setVisible(true);
  }

  function handleOk() {
    setLoading(true);
    setTimeout(() => (
      setLoading(false), setVisible(false)
    ), 3000);
  }

  function handleCancel() {
    setVisible(false);
  };

  function handleCreateCurrencyBox(e: FormEvent) {
    e.preventDefault();

    setCurrencyBox([...currencyBox, { name: name, value: currencyValue, icon: icon }])
  }

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

            ]}
          >
            <form onSubmit={handleCreateCurrencyBox}>
              <SelectCurrency
                name="currencyOptionIcon"
                label="Select a cryptocurrency icon:"
                onChange={(e) => {
                  setIcon(parseInt(e.target.value));
                }}
                optionControler={[
                  { option: "Ardor", value: 0 },
                  { option: "Ark", value: 1 },
                  { option: "Augur", value: 2 },
                  { option: "Basic Attention Token", value: 3 },
                  { option: "Binancecoin", value: 4 },
                  { option: "Bitcoin", value: 5 },
                  { option: "Bitcoin-cash", value: 6 },
                  { option: "Bitcoin-dark", value: 7 },
                  { option: "Bitconnect", value: 8 },
                  { option: "BitShares", value: 9 },
                  { option: "Bytecoin", value: 10 },
                  { option: "Cardano", value: 11 },
                  { option: "Dash", value: 12 },
                  { option: "Decred", value: 13 },
                  { option: "Digixdao", value: 14 },
                  { option: "Dogecoin", value: 15 },
                  { option: "Eos", value: 16 },
                  { option: "Ethereum", value: 17 },
                  { option: "Ethereum-classic", value: 18 },
                  { option: "Factom", value: 19 },
                  { option: "Gas", value: 20 },
                  { option: "Golem", value: 21 },
                  { option: "Hshare", value: 22 },
                  { option: "Iota", value: 23 },
                  { option: "Komodo", value: 24 },
                  { option: "Kybernetwork", value: 25 },
                  { option: "Lisk", value: 26 },
                  { option: "Litecoin", value: 27 },
                  { option: "Maidsafecoin", value: 28 },
                  { option: "Monacoin", value: 29 },
                  { option: "Monero", value: 30 },
                  { option: "Nem", value: 31 },
                  { option: "Neo", value: 32 },
                  { option: "Omisego", value: 33 },
                  { option: "Pivx", value: 34 },
                  { option: "Populous", value: 35 },
                  { option: "Qtum", value: 36 },
                  { option: "Ripple", value: 37 },
                  { option: "Salt", value: 38 },
                  { option: "Steem", value: 39 },
                  { option: "Stellar", value: 40 },
                  { option: "Stratis", value: 41 },
                  { option: "Tenx", value: 42 },
                  { option: "Tether", value: 43 },
                  { option: "Tron", value: 44 },
                  { option: "Verge", value: 45 },
                  { option: "Vertcoin", value: 46 },
                  { option: "Walton", value: 47 },
                  { option: "Waves", value: 48 },
                  { option: "Zcash", value: 49 },

                ]}
              />
              <div className="input-form-currency">
                <InputCurrency
                  name="currency-name"
                  type="text"
                  label="Cryptocurrency name:"
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                />
                <InputCurrency
                  name="currency-name"
                  type="number"
                  step="0.01"
                  label="Value to buy:"
                  onChange={(e) => {
                    setCurrencyValue(parseInt(e.target.value))
                  }}
                />
                <ButtonCurrencyTransaction label="Finish transaction" type="submit" onClick={handleOk} />
                <div className="spin-modal">
                  <Spin spinning={loading} />
                </div>
              </div>
            </form>
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
          {currencyBox.map((currency) => {
            return (
              <CurrencyTable
                currencyControler={[
                  { id: currency.icon, name: currency.name, price: currency.value, icon: currencyIconArray[currency.icon] }
                ]}
              />
            )
          })}

        </div>
      </main>
    </div>
  );
}

export default Homepage;
