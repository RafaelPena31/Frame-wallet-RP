import { PoweroffOutlined } from '@ant-design/icons'
import { Button, message, Modal, Spin } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useContext, useState } from 'react'
import { BsWallet } from 'react-icons/bs'
import api from '../../api/api'
import ButtonTransaction from '../../components/StandardInputForm/ButtonTransaction/ButtonTransaction'
import InputCurrency from '../../components/StandardInputForm/InputCurrency/InputCurrency'
import { AppFirebase } from '../../config/AppFirebase'
import { UserContext } from '../../context/UserContext'
import colors from '../../styles/_colors'
import './Sign.scss'

function Signpage(): JSX.Element {
  const { setCurrencyUserApp } = useContext(UserContext)

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

  async function handleCreateAccount(e: FormEvent) {
    e.preventDefault()
    setLoading(true)

    await AppFirebase.auth()
      .createUserWithEmailAndPassword(emailUP, passUP)
      .then(i => {
        const user = i.user?.uid

        api.post('users', { email: emailUP, uid: user, name: nameUP })
        api.post('wallet', { uid: user, coins: [], totalValue: 0, capitalValue: 0 })
        message.info('Success - Your account was created successfully')
      })
      .catch(() => {
        message.error('Error - Account creation denied')
        handleCloseUP()
      })
  }

  async function handleLogAccount(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      await AppFirebase.auth().signInWithEmailAndPassword(emailIN, passIN)
      const user = AppFirebase.auth().currentUser
      setCurrencyUserApp(user?.uid)
    } catch (err) {
      message.error('Error - Invalid e-mail or password')
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
      message.error('Error - Account update denied')
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
          <BsWallet size={30} color={colors.secondaryDark} />
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
