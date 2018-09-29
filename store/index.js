import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import {
  reactReduxFirebase,
  firebaseReducer,
  getFirebase
} from 'react-redux-firebase'
import thunk from 'redux-thunk'

import firebase from 'firebase'
import { firebaseConfig } from '../config'

const rrfConfig = {
  userProfile: 'users',
  resetBeforeLogin: true,
  enableLogging: false,
  sessions: null
}

const initialState = {}

const rootReducer = combineReducers({
  firebase: firebaseReducer
})

firebase.initializeApp(firebaseConfig)

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(getFirebase) // Pass getFirebase function as extra argument
    ),
    reactReduxFirebase(firebase, rrfConfig)
  )
)

export default store
