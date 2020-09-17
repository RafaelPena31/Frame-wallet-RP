import React from 'react'
import { Redirect, Route, RouteProps } from 'react-router-dom'
import { currentUser } from '../config/auth/CurrentUser'

const PrivateRoute = ({ path, component }: RouteProps): JSX.Element => {
  return <>{currentUser !== null ? <Route path={path} exact component={component} /> : <Redirect to='/' />}</>
}
export default PrivateRoute
