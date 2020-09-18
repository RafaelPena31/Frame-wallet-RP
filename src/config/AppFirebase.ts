import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

export const AppFirebase = firebase.initializeApp({
  apiKey: 'AIzaSyAjQ4gNV0zMFTYbW85Rz3CmOQFi32CoEnU',
  authDomain: 'framewallet-a7d2a.firebaseapp.com',
  databaseURL: 'https://framewallet-a7d2a.firebaseio.com',
  projectId: 'framewallet-a7d2a',
  storageBucket: 'framewallet-a7d2a.appspot.com',
  messagingSenderId: '508978321800',
  appId: '1:508978321800:web:d72422ac9b0179c52a023d',
  measurementId: 'G-MHH23ZZB14'
})
