import { PoweroffOutlined } from '@ant-design/icons'
import { Button, message, Modal, Spin } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useContext, useLayoutEffect, useState } from 'react'
import { BsWallet } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import ButtonTransaction from '../../components/StandardInputForm/ButtonTransaction/ButtonTransaction'
import InputCurrency from '../../components/StandardInputForm/InputCurrency/InputCurrency'
import { AppFirebase } from '../../config/AppFirebase'
import { UserContext } from '../../context/UserContext'
import db from '../../functions/db'
import './Sign.scss'

function Signpage(): JSX.Element {
  const { currencyUserApp, setCurrencyUserApp } = useContext(UserContext)

  const [visibleUP, setVisibleUP] = useState(false)
  const [visibleIN, setVisibleIN] = useState(false)

  const [emailUP, setEmailUP] = useState('')
  const [nameUP, setNameUP] = useState('')
  const [passUP, setPassUP] = useState('')

  const [emailIN, setEmailIN] = useState('')
  const [passIN, setPassIN] = useState('')

  const [visibleReset, setvisibleReset] = useState(false)
  const [emailRESET, setEmailRESET] = useState('')

  const [loading, setLoading] = useState(false)

  const history = useHistory()

  function showModalUP() {
    setVisibleUP(true)
  }

  function showModalIN() {
    setVisibleIN(true)
  }

  function showModalRESET() {
    setvisibleReset(true)
  }

  function handleCloseUP() {
    setVisibleUP(false)
    setLoading(false)
  }

  function handleCloseIN() {
    setVisibleIN(false)
    setLoading(false)
  }

  function handleCloseRESET() {
    setvisibleReset(false)
    setLoading(false)
  }

  useLayoutEffect(() => {
    if (AppFirebase.auth().currentUser?.uid) {
      if (currencyUserApp[0].uid === AppFirebase.auth().currentUser?.uid) {
        handleCloseUP()
        history.push('/home')
      }
    }
  }, [currencyUserApp, history])

  async function handleCreateAccount(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await AppFirebase.auth().createUserWithEmailAndPassword(emailUP, passUP)
      const user = AppFirebase.auth().currentUser
      if (user !== null) {
        await user.updateProfile({
          displayName: nameUP
        })
      }

      await db.collection('users').doc(user?.uid).set({
        id: user?.uid,
        name: user?.displayName,
        email: emailUP
      })

      await db
        .collection('wallets')
        .add({
          id: user?.uid,
          coins: [],
          totalValue: 0
        })
        .then(item => {
          db.collection('users').doc(user?.uid).update({
            walletId: item.id
          })
          setCurrencyUserApp([{ uid: user?.uid, walletId: item.id }])
        })
      message.info('Sign UP success')
    } catch (err) {
      message.error(err.toString())
      handleCloseUP()
    }
  }

  async function handleLogAccount(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await AppFirebase.auth().signInWithEmailAndPassword(emailIN, passIN)
      const user = AppFirebase.auth().currentUser

      await db
        .collection('users')
        .doc(user?.uid)
        .get()
        .then(response => {
          const arrayCollection = response.data()
          if (arrayCollection !== undefined) {
            setCurrencyUserApp([{ uid: user?.uid, walletId: arrayCollection.walletId }])
          }
        })
    } catch (err) {
      message.error(err.toString())
      handleCloseUP()
    }
  }

  async function handleResetEmail(e: FormEvent) {
    e.preventDefault()
    try {
      await AppFirebase.auth().sendPasswordResetEmail(emailRESET)
      message.info('A message with instructions for resetting your password was sent to the email provided')
      handleCloseRESET()
    } catch (err) {
      message.error(err.toString())
    }
  }

  return (
    <div className='signpage'>
      <Modal visible={visibleUP} title='Create an account' onCancel={handleCloseUP} footer={[]}>
        <form onSubmit={handleCreateAccount}>
          <div className='input-form-currency'>
            <InputCurrency name='name' type='text' required label='Name:' onchange={e => setNameUP(e.target.value)} />
            <InputCurrency name='email' type='email' required label='E-mail:' onchange={e => setEmailUP(e.target.value)} />
            <InputCurrency name='password' type='password' required label='Password:' onchange={e => setPassUP(e.target.value)} />
            <ButtonTransaction label='Sign up' />
            <div className='spin'>
              <Spin spinning={loading} />
            </div>
          </div>
        </form>
      </Modal>

      <Modal visible={visibleIN} title='Login your account' onCancel={handleCloseIN} footer={[]}>
        <form onSubmit={handleLogAccount}>
          <div className='input-form-currency'>
            <InputCurrency name='email' type='email' required label='E-mail:' onchange={e => setEmailIN(e.target.value)} />
            <InputCurrency name='password' type='password' required label='Password:' onchange={e => setPassIN(e.target.value)} />
            <ButtonTransaction label='Sign in' />
          </div>
        </form>
      </Modal>

      <Modal visible={visibleReset} title='Reset your password' onCancel={handleCloseRESET} footer={[]}>
        <form onSubmit={handleResetEmail}>
          <div className='input-form-currency'>
            <InputCurrency name='email' type='email' required label='E-mail:' onchange={e => setEmailRESET(e.target.value)} />
            <ButtonTransaction label='Reset' />
            <div className='spin'>
              <Spin spinning={loading} />
            </div>
          </div>
        </form>
      </Modal>

      <main>
        <section>
          <BsWallet size={30} color='#0A2770' />
          <h1>Frame Wallet</h1>
        </section>
        <p>your cryptocurrency wallet</p>
        <div>
          <Button type='primary' icon={<PoweroffOutlined />} size='large' onClick={showModalUP}>
            Sign up
          </Button>
          <Button type='ghost' onClick={showModalIN}>
            Sign in
          </Button>
          <section>
            <button type='button' onClick={showModalRESET} className='reset-btn'>
              Reset password
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Signpage
