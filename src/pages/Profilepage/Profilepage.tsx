import { Button, Divider, message, Modal } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useContext, useEffect, useState } from 'react'
import { AiOutlineLine } from 'react-icons/ai'
import { Link, useHistory } from 'react-router-dom'
import Header from '../../components/Header/Header'
import ButtonTransaction from '../../components/StandardInputForm/ButtonTransaction/ButtonTransaction'
import InputCurrency from '../../components/StandardInputForm/InputCurrency/InputCurrency'
import { AppFirebase } from '../../config/AppFirebase'
import { UserContext } from '../../context/UserContext'
import db from '../../functions/db'
import './Profilepage.scss'
import { WalletContext } from '../../context/WalletContext'

function Profilepage(): JSX.Element {
  const [visibleEMAIL, setVisibleEMAIL] = useState(false)
  const [visibleDELETE, setVisibleDELETE] = useState(false)

  const [data, setData] = useState<string>('')

  const [wallet, setWallet] = useState<number>(0)

  const history = useHistory()

  const userID = AppFirebase.auth().currentUser?.uid

  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)
  const { setWalletValue } = useContext(WalletContext)

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
            const walletData = arrayCollection.totalValue
            setWallet(walletData)
          }
        })
    } else {
      history.push('/')
    }
  }, [idWallet, history])

  function showModalUPLOAD() {
    setVisibleEMAIL(true)
  }

  function handleCloseUPLOAD() {
    setVisibleEMAIL(false)
  }

  function showModalDELETE() {
    setVisibleDELETE(true)
  }

  function handleCloseDELETE() {
    setVisibleDELETE(false)
  }

  async function handleUploadEmail(e: FormEvent) {
    e.preventDefault()
    try {
      await AppFirebase.auth().currentUser?.updateEmail(data)
      message.info('E-mail update success')
    } catch (err) {
      message.error(err.toString())
    }
  }

  async function handleUploadPass(e: FormEvent) {
    e.preventDefault()
    try {
      await AppFirebase.auth().currentUser?.updatePassword(data)
      message.info('Password update success')
    } catch (err) {
      message.error(err.toString())
    }
  }

  async function handleAccountDelete() {
    try {
      await db.collection('wallets').doc(idWallet).delete()
      await db.collection('users').doc(userID).delete()
      await AppFirebase.auth().currentUser?.delete()
      setWalletValue([])
      setCurrencyUserApp([])
      message.info('Your account has been deleted')
      history.push('/')
    } catch (err) {
      message.error(err.toString())
    }
  }

  return (
    <div className='profilepage'>
      <Header />

      <Modal visible={visibleEMAIL} title='Update your account' onCancel={handleCloseUPLOAD} footer={[]}>
        <form onSubmit={handleUploadEmail}>
          <div className='input-form-currency'>
            <InputCurrency name='name' type='email' required label='New e-mail:' onchange={e => setData(e.target.value)} />
            <ButtonTransaction label='Update e-mail' onclick={handleCloseUPLOAD} />
          </div>
        </form>
        <Divider />
        <form onSubmit={handleUploadPass}>
          <div className='input-form-currency'>
            <InputCurrency name='name' type='password' required label='New Password:' onchange={e => setData(e.target.value)} />
            <ButtonTransaction label='Update password' onclick={handleCloseUPLOAD} />
          </div>
        </form>
      </Modal>

      <Modal visible={visibleDELETE} title='Delete your account' onCancel={handleCloseDELETE} footer={[]}>
        <p>Are you sure you would like to delete your account?</p>
        <Button type='primary' onClick={handleCloseDELETE}>
          No, don&#39;t delete
        </Button>
        <Button type='default' danger onClick={handleAccountDelete}>
          Yes, delete
        </Button>
      </Modal>

      <main>
        <nav className='nav-account'>
          <div className='menu-account'>
            <h1>Account details</h1>
            <div>
              <button type='button' onClick={showModalUPLOAD}>
                Upload your account
              </button>
            </div>
          </div>
          <section className='account-value'>
            <h2>
              Total:&nbsp;
              {wallet.toLocaleString('en', { style: 'currency', currency: 'USD' })}
            </h2>
          </section>
        </nav>

        <section className='account-section'>
          <span>
            <div className='account-line-icon'>
              <AiOutlineLine size={35} color='$$color-text-monochrome' />
            </div>
            <div className='info-account'>
              <p>{AppFirebase.auth().currentUser?.displayName}</p>
              <p>
                {' '}
                <span>E-mail: </span>
                {AppFirebase.auth().currentUser?.email}
              </p>

              <p>
                {' '}
                <span>ID: </span>
                {userID}
              </p>
            </div>
          </span>
          <div className='btn-wallet-account'>
            <Link to='/home'>Go to purchase screen</Link>
            <button type='button' onClick={showModalDELETE}>
              Delete account
            </button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Profilepage
