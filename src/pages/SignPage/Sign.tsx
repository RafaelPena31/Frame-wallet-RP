import { PoweroffOutlined } from '@ant-design/icons'
import { Button, message, Modal } from 'antd'
import 'antd/dist/antd.css'
import React, { FormEvent, useState } from 'react'
import { BsWallet } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import ButtonTransaction from '../../components/StandartInputForm/ButtonTransaction/ButtonTransaction'
import InputCurrency from '../../components/StandartInputForm/InputCurrency/InputCurrency'
import { AppFirebase } from '../../config/AppFirebase'
import './Sign.scss'

function Signpage(): JSX.Element {
  const [visibleUP, setVisibleUP] = useState(false)
  const [visibleIN, setVisibleIN] = useState(false)

  const [emailUP, setEmailUP] = useState('')
  const [nameUP, setNameUP] = useState('')
  const [passUP, setPassUP] = useState('')

  const [emailIN, setEmailIN] = useState('')
  const [passIN, setPassIN] = useState('')

  const [visibleReset, setvisibleReset] = useState(false)
  const [emailRESET, setEmailRESET] = useState('')

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
  }

  function handleCloseIN() {
    setVisibleIN(false)
  }

  function handleCloseRESET() {
    setvisibleReset(false)
  }

  async function handleCreateAccount(e: FormEvent) {
    e.preventDefault()
    try {
      await AppFirebase.auth().createUserWithEmailAndPassword(emailUP, passUP)
      const user = AppFirebase.auth().currentUser
      if (user !== null) {
        user.updateProfile({
          displayName: nameUP
        })
      }
      message.info('Sign UP success')
      history.push('/home')
    } catch (err) {
      message.error(err.toString())
    }
  }

  async function handleLogAccount(e: FormEvent) {
    e.preventDefault()
    try {
      await AppFirebase.auth().signInWithEmailAndPassword(emailIN, passIN)
      history.push('/home')
    } catch (err) {
      message.error(err.toString())
    }
  }

  async function handleResetEmail(e: FormEvent) {
    e.preventDefault()
    try {
      await AppFirebase.auth().sendPasswordResetEmail(emailRESET)
      message.info('A message with instructions for resetting your password was sent to the email provided')
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
            <ButtonTransaction label='Sign up' onclick={handleCloseUP} />
          </div>
        </form>
      </Modal>

      <Modal visible={visibleIN} title='Login your account' onCancel={handleCloseIN} footer={[]}>
        <form onSubmit={handleLogAccount}>
          <div className='input-form-currency'>
            <InputCurrency name='email' type='email' required label='E-mail:' onchange={e => setEmailIN(e.target.value)} />
            <InputCurrency name='password' type='password' required label='Password:' onchange={e => setPassIN(e.target.value)} />
            <ButtonTransaction label='Sign in' onclick={handleCloseIN} />
          </div>
        </form>
      </Modal>

      <Modal visible={visibleReset} title='Reset your password' onCancel={handleCloseRESET} footer={[]}>
        <form onSubmit={handleResetEmail}>
          <div className='input-form-currency'>
            <InputCurrency name='email' type='email' required label='E-mail:' onchange={e => setEmailRESET(e.target.value)} />
            <ButtonTransaction label='Reset' onclick={handleCloseRESET} />
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
