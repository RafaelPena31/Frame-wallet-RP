import firebase from 'firebase'
import React, { useState } from 'react'
import { AppFirebase } from '../config/firebase'

export const AuthContext = React.createContext<{
  currentUser: firebase.User | null
  setCurrentUser: (currentUser: firebase.User | null) => void
}>({
  currentUser: null,
  setCurrentUser: () => null
})

export default function AuthProvider(props: React.PropsWithChildren<unknown>): JSX.Element {
  const { children } = props
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null)

  AppFirebase.auth().onAuthStateChanged(user => {
    setCurrentUser(user)
  })
  return <AuthContext.Provider value={{ currentUser, setCurrentUser }}>{children}</AuthContext.Provider>
}
