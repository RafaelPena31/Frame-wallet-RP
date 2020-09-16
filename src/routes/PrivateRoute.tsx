import React, { useContext } from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

const PrivateRoute = ({ path, component }: RouteProps): JSX.Element => {
  const { currentUser } = useContext(AuthContext)
  return <>{currentUser !== null ? <Route path={path} exact component={component} /> : <Redirect to='/' />}</>
}
export default PrivateRoute
