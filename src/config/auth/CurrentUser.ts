import { AppFirebase } from '../AppFirebase'

export const currentUser = AppFirebase.auth().onAuthStateChanged(user => {
  return user
})
