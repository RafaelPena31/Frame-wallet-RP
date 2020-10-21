import { User } from 'firebase'
import React, { useContext, useState } from 'react'
import { Redirect, Route, RouteProps, useHistory } from 'react-router-dom'
import { AppFirebase } from '../config/AppFirebase'
import { UserContext } from '../context/UserContext'

const PrivateRoute = ({ path, component }: RouteProps): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<User | null>()
  const { setCurrencyUserApp } = useContext(UserContext)

  const history = useHistory()

  AppFirebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user)
    if (user?.uid !== undefined) {
      setCurrencyUserApp(user?.uid)
      history.push('/home')
    } else {
      history.push('/')
    }
  })
  return <>{currentUser !== undefined && currentUser !== null ? <Route path={path} exact component={component} /> : <Redirect to='/' />}</>
}
export default PrivateRoute
